# Generate Shortcuts Run Links List Shortcut

- [GitHub Issue](https://github.com/extratone/i/issues/158)
- [**RoutineHub Page**](https://routinehub.co/shortcut/11143)
- [iCloud Share Link](https://www.icloud.com/shortcuts/3539553cdc0148d69667b5bcc29482be)
- [Showcuts](https://showcuts.app/share/view/3539553cdc0148d69667b5bcc29482be)

## Social
- [r/Shortcuts](https://www.reddit.com/r/shortcuts/comments/sxoixe/generate_an_unordered_list_of_titled_markdown/)
- [Siri Shortcuts Community](https://twitter.com/NeoYokel/status/1495676749031608323?s=20&t=dKvyGMvFpqq7qlE-FMD4kQ)
- [Telegram](https://t.me/extratone/10361)

---

## Generate an unordered list of titled markdown links to run each shortcut in a specified shortcuts folder.

### Requirements
- [Text Case for iOS](https://apps.apple.com/us/app/text-case/id1492174677)
- [Data Jar for iOS](https://apps.apple.com/us/app/data-jar/id1453273600) (More or less optional.)
 
This shortcut generates an unordered markdown list (-) of markdown-formatted links to run one’s shortcuts using `shortcuts://x-callback-url/run-shortcut?name=`, optionally stores the titled links in a Data Jar List, and copies the result to the clipboard. At least for the moment, it is limited to running *on* a remote Mac using a `Run Script Over SSH` action *from* a local iOS-running device.

Theoretically, it could be accomplished using the native [URL Encode action](https://www.matthewcassinelli.com/actions/url-encode/) instead of [Text Case for iOS](https://apps.apple.com/us/app/text-case/id1492174677), but - after several hours’ worth of configuring and re-configuring, I was unable to get the former to produce reliable results. 

- [Source (XML)](https://github.com/extratone/i/blob/main/shortcuts/Generate%20Shortcuts%20Run%20Links%20List.xml)
- [Source (JSON)](https://github.com/extratone/i/blob/main/shortcuts/Generate%20Shortcuts%20Run%20Links%20List.json)
- [Web Review (HTML)](https://github.com/extratone/i/blob/main/shortcuts/Generate%20Shortcuts%20Run%20Links%20List.html)
- [File](https://github.com/extratone/i/raw/main/shortcuts/Generate%20Shortcuts%20Run%20Links%20List.shortcut)