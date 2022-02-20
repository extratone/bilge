# Using Drafts & Blink Shell with Tilde.Town
*A work-in-progress guide to using [Drafts](https://apps.apple.com/us/app/drafts/id1435957248) and [Blink Shell](https://testflight.apple.com/v1/app/1156707581) with one’s Tilde site*.

![BlinktoTilde](https://tilde.town/~extratone/images/blinktotilde.png)

I can’t remember how I discovered it, exactly, but maintaining a presence on [The Tildeverse](https://tildeverse.org) was a goal of mine for a long time. I would’ve achieved it in the Summer of 2020, but I had absolutely zero understanding of how SSH worked and managed to almost instantly bunk my signup to [Tilde.Town](https://tilde.town). After renewing my key at the end of 2021, however, I’ve been gradually building up [My Page](https://tilde.town/~extratone), and doing so exclusively on and from [my iPhone 12 Pro Max](https://github.com/extratone/jorts). I’ve done so using a beautiful app called [Blink Shell](https://blink.sh), which offers a free “[Community Edition](https://testflight.apple.com/v1/app/1156707581)” in the form of that Testflight link. I’ve just become a subscriber of something called “Blink+” for $19.99 a year... [perhaps in haste](https://reddit.com/r/BlinkShell/comments/sq3zur/_/hxlvgq4/?context=1). I did so within the application entitled “[Blink Shell & Code](https://apps.apple.com/us/app/blink-shell-code/id1594898306)” on the App Store.

![Blink+ Explanation](https://tilde.town/~extratone/images/blinkplusexplanation.jpeg)

Apparently, without Blink+, users of said app will be bothered with a reminder about subscribing “no more than 3 times a day.” Personally, I was just hoping for access to [Blink’s Siri Shortcuts actions](https://user-images.githubusercontent.com/43663476/154815568-950d948e-4cb9-4213-9d97-fd68af4973eb.png), which reference starting and stopping a remote machine. 

![Blink Subscription Plan](https://user-images.githubusercontent.com/43663476/154814967-55b990ff-a752-484e-9539-f217c177bfbd.png)

![Blink Siri Shortcuts Actions](https://user-images.githubusercontent.com/43663476/154815568-950d948e-4cb9-4213-9d97-fd68af4973eb.png)

## Chat
![TownChatinBlink](https://user-images.githubusercontent.com/43663476/154813446-aa2539cb-7c18-4937-833f-887f103df130.png)

## Images and Videos

What I didn’t realize until recently is that Blink actually makes my entire TildeTown presence available in the Files app.

![Town Directory in the Files App with Blink](https://tilde.town/~extratone/images/dir.png)

This appears to be a persistent remote SSH connection because files added here become *instantly* viewable on the web, as illustrated by [my brief video tutorial](https://tilde.town/~extratone/videos/uploadingimageswithblink.MP4) embedded below:

### Mini Tutorial: [Uploading images to the Tildeverse with Blink Shell](https://tilde.town/~extratone/videos/uploadingimageswithblink.MP4)
<video controls>
  <source src="https://tilde.town/~extratone/videos/uploadingimageswithblink.MP4">
</video>

## Drafts

I’ve also configured [an action](https://actions.getdrafts.com/a/1wO) for AgileTortoise’s [Drafts](https://apps.apple.com/us/app/drafts/id1435957248) (my preferred writing space for most of my adult life) which copies the contents of my current draft as HTML via [my template](https://tilde.town/~extratone/template/1.2.txt). I’ve also set this action to the keyboard shortcut `⇧^⌥C`. I then enter blink and use GNU-nano, Tilde-side, to write the contents.