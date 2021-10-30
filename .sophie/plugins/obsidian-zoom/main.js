'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_SETTINGS = {
    debug: false,
    zoomOnClick: true,
};
class SettingsService {
    constructor(storage) {
        this.storage = storage;
        this.handlers = new Map();
    }
    get debug() {
        return this.values.debug;
    }
    set debug(value) {
        this.set("debug", value);
    }
    get zoomOnClick() {
        return this.values.zoomOnClick;
    }
    set zoomOnClick(value) {
        this.set("zoomOnClick", value);
    }
    onChange(key, cb) {
        if (!this.handlers.has(key)) {
            this.handlers.set(key, new Set());
        }
        this.handlers.get(key).add(cb);
    }
    removeCallback(key, cb) {
        const handlers = this.handlers.get(key);
        if (handlers) {
            handlers.delete(cb);
        }
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.values = Object.assign({}, DEFAULT_SETTINGS, yield this.storage.loadData());
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.saveData(this.values);
        });
    }
    set(key, value) {
        this.values[key] = value;
        const callbacks = this.handlers.get(key);
        if (!callbacks) {
            return;
        }
        for (const cb of callbacks.values()) {
            cb(value);
        }
    }
}
class ObsidianZoomPluginSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin, settings) {
        super(app, plugin);
        this.settings = settings;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        new obsidian.Setting(containerEl)
            .setName("Zooming in when clicking on the bullet")
            .addToggle((toggle) => {
            toggle.setValue(this.settings.zoomOnClick).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.settings.zoomOnClick = value;
                yield this.settings.save();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Debug mode")
            .setDesc("Open DevTools (Command+Option+I or Control+Shift+I) to copy the debug logs.")
            .addToggle((toggle) => {
            toggle.setValue(this.settings.debug).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.settings.debug = value;
                yield this.settings.save();
            }));
        });
    }
}

class ObsidianService {
    constructor(app) {
        this.app = app;
    }
    getActiveLeafDisplayText() {
        return this.app.workspace.activeLeaf.getDisplayText();
    }
    createCommandCallback(cb) {
        return () => {
            const view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
            if (!view) {
                return;
            }
            const editor = view.sourceMode.cmEditor;
            const shouldStopPropagation = cb(editor);
            if (!shouldStopPropagation &&
                window.event &&
                window.event.type === "keydown") {
                editor.triggerOnKeyDown(window.event);
            }
        };
    }
}

class LoggerService {
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    log(method, ...args) {
        if (!this.settingsService.debug) {
            return;
        }
        console.info(method, ...args);
    }
    bind(method) {
        return (...args) => this.log(method, ...args);
    }
}

class ListsStylesFeature {
    constructor(settingsService) {
        this.settingsService = settingsService;
        this.onZoomOnClickSettingChange = (zoomOnClick) => {
            if (zoomOnClick) {
                this.addZoomStyles();
            }
            else {
                this.removeZoomStyles();
            }
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.settingsService.zoomOnClick) {
                this.addZoomStyles();
            }
            this.settingsService.onChange("zoomOnClick", this.onZoomOnClickSettingChange);
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settingsService.removeCallback("zoomOnClick", this.onZoomOnClickSettingChange);
            this.removeZoomStyles();
        });
    }
    addZoomStyles() {
        document.body.classList.add("zoom-plugin-bls-zoom");
    }
    removeZoomStyles() {
        document.body.classList.remove("zoom-plugin-bls-zoom");
    }
}

