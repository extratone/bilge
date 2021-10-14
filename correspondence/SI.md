# SI on Discord Regarding Objective-C and Swift

* [Original Post](https://discord.com/channels/836622115435184162/837345707395907635/898349119725269053)

In the case of Tweetbot and Drafts, they have been around long enough that they simply were originally written in Objective-C (because Swift wasn’t a thing yet) - but they both contain some parts in Swift (especially Drafts).

It’s important to note that Swift, Objective-C and C are interoperable, meaning you can use them together without much effort. So it doesn’t really matter (though a well written purely C app will probably perform better than a well written Swift app, but writing a well written C app is harder)

This isn’t the case with other languages, like for example JavaScript, since it requires a JavaScript engine (written in C, probably) to run the code. That’s also the reason why Electron apps usually use more resources, etc.

> hey thank you! I did not know that regular C was also tossed into the mix. I suppose I was asking under the narrative context of iOS’ transition to Swift from  Objective-C. when I asked the Tapbots guys about whether or not Tweetbot was written in Objective-C, they responded as if there was no other way for them… as if Swift is icky. idk I could have misinterpreted.
> I was also under the impression that Tweetbot 6 was entirely rewritten from scratch… in Objective-C. which seems like a very opinionated choice.

You’re welcome ☺️ Happy to share my knowledge <:goodstat:879872135068262401> Different developers have different preferences and usually care deeply about the way they like to work - so it’s very possible you interpreted them correctly 😅

Even if it was rewritten from scratch in Objective-C, it’s not purely Objective-C, since the widgets for example can only be written in Swift (and SwiftUI, not UIKit)