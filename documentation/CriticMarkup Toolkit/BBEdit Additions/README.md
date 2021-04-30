# CriticMarkup toolkit for BBEdit

To install the CriticMarkup toolkit for BBEdit, copy `CriticMarkup.bbpackage` to the `Library/Application Support/BBEdit/Packages` folder in your home folder, then restart BBEdit.

If your BBEdit version doesn't support Packages, or you prefer to manually install some or all of the toolkit, right-click or option-click `CriticMarkup.bbpackage` and click `Show Package Contents`. In the Contents folder, copy each folder's contents to the corresponding folders in your `Library/Application Support/BBEdit/` folder.

## Clippings

The CriticMarkup toolkit adds clippings that insert CriticMarkup tags in text, either at the cursor's location or selected text.

- For the substitution, deletion or highlight marks, select some text then double-click the appropriate clipping in the Markdown clippings palette.
- For the insertion or comment marks, place the cursor at the appropriate place in the text and click the appropriate clipping in the Markdown clippings palette.

To assign keyboard shortcuts to each of the clippings:

1. Open the Clippings palette (**Windows** &rarr; **Palettes** &rarr; **Clippings**).
2. Click the Clipping for which you want to set a keyboard shortcut.
3. Click the Set Shortcut button at the top right of the palette.
4. Enter your preferred keyboard shortcut.
  - Control key combinations are largely unused in BBEdit (with the exception of `control-s`, which is used for progressive search).

## Find Next/Previous CriticMarkup Scripts

These scripts help you move between CriticMarkup tags in a file. Each script selects both the opening and closing CriticMarkup tags as well as any contained text. You can change this behavior by opening the scripts inside `CriticMarkup.bbpackage` with an AppleScript editor and removing `with selecting match` from the end of the `find` command.

If a script reaches the end of the file without finding a tag, it wraps around to the top of the file and continues searching. To change this behavior, open the scripts in an AppleScript editor and change `wrap around:true` to `wrap around:false`.

To assign keyboard shortcuts to each of the scripts:

1. Open BBEdit's preferences (**BBEdit&& &rarr; **Preferences**).
2. Access the Scripts keyboard shortcut preferences (**Menus & Shortcuts** &rarr; **Scripts**).
3. Double-click the grayed-out "none" or any existing keyboard shortcut next to each script.
4. Enter your preferred keyboard shortcut.

Control key combinations are largely unused in BBEdit (with the exception of `control-s`, which is used for progressive search).

## Text Filters 

The CriticMarkup toolkit's text filters (**Text menu** &rarr; **Apply Text Filter** &rarr; **Accept CMark and Reject CMark**) make it easy to accept or reject CriticMarkup tags in a file. With keyboard shortcuts, you can rule on each successive tag automatically without scrolling or manually moving the cursor through the file.

To assign keyboard shortcuts to each of the filters:

1. Open BBEdit's preferences (**BBEdit&& &rarr; **Preferences**).
2. Access the Text Filter keyboard shortcut preferences (**Menus & Shortcuts** &rarr; **Text** &rarr; **Apply Text Filter**).
3. Double-click the grayed-out "none" or any existing keyboard shortcut next to each Text Filter.
4. Enter your preferred keyboard shortcut.
  - Control key combinations are largely unused in BBEdit (with the exception of `control-s`, which is used for progressive search).
