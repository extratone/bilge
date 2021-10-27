'use strict';

var obsidian = require('obsidian');
var electron = require('electron');
var path_1 = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path_1__default = /*#__PURE__*/_interopDefaultLegacy(path_1);

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
 * File URI to Path function.
 *
 * @param {String} uri
 * @return {String} path
 * @api public
 */
function fileUriToPath(uri) {
    if (typeof uri !== 'string' ||
        uri.length <= 7 ||
        uri.substring(0, 7) !== 'file://') {
        throw new TypeError('must pass in a file:// URI to convert to a file path');
    }
    const rest = decodeURI(uri.substring(7));
    const firstSlash = rest.indexOf('/');
    let host = rest.substring(0, firstSlash);
    let path = rest.substring(firstSlash + 1);
    // 2.  Scheme Definition
    // As a special case, <host> can be the string "localhost" or the empty
    // string; this is interpreted as "the machine from which the URL is
    // being interpreted".
    if (host === 'localhost') {
        host = '';
    }
    if (host) {
        host = path_1__default['default'].sep + path_1__default['default'].sep + host;
    }
    // 3.2  Drives, drive letters, mount points, file system root
    // Drive letters are mapped into the top of a file URI in various ways,
    // depending on the implementation; some applications substitute
    // vertical bar ("|") for the colon after the drive letter, yielding
    // "file:///c|/tmp/test.txt".  In some cases, the colon is left
    // unchanged, as in "file:///c:/tmp/test.txt".  In other cases, the
    // colon is simply omitted, as in "file:///c/tmp/test.txt".
    path = path.replace(/^(.+)\|/, '$1:');
    // for Windows, we need to invert the path separators from what a URI uses
    if (path_1__default['default'].sep === '\\') {
        path = path.replace(/\//g, '\\');
    }
    if (/^.+:/.test(path)) ;
    else {
        // unix path…
        path = path_1__default['default'].sep + path;
    }
    return host + path;
}
var src = fileUriToPath;

var FilePathToUri = /** @class */ (function (_super) {
    __extends(FilePathToUri, _super);
    function FilePathToUri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePathToUri.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('Loading plugin FilePathToUri...');
                this.addCommand({
                    id: 'toggle-file-path-to-uri',
                    name: 'Toggle selected file path to URI and back',
                    checkCallback: function (checking) {
                        if (_this.getEditor() === null) {
                            return;
                        }
                        if (!checking) {
                            _this.toggleLink();
                        }
                        return true;
                    },
                    hotkeys: [
                        {
                            modifiers: ['Mod', 'Alt'],
                            key: 'L',
                        },
                    ],
                });
                this.addCommand({
                    id: 'paste-file-path-as-file-uri',
                    name: 'Paste file path as file uri',
                    checkCallback: function (checking) {
                        if (_this.getEditor() === null) {
                            return;
                        }
                        if (!checking) {
                            _this.pasteAsUri();
                        }
                        return true;
                    },
                    hotkeys: [
                        {
                            modifiers: ['Mod', 'Alt', 'Shift'],
                            key: 'L',
                        },
                    ],
                });
                this.addCommand({
                    id: 'paste-file-path-as-file-uri-link',
                    name: 'Paste file path as file uri link',
                    checkCallback: function (checking) {
                        if (_this.getEditor() === null) {
                            return;
                        }
                        if (!checking) {
                            _this.pasteAsUriLink();
                        }
                        return true;
                    },
                    hotkeys: [
                    // For testing only
                    // {
                    // 	modifiers: ['Mod', 'Alt', 'Shift'],
                    // 	key: 'J',
                    // },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    FilePathToUri.prototype.getEditor = function () {
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!view || view.getMode() !== 'source') {
            return null;
        }
        return view.sourceMode.cmEditor;
    };
    FilePathToUri.prototype.pasteAsUri = function () {
        var editor = this.getEditor();
        if (editor == null) {
            return;
        }
        var clipboardText = electron.clipboard.readText('clipboard');
        if (!clipboardText) {
            return;
        }
        clipboardText = this.cleanupText(clipboardText);
        // Paste the text as usual if it's not file path
        if (clipboardText.startsWith('file:') || !this.hasSlashes(clipboardText)) {
            editor.replaceSelection(clipboardText, 'around');
        }
        // network path '\\path'
        if (clipboardText.startsWith('\\\\')) {
            var endsWithSlash = clipboardText.endsWith('\\') || clipboardText.endsWith('/');
            // URL throws error on invalid url
            try {
                var url = new URL(clipboardText);
                var link = url.href.replace('file://', 'file:///%5C%5C');
                if (link.endsWith('/') && !endsWithSlash) {
                    link = link.slice(0, -1);
                }
                editor.replaceSelection(link, 'around');
            }
            catch (e) {
                return;
            }
        }
        // path C:\Users\ or \System\etc
        else {
            if (!this.hasSlashes(clipboardText)) {
                return;
            }
            // URL throws error on invalid url
            try {
                var url = new URL('file://' + clipboardText);
                editor.replaceSelection(url.href, 'around');
            }
            catch (e) {
                return;
            }
        }
    };
    FilePathToUri.prototype.makeLink = function (title, link) {
        return "[" + title + "](" + link + ")";
    };
    // TODO: todo
    FilePathToUri.prototype.pasteAsUriLink = function () {
        var editor = this.getEditor();
        if (editor == null) {
            return;
        }
        var clipboardText = electron.clipboard.readText('clipboard');
        if (!clipboardText) {
            return;
        }
        clipboardText = this.cleanupText(clipboardText);
        // Paste the text as usual if it's not file path
        if (clipboardText.startsWith('file:') || !this.hasSlashes(clipboardText)) {
            editor.replaceSelection(clipboardText, 'around');
        }
        // network path '\\path'
        if (clipboardText.startsWith('\\\\')) {
            var endsWithSlash = clipboardText.endsWith('\\') || clipboardText.endsWith('/');
            // URL throws error on invalid url
            try {
                var url = new URL(clipboardText);
                var link = url.href.replace('file://', 'file:///%5C%5C');
                if (link.endsWith('/') && !endsWithSlash) {
                    link = link.slice(0, -1);
                }
                // Needs to add two '\\' (that is '\\\\' in code because of escaping) in order for the link title
                // to display two '\\' in preview mode
                editor.replaceSelection(this.makeLink('\\\\' + clipboardText, link), 'around');
            }
            catch (e) {
                return;
            }
        }
        // path C:\Users\ or \System\etc
        else {
            if (!this.hasSlashes(clipboardText)) {
                return;
            }
            // URL throws error on invalid url
            try {
                var url = new URL('file://' + clipboardText);
                editor.replaceSelection(this.makeLink(clipboardText, url.href), 'around');
            }
            catch (e) {
                return;
            }
        }
    };
    /**
     * Does the text have any '\' or '/'?
     */
    FilePathToUri.prototype.hasSlashes = function (text) {
        // Does it have any '\' or '/'?
        var regexHasAnySlash = /.*([\\\/]).*/g;
        if (typeof text !== 'string') {
            return false;
        }
        var matches = text.match(regexHasAnySlash);
        return !!matches;
    };
    /**
     * Trim whitespace and remove surrounding "
     */
    FilePathToUri.prototype.cleanupText = function (text) {
        if (typeof text !== 'string') {
            return '';
        }
        text = text.trim();
        // Remove surrounding "
        if (text.startsWith('"')) {
            text = text.substr(1);
        }
        if (text.endsWith('"')) {
            text = text.substr(0, text.length - 1);
        }
        return text;
    };
    FilePathToUri.prototype.toggleLink = function () {
        var editor = this.getEditor();
        if (editor == null || !editor.somethingSelected()) {
            return;
        }
        var selectedText = editor.getSelection();
        selectedText = this.cleanupText(selectedText);
        // file url for network location file://\\location
        // Works for both 'file:///\\path' and 'file:///%5C%5Cpath'
        // Obsidian uses escape chars in link so `file:///\\location` will try to open `file:///\location instead
        // But the selected text we get contains the full string, thus the test for both 2 and 4 '\' chars
        if (selectedText.startsWith('file:///\\\\') ||
            selectedText.startsWith('file:///\\\\\\\\') ||
            selectedText.startsWith('file:///%5C%5C')) {
            // normalize to 'file:///'
            selectedText = selectedText.replace('file:///\\\\\\\\', 'file:///');
            selectedText = selectedText.replace('file:///\\\\', 'file:///');
            selectedText = selectedText.replace('file:///%5C%5C', 'file:///');
            var url = src(selectedText);
            if (url) {
                // fileUriToPath returns only single leading '\' so we need to add the second one
                editor.replaceSelection('\\' + url, 'around');
            }
        }
        // file link file:///C:/Users
        else if (selectedText.startsWith('file:///')) {
            var url = src(selectedText);
            if (url) {
                editor.replaceSelection(url, 'around');
            }
        }
        // network path '\\path'
        else if (selectedText.startsWith('\\\\')) {
            var endsWithSlash = selectedText.endsWith('\\') || selectedText.endsWith('/');
            // URL throws error on invalid url
            try {
                var url = new URL(selectedText);
                var link = url.href.replace('file://', 'file:///%5C%5C');
                if (link.endsWith('/') && !endsWithSlash) {
                    link = link.slice(0, -1);
                }
                editor.replaceSelection(link, 'around');
            }
            catch (e) {
                return;
            }
        }
        // path C:\Users\ or \System\etc
        else {
            if (!this.hasSlashes(selectedText)) {
                return;
            }
            // URL throws error on invalid url
            try {
                var url = new URL('file://' + selectedText);
                editor.replaceSelection(url.href, 'around');
            }
            catch (e) {
                return;
            }
        }
    };
    FilePathToUri.prototype.onunload = function () {
        console.log('Unloading plugin FilePathToUri...');
    };
    return FilePathToUri;
}(obsidian.Plugin));

module.exports = FilePathToUri;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9maWxlLXVyaS10by1wYXRoL2Rpc3Qvc3JjL2luZGV4LmpzIiwiLi4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IHBhdGhfMSA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuLyoqXG4gKiBGaWxlIFVSSSB0byBQYXRoIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAqIEByZXR1cm4ge1N0cmluZ30gcGF0aFxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZmlsZVVyaVRvUGF0aCh1cmkpIHtcbiAgICBpZiAodHlwZW9mIHVyaSAhPT0gJ3N0cmluZycgfHxcbiAgICAgICAgdXJpLmxlbmd0aCA8PSA3IHx8XG4gICAgICAgIHVyaS5zdWJzdHJpbmcoMCwgNykgIT09ICdmaWxlOi8vJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHBhc3MgaW4gYSBmaWxlOi8vIFVSSSB0byBjb252ZXJ0IHRvIGEgZmlsZSBwYXRoJyk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3QgPSBkZWNvZGVVUkkodXJpLnN1YnN0cmluZyg3KSk7XG4gICAgY29uc3QgZmlyc3RTbGFzaCA9IHJlc3QuaW5kZXhPZignLycpO1xuICAgIGxldCBob3N0ID0gcmVzdC5zdWJzdHJpbmcoMCwgZmlyc3RTbGFzaCk7XG4gICAgbGV0IHBhdGggPSByZXN0LnN1YnN0cmluZyhmaXJzdFNsYXNoICsgMSk7XG4gICAgLy8gMi4gIFNjaGVtZSBEZWZpbml0aW9uXG4gICAgLy8gQXMgYSBzcGVjaWFsIGNhc2UsIDxob3N0PiBjYW4gYmUgdGhlIHN0cmluZyBcImxvY2FsaG9zdFwiIG9yIHRoZSBlbXB0eVxuICAgIC8vIHN0cmluZzsgdGhpcyBpcyBpbnRlcnByZXRlZCBhcyBcInRoZSBtYWNoaW5lIGZyb20gd2hpY2ggdGhlIFVSTCBpc1xuICAgIC8vIGJlaW5nIGludGVycHJldGVkXCIuXG4gICAgaWYgKGhvc3QgPT09ICdsb2NhbGhvc3QnKSB7XG4gICAgICAgIGhvc3QgPSAnJztcbiAgICB9XG4gICAgaWYgKGhvc3QpIHtcbiAgICAgICAgaG9zdCA9IHBhdGhfMS5zZXAgKyBwYXRoXzEuc2VwICsgaG9zdDtcbiAgICB9XG4gICAgLy8gMy4yICBEcml2ZXMsIGRyaXZlIGxldHRlcnMsIG1vdW50IHBvaW50cywgZmlsZSBzeXN0ZW0gcm9vdFxuICAgIC8vIERyaXZlIGxldHRlcnMgYXJlIG1hcHBlZCBpbnRvIHRoZSB0b3Agb2YgYSBmaWxlIFVSSSBpbiB2YXJpb3VzIHdheXMsXG4gICAgLy8gZGVwZW5kaW5nIG9uIHRoZSBpbXBsZW1lbnRhdGlvbjsgc29tZSBhcHBsaWNhdGlvbnMgc3Vic3RpdHV0ZVxuICAgIC8vIHZlcnRpY2FsIGJhciAoXCJ8XCIpIGZvciB0aGUgY29sb24gYWZ0ZXIgdGhlIGRyaXZlIGxldHRlciwgeWllbGRpbmdcbiAgICAvLyBcImZpbGU6Ly8vY3wvdG1wL3Rlc3QudHh0XCIuICBJbiBzb21lIGNhc2VzLCB0aGUgY29sb24gaXMgbGVmdFxuICAgIC8vIHVuY2hhbmdlZCwgYXMgaW4gXCJmaWxlOi8vL2M6L3RtcC90ZXN0LnR4dFwiLiAgSW4gb3RoZXIgY2FzZXMsIHRoZVxuICAgIC8vIGNvbG9uIGlzIHNpbXBseSBvbWl0dGVkLCBhcyBpbiBcImZpbGU6Ly8vYy90bXAvdGVzdC50eHRcIi5cbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eKC4rKVxcfC8sICckMTonKTtcbiAgICAvLyBmb3IgV2luZG93cywgd2UgbmVlZCB0byBpbnZlcnQgdGhlIHBhdGggc2VwYXJhdG9ycyBmcm9tIHdoYXQgYSBVUkkgdXNlc1xuICAgIGlmIChwYXRoXzEuc2VwID09PSAnXFxcXCcpIHtcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvL2csICdcXFxcJyk7XG4gICAgfVxuICAgIGlmICgvXi4rOi8udGVzdChwYXRoKSkge1xuICAgICAgICAvLyBoYXMgV2luZG93cyBkcml2ZSBhdCBiZWdpbm5pbmcgb2YgcGF0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gdW5peCBwYXRo4oCmXG4gICAgICAgIHBhdGggPSBwYXRoXzEuc2VwICsgcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3QgKyBwYXRoO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmaWxlVXJpVG9QYXRoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgUGx1Z2luLCBNYXJrZG93blZpZXcgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgeyBjbGlwYm9hcmQgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgZmlsZVVyaVRvUGF0aCBmcm9tICdmaWxlLXVyaS10by1wYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVBhdGhUb1VyaSBleHRlbmRzIFBsdWdpbiB7XG5cdGFzeW5jIG9ubG9hZCgpIHtcblx0XHRjb25zb2xlLmxvZygnTG9hZGluZyBwbHVnaW4gRmlsZVBhdGhUb1VyaS4uLicpO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAndG9nZ2xlLWZpbGUtcGF0aC10by11cmknLFxuXHRcdFx0bmFtZTogJ1RvZ2dsZSBzZWxlY3RlZCBmaWxlIHBhdGggdG8gVVJJIGFuZCBiYWNrJyxcblx0XHRcdGNoZWNrQ2FsbGJhY2s6IChjaGVja2luZzogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5nZXRFZGl0b3IoKSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghY2hlY2tpbmcpIHtcblx0XHRcdFx0XHR0aGlzLnRvZ2dsZUxpbmsoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGhvdGtleXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG1vZGlmaWVyczogWydNb2QnLCAnQWx0J10sXG5cdFx0XHRcdFx0a2V5OiAnTCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAncGFzdGUtZmlsZS1wYXRoLWFzLWZpbGUtdXJpJyxcblx0XHRcdG5hbWU6ICdQYXN0ZSBmaWxlIHBhdGggYXMgZmlsZSB1cmknLFxuXHRcdFx0Y2hlY2tDYWxsYmFjazogKGNoZWNraW5nOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLmdldEVkaXRvcigpID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFjaGVja2luZykge1xuXHRcdFx0XHRcdHRoaXMucGFzdGVBc1VyaSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0aG90a2V5czogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bW9kaWZpZXJzOiBbJ01vZCcsICdBbHQnLCAnU2hpZnQnXSxcblx0XHRcdFx0XHRrZXk6ICdMJyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cblxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ3Bhc3RlLWZpbGUtcGF0aC1hcy1maWxlLXVyaS1saW5rJyxcblx0XHRcdG5hbWU6ICdQYXN0ZSBmaWxlIHBhdGggYXMgZmlsZSB1cmkgbGluaycsXG5cdFx0XHRjaGVja0NhbGxiYWNrOiAoY2hlY2tpbmc6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuZ2V0RWRpdG9yKCkgPT09IG51bGwpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIWNoZWNraW5nKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wYXN0ZUFzVXJpTGluaygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0aG90a2V5czogW1xuXHRcdFx0XHQvLyBGb3IgdGVzdGluZyBvbmx5XG5cdFx0XHRcdC8vIHtcblx0XHRcdFx0Ly8gXHRtb2RpZmllcnM6IFsnTW9kJywgJ0FsdCcsICdTaGlmdCddLFxuXHRcdFx0XHQvLyBcdGtleTogJ0onLFxuXHRcdFx0XHQvLyB9LFxuXHRcdFx0XSxcblx0XHR9KVxuXHR9XG5cblx0Z2V0RWRpdG9yKCkge1xuXHRcdGNvbnN0IHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuXHRcdGlmICghdmlldyB8fCB2aWV3LmdldE1vZGUoKSAhPT0gJ3NvdXJjZScpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB2aWV3LnNvdXJjZU1vZGUuY21FZGl0b3I7XG5cdH1cblxuXHRwYXN0ZUFzVXJpKCkge1xuXHRcdGxldCBlZGl0b3IgPSB0aGlzLmdldEVkaXRvcigpO1xuXHRcdGlmIChlZGl0b3IgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBjbGlwYm9hcmRUZXh0ID0gY2xpcGJvYXJkLnJlYWRUZXh0KCdjbGlwYm9hcmQnKTtcblx0XHRpZiAoIWNsaXBib2FyZFRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjbGlwYm9hcmRUZXh0ID0gdGhpcy5jbGVhbnVwVGV4dChjbGlwYm9hcmRUZXh0KTtcblxuXHRcdC8vIFBhc3RlIHRoZSB0ZXh0IGFzIHVzdWFsIGlmIGl0J3Mgbm90IGZpbGUgcGF0aFxuXHRcdGlmIChjbGlwYm9hcmRUZXh0LnN0YXJ0c1dpdGgoJ2ZpbGU6JykgfHwgIXRoaXMuaGFzU2xhc2hlcyhjbGlwYm9hcmRUZXh0KSkge1xuXHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oY2xpcGJvYXJkVGV4dCwgJ2Fyb3VuZCcpO1xuXHRcdH1cblxuXHRcdC8vIG5ldHdvcmsgcGF0aCAnXFxcXHBhdGgnXG5cdFx0aWYgKGNsaXBib2FyZFRleHQuc3RhcnRzV2l0aCgnXFxcXFxcXFwnKSkge1xuXHRcdFx0bGV0IGVuZHNXaXRoU2xhc2ggPVxuXHRcdFx0XHRjbGlwYm9hcmRUZXh0LmVuZHNXaXRoKCdcXFxcJykgfHwgY2xpcGJvYXJkVGV4dC5lbmRzV2l0aCgnLycpO1xuXHRcdFx0Ly8gVVJMIHRocm93cyBlcnJvciBvbiBpbnZhbGlkIHVybFxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bGV0IHVybCA9IG5ldyBVUkwoY2xpcGJvYXJkVGV4dCk7XG5cblx0XHRcdFx0bGV0IGxpbmsgPSB1cmwuaHJlZi5yZXBsYWNlKCdmaWxlOi8vJywgJ2ZpbGU6Ly8vJTVDJTVDJyk7XG5cdFx0XHRcdGlmIChsaW5rLmVuZHNXaXRoKCcvJykgJiYgIWVuZHNXaXRoU2xhc2gpIHtcblx0XHRcdFx0XHRsaW5rID0gbGluay5zbGljZSgwLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihsaW5rLCAnYXJvdW5kJyk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGF0aCBDOlxcVXNlcnNcXCBvciBcXFN5c3RlbVxcZXRjXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIXRoaXMuaGFzU2xhc2hlcyhjbGlwYm9hcmRUZXh0KSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVSTCB0aHJvd3MgZXJyb3Igb24gaW52YWxpZCB1cmxcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxldCB1cmwgPSBuZXcgVVJMKCdmaWxlOi8vJyArIGNsaXBib2FyZFRleHQpO1xuXHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbih1cmwuaHJlZiwgJ2Fyb3VuZCcpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bWFrZUxpbmsodGl0bGU6c3RyaW5nLCBsaW5rOnN0cmluZykge1xuXHRcdHJldHVybiBgWyR7dGl0bGV9XSgke2xpbmt9KWBcblx0fVxuXG5cdC8vIFRPRE86IHRvZG9cblx0cGFzdGVBc1VyaUxpbmsoKVxuXHR7XG5cdFx0bGV0IGVkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKCk7XG5cdFx0aWYgKGVkaXRvciA9PSBudWxsKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgY2xpcGJvYXJkVGV4dCA9IGNsaXBib2FyZC5yZWFkVGV4dCgnY2xpcGJvYXJkJyk7XG5cdFx0aWYgKCFjbGlwYm9hcmRUZXh0KVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjbGlwYm9hcmRUZXh0ID0gdGhpcy5jbGVhbnVwVGV4dChjbGlwYm9hcmRUZXh0KTtcblxuXHRcdC8vIFBhc3RlIHRoZSB0ZXh0IGFzIHVzdWFsIGlmIGl0J3Mgbm90IGZpbGUgcGF0aFxuXHRcdGlmIChjbGlwYm9hcmRUZXh0LnN0YXJ0c1dpdGgoJ2ZpbGU6JykgfHwgIXRoaXMuaGFzU2xhc2hlcyhjbGlwYm9hcmRUZXh0KSlcblx0XHR7XG5cdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihjbGlwYm9hcmRUZXh0LCAnYXJvdW5kJyk7XG5cdFx0fVxuXG5cdFx0Ly8gbmV0d29yayBwYXRoICdcXFxccGF0aCdcblx0XHRpZiAoY2xpcGJvYXJkVGV4dC5zdGFydHNXaXRoKCdcXFxcXFxcXCcpKVxuXHRcdHtcblx0XHRcdGxldCBlbmRzV2l0aFNsYXNoID1cblx0XHRcdFx0Y2xpcGJvYXJkVGV4dC5lbmRzV2l0aCgnXFxcXCcpIHx8IGNsaXBib2FyZFRleHQuZW5kc1dpdGgoJy8nKTtcblx0XHRcdC8vIFVSTCB0aHJvd3MgZXJyb3Igb24gaW52YWxpZCB1cmxcblx0XHRcdHRyeVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgdXJsID0gbmV3IFVSTChjbGlwYm9hcmRUZXh0KTtcblxuXHRcdFx0XHRsZXQgbGluayA9IHVybC5ocmVmLnJlcGxhY2UoJ2ZpbGU6Ly8nLCAnZmlsZTovLy8lNUMlNUMnKTtcblx0XHRcdFx0aWYgKGxpbmsuZW5kc1dpdGgoJy8nKSAmJiAhZW5kc1dpdGhTbGFzaClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxpbmsgPSBsaW5rLnNsaWNlKDAsIC0xKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE5lZWRzIHRvIGFkZCB0d28gJ1xcXFwnICh0aGF0IGlzICdcXFxcXFxcXCcgaW4gY29kZSBiZWNhdXNlIG9mIGVzY2FwaW5nKSBpbiBvcmRlciBmb3IgdGhlIGxpbmsgdGl0bGVcblx0XHRcdFx0Ly8gdG8gZGlzcGxheSB0d28gJ1xcXFwnIGluIHByZXZpZXcgbW9kZVxuXHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbih0aGlzLm1ha2VMaW5rKCdcXFxcXFxcXCcgKyBjbGlwYm9hcmRUZXh0LCBsaW5rKSwgJ2Fyb3VuZCcpO1xuXHRcdFx0fSBjYXRjaCAoZSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBwYXRoIEM6XFxVc2Vyc1xcIG9yIFxcU3lzdGVtXFxldGNcblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0aWYgKCF0aGlzLmhhc1NsYXNoZXMoY2xpcGJvYXJkVGV4dCkpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVVJMIHRocm93cyBlcnJvciBvbiBpbnZhbGlkIHVybFxuXHRcdFx0dHJ5XG5cdFx0XHR7XG5cdFx0XHRcdGxldCB1cmwgPSBuZXcgVVJMKCdmaWxlOi8vJyArIGNsaXBib2FyZFRleHQpO1xuXHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbih0aGlzLm1ha2VMaW5rKGNsaXBib2FyZFRleHQsIHVybC5ocmVmKSwgJ2Fyb3VuZCcpO1xuXHRcdFx0fSBjYXRjaCAoZSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIERvZXMgdGhlIHRleHQgaGF2ZSBhbnkgJ1xcJyBvciAnLyc/XG5cdCAqL1xuXHRoYXNTbGFzaGVzKHRleHQ6IHN0cmluZykge1xuXHRcdC8vIERvZXMgaXQgaGF2ZSBhbnkgJ1xcJyBvciAnLyc/XG5cdFx0Y29uc3QgcmVnZXhIYXNBbnlTbGFzaCA9IC8uKihbXFxcXFxcL10pLiovZztcblxuXHRcdGlmICh0eXBlb2YgdGV4dCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRsZXQgbWF0Y2hlcyA9IHRleHQubWF0Y2gocmVnZXhIYXNBbnlTbGFzaCk7XG5cdFx0cmV0dXJuICEhbWF0Y2hlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmltIHdoaXRlc3BhY2UgYW5kIHJlbW92ZSBzdXJyb3VuZGluZyBcIlxuXHQgKi9cblx0Y2xlYW51cFRleHQodGV4dDogc3RyaW5nKSB7XG5cdFx0aWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdHRleHQgPSB0ZXh0LnRyaW0oKTtcblxuXHRcdC8vIFJlbW92ZSBzdXJyb3VuZGluZyBcIlxuXHRcdGlmICh0ZXh0LnN0YXJ0c1dpdGgoJ1wiJykpIHtcblx0XHRcdHRleHQgPSB0ZXh0LnN1YnN0cigxKTtcblx0XHR9XG5cdFx0aWYgKHRleHQuZW5kc1dpdGgoJ1wiJykpIHtcblx0XHRcdHRleHQgPSB0ZXh0LnN1YnN0cigwLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZXh0O1xuXHR9XG5cblx0dG9nZ2xlTGluaygpIHtcblx0XHRsZXQgZWRpdG9yID0gdGhpcy5nZXRFZGl0b3IoKTtcblx0XHRpZiAoZWRpdG9yID09IG51bGwgfHwgIWVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcblx0XHRzZWxlY3RlZFRleHQgPSB0aGlzLmNsZWFudXBUZXh0KHNlbGVjdGVkVGV4dCk7XG5cblx0XHQvLyBmaWxlIHVybCBmb3IgbmV0d29yayBsb2NhdGlvbiBmaWxlOi8vXFxcXGxvY2F0aW9uXG5cdFx0Ly8gV29ya3MgZm9yIGJvdGggJ2ZpbGU6Ly8vXFxcXHBhdGgnIGFuZCAnZmlsZTovLy8lNUMlNUNwYXRoJ1xuXHRcdC8vIE9ic2lkaWFuIHVzZXMgZXNjYXBlIGNoYXJzIGluIGxpbmsgc28gYGZpbGU6Ly8vXFxcXGxvY2F0aW9uYCB3aWxsIHRyeSB0byBvcGVuIGBmaWxlOi8vL1xcbG9jYXRpb24gaW5zdGVhZFxuXHRcdC8vIEJ1dCB0aGUgc2VsZWN0ZWQgdGV4dCB3ZSBnZXQgY29udGFpbnMgdGhlIGZ1bGwgc3RyaW5nLCB0aHVzIHRoZSB0ZXN0IGZvciBib3RoIDIgYW5kIDQgJ1xcJyBjaGFyc1xuXHRcdGlmIChcblx0XHRcdHNlbGVjdGVkVGV4dC5zdGFydHNXaXRoKCdmaWxlOi8vL1xcXFxcXFxcJykgfHxcblx0XHRcdHNlbGVjdGVkVGV4dC5zdGFydHNXaXRoKCdmaWxlOi8vL1xcXFxcXFxcXFxcXFxcXFwnKSB8fFxuXHRcdFx0c2VsZWN0ZWRUZXh0LnN0YXJ0c1dpdGgoJ2ZpbGU6Ly8vJTVDJTVDJylcblx0XHQpIHtcblx0XHRcdC8vIG5vcm1hbGl6ZSB0byAnZmlsZTovLy8nXG5cdFx0XHRzZWxlY3RlZFRleHQgPSBzZWxlY3RlZFRleHQucmVwbGFjZSgnZmlsZTovLy9cXFxcXFxcXFxcXFxcXFxcJywgJ2ZpbGU6Ly8vJyk7XG5cdFx0XHRzZWxlY3RlZFRleHQgPSBzZWxlY3RlZFRleHQucmVwbGFjZSgnZmlsZTovLy9cXFxcXFxcXCcsICdmaWxlOi8vLycpO1xuXHRcdFx0c2VsZWN0ZWRUZXh0ID0gc2VsZWN0ZWRUZXh0LnJlcGxhY2UoJ2ZpbGU6Ly8vJTVDJTVDJywgJ2ZpbGU6Ly8vJyk7XG5cblx0XHRcdGxldCB1cmwgPSBmaWxlVXJpVG9QYXRoKHNlbGVjdGVkVGV4dCk7XG5cblx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0Ly8gZmlsZVVyaVRvUGF0aCByZXR1cm5zIG9ubHkgc2luZ2xlIGxlYWRpbmcgJ1xcJyBzbyB3ZSBuZWVkIHRvIGFkZCB0aGUgc2Vjb25kIG9uZVxuXHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbignXFxcXCcgKyB1cmwsICdhcm91bmQnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gZmlsZSBsaW5rIGZpbGU6Ly8vQzovVXNlcnNcblx0XHRlbHNlIGlmIChzZWxlY3RlZFRleHQuc3RhcnRzV2l0aCgnZmlsZTovLy8nKSkge1xuXHRcdFx0bGV0IHVybCA9IGZpbGVVcmlUb1BhdGgoc2VsZWN0ZWRUZXh0KTtcblxuXHRcdFx0aWYgKHVybCkge1xuXHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbih1cmwsICdhcm91bmQnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gbmV0d29yayBwYXRoICdcXFxccGF0aCdcblx0XHRlbHNlIGlmIChzZWxlY3RlZFRleHQuc3RhcnRzV2l0aCgnXFxcXFxcXFwnKSkge1xuXHRcdFx0bGV0IGVuZHNXaXRoU2xhc2ggPVxuXHRcdFx0XHRzZWxlY3RlZFRleHQuZW5kc1dpdGgoJ1xcXFwnKSB8fCBzZWxlY3RlZFRleHQuZW5kc1dpdGgoJy8nKTtcblx0XHRcdC8vIFVSTCB0aHJvd3MgZXJyb3Igb24gaW52YWxpZCB1cmxcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxldCB1cmwgPSBuZXcgVVJMKHNlbGVjdGVkVGV4dCk7XG5cblx0XHRcdFx0bGV0IGxpbmsgPSB1cmwuaHJlZi5yZXBsYWNlKCdmaWxlOi8vJywgJ2ZpbGU6Ly8vJTVDJTVDJyk7XG5cdFx0XHRcdGlmIChsaW5rLmVuZHNXaXRoKCcvJykgJiYgIWVuZHNXaXRoU2xhc2gpIHtcblx0XHRcdFx0XHRsaW5rID0gbGluay5zbGljZSgwLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihsaW5rLCAnYXJvdW5kJyk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGF0aCBDOlxcVXNlcnNcXCBvciBcXFN5c3RlbVxcZXRjXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIXRoaXMuaGFzU2xhc2hlcyhzZWxlY3RlZFRleHQpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVVJMIHRocm93cyBlcnJvciBvbiBpbnZhbGlkIHVybFxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bGV0IHVybCA9IG5ldyBVUkwoJ2ZpbGU6Ly8nICsgc2VsZWN0ZWRUZXh0KTtcblx0XHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24odXJsLmhyZWYsICdhcm91bmQnKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9udW5sb2FkKCkge1xuXHRcdGNvbnNvbGUubG9nKCdVbmxvYWRpbmcgcGx1Z2luIEZpbGVQYXRoVG9VcmkuLi4nKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbInBhdGhfMSIsIk1hcmtkb3duVmlldyIsImNsaXBib2FyZCIsImZpbGVVcmlUb1BhdGgiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFD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