class ZoomFeature {
    constructor(plugin, obsidianService, zoomService) {
        this.plugin = plugin;
        this.obsidianService = obsidianService;
        this.zoomService = zoomService;
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.addCommand({
                id: "zoom-in",
                name: "Zoom in",
                callback: this.obsidianService.createCommandCallback(this.zoomService.zoomIn.bind(this.zoomService)),
                hotkeys: [
                    {
                        modifiers: ["Mod"],
                        key: ".",
                    },
                ],
            });
            this.plugin.addCommand({
                id: "zoom-out",
                name: "Zoom out the entire document",
                callback: this.obsidianService.createCommandCallback(this.zoomService.zoomOut.bind(this.zoomService)),
                hotkeys: [
                    {
                        modifiers: ["Mod", "Shift"],
                        key: ".",
                    },
                ],
            });
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class ZoomState {
    constructor(line, header) {
        this.line = line;
        this.header = header;
    }
}
class ZoomStatesService {
    constructor() {
        this.zoomStates = new WeakMap();
    }
    get(editor) {
        return this.zoomStates.get(editor);
    }
    has(editor) {
        return this.zoomStates.has(editor);
    }
    delete(editor) {
        return this.zoomStates.delete(editor);
    }
    set(editor, state) {
        return this.zoomStates.set(editor, state);
    }
}

class HeadingBoundariesDetector {
    constructor(editor, startLine) {
        this.editor = editor;
        this.startLine = startLine;
    }
    detect() {
        const startLevel = this.getHeadingLevel(this.editor.getLine(this.startLine));
        if (startLevel < 1) {
            return null;
        }
        let endLine = this.startLine + 1;
        while (endLine <= this.editor.lastLine()) {
            const endLevel = this.getHeadingLevel(this.editor.getLine(endLine));
            if (endLevel > 0 && endLevel <= startLevel) {
                break;
            }
            endLine++;
        }
        return { type: "heading", startLine: this.startLine, endLine };
    }
    getHeadingLevel(text) {
        const matches = /^(#+) /.exec(text);
        if (!matches) {
            return 0;
        }
        return matches[1].length;
    }
}

class ListBoundariesDetector {
    constructor(editor, lineNo) {
        this.editor = editor;
        this.lineNo = lineNo;
    }
    detect() {
        let startLine = this.lineNo;
        let foundIndent = null;
        let startIndent = null;
        while (startLine >= this.editor.firstLine()) {
            const matches = this.parseLine(this.editor.getLine(startLine));
            if (!matches) {
                return null;
            }
            const { indent, bullet, content } = matches;
            if (indent.length === 0 && bullet.length === 0 && content.length > 0) {
                return null;
            }
            if (foundIndent === null && indent.length > 0) {
                foundIndent = indent;
            }
            if (bullet.length > 0 && foundIndent === null) {
                startIndent = indent;
                break;
            }
            if (bullet.length > 0 &&
                foundIndent !== null &&
                foundIndent.length >= indent.length) {
                startIndent = indent;
                break;
            }
            startLine--;
        }
        if (startLine < this.editor.firstLine()) {
            return null;
        }
        let endLine = startLine + 1;
        while (endLine <= this.editor.lastLine()) {
            const matches = this.parseLine(this.editor.getLine(endLine));
            if (!matches) {
                return null;
            }
            const { indent, bullet, content } = matches;
            if (indent.length === 0 && bullet.length === 0 && content.length === 0) {
                endLine++;
                continue;
            }
            if (indent.length <= startIndent.length) {
                break;
            }
            endLine++;
        }
        return { type: "list", startLine, endLine };
    }
    parseLine(text) {
        const matches = /^([ \t]*)((?:[-+*]|\d+\.) )?(.*)$/.exec(text);
        if (!matches) {
            return null;
        }
        const indent = matches[1];
        const bullet = matches[2] ? matches[2].slice(0, 1) : "";
        const content = matches[3];
        return {
            indent,
            bullet,
            content,
        };
    }
}

class ListTOCDetector {
    constructor(editor, lineNo) {
        this.editor = editor;
        this.lineNo = lineNo;
    }
    detect() {
        const b = new ListBoundariesDetector(this.editor, this.lineNo).detect();
        if (!b) {
            return [];
        }
        const m = this.parseLine(this.editor.getLine(b.startLine));
        if (!m) {
            return [];
        }
        const res = [{ line: b.startLine, text: m.content }];
        let currentIndent = m.indent;
        let l = b.startLine - 1;
        while (l >= this.editor.firstLine() && currentIndent.length > 0) {
            const m = this.parseLine(this.editor.getLine(l));
            if (m &&
                m.indent.length === 0 &&
                m.bullet.length === 0 &&
                m.content.length > 0) {
                break;
            }
            if (m &&
                m.bullet.length > 0 &&
                currentIndent.startsWith(m.indent) &&
                currentIndent.length !== m.indent.length) {
                currentIndent = m.indent;
                res.unshift({
                    line: l,
                    text: m.content,
                });
            }
            l--;
        }
        if (currentIndent.length > 0) {
            return [];
        }
        return res;
    }
    parseLine(text) {
        const matches = /^([ \t]*)((?:[-+*]|\d+\.) )?(.*)$/.exec(text);
        if (!matches) {
            return null;
        }
        const indent = matches[1];
        const bullet = matches[2] ? matches[2].slice(0, 1) : "";
        const content = matches[3];
        return {
            indent,
            bullet,
            content,
        };
    }
}
class HeadingTOCDetector {
    constructor(editor, lineNo) {
        this.editor = editor;
        this.lineNo = lineNo;
    }
    detect() {
        let currentLevel = null;
        const res = [];
        let l = this.lineNo;
        while (l >= this.editor.firstLine()) {
            const line = this.editor.getLine(l);
            const level = this.getHeadingLevel(line);
            const firstMeetHeading = level > 0 && currentLevel === null;
            const lowerHeading = level > 0 && currentLevel !== null && level < currentLevel;
            if (firstMeetHeading || lowerHeading) {
                currentLevel = level;
                res.unshift({
                    line: l,
                    text: line.slice(level + 1),
                });
            }
            if (currentLevel !== null && currentLevel <= 1) {
                break;
            }
            l--;
        }
        return res;
    }
    getHeadingLevel(text) {
        const matches = /^(#+) /.exec(text);
        if (!matches) {
            return 0;
        }
        return matches[1].length;
    }
}
class TOCDetector {
    constructor(editor, lineNo) {
        this.editor = editor;
        this.lineNo = lineNo;
    }
    detect() {
        const listToc = new ListTOCDetector(this.editor, this.lineNo).detect();
        const headingToc = new HeadingTOCDetector(this.editor, listToc.length > 0 ? listToc[0].line : this.lineNo).detect();
        return headingToc.concat(listToc);
    }
}

class ZoomService {
    constructor(zoomStatesService, obsidianService) {
        this.zoomStatesService = zoomStatesService;
        this.obsidianService = obsidianService;
    }
    zoomOut(editor) {
        const zoomState = this.zoomStatesService.get(editor);
        if (!zoomState) {
            return false;
        }
        for (let i = editor.firstLine(), l = editor.lastLine(); i <= l; i++) {
            editor.removeLineClass(i, "wrap", "zoom-plugin-hidden-row");
        }
        zoomState.header.parentElement.removeChild(zoomState.header);
        this.zoomStatesService.delete(editor);
        return true;
    }
    zoomIn(editor, cursor = editor.getCursor()) {
        const boundaries = this.findBoundaries(editor, cursor.line);
        if (!boundaries) {
            return false;
        }
        this.zoomOut(editor);
        for (let i = editor.firstLine(), l = editor.lastLine(); i <= l; i++) {
            if (i < boundaries.startLine || i >= boundaries.endLine) {
                editor.addLineClass(i, "wrap", "zoom-plugin-hidden-row");
            }
        }
        const toc = new TOCDetector(editor, boundaries.startLine).detect();
        const createSeparator = () => {
            const span = document.createElement("span");
            span.textContent = " > ";
            return span;
        };
        const createTitle = (content, cb) => {
            const a = document.createElement("a");
            a.className = "zoom-plugin-title";
            if (content) {
                a.textContent = content;
            }
            else {
                a.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            a.onclick = (e) => {
                e.preventDefault();
                cb();
            };
            return a;
        };
        const createHeader = () => {
            const div = document.createElement("div");
            div.className = "zoom-plugin-header";
            for (const tocItem of toc.slice(0, -1).reverse()) {
                div.prepend(createTitle(tocItem.text, () => this.zoomIn(editor, { line: tocItem.line, ch: 0 })));
                div.prepend(createSeparator());
            }
            div.prepend(createTitle(this.obsidianService.getActiveLeafDisplayText(), () => this.zoomOut(editor)));
            return div;
        };
        const zoomHeader = createHeader();
        editor.getWrapperElement().prepend(zoomHeader);
        this.zoomStatesService.set(editor, new ZoomState(editor.getLineHandle(boundaries.startLine), zoomHeader));
        return true;
    }
    findBoundaries(editor, lineNo) {
        const headingBoundariesDetector = new HeadingBoundariesDetector(editor, lineNo);
        const headingBoundaries = headingBoundariesDetector.detect();
        if (headingBoundaries) {
            return headingBoundaries;
        }
        const listBoundariesDetector = new ListBoundariesDetector(editor, lineNo);
        return listBoundariesDetector.detect();
    }
}

class ZoomOutAfterFileCotentChangedFeature {
    constructor(plugin, zoomStatesService, zoomService) {
        this.plugin = plugin;
        this.zoomStatesService = zoomStatesService;
        this.zoomService = zoomService;
        this.handleBeforeChange = (cm, changeObj) => {
            const zoomState = this.zoomStatesService.get(cm);
            if (!zoomState ||
                changeObj.origin !== "setValue" ||
                changeObj.from.line !== 0 ||
                changeObj.from.ch !== 0) {
                return;
            }
            const tillLine = cm.lastLine();
            const tillCh = cm.getLine(tillLine).length;
            if (changeObj.to.line !== tillLine || changeObj.to.ch !== tillCh) {
                return;
            }
            this.zoomService.zoomOut(cm);
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerCodeMirror((cm) => {
                cm.on("beforeChange", this.handleBeforeChange);
            });
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.app.workspace.iterateCodeMirrors((cm) => {
                cm.off("beforeChange", this.handleBeforeChange);
            });
        });
    }
}

class ReZoomAfterContentChangedFeature {
    constructor(plugin, zoomStatesService, zoomService) {
        this.plugin = plugin;
        this.zoomStatesService = zoomStatesService;
        this.zoomService = zoomService;
        this.handleChange = (cm, changeObj) => {
            const zoomState = this.zoomStatesService.get(cm);
            if (!zoomState || changeObj.origin !== "setValue") {
                return;
            }
            const lineNo = cm.getLineNumber(zoomState.line);
            if (lineNo === null) {
                this.zoomService.zoomOut(cm);
                return;
            }
            this.zoomService.zoomIn(cm, {
                line: lineNo,
                ch: 0,
            });
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerCodeMirror((cm) => {
                cm.on("change", this.handleChange);
            });
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.app.workspace.iterateCodeMirrors((cm) => {
                cm.off("change", this.handleChange);
            });
        });
    }
}

class LimitSelectionFeature {
    constructor(plugin, zoomStatesService) {
        this.plugin = plugin;
        this.zoomStatesService = zoomStatesService;
        this.handleBeforeSelectionChange = (cm, changeObj) => {
            if (!this.zoomStatesService.has(cm)) {
                return;
            }
            let visibleFrom = null;
            let visibleTill = null;
            for (let i = cm.firstLine(); i <= cm.lastLine(); i++) {
                const wrapClass = cm.lineInfo(i).wrapClass || "";
                const isHidden = wrapClass.includes("zoom-plugin-hidden-row");
                if (visibleFrom === null && !isHidden) {
                    visibleFrom = { line: i, ch: 0 };
                }
                if (visibleFrom !== null && visibleTill !== null && isHidden) {
                    break;
                }
                if (visibleFrom !== null) {
                    visibleTill = { line: i, ch: cm.getLine(i).length };
                }
            }
            let changed = false;
            for (const range of changeObj.ranges) {
                if (range.anchor.line < visibleFrom.line) {
                    changed = true;
                    range.anchor.line = visibleFrom.line;
                    range.anchor.ch = visibleFrom.ch;
                }
                if (range.anchor.line > visibleTill.line) {
                    changed = true;
                    range.anchor.line = visibleTill.line;
                    range.anchor.ch = visibleTill.ch;
                }
                if (range.head.line < visibleFrom.line) {
                    changed = true;
                    range.head.line = visibleFrom.line;
                    range.head.ch = visibleFrom.ch;
                }
                if (range.head.line > visibleTill.line) {
                    changed = true;
                    range.head.line = visibleTill.line;
                    range.head.ch = visibleTill.ch;
                }
            }
            if (changed) {
                changeObj.update(changeObj.ranges);
            }
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerCodeMirror((cm) => {
                cm.on("beforeSelectionChange", this.handleBeforeSelectionChange);
            });
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.app.workspace.iterateCodeMirrors((cm) => {
                cm.off("beforeSelectionChange", this.handleBeforeSelectionChange);
            });
        });
    }
}

class ZoomOnClickFeature {
    constructor(plugin, settingsService, zoomService) {
        this.plugin = plugin;
        this.settingsService = settingsService;
        this.zoomService = zoomService;
        this.handleClick = (e) => {
            const target = e.target;
            if (!target ||
                !this.settingsService.zoomOnClick ||
                !target.classList.contains("cm-formatting-list-ul")) {
                return;
            }
            let wrap = target;
            while (wrap) {
                if (wrap.classList.contains("CodeMirror-wrap")) {
                    break;
                }
                wrap = wrap.parentElement;
            }
            if (!wrap) {
                return;
            }
            let foundEditor = null;
            this.plugin.app.workspace.iterateCodeMirrors((cm) => {
                if (foundEditor) {
                    return;
                }
                if (cm.getWrapperElement() === wrap) {
                    foundEditor = cm;
                }
            });
            if (!foundEditor) {
                return;
            }
            const pos = foundEditor.coordsChar({
                left: e.x,
                top: e.y,
            });
            if (!pos) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            this.zoomService.zoomIn(foundEditor, pos);
            foundEditor.setCursor({
                line: pos.line,
                ch: foundEditor.getLine(pos.line).length,
            });
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerDomEvent(window, "click", this.handleClick);
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class ObsidianZoomPlugin extends obsidian.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Loading obsidian-zoom`);
            window.ObsidianZoomPlugin = this;
            this.settingsService = new SettingsService(this);
            yield this.settingsService.load();
            this.loggerService = new LoggerService(this.settingsService);
            this.zoomStatesService = new ZoomStatesService();
            this.obsidianService = new ObsidianService(this.app);
            this.zoomService = new ZoomService(this.zoomStatesService, this.obsidianService);
            this.addSettingTab(new ObsidianZoomPluginSettingTab(this.app, this, this.settingsService));
            this.features = [
                new ListsStylesFeature(this.settingsService),
                new ZoomFeature(this, this.obsidianService, this.zoomService),
                new ZoomOutAfterFileCotentChangedFeature(this, this.zoomStatesService, this.zoomService),
                new ReZoomAfterContentChangedFeature(this, this.zoomStatesService, this.zoomService),
                new LimitSelectionFeature(this, this.zoomStatesService),
                new ZoomOnClickFeature(this, this.settingsService, this.zoomService),
            ];
            for (const feature of this.features) {
                yield feature.load();
            }
        });
    }
    onunload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Unloading obsidian-zoom`);
            delete window.ObsidianZoomPlugin;
            for (const feature of this.features) {
                yield feature.unload();
            }
        });
    }
}

