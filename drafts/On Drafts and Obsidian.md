# On Drafts and Obsidian

![Draftsidian](https://user-images.githubusercontent.com/43663476/153770870-53acbea2-c058-42e5-95ac-c5db8fab433f.png)

## Native As Fuck might be out of style, but who can afford redundancy? Not I.

<!--more-->

Undoubtedly, the most creatively productive person in my family is my brother-in-law, [Carlos Gabriel Ruiz](https://twitter.com/los_gabriel), who somehow manages to take care of a houseold, raise a preteen son, work a full-time iOS dev job of the most tedious, high-grade sort, *and* churn out [visual and written work](https://www.carlosgabrielruiz.com) on a regular basis. Have *you* ever seen quite so many vertical bars in a personal site title? I don’t think *I* have, and I know they’re legitimate. Something he told me last year has been on my mind nearly every day, since: his preferred word processor is Ye Olde FinalDraft, in which he still uses the same templates he configured in college. (That was quite a while ago.) I’ve thought about it just about every day, since, as I’ve spent an inquantifiable amount of time Just Fucking Around with my “workflow,” and reading other professional accounts of Just Fucking Around with workflows[^1] these past eighteen months. Do I spend more time configuring my writing spaces than *actually writing* because I have nothing to say? (I’m going to be interspersing embedded screenshots throughout this post that may or may not have something to do with the nearby contents. Sorry, I just captured far too many.)

![Black&YellowTheme](https://user-images.githubusercontent.com/43663476/153780995-5b7ac09d-4c21-4e61-b1ba-163ce106fb01.png)

I tried Obsidian. In fact - and I'm still not one hundred percent positive about this - I'm pretty sure I first tried Obsidian several years ago, though the Obsidian.md domain only stretches back to [April of 2020](https://web.archive.org/web/20200410075559/https://obsidian.md/), so I might just be nuts. Regardless, something said by *MacStories* founder and Definitive iPad Professional, Federico Viticci, in an issue of *MacStories Weekly* from late Summer really... jutted out:

> At its core, Obsidian is a Markdown text editor. Just point the app to a folder on your iPhone or iPad and you're ready to get started. The app is based on web technologies, which means it is highly customizable. Obsidian supports a theming system, with a wide variety of themes provided by the app's vibrant community of users and plugins to extend the app's functionality. The app's primary views are its editor and preview mode, which can be split into multiple panes both vertically and horizontally. Obsidian also supports saved workspaces that allow users to open a predefined group of notes easily, commands for quickly opening documents and accessing the app's features, along with extensive, customizable keyboard shortcut support. Of course, notes can be linked internally, allowing for the creation of a wiki-like web of documents.

In the interim, I've reviewed these few sentences over and over again, trying to find the discrepancy, but basically the core of my issue is that **Federico is describing *Drafts* as I know it, word for word**. In fact, since you're here, bear with me just a second as I misquote him to an imperial degree, replacing the word "Obsidian" with "Drafts:"

> At its core, Drafts is a Markdown text editor. Just point the app to a folder on your iPhone or iPad and you're ready to get started. ~~The app is based on web technologies~~, which means it is highly customizable. Drafts supports a theming system, with a wide variety of themes provided by the app's vibrant community of users and plugins to extend the app's functionality. The app's primary views are its editor and preview mode, which can be split into multiple panes both vertically and horizontally. Drafts also supports saved workspaces that allow users to open a predefined group of notes easily, commands for quickly opening documents and accessing the app's features, along with extensive, customizable keyboard shortcut support. Of course, notes can be linked internally, allowing for the creation of a wiki-like web of documents.

Now, there are several points I probably wouldn't *start out with* when describing Drafts, but not one of these statements is wholly untrue, either. While you absolutely can "point [Drafts] to a folder on your iPhone or iPad" and be ready to "get started," [Folder Bookmarks](https://docs.getdrafts.com/docs/settings/bookmarks) *are* a fairly recent feature for Drafts, and not exactly configured *out of the box*. It is not - nor will it ever be - local filesystem-based like Obsidian, but honestly - especially as an iCloud+ subscriber with 2TB of iCloud Storage - I'm not sure this should be left as a detriment. Though I use a Git-enabled system to track revisions (which [I basically learned from Federico](https://www.macstories.net/ios/my-markdown-writing-and-collaboration-workflow-powered-by-working-copy-3-6-icloud-drive-and-github/)!,) I've honestly had much more success configuring bookmark-enabled file actions tied to specific folders and keyboard shortcuts than I did running off the filesystem with Obsidian for the few months-long period I gave it a shot, last year.[^2] More on that in a bit.

![SpaceTakenbyDrafts](https://user-images.githubusercontent.com/43663476/153721368-59fbb89f-46ff-46da-8caf-8d24047e3589.png)

## Community

I’m also not entirely sure I’d feel honest describing [the Drafts community](https://forums.getdrafts.com) as it stands as “vibrant.” We’re more like... “bitchy or extremely helpful,” but such a transition seems to be inevitable in the lifecycle of any given text editor/word processor. There is still a single man, [whittling away on nano](https://news.itsfoss.com/gnu-nano-6-0-released/), and [Bear’s Subreddit](https://reddit.com/r/bearapp) may very well be the bitchiest spot on the bitchiest site on the bitchiest net in history. My [pitch to Greg Pierce](https://twitter.com/NeoYokel/status/1494040559161421827) for the creation of a Drafts-specific Discord or Telegram channel has apparently fallen flat, perhaps for the better. The Drafts Forums have their own vibrancy, and it’s in a few key folks - like Stephen Millard, for instance, and Greg, himself - who will jump in within a matter of minutes or hours to address even the most facepalmy questions. (Describing many of my own.) 

![ReminderIntegrations](https://user-images.githubusercontent.com/43663476/153950328-e0e71931-d407-469f-a882-b9566f37399c.png)

Not just in support, but in requests. I think [my inquiry into the possibility of native Mastodon posting support](https://forums.getdrafts.com/t/posting-to-mastodon-from-drafts-native-action-service/12089) offers a profound example. Within a matter of hours, Greg responded with [an actual, working Post to Mastodon action](https://directory.getdrafts.com/a/1v8) and another pro-dev user joined the conversation with an account of their recent attempts to modify Greg’s own [Tweet Storm action](https://actions.getdrafts.com/a/1Hu) for Mastodon. Notably, 1.) this was a *Sunday morning* and 2.) this was [not the first request of mine](https://twitter.com/draftsapp/status/1492645727729766400) which Greg had fulfilled almost immediately upon prompt *just that weekend*. Then, there’s the innumerable email threads between Greg and I discussing - what else - [keyboard shortcuts support on iPhone](https://uikeycommand.com). 

![TipCalculatorLandscape](https://user-images.githubusercontent.com/43663476/154821804-3d6d90b4-76d4-4082-a4dc-7dde5631c296.png)

I distinctly remember one such thread that resolved a ridiculous and mild panic I’d been set in when I accidentally disabled Background App Refresh for Drafts, which caused a hullabaloo, as you might imagine. I didn’t think to check the Settings app until we were 4 replies and one whole morning deep. Obviously, I was deeply embarrassed - so much so that I actually considered lying about the cause - but I told him the truth and received the most patient *no problem, good to know* in the history of the world. When Stephen Millard’s Thought Asylum actions ceased functioning in my library, I posted [a reply in the forums](https://forums.getdrafts.com/t/script-error-syntaxerror-json-parse-error-unexpected-identifier-drafts-line-number-53-column-35/12187), which led to both Greg and Stephen’s help in resolving the issue within hours. 

![BookmarksinDrafts](https://user-images.githubusercontent.com/43663476/153778986-a9a33a80-12a3-4042-8941-2e2d5e427703.png)

I’m not sure if Federico and company still use Git to collaborate between each other, but I continue to do so [publicly](https://github.com/extratone/bilge/tree/main/drafts/). In fact, it’s more likely than not you can still see [this very draft I’m whittling on](https://github.com/extratone/bilge/blob/main/drafts/On%20Drafts%20and%20Obsidian.md#L0) - along with its entire composition/revision history - whenever you’re reading, given how often I forget to move completed work from `drafts/` to `posts/`. 

![Find & Replace with Regular Expressions](https://user-images.githubusercontent.com/43663476/154865771-47d8565b-424f-477e-b664-770a1b0d2fb1.png)

I’m one hundred percent positive I spent far, *far* more time reading about and updating plugins than I did actually *writing* in Obsidian. Just now, I finally rid my repository of the last of their files, and they numbered almost one *thousand*. Just configuration files. Participation in the fiddling was fun and exciting, but it didn’t exactly lend well to productivity. I found myself in a very specific cycle: whenever a new functionaility or integration was shouted about in Obsidian, I would search to see if it already existed in Drafts. It sounds ridiculous, but I tell you I did not find a single case where my findings were not at least “equivalent” to what Obsidian users/developers had rigged up - in the vast majority of cases, I found them vastly more ideal, more robust, and better documented. Eventually, I dropped Obsidian altogether and honestly, [I’m still going](https://bilge.world/drafts-zalgo-action) down that path without it, entirely.

There is tremendous value in the hype surrounding whatever writing app is currently trending. A trip not so far back in the *MacStories* archives reveals that just [four years ago or so](https://club.macstories.net/posts/compiling-and-exporting-tagged-notes-in-drafts-5), Drafts was having its’ own moment [after the release of Drafts 5](https://club.macstories.net/posts/interview-greg-pierce-1). [Tim Nahumck's review for *MacStories*](https://www.macstories.net/reviews/drafts-5-the-macstories-review/) was quite celebratory. Rosemary Orchard - undeniably the queen of automation on Apple Devices - also [praised it in her review](https://rosemaryorchard.com/blog/my-drafts-5-review/). I can tell you that no major release of any Windows application I use regularly has ever gotten such attention as Drafts 5, even - at least, not in my lifetime. Perhaps this is for the better, but I think not. Anyway, that topic is for [another time](https://github.com/extratone/bilge/issues/292).

> There will always be advantages to being fully native on the platform.

Said Greg Pierce, Drafts creator, quoting from [his 2018 interview with *MacStories*](https://club.macstories.net/posts/interview-greg-pierce-1). When I hear “fully native,” I think of Drafts, of course, but also [Tweetbot](http://bilge.world/tweetbot-6-ios-review) and [Bear](https://apps.apple.com/us/app/bear-markdown-notes/id1016366447) - all three of which are coded mostly in Objective C, if I’m not mistaken. I think of them as the most robust third-party applications I’ve ever used on any platform. Among Drafts specific advantages as a native app are [direct Siri Shortcuts integration](https://www.macstories.net/reviews/drafts-5-4-siri-shortcuts-wordpress-and-more/), extensive [URL scheme/x-callback-url support](https://docs.getdrafts.com/docs/automation/urlschemes)[^3], the best [iCloud syncing](https://docs.getdrafts.com/docs/settings/sync) I’ve ever seen from any application on iOS and macOS, a legendary share sheet-bound [web capture extension](https://docs.getdrafts.com/docs/extensions/share), the ability to send full draft contents from [an iMessage app](https://docs.getdrafts.com/docs/extensions/message), an award-winning [Apple Watch app](https://docs.getdrafts.com/docs/extensions/applewatch), gorgeous, configurable, and actually useful(!) [widgets](https://docs.getdrafts.com/docs/extensions/widgets), and even iOS and macOS [icon badge support](https://docs.getdrafts.com/docs/settings/notifications), among an extensive list of others.

![ControllingBearfromDrafts](https://user-images.githubusercontent.com/43663476/153966641-fad3a074-4938-4cef-b1c8-ed900cd8599c.png)

## Sending

For instance, with a single keyboard shortcut (`^M`,) I can send the full contents of my current draft to an email address of my choice without leaving the app. Using an Email-to-Post address (which *The Psalms* does in fact have,) this would mean publishing with that single shortcut. The same also applies to sending via SMS (`⌥M`, if you care to know.)[^4] I was able to configure these vie the public [Mail Action Wizard](https://tools.getdrafts.com/wizards/mail) and [Messages Action Wizard](https://tools.getdrafts.com/wizards/message), respectively, and they work across iOS, iPadOS and macOS, out of the box, incredibly. I also used the latter to configure an action which sends messages to my [Family Tech Support iMessage group](https://bilge.world/ios-15-family-review) - a mix of 10 digit phone numbers and email addresses - astonishingly easily. It sends messages with the current draft title as the subject line and the body text as the message body.

![Sending Drafts from iMessage](https://user-images.githubusercontent.com/43663476/154845607-1dc5e1c5-759a-4030-84ab-d609491f7acb.png)

If I couldn’t be bothered with configuring my own actions, I could use the aforementioned iMessage App to send whole drafts to whomever. (I just noticed that even *it* reflects the current theme.) Note in the screenshot embedded above the header that one can not only *send* draft contents to [Bear](https://apps.apple.com/us/app/bear-markdown-notes/id1016366447), but they can actually *command* virtually all of the configurable editor settings from within Drafts. This is enabled via the also aforementioned URL scheme and x-callback-url support in Drafts. 

![Terminology Draft](https://user-images.githubusercontent.com/43663476/155904725-8489c896-adfc-4f43-8901-eb897ab998e4.png)

Similarly is Drafts’ integration with another Agile Tortoise app, [Terminology Dictionary](https://apps.apple.com/us/app/terminology-dictionary/id687798859). As I noted in my [App Store review](https://tilde.town/~extratone/appreviews/terminology), I’ve set up a ridiculously easy and enjoyable integration involving a keyboard shortcut (^⇧D) to send selected words to Terminology, where I have set up a button in the primary top bar with the default “Drafts (definitions)” action, relying on this scheme:

`drafts://create?text=[[definitions]]%0A[[note]]`

This creates a new draft of a given term with its definitions, along with any notes I’ve entered to accompany it. (An example result is shown in the screenshot embedded above.) Crucially - as I also mentioned the aforelinked review - Terminology allows me to enter *my own terms* that may or may not necessarily return from established dictionaries, this way, as shown below:

![aforelinked in Terminology](https://user-images.githubusercontent.com/43663476/155905726-ffa126d6-ccb5-497f-a80c-51ba457b1330.png)

This is contrasted with the popular app [LookUp](https://apps.apple.com/us/app/lookup-english-dictionary/id872564448) (which I also own,) which only allows one to save terms returned from search. Obviously, this doesn’t exclude entering words by way of [its Shortcuts action](https://www.icloud.com/shortcuts/09609fefe91340e0b4f07df5b332cafc), which makes said action virtually useless, from my view.

![LookUp Failure](https://user-images.githubusercontent.com/43663476/155922296-4c00c372-8b79-4dfd-b421-5d718845a782.png)

While we’re on the subject of dictionaries - one of my favorites from [Stephen Millard’s ThoughtAsylum action library](https://www.thoughtasylum.com/tadpole/) is `Replace with Synonym`, which I’ve tied to `^⌥S`. On either a selected word or a single-word draft, keying this shortcut brings up the prompt shown in the screenshot embedded below:

![SynonymsWithaKeyboardShortcut](https://user-images.githubusercontent.com/43663476/153939391-c92f75c1-1313-4ead-96fa-c6ef0927a59d.png)

I’m assuming the action uses the iOS system dictionary, which is great, but deserves an app in and of itself as it has on macOS, in my opinion.

![ExportPsalmsActionsLandscape](https://user-images.githubusercontent.com/43663476/154817269-0713a89d-d1a0-46a1-b2ed-57a84abddff8.png)

## System/Working Copy Folder Access

With my current Drafts setup, I need only hit `⇧^⌥D` to push my current draft to *The Psalms*’ [drafts folder](https://github.com/extratone/bilge/tree/main/drafts/) in [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807) - the golden standard iOS Git client. The same applies with the keyboard shortcut `⇧^⌥N` and the corresponding notes draft and the [/notes repo folder](https://github.com/extratone/bilge/tree/main/notes/). On my iPhone, I’m currently switching back and forth between these using `⌥3` and `⌥4`, respectfully. If you’d like to see, here are those two (unlisted actions) on the Drafts Action Directory: [Export Psalms Drafts](https://actions.getdrafts.com/a/1wL) & [Export Psalms Notes](https://actions.getdrafts.com/a/1wM). I also have [an action](https://actions.getdrafts.com/a/1wN) that saves to a root iCloud Drive folder as a .md file called “Written” with the keyboard command `⌥⌘S`. 

![Written Folder](https://user-images.githubusercontent.com/43663476/155971770-907a90aa-c955-4928-bbad-6cd1a61216ea.png)

If one wished, they could output web-read HTML files this way via a similarly-configured action with [Drafts’ templates](https://docs.getdrafts.com/docs/editor/previews), which would make it awfully easy to publish whole website updates directly from Drafts. Of course, I’ve heard good things about [Obsidian’s own publishing service](https://obsidian.md/publish), though none of the examples I could find in the gallery were scrollable on my iPhone or particularly breathtaking[^5].

![Obsidian Publish Example](https://user-images.githubusercontent.com/43663476/156826733-4e596f5f-2f90-4e88-977e-fb6dc8f9c218.png)

Regarding using Git with Drafts via [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807), it’s actually possible to do so [pre-Drafts File Bookmarks](https://forums.getdrafts.com/t/setup-drafts-on-ios-with-working-copy/9197), if you’d like. I ran with this setup for a while in 2020, the results of which you can inspect, still, on [my Drafts-specific GitHub Repository](https://github.com/extratone/drafts). From what I remember it’s quite similar in many ways to running Obsidian directly off a Working Copy repository - both can be iCloud synced and still have all revisions tracked.

![Versioning in Drafts](https://user-images.githubusercontent.com/43663476/156828832-b8c4554f-a7b9-4ff3-997b-329e6a227e57.png)

After a while, however, I realized that I was perfectly happy with [Drafts’ native versioning system](https://docs.getdrafts.com/docs/drafts/versionhistory) in the majority of projects and that it most often resulted in much quicker/easier access to previous draft versions that Git could possibly enable. I’ve recently taken to occasionally saving versions manually with the [Save Version action](https://actions.getdrafts.com/a/1YL) tied to `⌘⇧S`. Combined with the export actions I showcased above, I trust my current Drafts setup more than I’ve ever trusted any of the writing environments I’ve lived in, which is really saying something.

![WindowsEternal-iPadPro](https://user-images.githubusercontent.com/43663476/154896941-f15cfe59-dd8f-4310-b4be-fe55ee4e4bc7.PNG)

## Management and Navigation

One of the absolute core differences between Drafts and native filesystem-based applications like Obsidian is the fundamental way notes are organized. I’ll quote this particularly succinct passage [from the documentation](https://docs.getdrafts.com/drafts/):

> Drafts has a lightweight organization system similar to email. Individual drafts are created in the “Inbox”. When a draft has been processed, it can be moved to the Archive to long term storage or the Trash if it no longer needed. A draft can also, optionally, be flagged and have any number of tags assigned to it.

Chronology is the primary sortation method by default - by creation date, last modified date, or last accessed date. Drafts and Bear share the basic principle, as you’ll note in the screenshot embedded below - the two writing applications which have had the greatest influence on my thinking. It’s important to mention this, I think, because there’s a very real possibility I have been too embedded in the core methodology of these systems for too long to be critical of them and am blinded to the full spectrum of advantages inherent to directly editing text files in the filesystem.

![Notes Organization - Drafts vs Bear](https://user-images.githubusercontent.com/43663476/158259554-5191b921-8064-4ac6-8720-f9c5fa3c67b8.png)

Around this time two years ago, however, my computing life was still very much Windows desktop-first. I had found myself delivered to markdown stupidly late in life - not in actual use of the syntax, but in knowing it by name - by way of [my own very misplaced hype](https://bilge.world/evernote-dropbox-paper-word-processing-history) surrounding Dropbox’s then-new web-based WYSIWYG text editor frontend, [Paper](https://paper.dropbox.com).[^6] 

Before I began to experiment with [the Git-atop methodology](https://github.com/extratone/bilge/issues/245) that now underpins *The Psalms*, there was a brief period I barely recall during which my whole process was *just* directly editing plain markdown text files living locally on my Surface Laptop 2 with a younger, pre-release build of [Typora](https://typora.io). What *does* certainly stand out, in hindsight, is how much work I consistently published over that time
 
## Theming 

Some of Obsidian’s themes are quite gorgeous, no doubt, but - once again - there’s nothing quite like those of a *native app* to get the stylistic hunger going. I must admit my knowledge of the theme creation process for Obsidian is virtually nill, but I think it’s indicative of Drafts’ malleability that I was able to create [such beautiful themes](https://extratone.github.io/drafts/) with zero knowledge of anything but CSS and [the handiest JSON manipulation tool, anywhere](https://apps.apple.com/us/app/jayson/id1468691718). 

![ENCOM Widgets](https://user-images.githubusercontent.com/43663476/156087079-abad2f15-5f83-438d-9c96-cf8ee7d7c4c7.png)

Once again, thanks to Drafts’ indigenousness, its widgets, too, can be themed. (This is not something I discovered until recently, re-reading the “[Creating Themes](https://docs.getdrafts.com/docs/extending/development/theme-format)” article. Notably, [Obsidian’s equivalent](https://help.obsidian.md/How+to/Add+custom+styles) is quite lackluster.) Above is an embedded screenshot of two widgets bearing the look of my newest Drafts theme, [ENCOM](https://directory.getdrafts.com/t/1wg). I’m [not much of a widgets person](https://whyp.it/t/on-widgets-54991), but it’s hard not to leave Drafts’ around, somewhere, given how beautiful they look.

https://twitter.com/NeoYokel/status/1498412135268982784

## Backwards Compatibility

I’m writing this portion from a first-generation [iPad Air](https://en.m.wikipedia.org/wiki/IPad_Air) I just inherited, which dates back to late 2013 and iOS 9. I’ve found some surprising delights within its last supported OS - 12.5.5 - and one of them has been Drafts’ support of that OS, up to Drafts version 26.3.5. (I just switched back to my 12 Pro Max and found everything instantly synced.) Most of the features I’m using in Drafts 31 on the latter device are still present. All of my actions and their corresponding keyboard shortcuts function and all of my themes are present, as are, naturally, my 1600+ drafts. As I noted in the Tweet embedded above, this all took less than ten minutes to sync *while I was doing other shit*.

The threshold of this backwards compatibility lies somewhere between iOS 9 and 12 - I know because I was *not* able to download Drafts on the iPhone 4S recently given to me by a friend. Unfortunately, my purchases of pre-5.0 Drafts versions are on another Apple account for which I no longer have the password. I wouldn’t be surprised, though, if I could get Drafts 1.0 or 2.0 running on that phone, had I access. Obsidian’s iOS compatibility also goes back to 12.1, though I found it particularly sticky to use on my iPad Air, if that makes sense. This is understandable, or at least it would be, were both Drafts and Bear not entirely smooth and functional on the same hardware.

## Cross-Compatibility 

Drafts’ cross-compatibility is perhaps its (and native apps, in general) weakest link. Full interaction with Drafts can be done on iOS, iPadOS, and macOS, but not Windows, nor will the prospect of doing so on the latter ever be realistic. Drafts’ [Web Capture utility](https://docs.getdrafts.com/docs/extensions/web-capture) enables drafts to be *created* from anywhere, however, and I - a Windows user, still - have found it genuinely useful.

By contrast, Obsidian can run on virtually anything, including Windows machines. On a git repository, version tracking is also completely cross-compatible, obviously.

## The Issue

Though this inadvertently turned into a sort of half-review of Drafts/showcase of my own Drafts setup, I really intended to highlight a single concern regarding this whole comparison: **redundancy**. *To Each His Own* is the classic counter-argument I’ve gotten when I’ve brought this up, but - as a Windows user, especially - the wealth of development time being (forgive me) squandered off in the direction of Obsidian without a single clear voice saying “holdup” is just a painful thing to witness. My desire in spending all this time writing is to perhaps prompt a “*wait, haven’t we already done this?*” among prospective third-party users/user-developers. 

One might say the same of [Taio](https://apps.apple.com/us/app/taio-markdown-text-actions/id1527036273), which is another flavor of the files app-driven iOS text editor, but it’s being built by a single person on a particular bent. A Mastodon mutual of mine [declared Taio to be the best markdown app](https://mastodon.xyz/@CutThroatNeko/107925765618277225). My favorite App Store review of Taio is subtitled “Like Obsidian ++...”

---

[1] Usually of a much more directed sort.
[2] Yes, a real shot. I promise. I even co-maintain [a dedicated Obsidian Raindrop collection](https://raindrop.io/davidblue/obsidian-20957282).
[3] Consider that Drafts creator, Greg Pierce, also *invented* x-callback-urls.
[4] Those actions can be examined: [Drakesville](https://actions.getdrafts.com/a/1wR) & [SMS Drakesville](https://actions.getdrafts.com/a/1wS).
[5] I realize this seems like ridiculous criteria, but Drafts is breathtaking.
[6] For the record, the Post I hyperlinked, here - “Evernote, Dropbox Paper, and the History of Word Processing” - represents ons of those wretched instances in which I spent significant time and intellectual energy on commentary I thought at the time to be far more informed/insightful/original than it actually was, realistically.  