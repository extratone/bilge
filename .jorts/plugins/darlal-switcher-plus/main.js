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
function isExSuggestion(sugg) {
    return sugg && !isSystemSuggestion(sugg);
}
function isHeadingCache(obj) {
    return isOfType(obj, 'level');
}
function isTagCache(obj) {
    return isOfType(obj, 'tag');
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

function isMainPanelLeaf(workspace, leaf) {
    return leaf?.getRoot() === workspace.rootSplit;
}
function activateLeaf(workspace, leaf, pushHistory, eState) {
    const isInSidePanel = !isMainPanelLeaf(workspace, leaf);
    const state = { focus: true, ...eState };
    if (isInSidePanel) {
        workspace.revealLeaf(leaf);
    }
    workspace.setActiveLeaf(leaf, pushHistory);
    leaf.view.setEphemeralState(state);
}
function getOpenLeaves(workspace, excludeMainPanelViewTypes, includeSidePanelViewTypes) {
    const leaves = [];
    const saveLeaf = (l) => {
        const viewType = l.view?.getViewType();
        if (isMainPanelLeaf(workspace, l)) {
            if (!excludeMainPanelViewTypes?.includes(viewType)) {
                leaves.push(l);
            }
        }
        else if (includeSidePanelViewTypes?.includes(viewType)) {
            leaves.push(l);
        }
    };
    workspace.iterateAllLeaves(saveLeaf);
    return leaves;
}

class SwitcherPlusSettings {
    constructor(plugin) {
        this.plugin = plugin;
        this.data = SwitcherPlusSettings.defaults;
    }
    static get defaults() {
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
    get symbolsInLineOrder() {
        return this.data.symbolsInLineOrder;
    }
    set symbolsInLineOrder(value) {
        this.data.symbolsInLineOrder = value;
    }
    get editorListPlaceholderText() {
        return SwitcherPlusSettings.defaults.editorListCommand;
    }
    get editorListCommand() {
        return this.data.editorListCommand;
    }
    set editorListCommand(value) {
        this.data.editorListCommand = value;
    }
    get symbolListPlaceholderText() {
        return SwitcherPlusSettings.defaults.symbolListCommand;
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
        return SwitcherPlusSettings.defaults.workspaceListCommand;
    }
    get headingsListCommand() {
        return this.data.headingsListCommand;
    }
    set headingsListCommand(value) {
        this.data.headingsListCommand = value;
    }
    get headingsListPlaceholderText() {
        return SwitcherPlusSettings.defaults.headingsListCommand;
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
    get limit() {
        return this.data.limit;
    }
    set limit(value) {
        this.data.limit = value;
    }
    get includeSidePanelViewTypes() {
        return this.data.includeSidePanelViewTypes;
    }
    set includeSidePanelViewTypes(value) {
        // remove any duplicates before storing
        this.data.includeSidePanelViewTypes = [...new Set(value)];
    }
    get includeSidePanelViewTypesPlaceholder() {
        return SwitcherPlusSettings.defaults.includeSidePanelViewTypes.join('\n');
    }
    get selectNearestHeading() {
        return this.data.selectNearestHeading;
    }
    set selectNearestHeading(value) {
        this.data.selectNearestHeading = value;
    }
    async loadSettings() {
        const copy = (source, target, keys) => {
            for (const key of keys) {
                if (key in source) {
                    target[key] = source[key];
                }
            }
        };
        try {
            const savedData = (await this.plugin?.loadData());
            if (savedData) {
                const keys = Object.keys(SwitcherPlusSettings.defaults);
                copy(savedData, this.data, keys);
            }
        }
        catch (err) {
            console.log('Switcher++: error loading settings, using defaults. ', err);
        }
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
            .addToggle((toggle) => toggle.setValue(settings.symbolsInLineOrder).onChange((value) => {
            settings.symbolsInLineOrder = value;
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
    get commandString() {
        return this.settings?.workspaceListCommand;
    }
    validateCommand(inputInfo, index, filterText, _activeSuggestion, _activeLeaf) {
        if (this.isWorkspacesPluginEnabled()) {
            inputInfo.mode = Mode.WorkspaceList;
            const workspaceCmd = inputInfo.parsedCommand(Mode.WorkspaceList);
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
    onChooseSuggestion(sugg, _evt) {
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
    get commandString() {
        return this.settings?.headingsListCommand;
    }
    validateCommand(inputInfo, index, filterText, _activeSuggestion, _activeLeaf) {
        inputInfo.mode = Mode.HeadingsList;
        const headingsCmd = inputInfo.parsedCommand(Mode.HeadingsList);
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
        if (sugg) {
            const { item } = sugg;
            obsidian.renderResults(parentEl, item.heading, sugg.match);
            parentEl.createSpan({
                cls: 'suggestion-flair',
                text: HeadingIndicators[item.level],
                prepend: true,
            });
            parentEl.createDiv({
                cls: 'suggestion-note',
                text: stripMDExtensionFromPath(sugg.file),
            });
        }
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

class EditorHandler {
    constructor(app, settings) {
        this.app = app;
        this.settings = settings;
    }
    get commandString() {
        return this.settings?.editorListCommand;
    }
    validateCommand(inputInfo, index, filterText, _activeSuggestion, _activeLeaf) {
        inputInfo.mode = Mode.EditorList;
        const editorCmd = inputInfo.parsedCommand(Mode.EditorList);
        editorCmd.index = index;
        editorCmd.parsedInput = filterText;
        editorCmd.isValidated = true;
    }
    getSuggestions(inputInfo) {
        const suggestions = [];
        if (inputInfo) {
            inputInfo.buildSearchQuery();
            const { hasSearchTerm, prepQuery } = inputInfo.searchQuery;
            const { excludeViewTypes, includeSidePanelViewTypes } = this.settings;
            const items = getOpenLeaves(this.app.workspace, excludeViewTypes, includeSidePanelViewTypes);
            items.forEach((item) => {
                let shouldPush = true;
                let match = null;
                if (hasSearchTerm) {
                    match = obsidian.fuzzySearch(prepQuery, item.getDisplayText());
                    shouldPush = !!match;
                }
                if (shouldPush) {
                    suggestions.push({ type: 'editor', item, match });
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
            obsidian.renderResults(parentEl, sugg.item.getDisplayText(), sugg.match);
        }
    }
    onChooseSuggestion(sugg, _evt) {
        if (sugg) {
            activateLeaf(this.app.workspace, sugg.item, false);
        }
    }
}

class SymbolHandler {
    constructor(app, settings) {
        this.app = app;
        this.settings = settings;
    }
    get commandString() {
        return this.settings?.symbolListCommand;
    }
    validateCommand(inputInfo, index, filterText, activeSuggestion, activeLeaf) {
        const target = this.getSymbolTarget(activeSuggestion, activeLeaf, index === 0);
        if (target) {
            inputInfo.mode = Mode.SymbolList;
            const symbolCmd = inputInfo.parsedCommand(Mode.SymbolList);
            symbolCmd.target = target;
            symbolCmd.index = index;
            symbolCmd.parsedInput = filterText;
            symbolCmd.isValidated = true;
        }
    }
    getSuggestions(inputInfo) {
        const suggestions = [];
        if (inputInfo) {
            this.inputInfo = inputInfo;
            inputInfo.buildSearchQuery();
            const { hasSearchTerm, prepQuery } = inputInfo.searchQuery;
            const symbolCmd = inputInfo.parsedCommand(Mode.SymbolList);
            const items = this.getItems(symbolCmd.target, hasSearchTerm);
            items.forEach((item) => {
                let shouldPush = true;
                let match = null;
                if (hasSearchTerm) {
                    match = obsidian.fuzzySearch(prepQuery, SymbolHandler.getSuggestionTextForSymbol(item));
                    shouldPush = !!match;
                }
                if (shouldPush) {
                    suggestions.push({ type: 'symbol', item, match });
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
            const { item } = sugg;
            let containerEl = parentEl;
            if (this.settings.symbolsInLineOrder &&
                this.inputInfo &&
                !this.inputInfo.searchQuery.hasSearchTerm) {
                containerEl.addClass(`qsp-symbol-l${item.indentLevel}`);
            }
            const text = SymbolHandler.getSuggestionTextForSymbol(item);
            SymbolHandler.addSymbolIndicator(item, containerEl);
            containerEl = parentEl.createSpan({
                cls: 'qsp-symbol-text',
            });
            obsidian.renderResults(containerEl, text, sugg.match);
        }
    }
    onChooseSuggestion(sugg, _evt) {
        if (sugg) {
            this.navigateToSymbol(sugg);
        }
    }
    reset() {
        this.inputInfo = null;
    }
    getSymbolTarget(activeSuggestion, activeLeaf, isSymbolCmdPrefix) {
        const prevInputInfo = this.inputInfo;
        let prevTarget = null;
        let prevMode = Mode.Standard;
        if (prevInputInfo) {
            prevTarget = prevInputInfo.parsedCommand().target;
            prevMode = prevInputInfo.mode;
        }
        // figure out if the previous operation was a symbol operation
        const hasPrevSymbolTarget = prevMode === Mode.SymbolList && !!prevTarget;
        const activeSuggInfo = SymbolHandler.getActiveSuggestionInfo(activeSuggestion);
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
            const viewType = view.getViewType();
            file = view.file;
            // determine if the current active editor pane is valid
            isCurrentEditorValid = !excludeViewTypes.includes(viewType);
            if (viewType === 'markdown') {
                const md = view;
                if (md.getMode() !== 'preview') {
                    const { editor } = md;
                    cursor = editor.getCursor('head');
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
                file = leaf.view?.file;
            }
            else {
                // this catches system File suggestion, Heading, and Alias suggestion
                file = activeSuggestion.file;
            }
        }
        return { isValidSymbolTarget, leaf, file, suggestion: activeSuggestion };
    }
    getItems(target, hasSearchTerm) {
        let items = [];
        let symbolsInLineOrder = false;
        let selectNearestHeading = false;
        if (!hasSearchTerm) {
            ({ selectNearestHeading, symbolsInLineOrder } = this.settings);
        }
        items = this.getSymbolsForTarget(target, symbolsInLineOrder);
        if (selectNearestHeading) {
            SymbolHandler.FindNearestHeadingSymbol(items, target);
        }
        return items;
    }
    static FindNearestHeadingSymbol(items, targetInfo) {
        const cursorLine = targetInfo?.cursor?.line;
        // find the nearest heading to the current cursor pos, if applicable
        if (cursorLine) {
            const found = items
                .filter((v) => isHeadingCache(v.symbol))
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
    getSymbolsForTarget(targetInfo, orderByLineNumber) {
        const { app: { metadataCache }, settings, } = this;
        const ret = [];
        if (targetInfo.file) {
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
        return orderByLineNumber ? SymbolHandler.orderSymbolsByLineNumber(ret) : ret;
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
    static addSymbolIndicator(symbolInfo, parentEl) {
        const { symbolType, symbol } = symbolInfo;
        let indicator;
        if (isHeadingCache(symbol)) {
            indicator = HeadingIndicators[symbol.level];
        }
        else {
            indicator = SymbolIndicators[symbolType];
        }
        parentEl.createDiv({
            text: indicator,
            cls: 'qsp-symbol-indicator',
        });
    }
    navigateToSymbol(sugg) {
        const { app: { workspace }, settings: { alwaysNewPaneForSymbols, useActivePaneForSymbolsOnMobile }, } = this;
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
            activateLeaf(workspace, leaf, true, eState);
        }
        else {
            const { isDesktop, isMobile } = obsidian.Platform;
            const createNewLeaf = isDesktop || (isMobile && !useActivePaneForSymbolsOnMobile);
            workspace
                .openLinkText(path, '', createNewLeaf, { eState })
                .catch(() => console.log(`Switcher++: unable to navigate to symbol for file ${path}`));
        }
    }
    findOpenEditorMatchingSymbolTarget() {
        const { inputInfo, settings: { referenceViews, excludeViewTypes, includeSidePanelViewTypes }, app: { workspace }, } = this;
        const symbolCmd = inputInfo.parsedCommand();
        const { file, leaf } = symbolCmd.target;
        const isTargetLeaf = !!leaf;
        const predicate = (l) => {
            let val = false;
            const isRefView = referenceViews.includes(l.view.getViewType());
            const isTargetRefView = isTargetLeaf && referenceViews.includes(leaf.view.getViewType());
            if (!isRefView) {
                val = isTargetLeaf && !isTargetRefView ? l === leaf : l.view?.file === file;
            }
            return val;
        };
        const l = getOpenLeaves(workspace, excludeViewTypes, includeSidePanelViewTypes).find(predicate);
        return { leaf: l, file, suggestion: null, isValidSymbolTarget: false };
    }
}

class InputInfo {
    constructor(inputText = '', mode = Mode.Standard) {
        this.inputText = inputText;
        this.mode = mode;
        const sc = {
            ...InputInfo.defaultParsedCommand,
            target: null,
        };
        const pcs = {};
        pcs[Mode.SymbolList] = sc;
        pcs[Mode.Standard] = InputInfo.defaultParsedCommand;
        pcs[Mode.EditorList] = InputInfo.defaultParsedCommand;
        pcs[Mode.WorkspaceList] = InputInfo.defaultParsedCommand;
        pcs[Mode.HeadingsList] = InputInfo.defaultParsedCommand;
        this.parsedCommands = pcs;
    }
    static get defaultParsedCommand() {
        return {
            isValidated: false,
            index: -1,
            parsedInput: null,
        };
    }
    get searchQuery() {
        return this._searchQuery;
    }
    buildSearchQuery() {
        const { mode } = this;
        const input = this.parsedCommands[mode].parsedInput ?? '';
        const prepQuery = obsidian.prepareQuery(input.trim().toLowerCase());
        const hasSearchTerm = prepQuery?.query?.length > 0;
        this._searchQuery = { prepQuery, hasSearchTerm };
    }
    parsedCommand(mode) {
        mode = mode ?? this.mode;
        return this.parsedCommands[mode];
    }
}

class ModeHandler {
    constructor(app, settings, exKeymap) {
        this.app = app;
        this.settings = settings;
        this.exKeymap = exKeymap;
        const handlersByMode = new Map();
        this.handlersByMode = handlersByMode;
        handlersByMode.set(Mode.SymbolList, new SymbolHandler(app, settings));
        handlersByMode.set(Mode.WorkspaceList, new WorkspaceHandler(app, settings));
        handlersByMode.set(Mode.HeadingsList, new HeadingsHandler(app, settings));
        handlersByMode.set(Mode.EditorList, new EditorHandler(app, settings));
        this.debouncedGetSuggestions = obsidian.debounce(this.getSuggestions.bind(this), 400, true);
        this.reset();
    }
    setSessionOpenMode(mode, chooser) {
        this.reset();
        chooser?.setSuggestions([]);
        if (mode !== Mode.Standard) {
            this.sessionOpenModeString = this.getHandler(mode).commandString;
        }
    }
    insertSessionOpenModeCommandString(inputEl) {
        const { sessionOpenModeString } = this;
        if (sessionOpenModeString !== null && sessionOpenModeString !== '') {
            // update UI with current command string in the case were openInMode was called
            inputEl.value = sessionOpenModeString;
            // reset to null so user input is not overridden the next time onInput is called
            this.sessionOpenModeString = null;
        }
    }
    updateSuggestions(query, chooser) {
        let handled = false;
        const { exKeymap, app: { workspace: { activeLeaf }, }, } = this;
        const activeSugg = ModeHandler.getActiveSuggestion(chooser);
        const inputInfo = this.determineRunMode(query, activeSugg, activeLeaf);
        const { mode } = inputInfo;
        exKeymap.updateKeymapForMode(mode);
        if (mode !== Mode.Standard) {
            if (mode === Mode.HeadingsList && inputInfo.parsedCommand().parsedInput?.length) {
                // if headings mode and user is typing a query, delay getting suggestions
                this.debouncedGetSuggestions(inputInfo, chooser);
            }
            else {
                this.getSuggestions(inputInfo, chooser);
            }
            handled = true;
        }
        return handled;
    }
    renderSuggestion(sugg, parentEl) {
        let handled = false;
        if (isExSuggestion(sugg)) {
            this.getHandler(sugg).renderSuggestion(sugg, parentEl);
            handled = true;
        }
        return handled;
    }
    onChooseSuggestion(sugg, evt) {
        let handled = false;
        if (isExSuggestion(sugg)) {
            this.getHandler(sugg).onChooseSuggestion(sugg, evt);
            handled = true;
        }
        return handled;
    }
    determineRunMode(query, activeSugg, activeLeaf) {
        const input = query ?? '';
        const info = new InputInfo(input);
        if (input.length === 0) {
            this.reset();
        }
        this.validatePrefixCommands(info, activeSugg, activeLeaf);
        this.validateSymbolCommand(info, activeSugg, activeLeaf);
        return info;
    }
    getSuggestions(inputInfo, chooser) {
        this.inputInfo = inputInfo;
        const { mode } = inputInfo;
        chooser.setSuggestions([]);
        const suggestions = this.getHandler(mode).getSuggestions(inputInfo);
        chooser.setSuggestions(suggestions);
        ModeHandler.setActiveSuggestion(mode, chooser);
    }
    validatePrefixCommands(inputInfo, activeSugg, activeLeaf) {
        const { inputText } = inputInfo;
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
            let mode;
            const { index, groups: { ep, wp, hp, ft }, } = match;
            if (ep) {
                mode = Mode.EditorList;
            }
            else if (wp) {
                mode = Mode.WorkspaceList;
            }
            else if (hp) {
                mode = Mode.HeadingsList;
            }
            this.getHandler(mode).validateCommand(inputInfo, index, ft, activeSugg, activeLeaf);
        }
    }
    validateSymbolCommand(inputInfo, activeSugg, activeLeaf) {
        const { mode, inputText } = inputInfo;
        // Standard, Headings, and EditorList mode can have an embedded symbol command
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
                this.getHandler(Mode.SymbolList).validateCommand(inputInfo, index, ft, activeSugg, activeLeaf);
            }
        }
    }
    static setActiveSuggestion(mode, chooser) {
        // only symbol mode currently sets an active selection
        if (mode === Mode.SymbolList) {
            const index = chooser.values
                .filter((v) => isSymbolSuggestion(v))
                .findIndex((v) => v.item.isSelected);
            if (index !== -1) {
                chooser.setSelectedItem(index, true);
            }
        }
    }
    static getActiveSuggestion(chooser) {
        let activeSuggestion = null;
        if (chooser?.values) {
            activeSuggestion = chooser.values[chooser.selectedItem];
        }
        return activeSuggestion;
    }
    reset() {
        this.inputInfo = new InputInfo();
        this.sessionOpenModeString = null;
        this.getHandler(Mode.SymbolList).reset();
    }
    getHandler(kind) {
        let mode;
        if (typeof kind === 'number') {
            mode = kind;
        }
        else {
            if (isEditorSuggestion(kind)) {
                mode = Mode.EditorList;
            }
            else if (isWorkspaceSuggestion(kind)) {
                mode = Mode.WorkspaceList;
            }
            else if (isHeadingSuggestion(kind)) {
                mode = Mode.HeadingsList;
            }
            else if (isSymbolSuggestion(kind)) {
                mode = Mode.SymbolList;
            }
        }
        return this.handlersByMode.get(mode);
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
            let index = chooser.selectedItem;
            index = ctx.key === 'n' ? ++index : --index;
            chooser.setSelectedItem(index, true);
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
    const SystemSwitcherModal = getSystemSwitcherInstance(app)
        ?.QuickSwitcherModal;
    if (!SystemSwitcherModal) {
        console.log('Switcher++: unable to extend system switcher. Plugin UI will not be loaded. Use the builtin switcher instead.');
        return null;
    }
    const SwitcherPlusModal = class extends SystemSwitcherModal {
        constructor(app, plugin) {
            super(app, plugin.options.builtInSystemOptions);
            this.plugin = plugin;
            plugin.options.shouldShowAlias = this.shouldShowAlias;
            const exKeymap = new Keymap(this.scope, this.chooser, this.containerEl);
            this.exMode = new ModeHandler(app, plugin.options, exKeymap);
        }
        openInMode(mode) {
            this.exMode.setSessionOpenMode(mode, this.chooser);
            super.open();
        }
        onOpen() {
            this.exMode.exKeymap.isOpen = true;
            super.onOpen();
        }
        onClose() {
            super.onClose();
            this.exMode.exKeymap.isOpen = false;
        }
        updateSuggestions() {
            const { exMode, inputEl, chooser } = this;
            exMode.insertSessionOpenModeCommandString(inputEl);
            if (!exMode.updateSuggestions(inputEl.value, chooser)) {
                super.updateSuggestions();
            }
        }
        onChooseSuggestion(item, evt) {
            if (!this.exMode.onChooseSuggestion(item, evt)) {
                super.onChooseSuggestion(item, evt);
            }
        }
        renderSuggestion(value, parentEl) {
            if (!this.exMode.renderSuggestion(value, parentEl)) {
                super.renderSuggestion(value, parentEl);
            }
        }
    };
    return new SwitcherPlusModal(app, plugin);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3R5cGVzL3NoYXJlZFR5cGVzLnRzIiwiLi4vLi4vc3JjL3V0aWxzL3V0aWxzLnRzIiwiLi4vLi4vc3JjL3V0aWxzL2Zyb250TWF0dGVyUGFyc2VyLnRzIiwiLi4vLi4vc3JjL3V0aWxzL3BhbmVsVXRpbHMudHMiLCIuLi8uLi9zcmMvc2V0dGluZ3Mvc3dpdGNoZXJQbHVzU2V0dGluZ3MudHMiLCIuLi8uLi9zcmMvc2V0dGluZ3Mvc3dpdGNoZXJQbHVzU2V0dGluZ1RhYi50cyIsIi4uLy4uL3NyYy9IYW5kbGVycy93b3Jrc3BhY2VIYW5kbGVyLnRzIiwiLi4vLi4vc3JjL0hhbmRsZXJzL2hlYWRpbmdzSGFuZGxlci50cyIsIi4uLy4uL3NyYy9IYW5kbGVycy9lZGl0b3JIYW5kbGVyLnRzIiwiLi4vLi4vc3JjL0hhbmRsZXJzL3N5bWJvbEhhbmRsZXIudHMiLCIuLi8uLi9zcmMvc3dpdGNoZXJQbHVzL2lucHV0SW5mby50cyIsIi4uLy4uL3NyYy9zd2l0Y2hlclBsdXMvbW9kZUhhbmRsZXIudHMiLCIuLi8uLi9zcmMvc3dpdGNoZXJQbHVzL2tleW1hcC50cyIsIi4uLy4uL3NyYy9zd2l0Y2hlclBsdXMvc3dpdGNoZXJQbHVzLnRzIiwiLi4vLi4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOm51bGwsIm5hbWVzIjpbIlBsdWdpblNldHRpbmdUYWIiLCJTZXR0aW5nIiwiZnV6enlTZWFyY2giLCJzb3J0U2VhcmNoUmVzdWx0cyIsInJlbmRlclJlc3VsdHMiLCJQbGF0Zm9ybSIsInByZXBhcmVRdWVyeSIsImRlYm91bmNlIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBZ0JBLElBQVksSUFNWDtBQU5ELFdBQVksSUFBSTtJQUNkLHVDQUFZLENBQUE7SUFDWiwyQ0FBYyxDQUFBO0lBQ2QsMkNBQWMsQ0FBQTtJQUNkLGlEQUFpQixDQUFBO0lBQ2pCLGdEQUFpQixDQUFBO0FBQ25CLENBQUMsRUFOVyxJ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
