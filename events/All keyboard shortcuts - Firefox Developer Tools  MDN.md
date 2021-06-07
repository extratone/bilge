# "All keyboard shortcuts - Firefox Developer Tools | MDN"

*07-06-2021 15:08* 

> This page lists all keyboard shortcuts used by the developer tools built into Firefox.
This page lists all keyboard shortcuts used by the developer tools built into Firefox.

The first section lists the shortcut for opening each tool and the second section lists shortcuts that are applicable to the Toolbox itself. After that there's one section for each tool, which lists the shortcuts that you can use within that tool.

Because access keys are locale-dependent, they're not documented in this page.

These shortcuts work in the main browser window to open the specified tool. The same shortcuts will work to close tools hosted in the Toolbox, if the tool is active. For tools like the Browser Console that open in a new window, you have to close the window to close the tool.

**Command**

**Windows**

**macOS**

**Linux**

Open Toolbox (with the most recent tool activated)

Ctrl + Shift + I

Cmd + Opt + I

Ctrl + Shift + I

Bring Toolbox to foreground (if the Toolbox is in a separate window and not in foreground)

Ctrl + Shift + I or F12

Cmd + Opt + I or F12

Ctrl + Shift + I or F12

Close Toolbox (if the Toolbox is in a separate window and in foreground)

Ctrl + Shift + I or F12

Cmd + Opt + I or F12

Ctrl + Shift + I or F12

