# Speedy Frames

![Speedy Frames Web Banner](https://i.snap.as/ZnCTpWtH.png)

## Federico Viticci's Apple Frames shortcut, optimized for super fast single-shot iPhone mockups.

<!--more-->

The single element that's allowed me to go from publishing regular ole' iPhone screenshots to photorealistic mockups like you see embedded below is an absolutely ingenious, hugely powerful Siri shortcut by *MacStories* founder Federico Viticci called [Apple Frames](https://www.macstories.net/ios/apple-frames-2-0-faster-lighter-and-featuring-support-for-iphone-13-ipad-mini-ipad-10-2-imac-24-macbook-air-and-multiple-languages). Out of [all the shortcuts and workflows](https://raindrop.io/davidblue/siri-shortcuts-21598130) I've discovered, fiddled with, hoarded, and discarded since [iOS 12 beta](https://bilge.world/siri-shortcuts-ios12-review), I think I can definitively say that it remains the most impressive use of iOS automation, ever, for reasons you're likely not all that interested in. 

![Speedy Frames](https://i.snap.as/nszXla7t.png)

As it comes by default, [Apple Frames 2.0](https://www.icloud.com/shortcuts/d70654c055ee41bd8f72ebf0c29e0fa5) includes support for a whole bunch of languages and a broad spectrum of devices. Literally *every single step* is annotated with explanatory documentation, which represents hugely noble effort in and of itself. Its GUI selection menus, alone, allow for configuration of input and output targets and layout options (for multiple screenshots - horizontal, vertical, or in a grid.)

 *However*, this versatility means there *is* a wait involved. Emphasizing said wait (about 90 seconds from trigger to result for single-screen mockups on my 12 Pro Max) feels absolutely ridiculous considering how much longer it would take any other mockup generation method known to man to produce the same result, but a user like me - who's use of the shortcut is more often than not to generate mockups of a single screenshot I've probably just taken - might find themselves wishing they could set defaults for its menu selections and circumvent iOS' image picker and/or share sheet entirely. 

![Export Modifications](https://user-images.githubusercontent.com/43663476/147858980-5f54e915-cc2f-493d-b680-846ceea8f2d6.png)

And so... I did! With the new ability to edit shortcuts on macOS, it required far less time/trial-and-error grief for me to perform the modifications listed below without breaking the whole shortcut than I expected, certainly. 

## Modifications

1. I deleted all of the annotations in `Comment` form. They’re a testament to Federico’s diligence and huge contribution to personal automation with iOS… but they’re also just extra text.
2. I replaced the `Find Photos Where` action with `Get Latest Photos` with the `Include Screenshots` toggle ON and the retrieval limit set to just one. 
3. I deleted the entire export preferences menu and replaced it with actions that save the result both to a specific iCloud Photos folder for frames and a corresponding iCloud Drive folder.

![Local Frames Folder](https://i.snap.as/VXYQyfpe.png) 

The [**resulting shortcut**](https://routinehub.co/shortcut/10775) generates a mocked up version of the last screenshot taken on the host device and saves the image to a specified iCloud Photos album and iCloud Drive folder. (You will be asked to specify these upon installation.) In my experience so far, this process requires an average of ~5-7 seconds from trigger to result[^1] (vs 90+ seconds in Apple Frames 2.0's default configuration) and works fairly reliably *so long as one runs it immediately after taking the subject screenshot*. Note the incorrectly-oriented results in the screenshot of my own dedicated Frames album, above. I'm sure it doesn't actually have anything to do with the *duration* between capture and running the shortcut, but I'm not technically adept enough (nor particularly compelled) to determine the real cause. 

https://imgur.com/gallery/dwn4CnX

## Tapping Back

(You need only continue if you're interested in triggering the shortcut with [Back Tap](https://support.apple.com/en-us/HT211781).)

I must acknowledge that what I'm about to describe is *blatantly* hypocritical given how much bitching about consumer tech's excess I've been purveying, but - for the past few weeks of living with my Speedy Frames shortcut - I have committed 100% to mocking up *all* shared screenshots - even those sent to friends and family. Obviously, a native automation trigger fired by screen capture would be particularly handy, here, but if we're using Back Tap as a trigger, we could theoretically achieve the same end by inserting a `Take Screenshot` action at the beginning of the shortcut except... It doesn't work. I've no idea why, but such a setup *exclusively* produces incorrectly-oriented results.[^2] Anywho, mocking up every single screenshot you've *taken* is just that much more excessive than those you actually intend to *share*, in my mind.

https://youtu.be/SKc4OZa2W8o?t=74

For those like me who've found Back Tap physically confounding, I created [the video embedded above](https://youtu.be/SKc4OZa2W8o) to demonstrate the actual *mechanical* action required to trigger it.

https://twitter.com/neoyokel/status/1471883295042510859

I've left it set to `Double Tap` for the majority of the time and have found it suitable. If you find yourself *really enjoying* the sensation of tapping the back of your phone, you might even set `Triple Tap` to `Screenshot` so that you can create a mockup with just a series of 5 taps.

Technically, there is much optimization to be done beyond this point - if you're using an older device or find even five seconds too long a wait for your mockups, you might try trimming Speedy Frames further by removing unneeded device and language components. As always, if I can be of assistance or if ya just want to chat, please do [contact me](http://davidblue.wtf/db.vcf).

## Links

- [**RoutineHub Page**](https://routinehub.co/shortcut/10775/)
- [iCloud Share Link](https://www.icloud.com/shortcuts/0f089f2719824fffbf7d565f93df481d)
- [GitHub Issue](https://github.com/extratone/i/issues/117)
- [Source Files (GitHub)](https://github.com/extratone/i/tree/main/shortcuts/Speedy%20Frames)
- [Showcuts](https://showcuts.app/share/view/0f089f2719824fffbf7d565f93df481d)
- [ShareShortcuts](https://shareshortcuts.com/shortcuts/1557-speedy-frames.html)
- "[Apple Frames 2.0: Faster, Lighter, and Featuring Support for iPhone 13, iPad mini, iPad 10.2", iMac 24", MacBook Air, and Multiple Languages](https://www.macstories.net/ios/apple-frames-2-0-faster-lighter-and-featuring-support-for-iphone-13-ipad-mini-ipad-10-2-imac-24-macbook-air-and-multiple-languages/)" | *MacStories*

## 1.1 Update
`2-01-2022`
I added a [Delete Photos](https://www.matthewcassinelli.com/actions/delete-photos/) action that deletes the pre-mockup screenshot to reduce clutter. 

[1] My methods of timing and actual volume of data (read: repetitions) is far from scientific, just so you know. 
[2] As of iOS 15.3 Beta 1, anyway.

<!--comment-->

#software #automation #configuration