'use strict';

var obsidian = require('obsidian');

var Mode;
(function (Mode) {
    Mode[Mode["Standard"] = 1] = "Standard";
    Mode[Mode["EditorList"] = 2] = "EditorList";
    Mode[Mode["SymbolList"] = 4] = "SymbolList";
    Mode[Mode["WorkspaceList"] = 8] = "WorkspaceList";
    Mode[Mode["HeadingsList"] = 16] = "HeadingsList";
})(Mode || (Mode = {}));
var SymbolType;
(function (SymbolType) {
    SymbolType[SymbolType["Link"] = 1] = "Link";
    SymbolType[SymbolType["Embed"] = 2] = "Embed";
    SymbolType[SymbolType["Tag"] = 4] = "Tag";
    SymbolType[SymbolType["Heading"] = 8] = "Heading";
})(SymbolType || (SymbolType = {}));
const SymbolIndicators = {};
SymbolIndicators[SymbolType.Link] = '🔗';
SymbolIndicators[SymbolType.Embed] = '!';
SymbolIndicators[SymbolType.Tag] = '#';
SymbolIndicators[SymbolType.Heading] = 'H';
const HeadingIndicators = {};
HeadingIndicators[1] = 'H₁';
HeadingIndicators[2] = 'H₂';
HeadingIndicators[3] = 'H₃';
HeadingIndicators[4] = 'H₄';
HeadingIndicators[5] = 'H₅';
HeadingIndicators[6] = 'H₆';

function isOfType(obj, discriminator, val) {
    let ret = false;
    if (obj && obj[discriminator] !== undefined) {
        ret = true;
        if (val !== undefined && val !== obj[discriminator]) {
            ret = false;
        }
    }
    return ret;
}
function isSymbolSuggestion(obj) {
    return isOfType(obj, 'type', 'symbol');
}
function isEditorSuggestion(obj) {
    return isOfType(obj, 'type', 'editor');
}
function isWorkspaceSuggestion(obj) {
    return isOfType(obj, 'type', 'workspace');
}
function isHeadingSuggestion(obj) {
    return isOfType(obj, 'type', 'heading');
}
function isFileSuggestion(obj) {
    return isOfType(obj, 'type', 'file');
}
function isAliasSuggestion(obj) {
    return isOfType(obj, 'type', 'alias');
}
function isUnresolvedSuggestion(obj) {
    return isOfType(obj, 'type', 'unresolved');
}
function isSystemSuggestion(obj) {
    return isFileSuggestion(obj) || isUnresolvedSuggestion(obj) || isAliasSuggestion(obj);
}
function isHeadingCache(obj) {
    return isOfType(obj, 'level');
}
function isTagCache(obj) {
    return isOfType(obj, 'tag');
}
function isSymbolInfo(obj) {
    return isOfType(obj, 'type', 'symbolInfo');
}
function isWorkspaceInfo(obj) {
    return isOfType(obj, 'type', 'WorkspaceInfo');
}
function isTFile(obj) {
    return isOfType(obj, 'extension');
}
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getInternalPluginById(app, id) {
    return app?.internalPlugins?.getPluginById(id);
}
function getSystemSwitcherInstance(app) {
    const plugin = getInternalPluginById(app, 'switcher');
    return plugin?.instance;
}
function stripMDExtensionFromPath(file) {
    let retVal = null;
    if (file) {
        const { path } = file;
        retVal = path;
        if (file.extension === 'md') {
            const index = path.lastIndexOf('.');
            if (index !== -1 && index !== path.length - 1 && index !== 0) {
                retVal = path.slice(0, index);
            }
        }
    }
    return retVal;
}
function filenameFromPath(path) {
    let retVal = null;
    if (path) {
        const index = path.lastIndexOf('/');
        retVal = index === -1 ? path : path.slice(index + 1);
    }
    return retVal;
}

class FrontMatterParser {
    static getAliases(frontMatter) {
        let aliases = [];
        if (frontMatter) {
            aliases = FrontMatterParser.getValueForKey(frontMatter, /^alias(es)?$/i);
        }
        return aliases;
    }
    static getValueForKey(frontMatter, keyPattern) {
        const retVal = [];
        const fmKeys = Object.keys(frontMatter);
        const key = fmKeys.find((val) => keyPattern.test(val));
        if (key) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            let value = frontMatter[key];
            if (typeof value === 'string') {
                value = value.split(',');
            }
            if (Array.isArray(value)) {
                value.forEach((val) => {
                    if (typeof val === 'string') {
                        retVal.push(val.trim());
                    }
                });
            }
        }
        return retVal;
    }
}

