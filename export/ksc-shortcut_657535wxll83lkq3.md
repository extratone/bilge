# Quick Key Command Formatting with ksc and Siri Shortcuts

![Key Command Formatting with ksc](https://i.snap.as/H5hUOetX.png)

<!--more-->

During the course of [my iPhone Keyboarding project](https://uikeycommand.com), I managed to discover "a command line tool to document and describe keyboard shortcuts in a standardized and properly formatted way" called [ksc](https://github.com/kotfu/ksc). It's a Python utility that translates natural-language-formatted keyboard commands "command control q" into symbolized and standardized form: `⌃+⌘+Q`. Though it's not of particular use to me at this point, with my now well-established [Text Replacements](https://bilge.world/text-replacement) and [TextExpander Snippets](https://app.textexpander.com/public/14093096578d4f40eeea15649f5cefbb), I realized - being a Python thing - that ksc might work with the iOS/iPadOS shell emulator, [a-Shell](https://apps.apple.com/us/app/a-shell/id1473805438), and therefore, that a Siri Shortcut for converting plain language input to formatted key commands might be a cinch, and it was!

![pip install ksc](https://i.snap.as/OrSPAgJa.png)

## Requirements

1. [a-Shell for iOS/iPadOS](https://apps.apple.com/us/app/a-shell/id1473805438) (Free)
2. [Actions for iOS/iPadOS](https://apps.apple.com/us/app/a-shell/id1473805438) (Also free)
3. [ksc](https://github.com/kotfu/ksc) installed in a-Shell (Which should be as easy as `pip install ksc`)

Using an [Ask For Input](https://www.matthewcassinelli.com/actions/ask-for-input/) action, my shortcut will prompt you to enter a natural language keyboard command. For the fullest explanation of supported inputs, see [ksc's documentation](https://github.com/kotfu/ksc/blob/main/README.md). Your inputted command will be "transformed" via Actions' action into "dash-case" and placed within a command in the following format:

```
ksc -ms -p command(Pre-Transformation Text) > Transformed Text.txt
```

By default, the arguments `-ms` and `-p` are included, but these are entirely optional. From said docs:

> There are several command line options to modify the output. The `-ms` or
> `--modifier-symbols` options output the modifers as unicode symbols:
> 
>     $ ksc -ms shift command u
>     ⇧⌘U
> 
> Apple says you should include a plus sign between symbols, but I think that it looks
> ugly, so that's not the default. If you want it, add the `-p` or `--plus-sign` when
> using `-ms`:
> 
>     $ ksc -ms -p shift command u
>     ⇧+⌘+U

Creating a text file for each command within a-Shell may not be Best Practices, per se, but it's the simplest method I've found of reliably retrieving text back from the app within Siri Shortcuts. That said, the above command creates a text file containing the formatted output. A `Get File` a-Shell action paired with a [Get Text From Input](https://www.matthewcassinelli.com/actions/get-text-from-input/) native action then retrieves the file contents, which is first cleaned up via another Actions action (trimming leading and trailing whitespace) before being copied to the system clipboard.

[**Download my Key Command Formatting shortcut on RoutineHub**](https://routinehub.co/shortcut/12442).

<!--comment-->

#software #automation