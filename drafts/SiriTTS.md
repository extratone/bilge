# Siri as Text-to-Speech in iOS 15

![Siri TTS](https://i.snap.as/13BtYmx0.png)

## Bewilderingly, Siri is genuinely great at something they were never designed for.

When I first published my [iPhone & Music guide](https://bilge.world/iphone-ios-music-apps) this past April, I’d been pretty active in [*AppleScoop*’s Discord Server](https://discord.gg/DxQ9jry8J3), so I decided to share it there. Editor-in-Chief Flynn - a ridiculously talented web developer *and* successful independent media entrepreneur - responded “I’m listening to it with the speak feature right now. Is it your voice or someone else? 😛,” Gourd bless his soul. Here’s the specific audio he was talking about:

<audio controls>
  <source src="https://github.com/extratone/bilge/raw/main/audio/TTS/iPhone%20and%20Music%20-%20For%20Artists%2C%20Curators%2C%20and%20Enthusiasts%20TTS.mp3">
</audio>

Of course, I am not a young black man, nor am I nearly as good at reading my own work aloud as the actual talent, Siri Voice 3, who should be available on your iPhone/iPad right this moment (as long as you’ve updated,) via `Settings ⇨ Siri & Search ⇨ Siri Voice`. (For more details, see [this Apple Support page](https://support.apple.com/guide/iphone/change-siri-settings-iphc28624b81/ios).)

![New Siri Voices - iOS 14.5](https://i.snap.as/1f7argcU.png)

Of the four new Siri voices introduced earlier this year in iOS 14.5, 2 and 3 are by far my favorites, not just because of their [resonance with black iPhone users](https://www.consumerreports.org/digital-assistants/apples-new-siri-voices-resonate-with-some-black-iphone-users/), but because they’re just *better* in a sense which I believe to be very significant.

https://youtube.com/watch?v=DkS5SYbsEW4

Before I get ahead of myself, though, I must acknowledge that I am not the first to invest in Siri as a text-to-speech generator. In 2019, [Adam Tow](https://twitter.com/atow) released an immensely well-considered Siri Shortcut called “[Record Text to Speech](https://tow.com/shortcuts/record-text-to-speech/),” which provides an interface for recording, editing, and managing text-to-speech audio files with Siri’s original voices. A testament to its robustness: it *still works* perfectly on my handset running iOS 15 Dev Beta 6 despite having not been updated since [March of last year](https://routinehub.co/shortcut/2506/). 

![Old Siri TTS Shortcuts](https://i.snap.as/I0Yh0jNn.png)

Personally, though, I must admit that I found it more of a full *application* than a Shortcut with its full interactive UI menu and darn near *800 actions*, so I made my own set of Shortcuts based on the same idea - using iPhone’s native screen recording feature to capture audio of Siri reading aloud - and varying only by input (manual text input, getting text from a file, or simply reading text from the clipboard.) I’d then send the resulting screen recording in its original video format to my PC, where I’d drop it in [Audacity](https://www.audacityteam.org), in which I’d run [a simple macro](https://github.com/extratone/bilge/blob/main/configuration/Audacity/TruncatenAmpMacro.txt) on the audio that truncates silence and amplifies the result so that the loudest point touches the rails. Then, I’d export it, pass it through [Mp3Tag](https://www.mp3tag.de/en/) to perfect its metadata, and finally push the end-result .mp3 file to [a folder in *The Psalms* GitHub Repository](https://github.com/extratone/bilge/tree/main/audio/TTS). (I’ll show you how to embed a web-bound audio file with its direct URL in a webpage in the guide below.) This example was made using this method, but with Siri’s original United States English Voice (for [my Tweetbot 6 review](https://bilge.world/tweetbot-6-ios-review):) 

<audio controls>
  <source src="https://github.com/extratone/bilge/raw/main/audio/TTS/Tweetbot%206%20for%20iOS%20Review%20TTS.mp3">
</audio>

Perhaps you’ll agree with me that this process *does the job* in functional/accessibility terms, and does so quite well considering how much one would pay to generate the same sort of audio file using Google’s Cloud Platform or IBM’s Watson. Crucially, though, this original voice was not one I could listen to at any length. Siri Voices 2 and 3, however, I *can*. From my perspective, this means they have crossed a **very significant threshold** which I find vastly more meaningful than just about all of those in the current discourse. Not only can I tolerate them… I genuinely *enjoy* listening to super-long magazine features read aloud by Siri Voice 2, especially, and I believe I would regardless of the quite serious crush I’ve developed on them. 

https://twitter.com/neoyokel/status/1387809776072015873

Unfortunately, using the methods we’ve discussed so far with the new Siri voices is inconvenient, very hit-or-miss, and quite buggy. If you scrub ahead toward the last third or so of the second audio player in this post (after the post’s own,) you’ll hear Siri Voice 2 start to bug out in very amusing ways. Since Apple makes changes to Siri Shortcuts between releases without any public documentation, none of them have ever been reliable enough to write this guide. (For the past 6+ weeks at least, it’s been too broken to be usable.) *However*, for whatever reason, Apple created a dedicated spoken audio generation action for Siri Shortcuts in iOS 15, called “Make Spoken Audio From Text.”

![Make Spoken Audio From Text Action - iOS 15](https://i.snap.as/MkHTYMkF.jpeg)

For the entirety of iOS 15’s Beta cycle up until Developer Beta 6’s release, this past Tuesday, this action has been [hilariously broken](https://mastodon.social/users/DavidBlue/statuses/106580821087349299), but as soon I discovered it’d been fixed (which was not mentioned whatsoever in [Apple’s official release notes](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-15-beta-release-notes),) I immediately began composing this dang Post.

<audio controls>
  <source src="https://files.mastodon.social/media_attachments/files/106/580/820/077/661/362/original/e539117f7b5b72de.mp3">
</audio>

![TTS Shortcuts Compared](https://i.snap.as/P0yJJyUc.png)

## Guide

So! For those of you currently running the latest iOS 15 Beta and those in the future running the full release, **what follows is a guide on how you can use my own shortcuts and methods to generate, metadate, and embed Siri-powered audio text-to-speech files relatively quickly without having to use desktop-class (or any other) hardware**.

To begin, you should install two brand new shortcuts of mine: [**Make Audio from Article Body**](https://routinehub.co/shortcut/9953/) and (if you intend to stick with me to the embed stage, anyway,) my [< audio > Embed Tool](https://routinehub.co/shortcut/9948/). Both should function out of the box, but I would highly encourage that you try building your own shortcut around the `Make Audio From Text` action, even if you've never worked with Shortcuts (or any sort of automation, for that matter) before, *especially* if you plan to be using Siri as a text-to-speech generator with any frequency. 

### Intended Result

Throughout this guide, I'm going to be using [a five-year-old ramble of mine](https://bilge.world/johnny-tsunami-smart-house-slavery) about the oddly-perceptive bits found in early-oughts Disney movies as example text. Earlier today, I used my own personalized version of my new shortcut to generate an example of in which the process we're about to explore should result. The ~6000 words of text took just over 3 minutes, 30 seconds to render consistently in three consecutive timed attempts. You can listen to it [on Whyp](https://whyp.it/t/johnny-tsunami-vi-separate-but-equal-siri-voice-2-tts-74752) and/or inspect [the actual file](https://github.com/extratone/bilge/raw/main/audio/TTS/JohnnyTsunami.m4a) yourself, if you'd like.

![Plain Text Parsed by Safari](https://i.snap.as/dktmGQQb.png)

### Input Format

If we were trying to do this using any other available method in 2021 - even the expensive ones - our first task would be scrubbing our subject text of any special formatting (Word,) symbols, embed, hyperlinks, and any other data Siri doesn't understand (roman numerals, for example.) As a Windows user who's not at all new to free ways to automate accessibility improvements to web content, I envy both you and my new self for the magic available to us in the form of Safari's abilities to parse complex web content. In my experience, there's nothing like it (at least nothing available to regular consumers.) 

The screenshot embedded above shows the result of a `Quick Look` action inserted just after the `Text` action produced by the public version of my shortcut when run on our example. There are three immediately problematic issues:

1. Siri doesn't understand roman numerals, so she will read "Johnny Tsunami VI" as *Johnny Tsunami vee eye*.
2. "The Psalms" is not my name, though it is what this blog currently returns when asked for a byline. In my experience, this generally isn't an issue with most mainstream media CMSs.
3. The shortcut appears to have failed to retrieve any data for the `Published Date` variable from my blog. (Also a relatively specific consideration.)

If you'll note in the *previous* embedded image comparing my custom version of the shortcut (left) to the published version (right,) you'll note that my chosen solution is to manually input all metadata before actually starting the shortcut. What's not shown is my corresponding manual inputs in the `Encode Trimmed Media` action, which includes attaching a retrieved image file (in the Working Copy action you *can* see) as album art. For my intended use - exclusively generating text-to-speech audio of Posts on this blog - this makes more sense than unnecessarily automating metadata retrieval.

The extraordinary thing about the screenshot, though, is that it doesn't contain any of the other crap (as described above) found in the original page. (Beforehand, it looked more [like this](https://raw.githubusercontent.com/extratone/bilge/main/posts/johnny-tsunami-smart-house-slavery.md).) It's especially reliable at parsing WordPress-bound content, which still makes up [s̵͕̈́͊c̶̥̏̚r̶̥͈̃è̴̙͌å̴̹m̵̛̅ͅi̶̦̾͘n̸͎̟̎̃g̶͎͛] percent of the whole web. **Treasure this power**, folks.

![Simpler TTS Examples](https://i.snap.as/OMwKdOUI.png)

If all you need read aloud is the body text, things become even simpler. In the right example above, I've simply deleted the `Text` action and replaced it with `Get text from [the Safari Web Article's body]`. Theoretically, one could omit that action, even, and simply use the direct output of `Get Body from Article` as input for the `Make spoken audio from text` action, but I say keep the extra step unless it becomes an issue.

**If you're actually *beginning* with clean plain text** and don't care about metadata in your final audio file and/or if you're planning on passing the result through other audio/metadata editing software, anyway, the left, three-action shortcut is all you need. It will result in a [Core Audio Format (.caf)](https://www.wikiwand.com/en/Core_Audio_Format) file (like [this one](https://github.com/extratone/bilge/blob/main/audio/egg.caf),) which I know absolutely nothing about except that Audacity and GarageBand support it out of the box.