module.exports = ObsidianZoomPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9zZXJ2aWNlcy9TZXR0aW5nc1NlcnZpY2UudHMiLCJzcmMvc2VydmljZXMvT2JzaWRpYW5TZXJ2aWNlLnRzIiwic3JjL3NlcnZpY2VzL0xvZ2dlclNlcnZpY2UudHMiLCJzcmMvZmVhdHVyZXMvTGlzdHNTdHlsZXNGZWF0dXJlLnRzIiwic3JjL2ZlYXR1cmVzL1pvb21GZWF0dXJlLnRzIiwic3JjL3NlcnZpY2VzL1pvb21TdGF0ZXNTZXJ2aWNlLnRzIiwic3JjL2JvdW5kYXJpZXMvSGVhZGluZ0JvdW5kYXJpZXNEZXRlY3Rvci50cyIsInNyYy9ib3VuZGFyaWVzL0xpc3RCb3VuZGFyaWVzRGV0ZWN0b3IudHMiLCJzcmMvdG9jL1RPQ0RldGVjdG9yLnRzIiwic3JjL3NlcnZpY2VzL1pvb21TZXJ2aWNlLnRzIiwic3JjL2ZlYXR1cmVzL1pvb21PdXRBZnRlckZpbGVDb3RlbnRDaGFuZ2VkRmVhdHVyZS50cyIsInNyYy9mZWF0dXJlcy9SZVpvb21BZnRlckNvbnRlbnRDaGFuZ2VkRmVhdHVyZS50cyIsInNyYy9mZWF0dXJlcy9MaW1pdFNlbGVjdGlvbkZlYXR1cmUudHMiLCJzcmMvZmVhdHVyZXMvWm9vbU9uQ2xpY2tGZWF0dXJlLnRzIiwic3JjL09ic2lkaWFuWm9vbVBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBQbHVnaW5fMiwgU2V0dGluZyB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9ic2lkaWFuWm9vbVBsdWdpblNldHRpbmdzIHtcbiAgZGVidWc6IGJvb2xlYW47XG4gIHpvb21PbkNsaWNrOiBib29sZWFuO1xufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBPYnNpZGlhblpvb21QbHVnaW5TZXR0aW5ncyA9IHtcbiAgZGVidWc6IGZhbHNlLFxuICB6b29tT25DbGljazogdHJ1ZSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZSB7XG4gIGxvYWREYXRhKCk6IFByb21pc2U8T2JzaWRpYW5ab29tUGx1Z2luU2V0dGluZ3M+O1xuICBzYXZlRGF0YShzZXR0aWduczogT2JzaWRpYW5ab29tUGx1Z2luU2V0dGluZ3MpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG50eXBlIEsgPSBrZXlvZiBPYnNpZGlhblpvb21QbHVnaW5TZXR0aW5ncztcbnR5cGUgVjxUIGV4dGVuZHMgSz4gPSBPYnNpZGlhblpvb21QbHVnaW5TZXR0aW5nc1tUXTtcbnR5cGUgQ2FsbGJhY2s8VCBleHRlbmRzIEs+ID0gKGNiOiBWPFQ+KSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIGltcGxlbWVudHMgT2JzaWRpYW5ab29tUGx1Z2luU2V0dGluZ3Mge1xuICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2U7XG4gIHByaXZhdGUgdmFsdWVzOiBPYnNpZGlhblpvb21QbHVnaW5TZXR0aW5ncztcbiAgcHJpdmF0ZSBoYW5kbGVyczogTWFwPEssIFNldDxDYWxsYmFjazxLPj4+O1xuXG4gIGNvbnN0cnVjdG9yKHN0b3JhZ2U6IFN0b3JhZ2UpIHtcbiAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBnZXQgZGVidWcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzLmRlYnVnO1xuICB9XG4gIHNldCBkZWJ1Zyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0KFwiZGVidWdcIiwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHpvb21PbkNsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcy56b29tT25DbGljaztcbiAgfVxuICBzZXQgem9vbU9uQ2xpY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldChcInpvb21PbkNsaWNrXCIsIHZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlPFQgZXh0ZW5kcyBLPihrZXk6IFQsIGNiOiBDYWxsYmFjazxUPikge1xuICAgIGlmICghdGhpcy5oYW5kbGVycy5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5oYW5kbGVycy5zZXQoa2V5LCBuZXcgU2V0KCkpO1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlcnMuZ2V0KGtleSkuYWRkKGNiKTtcbiAgfVxuXG4gIHJlbW92ZUNhbGxiYWNrPFQgZXh0ZW5kcyBLPihrZXk6IFQsIGNiOiBDYWxsYmFjazxUPik6IHZvaWQge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVycy5nZXQoa2V5KTtcblxuICAgIGlmIChoYW5kbGVycykge1xuICAgICAgaGFuZGxlcnMuZGVsZXRlKGNiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2FkKCkge1xuICAgIHRoaXMudmFsdWVzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9TRVRUSU5HUyxcbiAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5sb2FkRGF0YSgpXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHNhdmUoKSB7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNhdmVEYXRhKHRoaXMudmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0PFQgZXh0ZW5kcyBLPihrZXk6IFQsIHZhbHVlOiBWPEs+KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZXNba2V5XSA9IHZhbHVlO1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuaGFuZGxlcnMuZ2V0KGtleSk7XG5cbiAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2Igb2YgY2FsbGJhY2tzLnZhbHVlcygpKSB7XG4gICAgICBjYih2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYnNpZGlhblpvb21QbHVnaW5TZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IFBsdWdpbl8yLCBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UpIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG5cbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlpvb21pbmcgaW4gd2hlbiBjbGlja2luZyBvbiB0aGUgYnVsbGV0XCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMuc2V0dGluZ3Muem9vbU9uQ2xpY2spLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0dGluZ3Muem9vbU9uQ2xpY2sgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzLnNhdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJEZWJ1ZyBtb2RlXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgXCJPcGVuIERldlRvb2xzIChDb21tYW5kK09wdGlvbitJIG9yIENvbnRyb2wrU2hpZnQrSSkgdG8gY29weSB0aGUgZGVidWcgbG9ncy5cIlxuICAgICAgKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnNldHRpbmdzLmRlYnVnKS5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLmRlYnVnID0gdmFsdWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5zZXR0aW5ncy5zYXZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwcCwgTWFya2Rvd25WaWV3IH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmV4cG9ydCBjbGFzcyBPYnNpZGlhblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcDogQXBwKSB7fVxuXG4gIGdldEFjdGl2ZUxlYWZEaXNwbGF5VGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWYuZ2V0RGlzcGxheVRleHQoKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbW1hbmRDYWxsYmFjayhjYjogKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IpID0+IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG5cbiAgICAgIGlmICghdmlldykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVkaXRvciA9IHZpZXcuc291cmNlTW9kZS5jbUVkaXRvcjtcblxuICAgICAgY29uc3Qgc2hvdWxkU3RvcFByb3BhZ2F0aW9uID0gY2IoZWRpdG9yKTtcblxuICAgICAgaWYgKFxuICAgICAgICAhc2hvdWxkU3RvcFByb3BhZ2F0aW9uICYmXG4gICAgICAgIHdpbmRvdy5ldmVudCAmJlxuICAgICAgICB3aW5kb3cuZXZlbnQudHlwZSA9PT0gXCJrZXlkb3duXCJcbiAgICAgICkge1xuICAgICAgICAoZWRpdG9yIGFzIGFueSkudHJpZ2dlck9uS2V5RG93bih3aW5kb3cuZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gXCIuL1NldHRpbmdzU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3NTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UpIHt9XG5cbiAgbG9nKG1ldGhvZDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIGlmICghdGhpcy5zZXR0aW5nc1NlcnZpY2UuZGVidWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmluZm8obWV0aG9kLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGJpbmQobWV0aG9kOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB0aGlzLmxvZyhtZXRob2QsIC4uLmFyZ3MpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJRmVhdHVyZSB9IGZyb20gXCIuL0lGZWF0dXJlXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXN0c1N0eWxlc0ZlYXR1cmUgaW1wbGVtZW50cyBJRmVhdHVyZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3NTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UpIHt9XG5cbiAgYXN5bmMgbG9hZCgpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5nc1NlcnZpY2Uuem9vbU9uQ2xpY2spIHtcbiAgICAgIHRoaXMuYWRkWm9vbVN0eWxlcygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0dGluZ3NTZXJ2aWNlLm9uQ2hhbmdlKFxuICAgICAgXCJ6b29tT25DbGlja1wiLFxuICAgICAgdGhpcy5vblpvb21PbkNsaWNrU2V0dGluZ0NoYW5nZVxuICAgICk7XG4gIH1cblxuICBhc3luYyB1bmxvYWQoKSB7XG4gICAgdGhpcy5zZXR0aW5nc1NlcnZpY2UucmVtb3ZlQ2FsbGJhY2soXG4gICAgICBcInpvb21PbkNsaWNrXCIsXG4gICAgICB0aGlzLm9uWm9vbU9uQ2xpY2tTZXR0aW5nQ2hhbmdlXG4gICAgKTtcblxuICAgIHRoaXMucmVtb3ZlWm9vbVN0eWxlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblpvb21PbkNsaWNrU2V0dGluZ0NoYW5nZSA9ICh6b29tT25DbGljazogYm9vbGVhbikgPT4ge1xuICAgIGlmICh6b29tT25DbGljaykge1xuICAgICAgdGhpcy5hZGRab29tU3R5bGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlWm9vbVN0eWxlcygpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGFkZFpvb21TdHlsZXMoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiem9vbS1wbHVnaW4tYmxzLXpvb21cIik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVpvb21TdHlsZXMoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiem9vbS1wbHVnaW4tYmxzLXpvb21cIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBsdWdpbl8yIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyBab29tU2VydmljZSB9IGZyb20gXCJzcmMvc2VydmljZXMvWm9vbVNlcnZpY2VcIjtcbmltcG9ydCB7IE9ic2lkaWFuU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9PYnNpZGlhblNlcnZpY2VcIjtcbmltcG9ydCB7IElGZWF0dXJlIH0gZnJvbSBcIi4vSUZlYXR1cmVcIjtcblxuZXhwb3J0IGNsYXNzIFpvb21GZWF0dXJlIGltcGxlbWVudHMgSUZlYXR1cmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsdWdpbjogUGx1Z2luXzIsXG4gICAgcHJpdmF0ZSBvYnNpZGlhblNlcnZpY2U6IE9ic2lkaWFuU2VydmljZSxcbiAgICBwcml2YXRlIHpvb21TZXJ2aWNlOiBab29tU2VydmljZVxuICApIHt9XG5cbiAgYXN5bmMgbG9hZCgpIHtcbiAgICB0aGlzLnBsdWdpbi5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInpvb20taW5cIixcbiAgICAgIG5hbWU6IFwiWm9vbSBpblwiLFxuICAgICAgY2FsbGJhY2s6IHRoaXMub2JzaWRpYW5TZXJ2aWNlLmNyZWF0ZUNvbW1hbmRDYWxsYmFjayhcbiAgICAgICAgdGhpcy56b29tU2VydmljZS56b29tSW4uYmluZCh0aGlzLnpvb21TZXJ2aWNlKVxuICAgICAgKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiTW9kXCJdLFxuICAgICAgICAgIGtleTogXCIuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wbHVnaW4uYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJ6b29tLW91dFwiLFxuICAgICAgbmFtZTogXCJab29tIG91dCB0aGUgZW50aXJlIGRvY3VtZW50XCIsXG4gICAgICBjYWxsYmFjazogdGhpcy5vYnNpZGlhblNlcnZpY2UuY3JlYXRlQ29tbWFuZENhbGxiYWNrKFxuICAgICAgICB0aGlzLnpvb21TZXJ2aWNlLnpvb21PdXQuYmluZCh0aGlzLnpvb21TZXJ2aWNlKVxuICAgICAgKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiTW9kXCIsIFwiU2hpZnRcIl0sXG4gICAgICAgICAga2V5OiBcIi5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB1bmxvYWQoKSB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIFpvb21TdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsaW5lOiBDb2RlTWlycm9yLkxpbmVIYW5kbGUsIHB1YmxpYyBoZWFkZXI6IEhUTUxFbGVtZW50KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgWm9vbVN0YXRlc1NlcnZpY2Uge1xuICBwcml2YXRlIHpvb21TdGF0ZXM6IFdlYWtNYXA8Q29kZU1pcnJvci5FZGl0b3IsIFpvb21TdGF0ZT4gPSBuZXcgV2Vha01hcCgpO1xuXG4gIGdldChlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yKTogWm9vbVN0YXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy56b29tU3RhdGVzLmdldChlZGl0b3IpO1xuICB9XG5cbiAgaGFzKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy56b29tU3RhdGVzLmhhcyhlZGl0b3IpO1xuICB9XG5cbiAgZGVsZXRlKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IpIHtcbiAgICByZXR1cm4gdGhpcy56b29tU3RhdGVzLmRlbGV0ZShlZGl0b3IpO1xuICB9XG5cbiAgc2V0KGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IsIHN0YXRlOiBab29tU3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy56b29tU3RhdGVzLnNldChlZGl0b3IsIHN0YXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSUJvdW5kYXJpZXMgfSBmcm9tIFwiLi9JQm91bmRhcmllc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFZGl0b3Ige1xuICBnZXRMaW5lKG46IG51bWJlcik6IHN0cmluZztcbiAgbGFzdExpbmUoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgSGVhZGluZ0JvdW5kYXJpZXNEZXRlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWRpdG9yOiBJRWRpdG9yLCBwcml2YXRlIHN0YXJ0TGluZTogbnVtYmVyKSB7fVxuXG4gIGRldGVjdCgpOiBJQm91bmRhcmllcyB8IG51bGwge1xuICAgIGNvbnN0IHN0YXJ0TGV2ZWwgPSB0aGlzLmdldEhlYWRpbmdMZXZlbChcbiAgICAgIHRoaXMuZWRpdG9yLmdldExpbmUodGhpcy5zdGFydExpbmUpXG4gICAgKTtcblxuICAgIGlmIChzdGFydExldmVsIDwgMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGVuZExpbmUgPSB0aGlzLnN0YXJ0TGluZSArIDE7XG4gICAgd2hpbGUgKGVuZExpbmUgPD0gdGhpcy5lZGl0b3IubGFzdExpbmUoKSkge1xuICAgICAgY29uc3QgZW5kTGV2ZWwgPSB0aGlzLmdldEhlYWRpbmdMZXZlbCh0aGlzLmVkaXRvci5nZXRMaW5lKGVuZExpbmUpKTtcbiAgICAgIGlmIChlbmRMZXZlbCA+IDAgJiYgZW5kTGV2ZWwgPD0gc3RhcnRMZXZlbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVuZExpbmUrKztcbiAgICB9XG5cbiAgICByZXR1cm4geyB0eXBlOiBcImhlYWRpbmdcIiwgc3RhcnRMaW5lOiB0aGlzLnN0YXJ0TGluZSwgZW5kTGluZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZWFkaW5nTGV2ZWwodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBtYXRjaGVzID0gL14oIyspIC8uZXhlYyh0ZXh0KTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNbMV0ubGVuZ3RoO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJQm91bmRhcmllcyB9IGZyb20gXCIuL0lCb3VuZGFyaWVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUVkaXRvciB7XG4gIGdldExpbmUobjogbnVtYmVyKTogc3RyaW5nO1xuICBmaXJzdExpbmUoKTogbnVtYmVyO1xuICBsYXN0TGluZSgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0Qm91bmRhcmllc0RldGVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlZGl0b3I6IElFZGl0b3IsIHByaXZhdGUgbGluZU5vOiBudW1iZXIpIHt9XG5cbiAgZGV0ZWN0KCk6IElCb3VuZGFyaWVzIHwgbnVsbCB7XG4gICAgbGV0IHN0YXJ0TGluZSA9IHRoaXMubGluZU5vO1xuXG4gICAgbGV0IGZvdW5kSW5kZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgc3RhcnRJbmRlbnQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gICAgd2hpbGUgKHN0YXJ0TGluZSA+PSB0aGlzLmVkaXRvci5maXJzdExpbmUoKSkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMucGFyc2VMaW5lKHRoaXMuZWRpdG9yLmdldExpbmUoc3RhcnRMaW5lKSk7XG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBpbmRlbnQsIGJ1bGxldCwgY29udGVudCB9ID0gbWF0Y2hlcztcblxuICAgICAgaWYgKGluZGVudC5sZW5ndGggPT09IDAgJiYgYnVsbGV0Lmxlbmd0aCA9PT0gMCAmJiBjb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZEluZGVudCA9PT0gbnVsbCAmJiBpbmRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3VuZEluZGVudCA9IGluZGVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKGJ1bGxldC5sZW5ndGggPiAwICYmIGZvdW5kSW5kZW50ID09PSBudWxsKSB7XG4gICAgICAgIHN0YXJ0SW5kZW50ID0gaW5kZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBidWxsZXQubGVuZ3RoID4gMCAmJlxuICAgICAgICBmb3VuZEluZGVudCAhPT0gbnVsbCAmJlxuICAgICAgICBmb3VuZEluZGVudC5sZW5ndGggPj0gaW5kZW50Lmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHN0YXJ0SW5kZW50ID0gaW5kZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc3RhcnRMaW5lLS07XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0TGluZSA8IHRoaXMuZWRpdG9yLmZpcnN0TGluZSgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgZW5kTGluZSA9IHN0YXJ0TGluZSArIDE7XG4gICAgd2hpbGUgKGVuZExpbmUgPD0gdGhpcy5lZGl0b3IubGFzdExpbmUoKSkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMucGFyc2VMaW5lKHRoaXMuZWRpdG9yLmdldExpbmUoZW5kTGluZSkpO1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgaW5kZW50LCBidWxsZXQsIGNvbnRlbnQgfSA9IG1hdGNoZXM7XG5cbiAgICAgIGlmIChpbmRlbnQubGVuZ3RoID09PSAwICYmIGJ1bGxldC5sZW5ndGggPT09IDAgJiYgY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZW5kTGluZSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGVudC5sZW5ndGggPD0gc3RhcnRJbmRlbnQubGVuZ3RoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbmRMaW5lKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdHlwZTogXCJsaXN0XCIsIHN0YXJ0TGluZSwgZW5kTGluZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUxpbmUodGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IC9eKFsgXFx0XSopKCg/OlstKypdfFxcZCtcXC4pICk/KC4qKSQvLmV4ZWModGV4dCk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGVudCA9IG1hdGNoZXNbMV07XG4gICAgY29uc3QgYnVsbGV0ID0gbWF0Y2hlc1syXSA/IG1hdGNoZXNbMl0uc2xpY2UoMCwgMSkgOiBcIlwiO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBtYXRjaGVzWzNdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGluZGVudCxcbiAgICAgIGJ1bGxldCxcbiAgICAgIGNvbnRlbnQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGlzdEJvdW5kYXJpZXNEZXRlY3RvciB9IGZyb20gXCIuLi9ib3VuZGFyaWVzL0xpc3RCb3VuZGFyaWVzRGV0ZWN0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRWRpdG9yIHtcbiAgZ2V0TGluZShuOiBudW1iZXIpOiBzdHJpbmc7XG4gIGZpcnN0TGluZSgpOiBudW1iZXI7XG4gIGxhc3RMaW5lKCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVE9DSXRlbSB7XG4gIGxpbmU6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5jbGFzcyBMaXN0VE9DRGV0ZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVkaXRvcjogSUVkaXRvciwgcHJpdmF0ZSBsaW5lTm86IG51bWJlcikge31cblxuICBkZXRlY3QoKTogSVRPQ0l0ZW1bXSB7XG4gICAgY29uc3QgYiA9IG5ldyBMaXN0Qm91bmRhcmllc0RldGVjdG9yKHRoaXMuZWRpdG9yLCB0aGlzLmxpbmVObykuZGV0ZWN0KCk7XG5cbiAgICBpZiAoIWIpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBtID0gdGhpcy5wYXJzZUxpbmUodGhpcy5lZGl0b3IuZ2V0TGluZShiLnN0YXJ0TGluZSkpO1xuXG4gICAgaWYgKCFtKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzOiBJVE9DSXRlbVtdID0gW3sgbGluZTogYi5zdGFydExpbmUsIHRleHQ6IG0uY29udGVudCB9XTtcbiAgICBsZXQgY3VycmVudEluZGVudCA9IG0uaW5kZW50O1xuICAgIGxldCBsID0gYi5zdGFydExpbmUgLSAxO1xuXG4gICAgd2hpbGUgKGwgPj0gdGhpcy5lZGl0b3IuZmlyc3RMaW5lKCkgJiYgY3VycmVudEluZGVudC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBtID0gdGhpcy5wYXJzZUxpbmUodGhpcy5lZGl0b3IuZ2V0TGluZShsKSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgbSAmJlxuICAgICAgICBtLmluZGVudC5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgbS5idWxsZXQubGVuZ3RoID09PSAwICYmXG4gICAgICAgIG0uY29udGVudC5sZW5ndGggPiAwXG4gICAgICApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgbSAmJlxuICAgICAgICBtLmJ1bGxldC5sZW5ndGggPiAwICYmXG4gICAgICAgIGN1cnJlbnRJbmRlbnQuc3RhcnRzV2l0aChtLmluZGVudCkgJiZcbiAgICAgICAgY3VycmVudEluZGVudC5sZW5ndGggIT09IG0uaW5kZW50Lmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIGN1cnJlbnRJbmRlbnQgPSBtLmluZGVudDtcbiAgICAgICAgcmVzLnVuc2hpZnQoe1xuICAgICAgICAgIGxpbmU6IGwsXG4gICAgICAgICAgdGV4dDogbS5jb250ZW50LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbC0tO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50SW5kZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUxpbmUodGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IC9eKFsgXFx0XSopKCg/OlstKypdfFxcZCtcXC4pICk/KC4qKSQvLmV4ZWModGV4dCk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGVudCA9IG1hdGNoZXNbMV07XG4gICAgY29uc3QgYnVsbGV0ID0gbWF0Y2hlc1syXSA/IG1hdGNoZXNbMl0uc2xpY2UoMCwgMSkgOiBcIlwiO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBtYXRjaGVzWzNdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGluZGVudCxcbiAgICAgIGJ1bGxldCxcbiAgICAgIGNvbnRlbnQsXG4gICAgfTtcbiAgfVxufVxuXG5jbGFzcyBIZWFkaW5nVE9DRGV0ZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVkaXRvcjogSUVkaXRvciwgcHJpdmF0ZSBsaW5lTm86IG51bWJlcikge31cblxuICBkZXRlY3QoKTogSVRPQ0l0ZW1bXSB7XG4gICAgbGV0IGN1cnJlbnRMZXZlbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICBjb25zdCByZXM6IElUT0NJdGVtW10gPSBbXTtcbiAgICBsZXQgbCA9IHRoaXMubGluZU5vO1xuICAgIHdoaWxlIChsID49IHRoaXMuZWRpdG9yLmZpcnN0TGluZSgpKSB7XG4gICAgICBjb25zdCBsaW5lID0gdGhpcy5lZGl0b3IuZ2V0TGluZShsKTtcbiAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5nZXRIZWFkaW5nTGV2ZWwobGluZSk7XG5cbiAgICAgIGNvbnN0IGZpcnN0TWVldEhlYWRpbmcgPSBsZXZlbCA+IDAgJiYgY3VycmVudExldmVsID09PSBudWxsO1xuICAgICAgY29uc3QgbG93ZXJIZWFkaW5nID1cbiAgICAgICAgbGV2ZWwgPiAwICYmIGN1cnJlbnRMZXZlbCAhPT0gbnVsbCAmJiBsZXZlbCA8IGN1cnJlbnRMZXZlbDtcblxuICAgICAgaWYgKGZpcnN0TWVldEhlYWRpbmcgfHwgbG93ZXJIZWFkaW5nKSB7XG4gICAgICAgIGN1cnJlbnRMZXZlbCA9IGxldmVsO1xuICAgICAgICByZXMudW5zaGlmdCh7XG4gICAgICAgICAgbGluZTogbCxcbiAgICAgICAgICB0ZXh0OiBsaW5lLnNsaWNlKGxldmVsICsgMSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudExldmVsICE9PSBudWxsICYmIGN1cnJlbnRMZXZlbCA8PSAxKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGVhZGluZ0xldmVsKHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IC9eKCMrKSAvLmV4ZWModGV4dCk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzWzFdLmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVE9DRGV0ZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVkaXRvcjogSUVkaXRvciwgcHJpdmF0ZSBsaW5lTm86IG51bWJlcikge31cblxuICBkZXRlY3QoKTogSVRPQ0l0ZW1bXSB7XG4gICAgY29uc3QgbGlzdFRvYyA9IG5ldyBMaXN0VE9DRGV0ZWN0b3IodGhpcy5lZGl0b3IsIHRoaXMubGluZU5vKS5kZXRlY3QoKTtcbiAgICBjb25zdCBoZWFkaW5nVG9jID0gbmV3IEhlYWRpbmdUT0NEZXRlY3RvcihcbiAgICAgIHRoaXMuZWRpdG9yLFxuICAgICAgbGlzdFRvYy5sZW5ndGggPiAwID8gbGlzdFRvY1swXS5saW5lIDogdGhpcy5saW5lTm9cbiAgICApLmRldGVjdCgpO1xuXG4gICAgcmV0dXJuIGhlYWRpbmdUb2MuY29uY2F0KGxpc3RUb2MpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIZWFkaW5nQm91bmRhcmllc0RldGVjdG9yIH0gZnJvbSBcInNyYy9ib3VuZGFyaWVzL0hlYWRpbmdCb3VuZGFyaWVzRGV0ZWN0b3JcIjtcbmltcG9ydCB7IElCb3VuZGFyaWVzIH0gZnJvbSBcInNyYy9ib3VuZGFyaWVzL0lCb3VuZGFyaWVzXCI7XG5pbXBvcnQgeyBMaXN0Qm91bmRhcmllc0RldGVjdG9yIH0gZnJvbSBcInNyYy9ib3VuZGFyaWVzL0xpc3RCb3VuZGFyaWVzRGV0ZWN0b3JcIjtcbmltcG9ydCB7IFpvb21TdGF0ZSwgWm9vbVN0YXRlc1NlcnZpY2UgfSBmcm9tIFwic3JjL3NlcnZpY2VzL1pvb21TdGF0ZXNTZXJ2aWNlXCI7XG5pbXBvcnQgeyBUT0NEZXRlY3RvciB9IGZyb20gXCJzcmMvdG9jL1RPQ0RldGVjdG9yXCI7XG5pbXBvcnQgeyBPYnNpZGlhblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvT2JzaWRpYW5TZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBab29tU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgem9vbVN0YXRlc1NlcnZpY2U6IFpvb21TdGF0ZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2JzaWRpYW5TZXJ2aWNlOiBPYnNpZGlhblNlcnZpY2VcbiAgKSB7fVxuXG4gIHpvb21PdXQoZWRpdG9yOiBDb2RlTWlycm9yLkVkaXRvcikge1xuICAgIGNvbnN0IHpvb21TdGF0ZSA9IHRoaXMuem9vbVN0YXRlc1NlcnZpY2UuZ2V0KGVkaXRvcik7XG5cbiAgICBpZiAoIXpvb21TdGF0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBlZGl0b3IuZmlyc3RMaW5lKCksIGwgPSBlZGl0b3IubGFzdExpbmUoKTsgaSA8PSBsOyBpKyspIHtcbiAgICAgIGVkaXRvci5yZW1vdmVMaW5lQ2xhc3MoaSwgXCJ3cmFwXCIsIFwiem9vbS1wbHVnaW4taGlkZGVuLXJvd1wiKTtcbiAgICB9XG5cbiAgICB6b29tU3RhdGUuaGVhZGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoem9vbVN0YXRlLmhlYWRlcik7XG5cbiAgICB0aGlzLnpvb21TdGF0ZXNTZXJ2aWNlLmRlbGV0ZShlZGl0b3IpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB6b29tSW4oXG4gICAgZWRpdG9yOiBDb2RlTWlycm9yLkVkaXRvcixcbiAgICBjdXJzb3I6IENvZGVNaXJyb3IuUG9zaXRpb24gPSBlZGl0b3IuZ2V0Q3Vyc29yKClcbiAgKSB7XG4gICAgY29uc3QgYm91bmRhcmllcyA9IHRoaXMuZmluZEJvdW5kYXJpZXMoZWRpdG9yLCBjdXJzb3IubGluZSk7XG5cbiAgICBpZiAoIWJvdW5kYXJpZXMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnpvb21PdXQoZWRpdG9yKTtcblxuICAgIGZvciAobGV0IGkgPSBlZGl0b3IuZmlyc3RMaW5lKCksIGwgPSBlZGl0b3IubGFzdExpbmUoKTsgaSA8PSBsOyBpKyspIHtcbiAgICAgIGlmIChpIDwgYm91bmRhcmllcy5zdGFydExpbmUgfHwgaSA+PSBib3VuZGFyaWVzLmVuZExpbmUpIHtcbiAgICAgICAgZWRpdG9yLmFkZExpbmVDbGFzcyhpLCBcIndyYXBcIiwgXCJ6b29tLXBsdWdpbi1oaWRkZW4tcm93XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvYyA9IG5ldyBUT0NEZXRlY3RvcihlZGl0b3IsIGJvdW5kYXJpZXMuc3RhcnRMaW5lKS5kZXRlY3QoKTtcblxuICAgIGNvbnN0IGNyZWF0ZVNlcGFyYXRvciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIiA+IFwiO1xuICAgICAgcmV0dXJuIHNwYW47XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVRpdGxlID0gKGNvbnRlbnQ6IHN0cmluZywgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGEuY2xhc3NOYW1lID0gXCJ6b29tLXBsdWdpbi10aXRsZVwiO1xuICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgYS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhLmlubmVySFRNTCA9IFwiJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCI7XG4gICAgICB9XG4gICAgICBhLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNiKCk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGE7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuY2xhc3NOYW1lID0gXCJ6b29tLXBsdWdpbi1oZWFkZXJcIjtcblxuICAgICAgZm9yIChjb25zdCB0b2NJdGVtIG9mIHRvYy5zbGljZSgwLCAtMSkucmV2ZXJzZSgpKSB7XG4gICAgICAgIGRpdi5wcmVwZW5kKFxuICAgICAgICAgIGNyZWF0ZVRpdGxlKHRvY0l0ZW0udGV4dCwgKCkgPT5cbiAgICAgICAgICAgIHRoaXMuem9vbUluKGVkaXRvciwgeyBsaW5lOiB0b2NJdGVtLmxpbmUsIGNoOiAwIH0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBkaXYucHJlcGVuZChjcmVhdGVTZXBhcmF0b3IoKSk7XG4gICAgICB9XG5cbiAgICAgIGRpdi5wcmVwZW5kKFxuICAgICAgICBjcmVhdGVUaXRsZSh0aGlzLm9ic2lkaWFuU2VydmljZS5nZXRBY3RpdmVMZWFmRGlzcGxheVRleHQoKSwgKCkgPT5cbiAgICAgICAgICB0aGlzLnpvb21PdXQoZWRpdG9yKVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZGl2O1xuICAgIH07XG5cbiAgICBjb25zdCB6b29tSGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgZWRpdG9yLmdldFdyYXBwZXJFbGVtZW50KCkucHJlcGVuZCh6b29tSGVhZGVyKTtcblxuICAgIHRoaXMuem9vbVN0YXRlc1NlcnZpY2Uuc2V0KFxuICAgICAgZWRpdG9yLFxuICAgICAgbmV3IFpvb21TdGF0ZShlZGl0b3IuZ2V0TGluZUhhbmRsZShib3VuZGFyaWVzLnN0YXJ0TGluZSksIHpvb21IZWFkZXIpXG4gICAgKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kQm91bmRhcmllcyhcbiAgICBlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yLFxuICAgIGxpbmVObzogbnVtYmVyXG4gICk6IElCb3VuZGFyaWVzIHwgbnVsbCB7XG4gICAgY29uc3QgaGVhZGluZ0JvdW5kYXJpZXNEZXRlY3RvciA9IG5ldyBIZWFkaW5nQm91bmRhcmllc0RldGVjdG9yKFxuICAgICAgZWRpdG9yLFxuICAgICAgbGluZU5vXG4gICAgKTtcbiAgICBjb25zdCBoZWFkaW5nQm91bmRhcmllcyA9IGhlYWRpbmdCb3VuZGFyaWVzRGV0ZWN0b3IuZGV0ZWN0KCk7XG5cbiAgICBpZiAoaGVhZGluZ0JvdW5kYXJpZXMpIHtcbiAgICAgIHJldHVybiBoZWFkaW5nQm91bmRhcmllcztcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0Qm91bmRhcmllc0RldGVjdG9yID0gbmV3IExpc3RCb3VuZGFyaWVzRGV0ZWN0b3IoZWRpdG9yLCBsaW5lTm8pO1xuICAgIHJldHVybiBsaXN0Qm91bmRhcmllc0RldGVjdG9yLmRldGVjdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQbHVnaW5fMiB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tIFwic3JjL3NlcnZpY2VzL1pvb21TZXJ2aWNlXCI7XG5pbXBvcnQgeyBab29tU3RhdGVzU2VydmljZSB9IGZyb20gXCJzcmMvc2VydmljZXMvWm9vbVN0YXRlc1NlcnZpY2VcIjtcbmltcG9ydCB7IElGZWF0dXJlIH0gZnJvbSBcIi4vSUZlYXR1cmVcIjtcblxuZXhwb3J0IGNsYXNzIFpvb21PdXRBZnRlckZpbGVDb3RlbnRDaGFuZ2VkRmVhdHVyZSBpbXBsZW1lbnRzIElGZWF0dXJlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbHVnaW46IFBsdWdpbl8yLFxuICAgIHByaXZhdGUgem9vbVN0YXRlc1NlcnZpY2U6IFpvb21TdGF0ZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlXG4gICkge31cblxuICBhc3luYyBsb2FkKCkge1xuICAgIHRoaXMucGx1Z2luLnJlZ2lzdGVyQ29kZU1pcnJvcigoY20pID0+IHtcbiAgICAgIGNtLm9uKFwiYmVmb3JlQ2hhbmdlXCIsIHRoaXMuaGFuZGxlQmVmb3JlQ2hhbmdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVubG9hZCgpIHtcbiAgICB0aGlzLnBsdWdpbi5hcHAud29ya3NwYWNlLml0ZXJhdGVDb2RlTWlycm9ycygoY20pID0+IHtcbiAgICAgIGNtLm9mZihcImJlZm9yZUNoYW5nZVwiLCB0aGlzLmhhbmRsZUJlZm9yZUNoYW5nZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUJlZm9yZUNoYW5nZSA9IChcbiAgICBjbTogQ29kZU1pcnJvci5FZGl0b3IsXG4gICAgY2hhbmdlT2JqOiBDb2RlTWlycm9yLkVkaXRvckNoYW5nZUNhbmNlbGxhYmxlXG4gICkgPT4ge1xuICAgIGNvbnN0IHpvb21TdGF0ZSA9IHRoaXMuem9vbVN0YXRlc1NlcnZpY2UuZ2V0KGNtKTtcblxuICAgIGlmIChcbiAgICAgICF6b29tU3RhdGUgfHxcbiAgICAgIGNoYW5nZU9iai5vcmlnaW4gIT09IFwic2V0VmFsdWVcIiB8fFxuICAgICAgY2hhbmdlT2JqLmZyb20ubGluZSAhPT0gMCB8fFxuICAgICAgY2hhbmdlT2JqLmZyb20uY2ggIT09IDBcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0aWxsTGluZSA9IGNtLmxhc3RMaW5lKCk7XG4gICAgY29uc3QgdGlsbENoID0gY20uZ2V0TGluZSh0aWxsTGluZSkubGVuZ3RoO1xuXG4gICAgaWYgKGNoYW5nZU9iai50by5saW5lICE9PSB0aWxsTGluZSB8fCBjaGFuZ2VPYmoudG8uY2ggIT09IHRpbGxDaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuem9vbVNlcnZpY2Uuem9vbU91dChjbSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBQbHVnaW5fMiB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tIFwic3JjL3NlcnZpY2VzL1pvb21TZXJ2aWNlXCI7XG5pbXBvcnQgeyBab29tU3RhdGVzU2VydmljZSB9IGZyb20gXCJzcmMvc2VydmljZXMvWm9vbVN0YXRlc1NlcnZpY2VcIjtcbmltcG9ydCB7IElGZWF0dXJlIH0gZnJvbSBcIi4vSUZlYXR1cmVcIjtcblxuZXhwb3J0IGNsYXNzIFJlWm9vbUFmdGVyQ29udGVudENoYW5nZWRGZWF0dXJlIGltcGxlbWVudHMgSUZlYXR1cmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsdWdpbjogUGx1Z2luXzIsXG4gICAgcHJpdmF0ZSB6b29tU3RhdGVzU2VydmljZTogWm9vbVN0YXRlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b29tU2VydmljZTogWm9vbVNlcnZpY2VcbiAgKSB7fVxuXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJDb2RlTWlycm9yKChjbSkgPT4ge1xuICAgICAgY20ub24oXCJjaGFuZ2VcIiwgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdW5sb2FkKCkge1xuICAgIHRoaXMucGx1Z2luLmFwcC53b3Jrc3BhY2UuaXRlcmF0ZUNvZGVNaXJyb3JzKChjbSkgPT4ge1xuICAgICAgY20ub2ZmKFwiY2hhbmdlXCIsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlID0gKFxuICAgIGNtOiBDb2RlTWlycm9yLkVkaXRvcixcbiAgICBjaGFuZ2VPYmo6IENvZGVNaXJyb3IuRWRpdG9yQ2hhbmdlQ2FuY2VsbGFibGVcbiAgKSA9PiB7XG4gICAgY29uc3Qgem9vbVN0YXRlID0gdGhpcy56b29tU3RhdGVzU2VydmljZS5nZXQoY20pO1xuXG4gICAgaWYgKCF6b29tU3RhdGUgfHwgY2hhbmdlT2JqLm9yaWdpbiAhPT0gXCJzZXRWYWx1ZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGluZU5vID0gY20uZ2V0TGluZU51bWJlcih6b29tU3RhdGUubGluZSk7XG5cbiAgICBpZiAobGluZU5vID09PSBudWxsKSB7XG4gICAgICB0aGlzLnpvb21TZXJ2aWNlLnpvb21PdXQoY20pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuem9vbVNlcnZpY2Uuem9vbUluKGNtLCB7XG4gICAgICBsaW5lOiBsaW5lTm8sXG4gICAgICBjaDogMCxcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IFBsdWdpbl8yIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyBab29tU3RhdGVzU2VydmljZSB9IGZyb20gXCJzcmMvc2VydmljZXMvWm9vbVN0YXRlc1NlcnZpY2VcIjtcbmltcG9ydCB7IElGZWF0dXJlIH0gZnJvbSBcIi4vSUZlYXR1cmVcIjtcblxuZXhwb3J0IGNsYXNzIExpbWl0U2VsZWN0aW9uRmVhdHVyZSBpbXBsZW1lbnRzIElGZWF0dXJlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbHVnaW46IFBsdWdpbl8yLFxuICAgIHByaXZhdGUgem9vbVN0YXRlc1NlcnZpY2U6IFpvb21TdGF0ZXNTZXJ2aWNlXG4gICkge31cblxuICBhc3luYyBsb2FkKCkge1xuICAgIHRoaXMucGx1Z2luLnJlZ2lzdGVyQ29kZU1pcnJvcigoY20pID0+IHtcbiAgICAgIGNtLm9uKFwiYmVmb3JlU2VsZWN0aW9uQ2hhbmdlXCIsIHRoaXMuaGFuZGxlQmVmb3JlU2VsZWN0aW9uQ2hhbmdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVubG9hZCgpIHtcbiAgICB0aGlzLnBsdWdpbi5hcHAud29ya3NwYWNlLml0ZXJhdGVDb2RlTWlycm9ycygoY20pID0+IHtcbiAgICAgIGNtLm9mZihcImJlZm9yZVNlbGVjdGlvbkNoYW5nZVwiLCB0aGlzLmhhbmRsZUJlZm9yZVNlbGVjdGlvbkNoYW5nZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUJlZm9yZVNlbGVjdGlvbkNoYW5nZSA9IChcbiAgICBjbTogQ29kZU1pcnJvci5FZGl0b3IsXG4gICAgY2hhbmdlT2JqOiBDb2RlTWlycm9yLkVkaXRvclNlbGVjdGlvbkNoYW5nZVxuICApID0+IHtcbiAgICBpZiAoIXRoaXMuem9vbVN0YXRlc1NlcnZpY2UuaGFzKGNtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB2aXNpYmxlRnJvbTogQ29kZU1pcnJvci5Qb3NpdGlvbiB8IG51bGwgPSBudWxsO1xuICAgIGxldCB2aXNpYmxlVGlsbDogQ29kZU1pcnJvci5Qb3NpdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IGNtLmZpcnN0TGluZSgpOyBpIDw9IGNtLmxhc3RMaW5lKCk7IGkrKykge1xuICAgICAgY29uc3Qgd3JhcENsYXNzID0gY20ubGluZUluZm8oaSkud3JhcENsYXNzIHx8IFwiXCI7XG4gICAgICBjb25zdCBpc0hpZGRlbiA9IHdyYXBDbGFzcy5pbmNsdWRlcyhcInpvb20tcGx1Z2luLWhpZGRlbi1yb3dcIik7XG4gICAgICBpZiAodmlzaWJsZUZyb20gPT09IG51bGwgJiYgIWlzSGlkZGVuKSB7XG4gICAgICAgIHZpc2libGVGcm9tID0geyBsaW5lOiBpLCBjaDogMCB9O1xuICAgICAgfVxuICAgICAgaWYgKHZpc2libGVGcm9tICE9PSBudWxsICYmIHZpc2libGVUaWxsICE9PSBudWxsICYmIGlzSGlkZGVuKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHZpc2libGVGcm9tICE9PSBudWxsKSB7XG4gICAgICAgIHZpc2libGVUaWxsID0geyBsaW5lOiBpLCBjaDogY20uZ2V0TGluZShpKS5sZW5ndGggfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCByYW5nZSBvZiBjaGFuZ2VPYmoucmFuZ2VzKSB7XG4gICAgICBpZiAocmFuZ2UuYW5jaG9yLmxpbmUgPCB2aXNpYmxlRnJvbS5saW5lKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICByYW5nZS5hbmNob3IubGluZSA9IHZpc2libGVGcm9tLmxpbmU7XG4gICAgICAgIHJhbmdlLmFuY2hvci5jaCA9IHZpc2libGVGcm9tLmNoO1xuICAgICAgfVxuICAgICAgaWYgKHJhbmdlLmFuY2hvci5saW5lID4gdmlzaWJsZVRpbGwubGluZSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgcmFuZ2UuYW5jaG9yLmxpbmUgPSB2aXNpYmxlVGlsbC5saW5lO1xuICAgICAgICByYW5nZS5hbmNob3IuY2ggPSB2aXNpYmxlVGlsbC5jaDtcbiAgICAgIH1cbiAgICAgIGlmIChyYW5nZS5oZWFkLmxpbmUgPCB2aXNpYmxlRnJvbS5saW5lKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICByYW5nZS5oZWFkLmxpbmUgPSB2aXNpYmxlRnJvbS5saW5lO1xuICAgICAgICByYW5nZS5oZWFkLmNoID0gdmlzaWJsZUZyb20uY2g7XG4gICAgICB9XG4gICAgICBpZiAocmFuZ2UuaGVhZC5saW5lID4gdmlzaWJsZVRpbGwubGluZSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgcmFuZ2UuaGVhZC5saW5lID0gdmlzaWJsZVRpbGwubGluZTtcbiAgICAgICAgcmFuZ2UuaGVhZC5jaCA9IHZpc2libGVUaWxsLmNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICBjaGFuZ2VPYmoudXBkYXRlKGNoYW5nZU9iai5yYW5nZXMpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IFBsdWdpbl8yIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyBab29tU2VydmljZSB9IGZyb20gXCJzcmMvc2VydmljZXMvWm9vbVNlcnZpY2VcIjtcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9TZXR0aW5nc1NlcnZpY2VcIjtcbmltcG9ydCB7IElGZWF0dXJlIH0gZnJvbSBcIi4vSUZlYXR1cmVcIjtcblxuZXhwb3J0IGNsYXNzIFpvb21PbkNsaWNrRmVhdHVyZSBpbXBsZW1lbnRzIElGZWF0dXJlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbHVnaW46IFBsdWdpbl8yLFxuICAgIHByaXZhdGUgc2V0dGluZ3NTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b29tU2VydmljZTogWm9vbVNlcnZpY2VcbiAgKSB7fVxuXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJEb21FdmVudCh3aW5kb3csIFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG4gIH1cblxuICBhc3luYyB1bmxvYWQoKSB7fVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICAgIGlmIChcbiAgICAgICF0YXJnZXQgfHxcbiAgICAgICF0aGlzLnNldHRpbmdzU2VydmljZS56b29tT25DbGljayB8fFxuICAgICAgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbS1mb3JtYXR0aW5nLWxpc3QtdWxcIilcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgd3JhcCA9IHRhcmdldDtcbiAgICB3aGlsZSAod3JhcCkge1xuICAgICAgaWYgKHdyYXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiQ29kZU1pcnJvci13cmFwXCIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgd3JhcCA9IHdyYXAucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAoIXdyYXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZm91bmRFZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yIHwgbnVsbCA9IG51bGw7XG5cbiAgICB0aGlzLnBsdWdpbi5hcHAud29ya3NwYWNlLml0ZXJhdGVDb2RlTWlycm9ycygoY20pID0+IHtcbiAgICAgIGlmIChmb3VuZEVkaXRvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChjbS5nZXRXcmFwcGVyRWxlbWVudCgpID09PSB3cmFwKSB7XG4gICAgICAgIGZvdW5kRWRpdG9yID0gY207XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWZvdW5kRWRpdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcG9zID0gZm91bmRFZGl0b3IuY29vcmRzQ2hhcih7XG4gICAgICBsZWZ0OiBlLngsXG4gICAgICB0b3A6IGUueSxcbiAgICB9KTtcblxuICAgIGlmICghcG9zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLnpvb21TZXJ2aWNlLnpvb21Jbihmb3VuZEVkaXRvciwgcG9zKTtcblxuICAgIGZvdW5kRWRpdG9yLnNldEN1cnNvcih7XG4gICAgICBsaW5lOiBwb3MubGluZSxcbiAgICAgIGNoOiBmb3VuZEVkaXRvci5nZXRMaW5lKHBvcy5saW5lKS5sZW5ndGgsXG4gICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBQbHVnaW4gfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHtcclxuICBPYnNpZGlhblpvb21QbHVnaW5TZXR0aW5nVGFiLFxyXG4gIFNldHRpbmdzU2VydmljZSxcclxufSBmcm9tIFwiLi9zZXJ2aWNlcy9TZXR0aW5nc1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUZlYXR1cmUgfSBmcm9tIFwiLi9mZWF0dXJlcy9JRmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBPYnNpZGlhblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9PYnNpZGlhblNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL0xvZ2dlclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGlzdHNTdHlsZXNGZWF0dXJlIH0gZnJvbSBcIi4vZmVhdHVyZXMvTGlzdHNTdHlsZXNGZWF0dXJlXCI7XHJcbmltcG9ydCB7IFpvb21GZWF0dXJlIH0gZnJvbSBcIi4vZmVhdHVyZXMvWm9vbUZlYXR1cmVcIjtcclxuaW1wb3J0IHsgWm9vbVN0YXRlc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ab29tU3RhdGVzU2VydmljZVwiO1xyXG5pbXBvcnQgeyBab29tU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL1pvb21TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFpvb21PdXRBZnRlckZpbGVDb3RlbnRDaGFuZ2VkRmVhdHVyZSB9IGZyb20gXCIuL2ZlYXR1cmVzL1pvb21PdXRBZnRlckZpbGVDb3RlbnRDaGFuZ2VkRmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBSZVpvb21BZnRlckNvbnRlbnRDaGFuZ2VkRmVhdHVyZSB9IGZyb20gXCIuL2ZlYXR1cmVzL1JlWm9vbUFmdGVyQ29udGVudENoYW5nZWRGZWF0dXJlXCI7XHJcbmltcG9ydCB7IExpbWl0U2VsZWN0aW9uRmVhdHVyZSB9IGZyb20gXCIuL2ZlYXR1cmVzL0xpbWl0U2VsZWN0aW9uRmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBab29tT25DbGlja0ZlYXR1cmUgfSBmcm9tIFwiLi9mZWF0dXJlcy9ab29tT25DbGlja0ZlYXR1cmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2lkaWFuWm9vbVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcbiAgcHJpdmF0ZSBmZWF0dXJlczogSUZlYXR1cmVbXTtcclxuICBwcml2YXRlIHNldHRpbmdzU2VydmljZTogU2V0dGluZ3NTZXJ2aWNlO1xyXG4gIHByaXZhdGUgbG9nZ2VyU2VydmljZTogTG9nZ2VyU2VydmljZTtcclxuICBwcml2YXRlIHpvb21TdGF0ZXNTZXJ2aWNlOiBab29tU3RhdGVzU2VydmljZTtcclxuICBwcml2YXRlIG9ic2lkaWFuU2VydmljZTogT2JzaWRpYW5TZXJ2aWNlO1xyXG4gIHByaXZhdGUgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlO1xyXG5cclxuICBhc3luYyBvbmxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgTG9hZGluZyBvYnNpZGlhbi16b29tYCk7XHJcblxyXG4gICAgKHdpbmRvdyBhcyBhbnkpLk9ic2lkaWFuWm9vbVBsdWdpbiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5zZXR0aW5nc1NlcnZpY2UgPSBuZXcgU2V0dGluZ3NTZXJ2aWNlKHRoaXMpO1xyXG4gICAgYXdhaXQgdGhpcy5zZXR0aW5nc1NlcnZpY2UubG9hZCgpO1xyXG5cclxuICAgIHRoaXMubG9nZ2VyU2VydmljZSA9IG5ldyBMb2dnZXJTZXJ2aWNlKHRoaXMuc2V0dGluZ3NTZXJ2aWNlKTtcclxuICAgIHRoaXMuem9vbVN0YXRlc1NlcnZpY2UgPSBuZXcgWm9vbVN0YXRlc1NlcnZpY2UoKTtcclxuICAgIHRoaXMub2JzaWRpYW5TZXJ2aWNlID0gbmV3IE9ic2lkaWFuU2VydmljZSh0aGlzLmFwcCk7XHJcbiAgICB0aGlzLnpvb21TZXJ2aWNlID0gbmV3IFpvb21TZXJ2aWNlKFxyXG4gICAgICB0aGlzLnpvb21TdGF0ZXNTZXJ2aWNlLFxyXG4gICAgICB0aGlzLm9ic2lkaWFuU2VydmljZVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIoXHJcbiAgICAgIG5ldyBPYnNpZGlhblpvb21QbHVnaW5TZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzLCB0aGlzLnNldHRpbmdzU2VydmljZSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5mZWF0dXJlcyA9IFtcclxuICAgICAgbmV3IExpc3RzU3R5bGVzRmVhdHVyZSh0aGlzLnNldHRpbmdzU2VydmljZSksXHJcbiAgICAgIG5ldyBab29tRmVhdHVyZSh0aGlzLCB0aGlzLm9ic2lkaWFuU2VydmljZSwgdGhpcy56b29tU2VydmljZSksXHJcbiAgICAgIG5ldyBab29tT3V0QWZ0ZXJGaWxlQ290ZW50Q2hhbmdlZEZlYXR1cmUoXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICB0aGlzLnpvb21TdGF0ZXNTZXJ2aWNlLFxyXG4gICAgICAgIHRoaXMuem9vbVNlcnZpY2VcclxuICAgICAgKSxcclxuICAgICAgbmV3IFJlWm9vbUFmdGVyQ29udGVudENoYW5nZWRGZWF0dXJlKFxyXG4gICAgICAgIHRoaXMsXHJcbiAgICAgICAgdGhpcy56b29tU3RhdGVzU2VydmljZSxcclxuICAgICAgICB0aGlzLnpvb21TZXJ2aWNlXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBMaW1pdFNlbGVjdGlvbkZlYXR1cmUodGhpcywgdGhpcy56b29tU3RhdGVzU2VydmljZSksXHJcbiAgICAgIG5ldyBab29tT25DbGlja0ZlYXR1cmUodGhpcywgdGhpcy5zZXR0aW5nc1NlcnZpY2UsIHRoaXMuem9vbVNlcnZpY2UpLFxyXG4gICAgXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZlYXR1cmUgb2YgdGhpcy5mZWF0dXJlcykge1xyXG4gICAgICBhd2FpdCBmZWF0dXJlLmxvYWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9udW5sb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coYFVubG9hZGluZyBvYnNpZGlhbi16b29tYCk7XHJcblxyXG4gICAgZGVsZXRlICh3aW5kb3cgYXMgYW55KS5PYnNpZGlhblpvb21QbHVnaW47XHJcblxyXG4gICAgZm9yIChjb25zdCBmZWF0dXJlIG9mIHRoaXMuZmVhdHVyZXMpIHtcclxuICAgICAgYXdhaXQgZmVhdHVyZS51bmxvYWQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBsdWdpblNldHRpbmdUYWIiLCJTZXR0aW5nIiwiTWFya2Rvd25WaWV3IiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVEQTtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxT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
