# SI on Discord Regarding Objective-C and Swift

* [Original Post](https://discord.com/channels/836622115435184162/837345707395907635/898349119725269053)

In the case of Tweetbot and Drafts, they have been around long enough that they simply were originally written in Objective-C (because Swift wasn’t a thing yet) - but they both contain some parts in Swift (especially Drafts).

It’s important to note that Swift, Objective-C and C are interoperable, meaning you can use them together without much effort. So it doesn’t really matter (though a well written purely C app will probably perform better than a well written Swift app, but writing a well written C app is harder)

This isn’t the case with other languages, like for example JavaScript, since it requires a JavaScript engine (written in C, probably) to run the code. That’s also the reason why Electron apps usually use more resources, etc.

> hey thank you! I did not know that regular C was also tossed into the mix. I suppose I was asking under the narrative context of iOS’ transition to Swift from  Objective-C. when I asked the Tapbots guys about whether or not Tweetbot was written in Objective-C, they responded as if there was no other way for them… as if Swift is icky. idk I could have misinterpreted.
>
> I was also under the impression that Tweetbot 6 was entirely rewritten from scratch… in Objective-C. which seems like a very opinionated choice.

You’re welcome ☺️ Happy to share my knowledge <:goodstat:879872135068262401> Different developers have different preferences and usually care deeply about the way they like to work - so it’s very possible you interpreted them correctly 😅

Even if it was rewritten from scratch in Objective-C, it’s not purely Objective-C, since the widgets for example can only be written in Swift (and SwiftUI, not UIKit)

> ah yes… I believe Widgets were The Great Compromise if I remember the Tweets.

When writing native apps for Apple platforms, you use Apple’s native frameworks, which are AppKit (for macOS), UIKit (for iOS/iPadOS) and SwiftUI (everywhere, but not that great now 😅) - AppKit and UIKit are available in both Objective-C and Swift, without a difference in the API regardless of what you prefer to write in (there are differences between AppKit and UIKit, but not between the Objective-C vs Swift version of UIKit) Swift. SwiftUI is Swift only.

And while having your codebase in just one language is easier to maintain - you rarely see “pure” apps, especially for Apple platforms - and even more when they exist for a long time, or are big in scope 😉 

Two things that sum this up - The user comes first, preference for tools later. And when it comes to tools, you should pick the right tool for the job  😉

So even if they don’t like Swift and prefer to avoid it where possible - they would use it if it means that not using it will hurt the user’s experience 😉