class SwitcherPlusSettings {
    constructor(plugin) {
        this.plugin = plugin;
        this.data = SwitcherPlusSettings.defaultSettingsData;
    }
    static get defaultSettingsData() {
        const enabledSymbolTypes = {};
        enabledSymbolTypes[SymbolType.Link] = true;
        enabledSymbolTypes[SymbolType.Embed] = true;
        enabledSymbolTypes[SymbolType.Tag] = true;
        enabledSymbolTypes[SymbolType.Heading] = true;
        return {
            alwaysNewPaneForSymbols: false,
            useActivePaneForSymbolsOnMobile: false,
            symbolsInLineOrder: true,
            editorListCommand: 'edt ',
            symbolListCommand: '@',
            workspaceListCommand: '+',
            headingsListCommand: '#',
            strictHeadingsOnly: false,
            searchAllHeadings: true,
            excludeViewTypes: ['empty'],
            referenceViews: ['backlink', 'localgraph', 'outgoing-link', 'outline'],
            limit: 50,
            includeSidePanelViewTypes: ['backlink', 'image', 'markdown', 'pdf'],
            enabledSymbolTypes,
            selectNearestHeading: true,
        };
    }
    get builtInSystemOptions() {
        return getSystemSwitcherInstance(this.plugin.app)?.options;
    }
    get showAllFileTypes() {
        // forward to core switcher settings
        return this.builtInSystemOptions?.showAllFileTypes;
    }
    get showAttachments() {
        // forward to core switcher settings
        return this.builtInSystemOptions?.showAttachments;
    }
    get showExistingOnly() {
        // forward to core switcher settings
        return this.builtInSystemOptions?.showExistingOnly;
    }
    get alwaysNewPaneForSymbols() {
        return this.data.alwaysNewPaneForSymbols;
    }
    set alwaysNewPaneForSymbols(value) {
        this.data.alwaysNewPaneForSymbols = value;
    }
    get useActivePaneForSymbolsOnMobile() {
        return this.data.useActivePaneForSymbolsOnMobile;
    }
    set useActivePaneForSymbolsOnMobile(value) {
        this.data.useActivePaneForSymbolsOnMobile = value;
    }
    get symbolsInlineOrder() {
        return this.data.symbolsInLineOrder;
    }
    set symbolsInlineOrder(value) {
        this.data.symbolsInLineOrder = value;
    }
    get editorListPlaceholderText() {
        return SwitcherPlusSettings.defaultSettingsData.editorListCommand;
    }
    get editorListCommand() {
        return this.data.editorListCommand;
    }
    set editorListCommand(value) {
        this.data.editorListCommand = value;
    }
    get symbolListPlaceholderText() {
        return SwitcherPlusSettings.defaultSettingsData.symbolListCommand;
    }
    get symbolListCommand() {
        return this.data.symbolListCommand;
    }
    set symbolListCommand(value) {
        this.data.symbolListCommand = value;
    }
    get workspaceListCommand() {
        return this.data.workspaceListCommand;
    }
    set workspaceListCommand(value) {
        this.data.workspaceListCommand = value;
    }
    get workspaceListPlaceholderText() {
        return SwitcherPlusSettings.defaultSettingsData.workspaceListCommand;
    }
    get headingsListCommand() {
        return this.data.headingsListCommand;
    }
    set headingsListCommand(value) {
        this.data.headingsListCommand = value;
    }
    get headingsListPlaceholderText() {
        return SwitcherPlusSettings.defaultSettingsData.headingsListCommand;
    }
    get strictHeadingsOnly() {
        return this.data.strictHeadingsOnly;
    }
    set strictHeadingsOnly(value) {
        this.data.strictHeadingsOnly = value;
    }
    get searchAllHeadings() {
        return this.data.searchAllHeadings;
    }
    set searchAllHeadings(value) {
        this.data.searchAllHeadings = value;
    }
    get excludeViewTypes() {
        return this.data.excludeViewTypes;
    }
    get referenceViews() {
        return this.data.referenceViews;
    }
    get includeSidePanelViewTypes() {
        return this.data.includeSidePanelViewTypes;
    }
    set includeSidePanelViewTypes(value) {
        // remove any duplicates before storing
        this.data.includeSidePanelViewTypes = [...new Set(value)];
    }
    get includeSidePanelViewTypesPlaceholder() {
        return SwitcherPlusSettings.defaultSettingsData.includeSidePanelViewTypes.join('\n');
    }
    get limit() {
        return this.data.limit;
    }
    set limit(value) {
        this.data.limit = value;
    }
    get selectNearestHeading() {
        return this.data.selectNearestHeading;
    }
    set selectNearestHeading(value) {
        this.data.selectNearestHeading = value;
    }
    async loadSettings() {
        const { plugin } = this;
        const savedData = (await plugin?.loadData());
        this.data = { ...SwitcherPlusSettings.defaultSettingsData, ...savedData };
    }
    async saveSettings() {
        const { plugin, data } = this;
        await plugin?.saveData(data);
    }
    isSymbolTypeEnabled(symbol) {
        return this.data.enabledSymbolTypes[symbol];
    }
    setSymbolTypeEnabled(symbol, isEnabled) {
        this.data.enabledSymbolTypes[symbol] = isEnabled;
    }
}

class SwitcherPlusSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin, settings) {
        super(app, plugin);
        this.settings = settings;
    }
    display() {
        const { containerEl, settings } = this;
        containerEl.empty();
        SwitcherPlusSettingTab.setSymbolModeSettingsGroup(containerEl, settings);
        this.setEditorModeSettingsGroup(containerEl, settings);
        SwitcherPlusSettingTab.setWorkspaceModeSettingsGroup(containerEl, settings);
        SwitcherPlusSettingTab.setHeadingsModeSettingsGroup(containerEl, settings);
    }
    setEditorModeSettingsGroup(containerEl, settings) {
        new obsidian.Setting(containerEl).setName('Editor List Mode Settings').setHeading();
        SwitcherPlusSettingTab.setEditorListCommand(containerEl, settings);
        this.setIncludeSidePanelViews(containerEl, settings);
    }
    static setSymbolModeSettingsGroup(containerEl, settings) {
        new obsidian.Setting(containerEl).setName('Symbol List Mode Settings').setHeading();
        SwitcherPlusSettingTab.setSymbolListCommand(containerEl, settings);
        SwitcherPlusSettingTab.setSymbolsInLineOrder(containerEl, settings);
        SwitcherPlusSettingTab.setAlwaysNewPaneForSymbols(containerEl, settings);
        SwitcherPlusSettingTab.setUseActivePaneForSymbolsOnMobile(containerEl, settings);
        SwitcherPlusSettingTab.setSelectNearestHeading(containerEl, settings);
        SwitcherPlusSettingTab.setEnabledSymbolTypes(containerEl, settings);
    }
    static setWorkspaceModeSettingsGroup(containerEl, settings) {
        new obsidian.Setting(containerEl).setName('Workspace List Mode Settings').setHeading();
        SwitcherPlusSettingTab.setWorkspaceListCommand(containerEl, settings);
    }
    static setHeadingsModeSettingsGroup(containerEl, settings) {
        new obsidian.Setting(containerEl).setName('Headings List Mode Settings').setHeading();
        SwitcherPlusSettingTab.setHeadingsListCommand(containerEl, settings);
        SwitcherPlusSettingTab.setStrictHeadingsOnly(containerEl, settings);
        SwitcherPlusSettingTab.setSearchAllHeadings(containerEl, settings);
    }
    static saveChanges(settings) {
        settings.saveSettings().catch((e) => {
            console.log('Switcher++: error saving changes to settings');
            console.log(e);
        });
    }
    static setAlwaysNewPaneForSymbols(containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Open Symbols in new pane')
            .setDesc('Enabled, always open a new pane when navigating to Symbols. Disabled, navigate in an already open pane (if one exists)')
            .addToggle((toggle) => toggle.setValue(settings.alwaysNewPaneForSymbols).onChange((value) => {
            settings.alwaysNewPaneForSymbols = value;
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    static setUseActivePaneForSymbolsOnMobile(containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Open Symbols in active pane on mobile devices')
            .setDesc('Enabled, navigate to the target file and symbol in the active editor pane. Disabled, open a new pane when navigating to Symbols, even on mobile devices.')
            .addToggle((toggle) => toggle.setValue(settings.useActivePaneForSymbolsOnMobile).onChange((value) => {
            settings.useActivePaneForSymbolsOnMobile = value;
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    static setSelectNearestHeading(containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Auto-select nearest heading')
            .setDesc('Enabled, in an unfiltered symbol list, select the closest preceding Heading to the current cursor position. Disabled, the first symbol in the list is selected.')
            .addToggle((toggle) => toggle.setValue(settings.selectNearestHeading).onChange((value) => {
            settings.selectNearestHeading = value;
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    static setSymbolsInLineOrder(containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('List symbols as indented outline')
            .setDesc('Enabled, symbols will be displayed in the (line) order they appear in the source text, indented under any preceding heading. Disabled, symbols will be grouped by type: Headings, Tags, Links, Embeds.')
            .addToggle((toggle) => toggle.setValue(settings.symbolsInlineOrder).onChange((value) => {
            settings.symbolsInlineOrder = value;
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    static setEnabledSymbolTypes(containerEl, settings) {
        new obsidian.Setting(containerEl).setName('Show Headings').addToggle((toggle) => toggle
            .setValue(settings.isSymbolTypeEnabled(SymbolType.Heading))
            .onChange((value) => {
            settings.setSymbolTypeEnabled(SymbolType.Heading, value);
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
        new obsidian.Setting(containerEl).setName('Show Tags').addToggle((toggle) => toggle.setValue(settings.isSymbolTypeEnabled(SymbolType.Tag)).onChange((value) => {
            settings.setSymbolTypeEnabled(SymbolType.Tag, value);
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
        new obsidian.Setting(containerEl).setName('Show Links').addToggle((toggle) => toggle.setValue(settings.isSymbolTypeEnabled(SymbolType.Link)).onChange((value) => {
            settings.setSymbolTypeEnabled(SymbolType.Link, value);
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
        new obsidian.Setting(containerEl).setName('Show Embeds').addToggle((toggle) => toggle
            .setValue(settings.isSymbolTypeEnabled(SymbolType.Embed))
            .onChange((value) => {
            settings.setSymbolTypeEnabled(SymbolType.Embed, value);
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    static setEditorListCommand(containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Editor list mode trigger')
            .setDesc('Character that will trigger editor list mode in the switcher')
            .addText((text) => text
            .setPlaceholder(settings.editorListPlaceholderText)
            .setValue(settings.editorListCommand)
            .onChange((value) => {
            settings.editorListCommand = value;
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    static setSymbolListCommand(containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Symbol list mode trigger')
            .setDesc('Character that will trigger symbol list mode in the switcher')
            .addText((text) => text
            .setPlaceholder(settings.symbolListPlaceholderText)
            .setValue(settings.symbolListCommand)
            .onChange((value) => {
            settings.symbolListCommand = value;
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    setIncludeSidePanelViews(containerEl, settings) {
        const viewsListing = Object.keys(this.app.viewRegistry.viewByType).sort().join(' ');
        new obsidian.Setting(containerEl)
            .setName('Include side panel views')
            .setDesc(`When in Editor list mode, show the following view types from the side panels. Add one view type per line. Available view types: ${viewsListing}`)
            .addTextArea((textArea) => textArea
            .setPlaceholder(settings.includeSidePanelViewTypesPlaceholder)
            .setValue(settings.includeSidePanelViewTypes.join('\n'))
            .onChange((value) => {
            settings.includeSidePanelViewTypes = value.split('\n');
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    static setWorkspaceListCommand(containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Workspace list mode trigger')
            .setDesc('Character that will trigger workspace list mode in the switcher')
            .addText((text) => text
            .setPlaceholder(settings.workspaceListPlaceholderText)
            .setValue(settings.workspaceListCommand)
            .onChange((value) => {
            settings.workspaceListCommand = value;
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    static setHeadingsListCommand(containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Headings list mode trigger')
            .setDesc('Character that will trigger headings list mode in the switcher')
            .addText((text) => text
            .setPlaceholder(settings.headingsListPlaceholderText)
            .setValue(settings.headingsListCommand)
            .onChange((value) => {
            settings.headingsListCommand = value;
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    static setStrictHeadingsOnly(containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Show headings only')
            .setDesc('Enabled, only show suggestions where there is a match in the first H1 contained in the file. Disabled, if there is not a match in the first H1, fallback to showing suggestions where there is a filename match.')
            .addToggle((toggle) => toggle.setValue(settings.strictHeadingsOnly).onChange((value) => {
            settings.strictHeadingsOnly = value;
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
    static setSearchAllHeadings(containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Search all headings')
            .setDesc('Enabled, search through all headings contained in each file. Disabled, only search through the first H1 in each file.')
            .addToggle((toggle) => toggle.setValue(settings.searchAllHeadings).onChange((value) => {
            settings.searchAllHeadings = value;
            SwitcherPlusSettingTab.saveChanges(settings);
        }));
    }
}

const WORKSPACE_PLUGIN_ID = 'workspaces';
class WorkspaceHandler {
    constructor(app, settings) {
        this.app = app;
        this.settings = settings;
    }
    validateCommand(inputInfo, index, filterText) {
        const { workspaceCmd } = inputInfo;
        if (this.isWorkspacesPluginEnabled()) {
            inputInfo.mode = Mode.WorkspaceList;
            workspaceCmd.index = index;
            workspaceCmd.parsedInput = filterText;
            workspaceCmd.isValidated = true;
        }
    }
    getSuggestions(inputInfo) {
        const suggestions = [];
        if (inputInfo) {
            inputInfo.buildSearchQuery();
            const { hasSearchTerm, prepQuery } = inputInfo.searchQuery;
            const items = this.getItems();
            items.forEach((item) => {
                let shouldPush = true;
                let match = null;
                if (hasSearchTerm) {
                    match = obsidian.fuzzySearch(prepQuery, item.id);
                    shouldPush = !!match;
                }
                if (shouldPush) {
                    suggestions.push({ type: 'workspace', item, match });
                }
            });
            if (hasSearchTerm) {
                obsidian.sortSearchResults(suggestions);
            }
        }
        return suggestions;
    }
    renderSuggestion(sugg, parentEl) {
        if (sugg) {
            obsidian.renderResults(parentEl, sugg.item.id, sugg.match);
        }
    }
    onChooseSuggestion(sugg) {
        if (sugg) {
            const { id } = sugg.item;
            const pluginInstance = this.getSystemWorkspacesPluginInstance();
            if (typeof pluginInstance['loadWorkspace'] === 'function') {
                pluginInstance.loadWorkspace(id);
            }
        }
    }
    getItems() {
        const items = [];
        const workspaces = this.getSystemWorkspacesPluginInstance()?.workspaces;
        if (workspaces) {
            Object.keys(workspaces).forEach((id) => items.push({ id, type: 'workspaceInfo' }));
        }
        return items;
    }
    isWorkspacesPluginEnabled() {
        const plugin = this.getSystemWorkspacesPlugin();
        return plugin?.enabled;
    }
    getSystemWorkspacesPlugin() {
        return getInternalPluginById(this.app, WORKSPACE_PLUGIN_ID);
    }
    getSystemWorkspacesPluginInstance() {
        const workspacesPlugin = this.getSystemWorkspacesPlugin();
        return workspacesPlugin?.instance;
    }
}

class HeadingsHandler {
    constructor(app, settings) {
        this.app = app;
        this.settings = settings;
    }
    validateCommand(inputInfo, index, filterText) {
        const { headingsCmd } = inputInfo;
        inputInfo.mode = Mode.HeadingsList;
        headingsCmd.index = index;
        headingsCmd.parsedInput = filterText;
        headingsCmd.isValidated = true;
    }
    onChooseSuggestion(sugg, _evt) {
        const { workspace } = this.app;
        if (sugg) {
            const { start: { line, col }, end: endLoc, } = sugg.item.position;
            // state information to highlight the target heading
            const eState = {
                startLoc: { line, col },
                endLoc,
                line,
                cursor: {
                    from: { line, ch: col },
                    to: { line, ch: col },
                },
            };
            workspace
                .getLeaf(false)
                .openFile(sugg.file, {
                active: true,
                eState,
            })
                .catch(() => console.log('Switcher++: unable to open file.'));
        }
    }
    renderSuggestion(sugg, parentEl) {
        const { item } = sugg;
        obsidian.renderResults(parentEl, item.heading, sugg.match);
        parentEl.createSpan({
            cls: 'suggestion-flair',
            prepend: true,
        }, (el) => {
            el.appendText(HeadingIndicators[item.level]);
        });
        parentEl.createDiv('suggestion-note').appendText(stripMDExtensionFromPath(sugg.file));
    }
    getSuggestions(inputInfo) {
        let suggestions = [];
        if (inputInfo) {
            inputInfo.buildSearchQuery();
            const { prepQuery, hasSearchTerm } = inputInfo.searchQuery;
            if (hasSearchTerm) {
                const { limit } = this.settings;
                suggestions = this.getAllFilesSuggestions(prepQuery);
                obsidian.sortSearchResults(suggestions);
                if (suggestions.length > 0 && limit > 0) {
                    suggestions = suggestions.slice(0, limit);
                }
            }
            else {
                suggestions = this.getRecentFilesSuggestions();
            }
        }
        return suggestions;
    }
    getAllFilesSuggestions(prepQuery) {
        const suggestions = [];
        const { app: { vault }, settings, } = this;
        const allFiles = vault.getFiles();
        let i = allFiles.length;
        while (i--) {
            const file = allFiles[i];
            this.processFile(suggestions, file, prepQuery);
        }
        if (!settings.strictHeadingsOnly && !settings.showExistingOnly) {
            this.addUnresolvedSuggestions(suggestions, prepQuery);
        }
        return suggestions;
    }
    processFile(suggestions, file, prepQuery) {
        const { settings } = this;
        if (this.shouldIncludeFile(file)) {
            const hasH1 = this.addHeadingSuggestions(suggestions, prepQuery, file, settings.searchAllHeadings);
            if (!settings.strictHeadingsOnly) {
                if (!hasH1) {
                    // if there isn't a heading and strict is disabled, do a fallback search
                    // against the file path
                    this.addFileSuggestions(suggestions, prepQuery, file);
                }
                if (settings.shouldShowAlias) {
                    this.addAliasSuggestions(suggestions, prepQuery, file);
                }
            }
        }
    }
    addAliasSuggestions(suggestions, prepQuery, file) {
        const { metadataCache } = this.app;
        const frontMatter = metadataCache.getFileCache(file)?.frontmatter;
        if (frontMatter) {
            const aliases = FrontMatterParser.getAliases(frontMatter);
            let i = aliases.length;
            // create suggestions where there is a match with an alias
            while (i--) {
                const alias = aliases[i];
                const { match } = this.matchStrings(prepQuery, alias, null);
                if (match) {
                    suggestions.push(this.makeAliasSuggestion(alias, file, match));
                }
            }
        }
    }
    addFileSuggestions(suggestions, prepQuery, file) {
        const path = stripMDExtensionFromPath(file);
        const filename = filenameFromPath(path);
        const { isPrimary, match } = this.matchStrings(prepQuery, filename, path);
        if (isPrimary) {
            this.adjustMatchIndicesForPath(match.matches, path.length - filename.length);
        }
        if (match) {
            suggestions.push(this.makeFileSuggestion(file, match));
        }
    }
    addHeadingSuggestions(suggestions, prepQuery, file, allHeadings) {
        const { metadataCache } = this.app;
        const headingList = metadataCache.getFileCache(file)?.headings;
        let h1 = null;
        if (headingList) {
            let i = headingList.length;
            while (i--) {
                const heading = headingList[i];
                if (heading.level === 1) {
                    const { line } = heading.position.start;
                    if (h1 === null) {
                        h1 = heading;
                    }
                    else if (line < h1.position.start.line) {
                        h1 = heading;
                    }
                }
                if (allHeadings) {
                    this.matchAndPushHeading(suggestions, prepQuery, file, heading);
                }
            }
            if (!allHeadings && h1) {
                this.matchAndPushHeading(suggestions, prepQuery, file, h1);
            }
        }
        return !!h1;
    }
    matchAndPushHeading(suggestions, prepQuery, file, heading) {
        const { match } = this.matchStrings(prepQuery, heading.heading, null);
        if (match) {
            suggestions.push(this.makeHeadingSuggestion(heading, file, match));
        }
    }
    addUnresolvedSuggestions(suggestions, prepQuery) {
        const { unresolvedLinks } = this.app.metadataCache;
        const unresolvedSet = new Set();
        const sources = Object.keys(unresolvedLinks);
        let i = sources.length;
        // create a distinct list of unresolved links
        while (i--) {
            // each source has an object with keys that represent the list of unresolved links
            // for that source file
            const sourcePath = sources[i];
            const links = Object.keys(unresolvedLinks[sourcePath]);
            let j = links.length;
            while (j--) {
                // unresolved links can be duplicates, use a Set to get a distinct list
                unresolvedSet.add(links[j]);
            }
        }
        const unresolvedList = Array.from(unresolvedSet);
        i = unresolvedList.length;
        // create suggestions where there is a match with an unresolved link
        while (i--) {
            const unresolved = unresolvedList[i];
            const { match } = this.matchStrings(prepQuery, unresolved, null);
            if (match) {
                suggestions.push(this.makeUnresolvedSuggestion(unresolved, match));
            }
        }
    }
    makeAliasSuggestion(alias, file, match) {
        return {
            alias,
            file,
            match,
            type: 'alias',
        };
    }
    makeUnresolvedSuggestion(linktext, match) {
        return {
            linktext,
            match,
            type: 'unresolved',
        };
    }
    makeFileSuggestion(file, match) {
        return {
            file,
            match,
            type: 'file',
        };
    }
    makeHeadingSuggestion(item, file, match) {
        return {
            item,
            file,
            match,
            type: 'heading',
        };
    }
    matchStrings(prepQuery, primaryString, secondaryString) {
        let isPrimary = false;
        let match = null;
        if (primaryString) {
            match = obsidian.fuzzySearch(prepQuery, primaryString);
            isPrimary = !!match;
        }
        if (!match && secondaryString) {
            match = obsidian.fuzzySearch(prepQuery, secondaryString);
            if (match) {
                match.score -= 1;
            }
        }
        return {
            isPrimary,
            match,
        };
    }
    adjustMatchIndicesForPath(matches, pathLen) {
        matches?.forEach((match) => {
            match[0] += pathLen;
            match[1] += pathLen;
        });
    }
    getRecentFilesSuggestions() {
        const suggestions = [];
        const { workspace, vault, metadataCache } = this.app;
        const recentFilePaths = workspace.getLastOpenFiles();
        recentFilePaths.forEach((path) => {
            const file = vault.getAbstractFileByPath(path);
            if (this.shouldIncludeFile(file)) {
                const f = file;
                let h1 = null;
                const h1s = metadataCache
                    .getFileCache(f)
                    ?.headings?.filter((h) => h.level === 1)
                    .sort((a, b) => a.position.start.line - b.position.start.line);
                if (h1s?.length) {
                    h1 = h1s[0];
                }
                const sugg = h1
                    ? this.makeHeadingSuggestion(h1, f, null)
                    : this.makeFileSuggestion(f, null);
                suggestions.push(sugg);
            }
        });
        return suggestions;
    }
    shouldIncludeFile(file) {
        let retVal = false;
        const { settings: { builtInSystemOptions: { showAttachments, showAllFileTypes }, }, app: { viewRegistry }, } = this;
        if (isTFile(file)) {
            const { extension } = file;
            retVal = viewRegistry.isExtensionRegistered(extension)
                ? showAttachments || extension === 'md'
                : showAllFileTypes;
        }
        return retVal;
    }
}

class InputInfo {
    constructor(inputText = '') {
        this.inputText = inputText;
        this.mode = Mode.Standard;
        this.symbolCmd = { ...InputInfo.defaultParsedCommand, target: null };
        this.editorCmd = InputInfo.defaultParsedCommand;
        this.workspaceCmd = InputInfo.defaultParsedCommand;
        this.headingsCmd = InputInfo.defaultParsedCommand;
        this.searchQuery = { hasSearchTerm: false, prepQuery: null };
    }
    static get defaultParsedCommand() {
        return {
            isValidated: false,
            index: -1,
            parsedInput: null,
        };
    }
    buildSearchQuery() {
        const { mode } = this;
        let input = '';
        if (mode === Mode.SymbolList) {
            input = this.symbolCmd.parsedInput;
        }
        else if (mode === Mode.EditorList) {
            input = this.editorCmd.parsedInput;
        }
        else if (mode === Mode.WorkspaceList) {
            input = this.workspaceCmd.parsedInput;
        }
        else if (mode === Mode.HeadingsList) {
            input = this.headingsCmd.parsedInput;
        }
        const prepQuery = obsidian.prepareQuery(input.trim().toLowerCase());
        const hasSearchTerm = prepQuery?.query?.length > 0;
        this.searchQuery = { prepQuery, hasSearchTerm };
    }
}

function fileFromView(view) {
    return view?.file;
}
class ModeHandler {
    constructor(app, settings) {
        this.settings = settings;
        this.workspace = app?.workspace;
        this.metadataCache = app?.metadataCache;
        this.wsHandler = new WorkspaceHandler(app, settings);
        this.hsHandler = new HeadingsHandler(app, settings);
        this.reset();
    }
    get mode() {
        return this.inputInfo.mode;
    }
    reset() {
        this.inputInfo = new InputInfo();
    }
    getCommandStringForMode(mode) {
        let val = '';
        const { editorListCommand, symbolListCommand, workspaceListCommand, headingsListCommand, } = this.settings;
        switch (mode) {
            case Mode.EditorList:
                val = editorListCommand;
                break;
            case Mode.SymbolList:
                val = symbolListCommand;
                break;
            case Mode.WorkspaceList:
                val = workspaceListCommand;
                break;
            case Mode.HeadingsList:
                val = headingsListCommand;
                break;
        }
        return val;
    }
    onChooseSuggestion(sugg, evt) {
        if (isEditorSuggestion(sugg)) {
            this.activateEditorLeaf(sugg.item, false);
        }
        else if (isWorkspaceSuggestion(sugg)) {
            this.wsHandler.onChooseSuggestion(sugg);
        }
        else if (isHeadingSuggestion(sugg)) {
            this.hsHandler.onChooseSuggestion(sugg, evt);
        }
        else {
            this.navigateToSymbol(sugg);
        }
    }
    renderSuggestion(sugg, parentEl) {
        let containerEl = parentEl;
        if (isSymbolSuggestion(sugg)) {
            const { item } = sugg;
            if (this.settings.symbolsInlineOrder && !this.inputInfo.searchQuery.hasSearchTerm) {
                parentEl.addClass(`qsp-symbol-l${item.indentLevel}`);
            }
            ModeHandler.addSymbolIndicator(item, containerEl);
            containerEl = createSpan({
                cls: 'qsp-symbol-text',
                parent: containerEl,
            });
        }
        if (isWorkspaceSuggestion(sugg)) {
            this.wsHandler.renderSuggestion(sugg, parentEl);
        }
        else if (isHeadingSuggestion(sugg)) {
            this.hsHandler.renderSuggestion(sugg, parentEl);
        }
        else {
            const text = ModeHandler.getItemText(sugg.item);
            obsidian.renderResults(containerEl, text, sugg.match);
        }
    }
    determineRunMode(inputText, activeSuggestion, activeLeaf) {
        const input = inputText ?? '';
        const info = new InputInfo(input);
        if (input.length === 0) {
            this.reset();
        }
        this.validatePrefixCommands(info);
        this.validateSymbolCommand(info, activeSuggestion, activeLeaf);
        return info;
    }
    validatePrefixCommands(info) {
        const { inputText } = info;
        const { editorListCommand, workspaceListCommand, headingsListCommand } = this.settings;
        const escEditorCmd = escapeRegExp(editorListCommand);
        const escWorkspaceCmd = escapeRegExp(workspaceListCommand);
        const escHeadingsCmd = escapeRegExp(headingsListCommand);
        // account for potential overlapping command strings
        const prefixCmds = [
            `(?<ep>${escEditorCmd})`,
            `(?<wp>${escWorkspaceCmd})`,
            `(?<hp>${escHeadingsCmd})`,
        ].sort((a, b) => b.length - a.length);
        // regex that matches editor, workspace, headings prefixes, and extract filter text
        // ^(?:(?<ep>edt )|(?<wp>+)|(?<hp>#))(?<ft>.*)$
        const match = new RegExp(`^(?:${prefixCmds[0]}|${prefixCmds[1]}|${prefixCmds[2]})(?<ft>.*)$`).exec(inputText);
        if (match?.groups) {
            const { index, groups: { ep, wp, hp, ft }, } = match;
            if (ep) {
                this.validateEditorCommand(info, index, ft);
            }
            else if (wp) {
                this.wsHandler.validateCommand(info, index, ft);
            }
            else if (hp) {
                this.hsHandler.validateCommand(info, index, ft);
            }
        }
    }
    validateEditorCommand(inputInfo, index, filterText) {
        const { editorCmd } = inputInfo;
        inputInfo.mode = Mode.EditorList;
        editorCmd.index = index;
        editorCmd.parsedInput = filterText;
        editorCmd.isValidated = true;
    }
    validateSymbolCommand(inputInfo, activeSuggestion, activeLeaf) {
        const { mode, symbolCmd, inputText } = inputInfo;
        // Both Standard and EditorList mode can have an embedded symbol command
        if (mode === Mode.Standard ||
            mode === Mode.EditorList ||
            mode === Mode.HeadingsList) {
            const { symbolListCommand } = this.settings;
            const escSymbolCmd = escapeRegExp(symbolListCommand);
            // regex that matches symbol command, and extract filter text
            // @(?<ft>.*)$
            const match = new RegExp(`${escSymbolCmd}(?<ft>.*)$`).exec(inputText);
            if (match?.groups) {
                const { index, groups: { ft }, } = match;
                const target = this.getSymbolTarget(activeSuggestion, activeLeaf, index === 0);
                if (target) {
                    inputInfo.mode = Mode.SymbolList;
                    symbolCmd.target = target;
                    symbolCmd.index = index;
                    symbolCmd.parsedInput = ft;
                    symbolCmd.isValidated = true;
                }
            }
        }
    }
    getSymbolTarget(activeSuggestion, activeLeaf, isSymbolCmdPrefix) {
        // figure out if the previous operation was a symbol operation
        const prevInputInfo = this.inputInfo;
        let prevTarget = null;
        let hasPrevSymbolTarget = false;
        prevTarget = prevInputInfo.symbolCmd?.target;
        hasPrevSymbolTarget = prevInputInfo.mode === Mode.SymbolList && !!prevTarget;
        const activeSuggInfo = ModeHandler.getActiveSuggestionInfo(activeSuggestion);
        const activeEditorInfo = this.getActiveEditorInfo(activeLeaf);
        // Pick the target for a potential symbol operation, prioritizing
        // any pre-existing symbol operation that was in progress
        let target = null;
        if (hasPrevSymbolTarget) {
            target = prevTarget;
        }
        else if (activeSuggInfo.isValidSymbolTarget) {
            target = activeSuggInfo;
        }
        else if (activeEditorInfo.isValidSymbolTarget && isSymbolCmdPrefix) {
            target = activeEditorInfo;
        }
        return target;
    }
    getActiveEditorInfo(activeLeaf) {
        const { excludeViewTypes } = this.settings;
        let file = null;
        let isValidSymbolTarget = false;
        let cursor = null;
        if (activeLeaf) {
            const { view } = activeLeaf;
            let isCurrentEditorValid = false;
            if (view) {
                const viewType = view.getViewType();
                file = fileFromView(view);
                // determine if the current active editor pane is valid
                isCurrentEditorValid = !excludeViewTypes.includes(viewType);
                if (viewType === 'markdown') {
                    const md = view;
                    if (md.getMode() !== 'preview') {
                        const { editor } = view;
                        cursor = editor.getCursor('head');
                    }
                }
            }
            // whether or not the current active editor can be used as the target for
            // symbol search
            isValidSymbolTarget = isCurrentEditorValid && !!file;
        }
        return { isValidSymbolTarget, leaf: activeLeaf, file, suggestion: null, cursor };
    }
    static getActiveSuggestionInfo(activeSuggestion) {
        let file = null, leaf = null, isValidSymbolTarget = false;
        if (activeSuggestion &&
            !isSymbolSuggestion(activeSuggestion) &&
            !isUnresolvedSuggestion(activeSuggestion) &&
            !isWorkspaceSuggestion(activeSuggestion)) {
            // Can't use a symbol, workspace, unresolved (non-existent file) suggestions as
            // the target for another symbol command
            isValidSymbolTarget = true;
            if (isEditorSuggestion(activeSuggestion)) {
                leaf = activeSuggestion.item;
                file = fileFromView(leaf.view);
            }
            else {
                // this catches system File suggestion, Heading, and Alias suggestion
                file = activeSuggestion.file;
            }
        }
        return { isValidSymbolTarget, leaf, file, suggestion: activeSuggestion };
    }
    getSuggestions(inputInfo) {
        let suggestions = [];
        const push = (item, match) => {
            if (isSymbolInfo(item)) {
                suggestions.push({ type: 'symbol', item, match });
            }
            else if (!isWorkspaceInfo(item)) {
                // item is workspace leaf
                suggestions.push({ type: 'editor', item, match });
            }
        };
        if (inputInfo) {
            this.inputInfo = inputInfo;
            inputInfo.buildSearchQuery();
            const { hasSearchTerm, prepQuery } = inputInfo.searchQuery;
            const { mode } = inputInfo;
            if (mode === Mode.WorkspaceList) {
                suggestions = this.wsHandler.getSuggestions(inputInfo);
            }
            else if (mode === Mode.HeadingsList) {
                suggestions = this.hsHandler.getSuggestions(inputInfo);
            }
            else {
                const items = this.getItems(inputInfo);
                items.forEach((item) => {
                    let match = null;
                    if (hasSearchTerm) {
                        const text = ModeHandler.getItemText(item);
                        match = obsidian.fuzzySearch(prepQuery, text);
                        if (match) {
                            push(item, match);
                        }
                    }
                    else {
                        push(item, null);
                    }
                });
                if (hasSearchTerm) {
                    obsidian.sortSearchResults(suggestions);
                }
            }
        }
        return suggestions;
    }
    getItems(inputInfo) {
        let items = [];
        const { mode, searchQuery: { hasSearchTerm }, symbolCmd: { target }, } = inputInfo;
        if (mode === Mode.EditorList) {
            items = this.getOpenRootSplits();
        }
        else if (mode === Mode.SymbolList) {
            let symbolsInlineOrder = false;
            let selectNearestHeading = false;
            if (!hasSearchTerm) {
                ({ selectNearestHeading, symbolsInlineOrder } = this.settings);
            }
            items = this.getSymbolsForTarget(target, symbolsInlineOrder);
            if (selectNearestHeading) {
                ModeHandler.FindNearestHeadingSymbol(items, target);
            }
        }
        return items;
    }
    static FindNearestHeadingSymbol(items, targetInfo) {
        const cursorLine = targetInfo?.cursor?.line;
        // find the nearest heading to the current cursor pos, if applicable
        if (cursorLine) {
            const found = items
                .filter((v) => isSymbolInfo(v) && isHeadingCache(v.symbol))
                .reduce((acc, curr) => {
                const { line: currLine } = curr.symbol.position.start;
                const accLine = acc ? acc.symbol.position.start.line : -1;
                return currLine > accLine && currLine <= cursorLine ? curr : acc;
            });
            if (found) {
                found.isSelected = true;
            }
        }
    }
    getOpenRootSplits() {
        const { workspace, settings: { excludeViewTypes, includeSidePanelViewTypes }, } = this;
        const leaves = [];
        const saveLeaf = (l) => {
            const viewType = l.view?.getViewType();
            if (this.isMainPanelLeaf(l)) {
                if (!excludeViewTypes.includes(viewType)) {
                    leaves.push(l);
                }
            }
            else if (includeSidePanelViewTypes.includes(viewType)) {
                leaves.push(l);
            }
        };
        workspace.iterateAllLeaves(saveLeaf);
        return leaves;
    }
    isMainPanelLeaf(leaf) {
        return leaf?.getRoot() === this.workspace.rootSplit;
    }
    activateEditorLeaf(leaf, pushHistory, eState) {
        const { workspace } = this;
        const isInSidePanel = !this.isMainPanelLeaf(leaf);
        const state = { focus: true, ...eState };
        if (isInSidePanel) {
            workspace.revealLeaf(leaf);
        }
        workspace.setActiveLeaf(leaf, pushHistory);
        leaf.view.setEphemeralState(state);
    }
    getSymbolsForTarget(targetInfo, orderByLineNumber) {
        const { metadataCache, settings } = this;
        const ret = [];
        if (targetInfo?.file) {
            const file = targetInfo.file;
            const symbolData = metadataCache.getFileCache(file);
            if (symbolData) {
                const push = (symbols = [], symbolType) => {
                    if (settings.isSymbolTypeEnabled(symbolType)) {
                        symbols.forEach((symbol) => ret.push({ type: 'symbolInfo', symbol, symbolType }));
                    }
                };
                push(symbolData.headings, SymbolType.Heading);
                push(symbolData.tags, SymbolType.Tag);
                push(symbolData.links, SymbolType.Link);
                push(symbolData.embeds, SymbolType.Embed);
            }
        }
        return orderByLineNumber ? ModeHandler.orderSymbolsByLineNumber(ret) : ret;
    }
    static orderSymbolsByLineNumber(symbols = []) {
        const sorted = symbols.sort((a, b) => {
            const { start: aStart } = a.symbol.position;
            const { start: bStart } = b.symbol.position;
            const lineDiff = aStart.line - bStart.line;
            return lineDiff === 0 ? aStart.col - bStart.col : lineDiff;
        });
        let currIndentLevel = 0;
        sorted.forEach((si) => {
            let indentLevel = 0;
            if (isHeadingCache(si.symbol)) {
                currIndentLevel = si.symbol.level;
                indentLevel = si.symbol.level - 1;
            }
            else {
                indentLevel = currIndentLevel;
            }
            si.indentLevel = indentLevel;
        });
        return sorted;
    }
    static getItemText(item) {
        let text;
        if (isSymbolInfo(item)) {
            text = ModeHandler.getSuggestionTextForSymbol(item);
        }
        else if (!isWorkspaceInfo(item)) {
            // item is workspace leaf
            text = item.getDisplayText();
        }
        return text;
    }
    static getSuggestionTextForSymbol(symbolInfo) {
        const { symbol } = symbolInfo;
        let text;
        if (isHeadingCache(symbol)) {
            text = symbol.heading;
        }
        else if (isTagCache(symbol)) {
            text = symbol.tag.slice(1);
        }
        else {
            const refCache = symbol;
            ({ link: text } = refCache);
            const { displayText } = refCache;
            if (displayText && displayText !== text) {
                text += `|${displayText}`;
            }
        }
        return text;
    }
    navigateToSymbol(sugg) {
        const { workspace, settings: { alwaysNewPaneForSymbols, useActivePaneForSymbolsOnMobile }, } = this;
        // determine if the target is already open in a pane
        const { leaf, file: { path }, } = this.findOpenEditorMatchingSymbolTarget();
        const { start: { line, col }, end: endLoc, } = sugg.item.symbol.position;
        // object containing the state information for the target editor,
        // start with the range to highlight in target editor
        const eState = {
            startLoc: { line, col },
            endLoc,
            line,
            cursor: {
                from: { line, ch: col },
                to: { line, ch: col },
            },
        };
        if (leaf && !alwaysNewPaneForSymbols) {
            this.activateEditorLeaf(leaf, true, eState);
        }
        else {
            const { isDesktop, isMobile } = obsidian.Platform;
            const createNewLeaf = isDesktop || (isMobile && !useActivePaneForSymbolsOnMobile);
            workspace
                .openLinkText(path, '', createNewLeaf, { eState })
                .catch(() => console.log('Switcher++: unable to navigate to symbol'));
        }
    }
    findOpenEditorMatchingSymbolTarget() {
        const { referenceViews } = this.settings;
        const { file, leaf } = this.inputInfo.symbolCmd.target;
        const isTargetLeaf = !!leaf;
        const predicate = (l) => {
            let val = false;
            const isRefView = referenceViews.includes(l.view.getViewType());
            const isTargetRefView = isTargetLeaf && referenceViews.includes(leaf.view.getViewType());
            if (!isRefView) {
                val =
                    isTargetLeaf && !isTargetRefView ? l === leaf : fileFromView(l.view) === file;
            }
            return val;
        };
        const l = this.getOpenRootSplits().find(predicate);
        return { leaf: l, file, suggestion: null, isValidSymbolTarget: false };
    }
    static addSymbolIndicator(symbolInfo, parentEl) {
        const { symbolType, symbol } = symbolInfo;
        let indicator;
        if (isHeadingCache(symbol)) {
            indicator = HeadingIndicators[symbol.level];
        }
        else {
            indicator = SymbolIndicators[symbolType];
        }
        createDiv({
            text: indicator,
            cls: 'qsp-symbol-indicator',
            parent: parentEl,
        });
    }
}

class Keymap {
    constructor(scope, chooser, modalContainerEl) {
        this.scope = scope;
        this.chooser = chooser;
        this.modalContainerEl = modalContainerEl;
        this.registerBindings(scope);
    }
    get isOpen() {
        return this._isOpen;
    }
    set isOpen(value) {
        this._isOpen = value;
    }
    registerBindings(scope) {
        scope.register(['Ctrl'], 'n', this.navigateItems.bind(this));
        scope.register(['Ctrl'], 'p', this.navigateItems.bind(this));
    }
    navigateItems(_evt, ctx) {
        const { isOpen, chooser } = this;
        if (isOpen) {
            const isNext = ctx.key === 'n';
            const index = chooser.selectedItem;
            chooser.setSelectedItem(isNext ? index + 1 : index - 1, true);
        }
        return false;
    }
    static updateHelperTextForMode(mode, containerEl) {
        const selector = '.prompt-instructions';
        const el = containerEl.querySelector(selector);
        if (el) {
            el.style.display = mode === Mode.Standard ? '' : 'none';
        }
    }
    updateKeymapForMode(mode) {
        const keys = this.scope.keys;
        let { backupKeys = [] } = this;
        Keymap.updateHelperTextForMode(mode, this.modalContainerEl);
        if (mode === Mode.Standard) {
            if (backupKeys.length) {
                backupKeys.forEach((key) => keys.push(key));
            }
            backupKeys = undefined;
        }
        else {
            // unregister unused hotkeys for custom modes
            for (let i = keys.length - 1; i >= 0; --i) {
                const key = keys[i];
                // modifiers are serialized to string at run time, if they exist
                const modifiers = key.modifiers?.toString();
                if (key.key === 'Enter' && (modifiers === 'Meta' || modifiers === 'Shift')) {
                    keys.splice(i, 1);
                    backupKeys.push(key);
                }
            }
        }
        this.backupKeys = backupKeys;
    }
}

function createSwitcherPlus(app, plugin) {
    const systemSwitcher = getSystemSwitcherInstance(app)
        ?.QuickSwitcherModal;
    if (!systemSwitcher) {
        console.log('Switcher++: unable to extend system switcher. Plugin UI will not be loaded. Use the builtin switcher instead.');
        return null;
    }
    const switcherPlusClass = class extends systemSwitcher {
        constructor(app, plugin) {
            super(app, plugin.options.builtInSystemOptions);
            this.plugin = plugin;
            this.openWithCommandStr = null;
            plugin.options.shouldShowAlias = this.shouldShowAlias;
            this.exMode = new ModeHandler(app, plugin.options);
            this.exKeymap = new Keymap(this.scope, this.chooser, this.containerEl);
            this.debouncedUpdateSuggestionsEx = obsidian.debounce(this.updateSuggestionsEx.bind(this), 400, true);
        }
        openInMode(mode) {
            const { exMode } = this;
            exMode.reset();
            this.chooser.setSuggestions([]);
            if (mode !== Mode.Standard) {
                this.openWithCommandStr = exMode.getCommandStringForMode(mode);
            }
            super.open();
        }
        onOpen() {
            this.exKeymap.isOpen = true;
            super.onOpen();
        }
        onClose() {
            super.onClose();
            this.exKeymap.isOpen = false;
        }
        updateSuggestions() {
            const { exMode, exKeymap, openWithCommandStr } = this;
            if (openWithCommandStr !== null && openWithCommandStr !== '') {
                // update UI with current command string in the case were openInMode was called
                this.inputEl.value = openWithCommandStr;
                // reset to null so user input is not overridden the next time onInput is called
                this.openWithCommandStr = null;
            }
            const activeSugg = this.getActiveSuggestion();
            const inputInfo = exMode.determineRunMode(this.inputEl.value, activeSugg, this.app.workspace.activeLeaf);
            const { mode } = inputInfo;
            exKeymap.updateKeymapForMode(mode);
            if (mode === Mode.Standard) {
                super.updateSuggestions();
            }
            else {
                if (mode === Mode.HeadingsList && inputInfo.headingsCmd.parsedInput?.length) {
                    this.debouncedUpdateSuggestionsEx(inputInfo);
                }
                else {
                    this.updateSuggestionsEx(inputInfo);
                }
            }
        }
        updateSuggestionsEx(inputInfo) {
            const { exMode, chooser } = this;
            chooser.setSuggestions([]);
            const suggestions = exMode.getSuggestions(inputInfo);
            chooser.setSuggestions(suggestions);
            if (inputInfo.mode === Mode.SymbolList) {
                const index = suggestions
                    .filter((v) => isSymbolSuggestion(v))
                    .findIndex((v) => v.item.isSelected === true);
                if (index !== -1) {
                    chooser.setSelectedItem(index, true);
                }
            }
        }
        onChooseSuggestion(item, evt) {
            const { exMode } = this;
            const useDefault = exMode.mode === Mode.Standard || item === null;
            if (isSystemSuggestion(item) || useDefault) {
                super.onChooseSuggestion(item, evt);
            }
            else {
                exMode.onChooseSuggestion(item, evt);
            }
        }
        renderSuggestion(value, parentEl) {
            const { exMode } = this;
            const useDefault = exMode.mode === Mode.Standard || value === null;
            if (isSystemSuggestion(value) || useDefault) {
                super.renderSuggestion(value, parentEl);
            }
            else {
                exMode.renderSuggestion(value, parentEl);
            }
        }
        getActiveSuggestion() {
            const { chooser } = this;
            let activeSuggestion = null;
            if (chooser?.values) {
                activeSuggestion = chooser.values[chooser.selectedItem];
            }
            return activeSuggestion;
        }
    };
    return new switcherPlusClass(app, plugin);
}

class SwitcherPlusPlugin extends obsidian.Plugin {
    async onload() {
        const options = new SwitcherPlusSettings(this);
        await options.loadSettings();
        this.options = options;
        this.addSettingTab(new SwitcherPlusSettingTab(this.app, this, options));
        this.registerCommand('switcher-plus:open', 'Open', Mode.Standard);
        this.registerCommand('switcher-plus:open-editors', 'Open in Editor Mode', Mode.EditorList);
        this.registerCommand('switcher-plus:open-symbols', 'Open in Symbol Mode', Mode.SymbolList);
        this.registerCommand('switcher-plus:open-workspaces', 'Open in Workspaces Mode', Mode.WorkspaceList);
        this.registerCommand('switcher-plus:open-headings', 'Open in Headings Mode', Mode.HeadingsList);
    }
    registerCommand(id, name, mode) {
        this.addCommand({
            id,
            name,
            hotkeys: [],
            checkCallback: (checking) => {
                // modal needs to be created dynamically (same as system switcher)
                // as system options are evaluated in the modal constructor
                const modal = createSwitcherPlus(this.app, this);
                if (modal) {
                    if (!checking) {
                        modal.openInMode(mode);
                    }
                    return true;
                }
                return false;
            },
        });
    }
}

module.exports = SwitcherPlusPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3R5cGVzL3NoYXJlZFR5cGVzLnRzIiwiLi4vLi4vc3JjL3V0aWxzL3V0aWxzLnRzIiwiLi4vLi4vc3JjL3V0aWxzL2Zyb250TWF0dGVyUGFyc2VyLnRzIiwiLi4vLi4vc3JjL3NldHRpbmdzL3N3aXRjaGVyUGx1c1NldHRpbmdzLnRzIiwiLi4vLi4vc3JjL3NldHRpbmdzL3N3aXRjaGVyUGx1c1NldHRpbmdUYWIudHMiLCIuLi8uLi9zcmMvSGFuZGxlcnMvd29ya3NwYWNlSGFuZGxlci50cyIsIi4uLy4uL3NyYy9IYW5kbGVycy9oZWFkaW5nc0hhbmRsZXIudHMiLCIuLi8uLi9zcmMvc3dpdGNoZXJQbHVzL2lucHV0SW5mby50cyIsIi4uLy4uL3NyYy9zd2l0Y2hlclBsdXMvbW9kZUhhbmRsZXIudHMiLCIuLi8uLi9zcmMvc3dpdGNoZXJQbHVzL2tleW1hcC50cyIsIi4uLy4uL3NyYy9zd2l0Y2hlclBsdXMvc3dpdGNoZXJQbHVzLnRzIiwiLi4vLi4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOm51bGwsIm5hbWVzIjpbIlBsdWdpblNldHRpbmdUYWIiLCJTZXR0aW5nIiwiZnV6enlTZWFyY2giLCJzb3J0U2VhcmNoUmVzdWx0cyIsInJlbmRlclJlc3VsdHMiLCJwcmVwYXJlUXVlcnkiLCJQbGF0Zm9ybSIsImRlYm91bmNlIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBZUEsSUFBWSxJQU1YO0FBTkQsV0FBWSxJQUFJO0lBQ2QsdUNBQVksQ0FBQTtJQUNaLDJDQUFjLENBQUE7SUFDZCwyQ0FBYyxDQUFBO0lBQ2QsaURBQWlCLENBQUE7SUFDakIsZ0RBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQU5XLElBQUksS0FBSixJQUFJLFFBTWY7QUFFRCxJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDcEIsMkNBQVEsQ0FBQTtJQUNSLDZDQUFTLENBQUE7SUFDVCx5Q0FBTyxDQUFBO0lBQ1AsaURBQVcs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
