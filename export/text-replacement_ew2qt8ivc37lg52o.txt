# Text Replacement

![TextReplacement](https://user-images.githubusercontent.com/43663476/152093082-5a6df76f-c1f1-45fa-a38a-d03f57a93c8f.png)

## Declare a Personalized Vocabulary across Apple’s OSs with Text Replacement.

<!--more-->

If you’re like me, your cumulative experience of typing on iPhones for more than a decade is probably saturated with needlessly disruptive, unsolicited, and inaccurate autocorrection. Certain proper nouns and a dozen or so quasi-localized dialectal terms in our day-to-day writing/speech have been treated by the system's autocorrect as foreign objects, regardless of how frequently we use them. Technically, this isn't supposed to happen, but - if you've got the patience and the time - there's a native feature across iOS, iPadOS, and macOS that allows you to declare your own user dictionary called [Text Replacement](https://support.apple.com/guide/iphone/use-text-replacements-iph6d01d862/ios).

https://youtube.com/watch?v=4Pu4VCiApMU

You can find the Text Replacement menu on iOS - as pictured in the screenshot embedded above - by navigating to `General ⇨ Keyboard ⇨ Text Replacement` or (maybe) by tapping [this link](prefs:root=General&path=Keyboard/USER_DICTIONARY). If you think you might use it often, I'd suggest installing [**this Siri Shortcut**](https://www.icloud.com/shortcuts/e6d56b3fe8bc40639a60f166315f255b) I created that navigates directly to the Text Replacement menu. To be honest, I’ve no idea what you’ll find there if you’ve never created a single entry and - since there’s no way to import or export from the menu - I’m not willing to delete all of mine to find out. 

![TextReplacementEntry](https://user-images.githubusercontent.com/43663476/152147580-9054ee94-7e04-4895-be1c-b0ca4209fd75.png)

Tap the plus (+) symbol in the upper right hand corner of this menu and you should find yourself on a screen identical to the one shown in the screenshot embedded above, with two text entry fields labeled `Phrase` and `Shortcut`. To simply define a phrase - like “Extratone,” for instance, we needn’t actually use the latter, though I almost always do. I *would* suggest making two entries for those terms that aren’t always lowercase/uppercase - `Extratone` and `extratone`.

My suggestion: you needn’t waste too much time sitting and noodling over potential entries. Instead, try to notice the next time you encounter a frustrating misapplication of autocorrect. Add the Siri Shortcut I shared above to your homescreen so that you can quickly access the menu in this situation. Adding a single word shouldn’t take you more than a few seconds, this way.

Here’s [the result](https://gist.github.com/extratone/3c7788e41d32958a04a2ab693fe0512c) of my continuing this practice for the past few years:

https://gist.github.com/extratone/3c7788e41d32958a04a2ab693fe0512c

## Text Expansion

The goal of this guide was to help those experiencing repeated incorrect autocorrect actions, but Text Replacement’s explicit purpose is also worth consideration. Similar in function to a favorite third-party app of mine called [Text Expander](https://apps.apple.com/us/app/textexpander-keyboard/id1075927186), you can also use Text Replacement to create text shortcuts to lengthy/tedious/otherwise difficult to replicate text strings. This includes emojis! As you’ll note in the Gist embedded above, my typing out moyai with replace the text “moyai” with “🗿.” In order to escape the shortcut and simply print the word “moyai,” all I need to do is tap the `esc` key on my keyboard or the `x` in the upper right hand corner of the autocorrect object. See this demonstrated in [my video guide](https://youtu.be/4Pu4VCiApMU) and/or [the GIF embedded below](https://imgur.com/gallery/K3EWBqh):

https://imgur.com/gallery/K3EWBqh

What I forgot to mention in the video is that the Text Replacement dictionary is persistent by default across iOS, iPadOS, and macOS via iCloud. You’ll find the menu in the last one at `System Preferences ⇨ Keyboard ⇨ Text`.

![Text Menu in macOS](https://user-images.githubusercontent.com/43663476/152279207-96d4b8e2-2cd6-4393-a4fe-8f61abb0ab93.png)

From here, you can actually Select All and drag the contents of the text menu to Finder, which will result in a file entitled `Text Substitutions.plist.` Technically, this *does* allow one to back up their Text Replacement configuration, although actually *restoring* said backup would have to be done by hand, term by term.

https://imgur.com/gallery/EeTksyI

https://twitter.com/atnbueno/status/1506348606374170635

<!--comment-->

#software #configuration