Open Web Console [**1**](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#opening-closing-web-console-note)

Ctrl + Shift + K

Cmd + Opt + K

Ctrl + Shift + K

Toggle "Pick an element from the page" (opens the Toolbox and/or focus the Inspector tab)

Ctrl + Shift + C

Cmd + Opt + C

Ctrl + Shift + C

Open Style Editor

Shift + F7

Shift + F7 [\*](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#mac-function-key-note)

Shift + F7

Open Profiler

Shift + F5

Shift + F5 [\*](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#mac-function-key-note)

Shift + F5

Open Network Monitor [**2**](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#opening-closing-network-monitor-note)

Ctrl + Shift + E

Cmd + Opt + E

Ctrl + Shift + E

Toggle Responsive Design Mode

Ctrl + Shift + M

Cmd + Opt + M

Ctrl + Shift + M

Open Browser Console

Ctrl + Shift + J

Cmd + Shift + J

Ctrl + Shift + J

Open Browser Toolbox

Ctrl + Alt + Shift + I

Cmd + Opt + Shift + I

Ctrl + Alt + Shift + I

Open Scratchpad

Shift + F4

Shift + F4 [\*](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#mac-function-key-note)

Shift + F4

Open WebIDE

Shift + F8

Shift + F8 [\*](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#mac-function-key-note)

Shift + F8

Storage Inspector

Shift + F9

Shift + F9 [\*](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#mac-function-key-note)

Shift + F9

Open Debugger **[3](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#opening-closing-debugger)**

Ctrl + Shift + Z

Cmd + Opt + Z

Ctrl + Shift + Z

1. Unlike the other toolbox-hosted tools, this shortcut does not also close the Web Console. Instead, it focuses on the Web Console's command line. To close the Web Console, use the global toolbox shortcut of Ctrl + Shift + I (Cmd + Opt + I on a Mac).

2. Before Firefox 55, the keyboard shortcut was Ctrl + Shift + Q (Cmd + Opt + Q on a Mac).

3. Starting in Firefox 71. Before Firefox 66, the letter in this shortcut was S.

Keyboard shortcuts for the [Toolbox](https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox#toolbox).

## [Source editor](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#source_editor "Permalink to Source editor")

This table lists the default shortcuts for the source editor.

In the [Editor Preferences](https://developer.mozilla.org/en-US/docs/Tools/Settings#editor_preferences) section of the developer tools settings, you can choose to use Vim, Emacs, or Sublime Text key bindings instead.

To select these, visit `about:config`, select the setting `devtools.editor.keymap`, and assign "vim" or "emacs", or "sublime" to that setting. If you do this, the selected bindings will be used for all the developer tools that use the source editor. You need to reopen the editor for the change to take effect.

From Firefox 33 onwards, the key binding preference is exposed in the [Editor Preferences](https://developer.mozilla.org/en-US/docs/Tools/Settings#editor_preferences) section of the developer tools settings, and you can set it there instead of `about:config`.

Command

Windows

macOS

Linux

Go to line

Ctrl + J, Ctrl + G

Cmd + J, Cmd + G

Ctrl + J, Ctrl + G

Find in file

Ctrl + F

Cmd + F

Ctrl + F

Select all

Ctrl + A

Cmd + A

Ctrl + A

Cut

Ctrl + X

Cmd + X

Ctrl + X

Copy

Ctrl + C

Cmd + C

Ctrl + C

Paste

Ctrl + V

Cmd + V

Ctrl + V

Undo

Ctrl + Z

Cmd + Z

Ctrl + Z

Redo

Ctrl + Shift + Z / Ctrl + Y

Cmd + Shift + Z / Cmd + Y

Ctrl + Shift + Z / Ctrl + Y

Indent

Tab

Tab

Tab

Unindent

Shift + Tab

Shift + Tab

Shift + Tab

Move line(s) up

Alt + Up

Alt + Up

Alt + Up

Move line(s) down

Alt + Down

Alt + Down

Alt + Down

Comment/uncomment line(s)

Ctrl + /

Cmd + /

Ctrl + /

## [Page Inspector](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#page_inspector "Permalink to Page Inspector")

Keyboard shortcuts for the [Page inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector).

Command

Windows

macOS

Linux

Inspect Element

Ctrl + Shift + C

Cmd + Shift + C

Ctrl + Shift + C

### Node picker

These shortcuts work while the [node picker](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Select_an_element#with_the_node_picker) is active.

Command

Windows

macOS

Linux

Select the element under the mouse and cancel picker mode

Click

Click

Click

Select the element under the mouse and stay in picker mode

Shift+Click

Shift+Click

Shift+Click

### HTML pane

These shortcuts work while you're in the [Inspector's HTML pane](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML).

Command

Windows

macOS

Linux

Delete the selected node

Delete

Delete

Delete

Undo delete of a node

Ctrl + Z

Cmd + Z

Ctrl + Z

Redo delete of a node

Ctrl + Shift + Z / Ctrl + Y

Cmd + Shift + Z / Cmd + Y

Ctrl + Shift + Z / Ctrl + Y

Move to next node (expanded nodes only)

Down arrow

Down arrow

Down arrow

Move to previous node

Up arrow

Up arrow

Up arrow

Move to first node in the tree.

Home

Home

Home

Move to last node in the tree.

End

End

End

Expand currently selected node

Right arrow

Right arrow

Right arrow

Collapse currently selected node

Left arrow

Left arrow

Left arrow

(When a node is selected) move inside the node so you can start stepping through attributes.

Enter

Return

Enter

Step forward through the attributes of a node

Tab

Tab

Tab

Step backward through the attributes of a node

Shift + Tab

Shift + Tab

Shift + Tab

(When an attribute is selected) start editing the attribute

Enter

Return

Enter

Hide/show the selected node

H

H

H

Focus on the search box in the HTML pane

Ctrl + F

Cmd + F

Ctrl + F

Edit as HTML

F2

F2

F2

Stop editing HTML

F2 / Ctrl +Enter

F2 / Cmd + Return

F2 / Ctrl + Enter

Copy the selected node's outer HTML

Ctrl + C

Cmd + C

Ctrl + C

Scroll the selected node into view

S

S

S

Find the next match in the markup, when searching is active

Enter

Return

Enter

Find the previous match in the markup, when searching is active

Shift + Enter

Shift + Return

Shift + Enter

These shortcuts work when the [breadcrumbs bar](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#html_breadcrumbs) is focused.

Command

Windows

macOS

Linux

Move to the previous element in the breadcrumbs bar 

Left arrow

Left arrow

Left arrow

Move to the next element in the breadcrumbs bar 

Right arrow

Right arrow

Right arrow

Focus the [HTML pane](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/UI_Tour#html_pane)

Shift + Tab

Shift + Tab

Shift + Tab

Focus the [CSS pane](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/UI_Tour#css_pane)

Tab

Tab

Tab

### CSS pane

These shortcuts work when you're in the [Inspector's CSS pane](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS).

Command

Windows

macOS

Linux

Focus on the search box in the CSS pane

Ctrl + F

Cmd + F

Ctrl + F

Clear search box content (only when the search box is focused, and content has been entered)

Esc

Esc

Esc

Step forward through properties and values

Tab

Tab

Tab

Step backward through properties and values

Shift + Tab

Shift + Tab

Shift + Tab

Start editing property or value (Rules view only, when a property or value is selected, but not already being edited)

Enter or Space

Return or Space

Enter or Space

Cycle up and down through auto-complete suggestions (Rules view only, when a property or value is being edited)

Up arrow , Down arrow

Up arrow , Down arrow

Up arrow , Down arrow

Choose current auto-complete suggestion (Rules view only, when a property or value is being edited)

Enter or Tab

Return or Tab

Enter or Tab

Increment selected value by 1

Up arrow

Up arrow

Up arrow

Decrement selected value by 1

Down arrow

Down arrow

Down arrow

Increment selected value by 100

Shift + Page Up

Shift + Page Up

Shift + Page Up

Decrement selected value by 100

Shift + Page Down

Shift + Page Down

Shift + Page Down

Increment selected value by 10

Shift + Up arrow

Shift + Up arrow

Shift + Up arrow

Decrement selected value by 10

Shift + Down arrow

Shift + Down arrow

Shift + Down arrow

Increment selected value by 0.1

Alt + Up arrow (Ctrl + Up arrow from Firefox 60 onwards.)

Alt + Up arrow

Alt + Up arrow (Ctrl + Up arrow from Firefox 60 onwards.)

Decrement selected value by 0.1

Alt + Down arrow (Ctrl + Down arrow from Firefox 60 onwards).

Alt + Down arrow

Alt + Down arrow (Ctrl + Down arrow from Firefox 60 onwards).

Show/hide more information about current property (Computed view only, when a property is selected)

Enter or Space

Return or Space

Enter or Space

Open MDN reference page about current property (Computed view only, when a property is selected)

F1

F1

F1

Open current CSS file in Style Editor (Computed view only, when more information is shown for a property and a CSS file reference is focused).

Enter

Return

Enter

## [Debugger](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#debugger "Permalink to Debugger")

Keyboard shortcuts for the [Firefox JavaScript Debugger](https://developer.mozilla.org/en-US/docs/Tools/Debugger).

Command

Windows

macOS

Linux

Close current file

Ctrl + W

Cmd + W

Ctrl + W

Search for a string in the current file

Ctrl + F

Cmd + F

Ctrl + F

Search for a string in all files

Ctrl + Shift + F

Cmd + Shift + F

Ctrl + Shift + F

Find next in the current file

Ctrl + G

Cmd + G

Ctrl + G

Search for scripts by name

Ctrl + P

Cmd + P

Ctrl + P

Resume execution when at a breakpoint

F8

F8 [1](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#mac-function-key-note)

F8

Step over

F10

F10 [1](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#mac-function-key-note)

F10

Step into

F11

F11 [1](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#mac-function-key-note)

F11

Step out

Shift + F11

Shift + F11 [1](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#mac-function-key-note)

Shift + F11

Toggle breakpoint on the currently selected line

Ctrl + B

Cmd + B

Ctrl + B

Toggle conditional breakpoint on the currently selected line

Ctrl + Shift + B

Cmd + Shift + B

Ctrl + Shift + B

1. By default, on some Macs, the function key is remapped to use a special feature: for example, to change the screen brightness or the volume. See this [guide to using these keys as standard function keys](https://support.apple.com/kb/HT3399). To use a remapped key as a standard function key, hold the Function key down as well (so to open the Profiler, use Shift + Function + F5).

#### Note

Before Firefox 66, the combination Ctrl + Shift + S on Windows and Linux or Cmd + Opt + S on macOS would open/close the Debugger. From Firefox 66 and later, this is no longer the case.

## [Web Console](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#web_console "Permalink to Web Console")

Keyboard shortcuts for the [Web Console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console).

Command

Windows

macOS

Linux

Open the Web Console

Ctrl + Shift + K

Cmd + Opt + K

Ctrl + Shift + K

Search in the message display pane

Ctrl + F

Cmd + F

Ctrl + F

Open the [object inspector pane](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Rich_output#examining_object_properties)

Ctrl + Click

Ctrl + Click

Ctrl + Click

Clear the [object inspector pane](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Rich_output#examining_object_properties)

Esc

Esc

Esc

Focus on the command line

Ctrl + Shift + K

Cmd + Opt + K

Ctrl + Shift + K

Clear output

Ctrl + Shift + L

Ctrl + L

From Firefox 67:

Cmd + K

Ctrl + Shift + L

### Command line interpreter

These shortcuts apply when you're in the [command line interpreter](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/The_command_line_interpreter).

Command

Windows

macOS

Linux

Scroll to start of console output (only if the command line is empty)

Home

Home

Home

Scroll to end of console output (only if the command line is empty)

End

End

End

Page up through console output

Page up

Page up

Page up

Page down through console output

Page down

Page down

Page down

Go backward through [command history](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/The_command_line_interpreter#command_history)

Up arrow

Up arrow

Up arrow

Go forward through command history

Down arrow

Down arrow

Down arrow

Initiate reverse search through command history/step backwards through matching commands

F9

Ctrl + R

F9

Step forward through matching command history (after initiating reverse search)

Shift + F9

Ctrl + S

Shift + F9

Move to the beginning of the line

Home

Ctrl + A

Ctrl + A

Move to the end of the line

End

Ctrl + E

Ctrl + E

Execute the current expression

Enter

Return

Enter

Add a new line, for entering multiline expressions

Shift + Enter

Shift + Return

Shift + Enter

These shortcuts apply while the [autocomplete popup](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/The_command_line_interpreter#autocomplete) is open:

Command

Windows

macOS

Linux

Choose the current autocomplete suggestion

Tab

Tab

Tab

Cancel the autocomplete popup

Esc

Esc

Esc

Move to the previous autocomplete suggestion

Up arrow

Up arrow

Up arrow

Move to the next autocomplete suggestion

Down arrow

Down arrow

Down arrow

Page up through autocomplete suggestions

Page up

Page up

Page up

Page down through autocomplete suggestions

Page down

Page down

Page down

Scroll to start of autocomplete suggestions

Home

Home

Home

Scroll to end of autocomplete suggestions

End

End

End

## [Style Editor](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#style_editor "Permalink to Style Editor")

Keyboard shortcuts for the [Style editor](https://developer.mozilla.org/en-US/docs/Tools/Style_Editor).

Command

Windows

macOS

Linux

Open the Style Editor

Shift + F7

Shift + F7

Shift + F7

Open autocomplete popup

Ctrl + Space

Cmd + Space

Ctrl + Space

## [Scratchpad](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#scratchpad "Permalink to Scratchpad")

Command

Windows

macOS

Linux

Open the Scratchpad

Shift + F4

Shift + F4

Shift + F4

Run Scratchpad code

Ctrl + R

Cmd + R

Ctrl + R

Run Scratchpad code, display the result in the [object inspector](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Rich_output#examining_object_properties)

Ctrl + I

Cmd + I

Ctrl + I

Run Scratchpad code, insert the result as a comment

Ctrl + L

Cmd + L

Ctrl + L

Re-evaluate current function

Ctrl + E

Cmd + E

Ctrl + E

Reload the current page, then run Scratchpad code

Ctrl + Shift + R

Cmd + Shift + R

Ctrl + Shift + R

Save the pad

Ctrl + S

Cmd + S

Ctrl + S

Open an existing pad

Ctrl + O

Cmd + O

Ctrl + O

Create a new pad

Ctrl + N

Cmd + N

Ctrl + N

Close Scratchpad

Ctrl + W

Cmd + W

Ctrl + W

Pretty print the code in Scratchpad

Ctrl + P

Cmd + P

Ctrl + P

Show autocomplete suggestions

Ctrl + Space

Ctrl + Space

Ctrl + Space

Show inline documentation

Ctrl + Shift + Space

Ctrl + Shift + Space

Ctrl + Shift + Space

## [Eyedropper](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts#eyedropper "Permalink to Eyedropper")

Keyboard shortcuts for the [Eyedropper](https://developer.mozilla.org/en-US/docs/Tools/Eyedropper#keyboard_shortcuts).

Command

Windows

macOS

Linux

Select the current color

Enter

Return

Enter

Dismiss the Eyedropper

Esc

Esc

Esc

Move by 1 pixel

Arrow keys

Arrow keys

Arrow keys

Move by 10 pixels

Shift + arrow keys

Shift + arrow keys

Shift + arrow keys
***

==**15426**== Words

- **[All keyboard shortcuts - Firefox Developer Tools | MDN](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts)**
