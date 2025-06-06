# Tilde.Town on iPhone with Blink Shell

![Blink Folder](https://tilde.town/~extratone/icons/blinkfolder.png)

## The ideal means of *On The Go* participation in The Tildeverse.

<!--more-->

<audio controls>
  <source src="https://davidblue.wtf/audio/blink.m4a">
</audio>

I was completely unaware of the Tildeverse’s origin story - documented in [a Medium post](https://medium.com/message/tilde-club-i-had-a-couple-drinks-and-woke-up-with-1-000-nerds-a8904f0a2ebf) by *WIRED* Editor-in-Chief, Paul Ford - until this year, somehow, though I knew of its existence as far back as 2018. I was living in an unairconditioned Portland apartment, then, and had found myself *stuck* with Linux for the first time in my adult life. Consequentially, this period of my life became my first true introduction to the Command Line - a space about which I knew no more than the layest layman. Hopping between my ten-year-old, post-corporate system’s shell and the DOS machines I was emulating on it (exploring the history of word processors, mostly,) I believe I struggled through dare I say a Rite of Computing Passage, obtaining the capability (and eventually, the muscle memory) to navigate a filesystem with `cd`, `ls`, and (on DOS) `dir`. It wasn’t until I came home in ‘19 that I discovered the two primary emulated Linux shells *on iOS*: [**iSH Shell**](https://apps.apple.com/us/app/ish-shell/id1436902243) and [**a-Shell**](https://apps.apple.com/us/app/a-shell/id1473805438).

![iSH Shell and a-Shell](https://user-images.githubusercontent.com/43663476/157366845-a604bd4c-3ea8-46fe-85e6-930adb8ca180.png)

The former is designed to emulate [Alpine Linux](https://alpinelinux.org) and has just recently added direct filesystem access via the Files app. The latter is, I’m told, quite extensible, and includes Siri Shortcuts actions that have enabled it to underpin powerful scraping shortcuts like [SW-DLT](https://routinehub.co/shortcut/7284/) - a sort of frontend for youtube-dl and now yt-dlp. Both are open source, but a-Shell is actually [a fork](https://github.com/holzschu/a-shell) of our subject app, now called “[**Blink Shell & Code**](https://apps.apple.com/us/app/blink-shell-code/id1594898306)” in the App Store.[^1]

![bbj Out](https://user-images.githubusercontent.com/43663476/155115271-faa55bfd-d151-4741-9a6c-e9664a457503.png)

Blink’s tag is “a professional, desktop grade terminal for iOS.” Its [landing page](https://blink.sh) touts a “first class iOS experience, with software and hardware keyboard, and the full edge-to-edge experience” experience. On *iPad*, Blink’s heyday was well documented by the likes of [Paul Miller’s 2018 article for *The Verge*](https://www.theverge.com/circuitbreaker/2018/3/27/17152482/ipad-pro-web-development-setup-how-to-terminal-apps) and Fatih Arslan’s 2019 “[Using the iPad Pro as my development machine](https://arslan.io/2019/01/07/using-the-ipad-pro-as-my-development-machine/).” These pieces more or less detail different use cases of the exact sort Blink was designed for - “professional” work done using an iPad as the terminal for a remote Linux/macOS machine.

![Apreche Reply](https://user-images.githubusercontent.com/43663476/157371504-32ebbca7-81bf-43c0-a762-cdbc0ad50181.png)

Since I’ve [apparently](https://twitter.com/NeoYokel/status/1421410673049972739) ended up with a primary life mission of *doing stuff on my iPhone originally meant to be done on iPads*, I’ve managed to find myself [an active member](https://tilde.town/~extratone) of the Tilde.Town community - a place exclusively accessible via SSH, aside from [public pages](https://raindrop.io/davidblue/tilde-22520136) - exclusively through [my iPhone 12 Pro Max](https://github.com/extratone/jorts). I’m not the first to use Blink to do this - note [Apreche](https://tilde.town/~apreche)’s reply to my thread, embedded above - but I suspect I’m the first to spend significant Town Time on my *fucking phone*, so I thought it might be worth laying out some of the particulars I’ve learned along the way. 

*It’s important to note that 99% of the use detailed in this guide/account involves the use of a paired Bluetooth keyboard.*

![Blink Settings](https://user-images.githubusercontent.com/43663476/157378620-9fb29373-d49e-4519-b734-8c75caf54dad.png)

## Locally

First, Blink’s settings menu is accessed by typing `config` and/or `⌘,`. Unfortunately, there’s no method of installing the entire selection of available [fonts](https://github.com/blinksh/fonts) or [themes](https://github.com/blinksh/themes) - you’ll have to do so one at a time, though you can optimize the process by learning/copy-and-pasting the url scheme for the fonts/themes directories on their respective repos. I especially recommend [CLRS](https://github.com/blinksh/themes/blob/master/themes/CLRS.js), [Man Page](https://github.com/blinksh/themes/blob/master/themes/Man%20Page.js), and [MonaLisa](https://github.com/blinksh/themes/blob/master/themes/MonaLisa.js), but this Post is saturated with *too* many mocked up screenshots of Blink themes to reasonably continue that list any further.

![Local UNIX Commands in Blink-ManPage](https://user-images.githubusercontent.com/43663476/155014762-7b8bfc6d-d6df-418a-b43e-6d7aa56582bb.png)

Compared with its fork, a-Shell, Blink’s local UNIX command list is a bit sparse. It’s accessed exclusively with `TAB`. Where a-Shell has `pickFolder`, Blink has `link-files`, which does effectively the same thing: the Files app is opened, prompting you to select a folder, which will become visible and accessible in the command line.

![Repository Cleaning](https://user-images.githubusercontent.com/43663476/156869875-93a67975-beb2-4a25-a855-b845514ed8b3.png)

Linking [*The Psalms*’ GitHub Repository](https://github.com/extratone/bilge) in [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807) with `link-files` in Blink had profound results. I was offered a brief glance of that enhanced productivity command line evangelists always seem to be on about, if only because the files and directories were color-coded by type so distinctly. `open` also somehow lead to swifter previews than in Working Copy, despite that app’s brilliance.

![BaityYouTubeThumbnail](https://user-images.githubusercontent.com/43663476/155200832-d2d5fdcb-9538-4f3e-be46-e3b203f28f17.png)

Some other particularly intriguing standouts include `say`, which unfortunately does *not* use your preferred Siri voice to speak aloud text, but rather the oldest there is. `facecam` will open a manipulatable circle of your device’s front-facing camera view, as shown in the screenshot embedded above. `openurl` will instantly open a formally-formatted web URL in Safari, which can come in handy. `pbcopy` and `pbpaste` really do manipulate the iOS system clipboard, which I probably find more impressive than I should. `code` is the newest to the bunch and will open a local instance of GitHub Codespaces(?) If this is truly useful on iPad - which plenty of positive feedback on social suggests it is, to at least a few human beings - it is barely usable on iPhone, which is to be expected, really.

![Blink and Code](https://user-images.githubusercontent.com/43663476/157388631-7668b9d9-22e7-4fef-8c36-1081e213c193.png)

Blink’s own “[UNIX Command Line Tools Roundup](https://docs.blink.sh/advanced/unix-roundup)” does an okay job of outlining the rest of the basic networking and file management commands included that act locally, though I’ve still been unable to find out what `skstore` does. `xcall` opens x-callback-URLs, though I’m [still trying to figure out](https://reddit.com/r/BlinkShell/comments/ta27h9/docs_for_xcall_command) what the command’s options are. `ed` the ancient command line text editor is available, though I’ve yet to learn to use it, and `uptime` appears to be actually accurate? Being able to run `whois` locally on iPhone has its uses, especially given the aforementioned support of `pbcopy`. `whois bilge.world | pbcopy` copies *The Psalms* domain registry information to the iOS clipboard in a flash.

![Blink Keyboard Shortcuts](https://user-images.githubusercontent.com/43663476/158213859-c477ddb3-dc51-47b2-8e2f-fa0df9b339ad.png)

### Keyboarding

To its credit, I think [Blink’s landing page](https://blink.sh) represents the most explicitly pro-keyboard literature I’ve ever seen for an iOS app. From my fairly extensive use, its Bluetooth keyboard support fully reflects these declarations, even on iPhone. Out of the list of shortcuts you see in the screenshot embedded above, `Share Selection` is by far the one I use most, usually to open a link from the Tilde IRC chat. If I’m lucky/accurate, double tapping said link will select all of it and *only* it. 

After a link is selected - which sometimes involves rotating the phone and/or zooming far out to get longer URLS in a single line - I’m able to call it up in the iOS sharesheet with `⌥U`, then open it in Safari with a Siri Shortcut I’ve placed there entitled “[O P E N](https://www.icloud.com/shortcuts/52e6c820f965488b91ca4b76c99434af).” Or - in the case of a direct link to a file - I could use another shortcut of mine just below it, called “[DOWNLOAD](https://www.icloud.com/shortcuts/af5a886c9b044bf194dd52127a3939c3),” which uses the [Get Contents of URL](https://www.matthewcassinelli.com/actions/get-contents-of-url/) action to download files directly to my Downloads folder in iCloud Drive. Googling a selection (⌥G) has come in handy once or twice. I tried the Stack Overflow shortcut for kicks, but was meant with an endless string of CAPTCHA requests.

![Blink Custom Key Presses](https://user-images.githubusercontent.com/43663476/158233450-e7a2eec8-1eae-478d-ab7e-35a2dec79e25.png)

An extraordinary feature of Blink’s which I originally misunderstood and have just begun to play with: **custom key presses**. In `Config ⇨ Keyboard ⇨ Custom Presses`, one can assign any text that can be hex encoded (Base16) to a keyboard shortcut. I’ve created a Siri Shortcut that requires the free version of [GizmoPack](https://apps.apple.com/us/app/gizmopack/id1505218567) to aid myself (and you, hopefully,) in quickly converting plain text commands to this format. In the screenshots embedded above, the shortcuts listed on the left correspond in order with the commands listed on the right. You’ll note I’ve begun to attempt assigning quick keys to my most commonly typed-out commands.

![Importing Keys in Blink Shell](https://user-images.githubusercontent.com/43663476/154846142-4d16aa31-ee99-4ce9-94c5-852765d7d0b7.png)

## Remotes with SSH and Mosh

If you’re entirely new to SSH as a concept, I’ve found no better introduction than [Tilde.Town’s own SSH Primer](https://tilde.town/~extratone/wiki/getting-started/ssh.html). I screwed up my first attempt at obtaining a key, but Town Maintainer [vilmibm](https://tilde.town/~vilmibm) kindly responded to my Twitter DM in December of last year asking to instate a new key. I can’t remember whether or not I generated it originally within Blink, but regardless, the app’s key management is as intuitive as I’ve seen. 

![Blink Autocomplete](https://user-images.githubusercontent.com/43663476/157376845-c2adf11e-7f8c-44d1-8a37-fec0a9fabbcc.png)

One of my unexpected favorite bits about Blink is its autocomplete feature which applies to both “commands and hosts” as quoted from [its singular mention in the docs](https://docs.blink.sh/whats-new#version-100). There very well could be a better means of typing out absurdly long filenames in other terminal emulators, but I’ve personally not come across anything remotely like this magic of Blink’s. Especially for someone newish to the command line like myself, its autocomplete occasionally borders on “intelligent auto*suggestion*” without actually crossing the threshold in an irritating way. Once I configured Tilde.Town as a host (with the local name Tilde.Town,) all I need do to connect is begin to type `ssh T` or `mosh T` (ssh keys == mosh keys, which I wish I knew weeks ago) and `TAB` to complete the full `ssh Tilde.Town` or `mosh Tilde.Town` commands.

![Adding Files App Locations in Blink](https://user-images.githubusercontent.com/43663476/154846342-b9d49f30-61c4-438d-8886-0414951807f6.png)

Once you’ve connected to Town, you should take advantage of [Blink’s Files app integration](https://docs.blink.sh/advanced/files-app) by adding a location at the bottom of its entry in the Hosts menu. This adds Blink to the master, root list of file providers in the app. From there, all of the Files app’s features (including drag-and-drop) will apply to Tilde.Town as long as you’re sustaining at least one connection via ssh or mosh.

![Blink File Providers](https://user-images.githubusercontent.com/43663476/154846662-df10d713-6f54-46d2-8fb9-d1f77d42b14e.png)

To illustrate, here’s a wee, one-take tutorial on uploading images this way:

### Mini Tutorial: [Uploading images to the Tildeverse with Blink Shell](https://tilde.town/~extratone/videos/uploadingimageswithblink.MP4)

<video controls>
  <source src="https://tilde.town/~extratone/videos/uploadingimageswithblink.MP4">
</video>

![Novel Chat Fixed](https://tilde.town/~extratone/images/novelchatfixed.png)

## Chat

The IRC client TildeTown uses is called [WeeChat](https://weechat.org) and - especially if it’s been as long for you as it had been for me - you might find (as I did) learning the ropes to be a bit dubitable. I’ve [duplicated the full User Guide](https://tilde.town/~extratone/manual/weechat/) for your consideration. I got stuck at the concept of switching buffers, so my Big Pro hint is to start off running `/buffer 1` followed by `help`. In order to display the chat even remotely readably in portrait mode on an iPhone, you’ll need to remove the buffer list by hiding it. (Try `/help bar` in the first buffer.) You’ll also need to zoom out a bit and set the display mode to `Fill` via the menus that appear with a *three-finger* tap anywhere on screen. To achieve the look shown in the screenshot embedded above, you’ll need to hide a few things, but I’ll come back to those specific commands in a sec.

Assuming you intend to stay connected to Town IRC *On The Go*, I’d advise always starting your intended chat window with mosh, which - through [a whole bunch of alchemy](https://docs.blink.sh/advanced/advanced-mosh) I’m incapable of understanding - establishes a much more flexible sort of connection that’s actually realistically dependable from within the uncertain world of a backgrounded iPhone app. Optionally, [the `geo` command](https://docs.blink.sh/advanced/advanced-ssh#persistent-ssh-connections-with-blink) can be used to force iOS into allowing Blink a more genuine background running state with `geo track`. Additionally, `geo current` displays a nicely-formatted set of location information:[^2]

```json
{
  “Latitude” : 38.933988900043886,
  “AltitudeRef” : 0,
  “GPSVersion” : “2.3.0.0”,
  “DateStamp” : “2022:03:09”,
  “Altitude” : 203.0797061920166,
  “Longitude” : 92.388242309618036,
  “LongitudeRef” : “W”,
  “TimeStamp” : “14:35:13.140000”,
  “LatitudeRef” : “N”,
  “DOP” : 35
}
```

As you’d expect, the persistence allowed by this feature - which does, indeed, extend to remote files access in the Files app as you move about the world - comes at a significant consumptive power and resource sacrifice. If you parse the slapdash language in the docs, the implication is that you should only need to use the `geo` command to make *ssh* connections persistent, not mosh connections. Since encountering this wording, I’ve yet to have an opportunity to explore the real world truth of this supposition because I have only my rotting legs to propel me around, these days.

If I remember correctly, I once found a surprisingly capable (for the time and circumstances) iPhone IRC app in [Colloquy’s iPhone OS offering](https://apps.apple.com/us/app/colloquy-irc-client/id302000478), though it appears to have fallen far, far out of support, now. LimeChat’s iPhone app isn’t listed on the App Store anymore and [its landing page](http://limechat.net/iphone/) proudly touts support for *iOS 4 multitasking*!

> Connections are kept in 10 minutes after going to background.

My memories of computer use from that time are ever so vague, but after just a brief junket to the era’s surviving app literature, some abyssal images within me were stirred. I suspect I tried every possible solution as I’ve always tended to, even back then, on my first generation iPhone and then my 4S. I remember Colloquy being the most tenable, but far from persistent, of course. As I recall, one could maintain a conversation as a passenger on a car trip, for instance, but remaining ambiently, eternally *Logged In* - as is the ancient custom of Internet Relay Chat - was too far out of reach to even be of consideration. 

To be honest, I still find the whole idea unnatural, and I’m not alone, but I can promise you that **running Blink on a recent iPhone with the average American cellular connection is as close to the full WeeChat experience as is possible on a handset, today**, for whatever that may be worth to you. Thanks to some incredibly helpful new TildeTown friends, its copious configurability pivoted from an insurmountable, puzzling ordeal to a never before conceived of solution. If you haven’t already, skim the actual conversation contained within the pre-header screenshot, above.

#### WeeChat Configuration

The following is the precise set of commands involved in making WeeChat look as the screenshot does, though in no particular order. As [m455](https://tilde.town/~m455) pointed out, `fset` is the tool that lists available configurable options and their current status in a linear way. The default of the second option in the list is apparently `11`, but I fiddled quite a bit to find `9` more optimum.

- `fset`
- `/set weechat.look.prefix_align_max 9`
- `/bar hide bufflist`
- `/bar hide fset`
- `/bar hide title`
- `/bar hide nicklist`
- `/set weechat.look.buffer_time_format "%M"`

If you eliminate the value of the very last command (so just “”) and add `/bar hide status` to the list, you’ll end up with a more minimal-looking, timestamp-less experience:

![Spacedust Chat Minimal](https://tilde.town/~extratone/images/spacedustchatminimal.png)

If indeed there is a “reasonable” configuration for command line IRC display on a telephone in the year 2022, surely, this is it.

![Town TV](https://user-images.githubusercontent.com/43663476/157794243-413146bf-d004-4502-8ecd-b9bde2c10437.jpeg)

## Town Television

Due largely to its primary market of iPad-bound developers living and working in remote Digital Ocean droplets, significant effort (I assume) has been expended in making Blink Shell one of the few iOS apps which *usably* supports external AirPlay displays, even, yes, on iPhone. As far as I can tell, all of the iPad options in the appearance settings menu seen below have also functioned in my tests on iPhone, casting an entirely separate set of Blink windows to my mom’s [Huge Ass Samsung television](https://www.samsung.com/us/support/televisions-home-theater/televisions/qled-4k-tvs/t-model-line-up-2020) in ten-eighty pee.[^3]

![Blink Appearance Settings](https://user-images.githubusercontent.com/43663476/157918199-c9007d31-cb39-4e18-9e2d-e10ac3c93974.png)

If you’ve somehow found yourself this far, you’re probably looking for the keyboard shortcut`⌘O`, which **switches your currently active cursor between the device and the external display**. “You can also move windows between iPad and External Display with `⇧⌘O`,” say [the docs](https://docs.blink.sh/basics/tips-and-tricks#display-what-is-blink-window). Other considerations I’ve discovered through experiments with this: You can lock the phone with the external display running, but it won’t update, even with mosh or with`geo track.` AirPlay will also cease after a period I couldn’t be bothered to determine, so if anything, this is more of an inconvenience than a feature.

![Notifications in Blink](https://user-images.githubusercontent.com/43663476/158088240-a0f27c3c-1782-4323-bfc5-2c280d3c98e9.png)

## Other Considerations

Blink has a URL scheme - `blinkshell://run?key=[YourKey]&cmd=` - but it’s not particularly useful, largely because it’s for the moment left [without any real documentation](https://reddit.com/r/BlinkShell/comments/swzphf/url_scheme_documentation/). I was able to create a Drafts action that runs one’s current selection as a command in Blink, but the app doesn’t appear to like it very much, if you know what I mean. Blink also integrates with iOS system notifications - as exemplified in the screenshot embedded above - and they *do* work consistently with mentions in town chat, even outside the app, though I’ve yet to see one including any useful information. You’ll know that *something* happened, maybe. Recently, the app has taken to displaying a nondescript notification every time I re-open WeeChat, even without new messages since the last time I opened it.

Somehow, upon logging into macOS for the first time since installing all the aforementioned themes in Blink, I found the same themes available in the Mac Terminal. I’m sure there’s an explanation involving hidden iCloud Drive folders - and I can’t imagine being anything but pleasantly surprised to find oneself flush with more Terminal themes - but it’s still worth a heads up.

![Blink Universal Clacker Award](https://uikeycommand.com/awards/blink/BlinkUCABoth.png)

Philosophically, one might declare the practice I’ve outlined here to be definitively against everything the Tildeverse is about - the small web, Linuxy stuff. Bringing this up in TildeChat a few times, I was met only with acceptance. In fact, acceptance, curiosity, and support is *all* I’ve been met with throughout my first few months as a townie, and I hope this Post encourages/aids more folks to come join me in this shared computer. You can find the sign-up form for TildeTown [here](https://cgi.tilde.town/users/signup) and the corresponding GitHub Issue for this post (with a bunch more screenshots) [here](https://github.com/extratone/bilge/issues/307).

#software #configuration

---

[1] [Blink’s icon](https://tilde.town/~extratone/icons/blink.png) is perhaps my most favorite of any application, ever.
[2] Yes, that is my real location information and yes, I did include it intentionally. Please come kill me as soon as possible. Also, “DOR” is apparently an acronym for “[Dilution of Precision](https://en.m.wikipedia.org/wiki/Dilution_of_precision_(navigation)),” which is a mildly interesting measurement to read up on.
[3] As [the screenshots I captured suggest](https://github.com/extratone/bilge/issues/307#issuecomment-1065429898), anyway. Obviously, I do not posess the means to test the true resolution display to mine eyes.