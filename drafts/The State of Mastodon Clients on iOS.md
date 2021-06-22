# The State of Mastodon iOS Apps

![Masto Mascot iOS Art](https://i.snap.as/Y624NGHM.jpg)

![Mastodon iOS Apps Surveyed](https://i.snap.as/3q29AwpI.png)

## A survey of third-party Mastodon clients on iOS.

Apple's second virtual World Wide Developer Conference came and went as I wrote this guide - you can metaphorically picture me looking up from my machine having overheard the news of the [2021 Apple Design Award Winners](https://developer.apple.com/design/awards/) announcement. Perusing through them, I saw two I would have voted for, myself: [CARROT Weather](https://apps.apple.com/us/app/carrot-weather/id961390574) - the [beautifully vulgar](https://twitter.com/NeoYokel/status/1368223231111557125), grumpy bitch frontend for your preferred weather information service, and [Craft](https://apps.apple.com/us/app/craft-docs-and-notes-editor/id1487937127) - perhaps the most innovative take on word processing of the past two or three years - listed under "Finalists." (Read: losers.) The most positive personal discovery of (all?) WWDCs: an app called [**Be My Eyes**](https://www.bemyeyes.com/), which "connects blind and low-vision people with sighted volunteers and company representatives for visual assistance through a live video call," along with an exceptionally crafted, cross-device accessible-as-fuck TTS solution called [Voice Dream Reader](https://apps.apple.com/us/app/voice-dream-reader/id496177674). *However*, a double take in games from Genshin Impact and [the fucking *League of Legends* game](https://apps.apple.com/ph/app/league-of-legends-wild-rift/id1480616990) certainly sours the mouth and suggest yet further just how much Apple, Inc. has *sold out*. Also, the fact that [Poolside's app](https://apps.apple.com/gb/app/poolside-fm/id1514817810) made the page at all is incredibly frustrating, despite how cheeky I've found its vaporwave-informed UI fuckery since beta. 

I know you almost certainly did not arrive here to hear one motherfucker's complaints about WWDC, but - as with everything Apple, Inc. does - every morsel of curatorial expression/discrimination/favoritism from The Great Money God within this platform *must* be scrutinized and criticized 

Despite how deeply I've gone into iOS this year, I do not believe myself to be a qualified judge of software design, but I no longer believe Apple to be, either. Regardless of the revenue-related controversies of late, Apple have simply become terrible stewards of the App Store. Scams and blatant intellectual property theft abound, while the majority of the most innovative entries I've ever seen remain entirely obfuscated and uncelebrated by all of Apple. Inc.'s mechanisms. If you required an explanation for the amount of time I've invested into App Guides - a space to which I never would have imagined intentionally bringing *The Psalms* - I hope you can understand.

I must confess: I have been _meaning_ to write this app guide since even before I [interviewed Mastodon creator Eugen Rochko](https://bilge.world/eugen-rochko-interview) on the morning of his Big Press Day, just over 4 years ago. I’ve exhaustively explored different means of convincing my own longtime Twitter friends to move, over that time, with very little success. Eugen, himself, published an [official blog post](https://blog.joinmastodon.org/2021/02/developing-an-official-ios-app-for-mastodon/) at the beginning of February detailing his plans to open up onboarding by way of “an official Mastodon app that is free to download and that is specialized in helping new users get started on the platform.” As a Patreon supporter of [The Mastodon Project](https://www.patreon.com/mastodon) (full disclosure,) I can tell you that progress is good, but we shouldn’t expect to see a release version of the app for the remainder of this year. That said, I thought it might be worth going over the third-party options iOS users currently have available to them, largely because the offerings are each innovative and mature applications in their own right. ==Also, it’s become quite apparent that the normal tech media sources you’d go to for such a guide aren’t going to give Mastodon the attention it deserves.==

## Obligatory(?) Context

I originally intended to be as clinical as possible in this Post, having realized its potential as the singular comparison of its kind to appear in search results for new and potential users of Mastodon. From my perspective, Mastodon has long since surpassed regard as a novel social media experiment who's function is to prompt academic conversations about decentralization, open source, ad tech, and federated social's solutions to all of the Big Web's Big Boy (proprietary) Problems (though I have been compelled to [invest significantly](https://github.com/extratone/bigblue) in that very conversation.) In the less intellectual hours of my day-to-day life (read: most of the time,) Mastodon is nothing more or less than my favorite place on the internet. It is a relentless delight which I only lament because I want to share so much of it with my friends, but have continued to fail in my efforts to articulate that **Mastodon is not a compromise; it is a better social space**.

If you didn't know, this seems to have become *my general shit*, for lack of a better term: the ethical considerations of open source/"alternative" software are very important, yes! ... but they are *far* from the whole, and they are not a requisite for new users. The second of [this World Wide Web Blog's fundamental considerations](https://bilge.world/about), in fact:

> The Open Source/Open Web community continues to struggle with their *brand image* (if you will) in both old and new ways that needlessly alienate (and sometimes obfuscate) some of their most important contributions from the average user. **Technology media has failed in their responsibility to address this issue.**

*Oh boy, here we go...* No. I did not want to say anything ideological - I wanted this Post to function as little more than a pretty screenshot showcase and simple associative list responding to all of the Reddit posts I've seen to the tune of "is there an iPhone app?" As I explored them, however, I was reminded of the sheer creativity the "alternative" software community is capable of. Even the roughest of these considered apps seem unable to be faceless - sorting through the obscene amount of (unlabeled) screenshots accumulated over the past weeks of testing in my Recents folder has been *so* much easier than I thought it would be because of their relentless originality. If you've actually used any iOS applications and/or browsed the singular App Store from which they can be acquired in the past 3-4 years, you're undoubtedly skeptical: what we might have called "feature overlap"  at one time has become all but the platform's core ethos. If you're the sort who enjoys screwing around with apps, generally, as I have for the whole of iPhone history, you have grown accustomed to disappointment.

<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">so! I found a way to actually find the apps you’re looking for on the App Store! the search function in this dev-facing tool *ACTUALLY WORKS*!!! <a href="https://t.co/XrsStvXq57">https://t.co/XrsStvXq57</a></p>&mdash; ※ David Blue ※ (@NeoYokel) <a href="https://twitter.com/NeoYokel/status/1402057069927309318">June 8, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

`https://twitter.com/NeoYokel/status/1402057069927309318`

Regardless of who is to blame, we can all agree that the App Store is currently oversaturated nigh *beyond usability* with mediocre entries built from the beginning with zero apparent ambition toward original function. This, alone, wouldn't be so problematic if Discovery were not so [completely and totally Fucked](https://twitter.com/NeoYokel/status/1379068906917224448) (except when [dev-facing](https://tools.applemediaservices.com/app-store/),) but I needn't comment further on that subject at the moment - I'm just trying emphasize how absolutely unheard of it is for a single protocol/service's third-party client representation on iOS to be so thoroughly special. It was astonishing to find all but one or two of these apps *in a functional state*, actually. In all my equivalent experiences downloading the entirety of a given service's API-supported palette (e.g. IRC apps, [topically](https://www.vice.com/en/article/pkbgvg/major-internet-projects-are-leaving-freenode-after-korean-prince-takeover),) an all-too-significant purpose of whatever ends up getting published is simply documenting the ~20% of available titles that *actually work* at the given moment. (I'd have mentioned the "best [service/task] iPhone apps for [year]" listicles found in online publications like *Digital Trends* were it not for the percentage of them in which it's clear the author *did not actually download* some/most of the apps listed‽‽‽) Perhaps due to [iOS 14.5's implementation of ATT](https://www.wsj.com/video/series/joanna-stern-personal-technology/apple-software-chief-explains-ios-145-defends-companys-reach-exclusive/57D138E3-3677-4A78-9534-62DAD443FE97), all of the Mastodon apps I could find and test (not counting non-English language-supporting apps, in fairness' interest) are currently functioning.

So, if there's virtually zero chance a new Mastodon user might download one of the apps we're about to consider and find it broken, what practical function remains for this guide? Hopefully, to establish a SEO catch-all for such users from a non-automated source less associated with the project than the official apps list. Those for whom Mastodon is still an unfamiliar subject should find the collected imagery intriguing, hopefully. 

![Mastodon iOS Icon Strip](https://i.snap.as/H25gzEg2.jpeg)

## The Big 6

My first step in writing this guide was to post [a thread on r/Mastodon](https://www.reddit.com/r/Mastodon/comments/mxymr1/your_thoughts_on_thirdparty_mastodon_clients_for/) soliciting thoughts on third-party Mastodon apps from other users, who expressed a lot of love for Toot! and Metatext:

> Toot is just a joy to use. It has a little too much sometimes (it actually contains little mini games...which really aren't needed), but the experience of using it has some really clever UI twists. -[u/mikepictor](https://www.reddit.com/user/mikepictor/)

Pragmatic Code's [Linky](https://apps.apple.com/us/app/linky-for-twitter-and-mastodon/id438090426) was also mentioned by multiple respondents. It's not a client, but a bridging tool for smoother URL sharing that integrates with iOS' share sheet. I did not have time to try it, myself, but from all accounts, it is an obligatory mention. So too is the GitHub Repository/List I created 

First, let’s begin with The Big 6 - those apps The Mastodon Project, itself, has seen fit to [list on joinmastodon.org](https://joinmastodon.org/apps).

https://youtube.com/watch?v=LdBFMibyh3Y

### [Toot!](https://apps.apple.com/app/toot/id1229021451)

Dag Ågren‘s [Toot!](https://apps.apple.com/us/app/toot/id1229021451) is not only my personal app of choice - I would (and have) go so far as to say it’s the single most innovative mobile social app I’ve ever encountered, largely because of its jacknife-esque instance selection. It’s held a place in my phone’s dock since the day I first downloaded it, for this and many other reasons. While one might find bugs/loose ends (understandably) exploring the functions of other indie social clients, within Toot!, they will only find little delights, like [its wholly unique Share Sheet interface](https://imgur.com/gallery/xAXs95J).

![Toot! Themes](https://i.snap.as/bXG5SAUv.png)

Toot! is extremely beautiful (despite its unfortunate name,) and I am quite superficial in my taste. It’s Obsidian theme (which may or may not be related to the topical notetaking system of the same name) is especially gorgeous.

<audio controls>
  <source src="https://github.com/extratone/bilge/raw/main/audio/Toot!%20Custom%20Sounds.mp3">
</audio>

In my cacophonous attempt to compare the notifications of all available Mastodon apps simultaneously (found below,) it's worth noting that Toot!'s always came first. Its [charming custom audio alerts](https://whyp.it/t/toot-ios-app-custom-sounds-92997) also make them my favorite by far.

They're not just cute: in reflection informed by a newly-considered function of these apps - serving as representing M, it occurred to me that **Toot! audio alerts playing from my iPhone have prompted more first-time conversations about Mastodon in the wild than I can count**. (Seriously: they should be considered an onboarding mechanism.)

![Toot! Settings](https://i.snap.as/30YJR456.png)

In my experience, it’s also the most robust of the lot - as in, it is very much the exception rather than the norm to encounter any sort of error or other obstruction in normal, day-to-day use. My own real reservation applies to the entire selection discussed today: I wish Toot! supported Bluetooth keyboard shortcuts.

![Mast for iOS](https://i.snap.as/KF4Slx39.png)

### [Mast](https://apps.apple.com/us/app/mast-for-mastodon/id1437429129)

I originally had high hopes for Shihab Mehboob‘s [Mast](https://apps.apple.com/us/app/mast-for-mastodon/id1437429129) - which used to look very different from the way it does, today. That’s almost certainly to do with its ownership [changing hands](https://twitter.com/jpeguin/status/1354854403124178947) at some point (no, I do not have any further details on that story, unfortunately.) That’s not to say the current app isn’t a worthwhile offering, it’s just far less _visually ambitious_ than the original I remember. However, it’s also significantly more reliable.

<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">They were there last time I checked, but Mast isn’t owned and maintained by me anymore so not sure.</p>&mdash; Shihab Mehboob (@JPEGuin) <a href="https://twitter.com/JPEGuin/status/1354854403124178947">January 28, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

`https://twitter.com/JPEGuin/status/1354854403124178947`

Hopefully without unnecessarily "outing" anyone, I must point out that the original Mast does, in fact, live on. I noticed 

![Mast Details](https://i.snap.as/UsH95qJv.png)

![Amaroq for iOS](https://i.snap.as/JV5vzmky.png)

### [Amaroq](https://apps.apple.com/us/app/amarok-for-mastodon/id1214116200)

The Original… Genesis… If Amaroq was not the first Mastodon app on the App Store, it’s certainly the oldest to survive. Its GitHub Repository’s [first commit](https://github.com/ReticentJohn/Amaroq/commit/9648ebdecf8ab20819ba10fe18b6317a8026fd86) dates back to April 17th, 2017.  While you’re there, you might note that it’s the only one of these entries coded entirely in Objective-C - the near-40-year-old language originally underpinning iOS before Swift’s birth in 2014. Amaroq was the first Mastodon app I used and remains the strongest free option for iOS users. It’s been nearly a year since its last update, so its missing a few narrower functions like Bookmarking and Polls, but the core features it _does_ include are rock solid. The only wild card: what the fuck is Awoo Mode???

![iMast for iOS](https://i.snap.as/7A9pJMzD.png)

### [iMast](https://apps.apple.com/us/app/imast/id1229461703)

For better or worse, [@rinsuki](https://mstdn.rinsuki.net/@rinsuki)’s iMast will require either a basic grasp of the Japanese language, or the patience to translate its menus and work backwards. (OCR came to mind, but I’m not quite dedicated enough to try it for this guide.) Assuming [Google’s translation](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:64ce057e-5adc-4578-a0ef-e9ddb6b5d545) of [its GitHub Pages site](https://cinderella-project.github.io/iMast/) is correct, iMast is also Open Source “under the Apache License 2.” Unlike Amaroq, it appears to have been built in Swift from the ground up. Unfortunately, that's about all I can comment on, though I would very much love to hear from any iMast users/Japanese speakers and will update this Post accordingly.

A function I _can_ provide: documenting [iMast’s Bluetooth keyboard shortcuts](https://github.com/extratone/imastodon/blob/main/documentation/iMastKeyboardShortcuts.md).

#### iMast’s Keyboard Shortcuts

| Action              | Key        |
|:-------------------:|:----------:|
| Open Compose Window | ⌘ + N      |
| Send Toot           | ⌘ + Return |
| Home Timeline       | ⌘ + 1      |
| Notifications       | ⌘ + 2      |
| Local Timeline      | ⌘ + 3      |
| Others (Menu)       | ⌘ + 9      |

![Mercury for iOS - Scoops Theme](https://i.snap.as/ScJoTz8e.png)

### [Mercury](https://apps.apple.com/us/app/mercury-for-mastodon/id1486749200)

Daniel Nitsikopoulos' [Mercury](https://onmercury.app) represents yet another entirely original direction in Social clients. It's fresh and "opinionated" in its explicit lack of support for instances that "[promote abuse and harassment](https://onmercury.app/help)." From all appearances, this appears to be the singular source of negative reviews on [its iOS App Store page](https://apps.apple.com/us/app/mercury-for-mastodon/id1486749200). It's also the other option to offer custom audio notifications, though I couldn't capture a sample. Its [Trello Roadmap](https://trello.com/b/6EseiLSQ/mercury-roadmap) and [Feedback Repo](https://github.com/dNitza/mercury-issues/issues) are public but mostly inactive. As you can see in the grid embedded above, I absolutely adore its Scoops theme and find my $0.99 Tip 100% worth its custom icons.

![Metatext for iOS](https://i.snap.as/w7PTFpTf.png)

### [Metatext](https://apps.apple.com/app/metatext/id1523996615)

Metatext is perhaps the buzziest of all these apps - well-praised in every space I could find conversation on the subject. It's developed under [Justin Mazzocchi](https://mastodon.social/@jzzocc)'s software studio, [Metabolist](https://metabolist.org/) and is as [Open Source](https://github.com/metabolist/metatext) as it gets! (As per my hardware keyboard shortcuts crusade, I added [my own issue](https://github.com/metabolist/metatext/issues/40) requesting support.) [u/GummyKibble](https://www.reddit.com/user/GummyKibble/) noted that "it looks like a native app on both iOS and iPadOS." This term - *native* - seems inextricably linked with Metatext. I vaguely understand what it means, and I do agree, but it's worth noting that I speak with some privilege, having compared all of these apps on the top performing handset Apple currently has to offer. In many ways, it is the most frugal of the new offerings, especially, yet it strikes a keen balance between function and delight.

## Less-Than-Sanctioned

![Tootle for iOS](https://i.snap.as/S6VkSlY0.png)

### [Tootle](https://apps.apple.com/us/app/tootle-for-mastodon/id1236013466)

I'm not entirely positive which Mastodon app was *actually* the first on my iPhone, back in 2017, but I know for sure it was either Amaroq or the dearest, infinitely-colorful Tootle. Its [App Store Page](https://mastodon.cloud/@tootleapp) Version History suggests it has not been updated in 14 months, yet the app - which was apparently "designed for iPad" - appears to be working just fine. There are some overlapping UI elements, but they're barely noticeable. Were it not for the new dev-facing store search tool mentioned above, I would have assumed this app long gone, to be honest, but using it again has somehow managed to genuinely twinge my nostalgia nerve.

In my search for any extra-App Store representation other than [Tootle's Mastodon Account](https://mastodon.cloud/@tootleapp) (which last posted the day after my birthday, last year,) I discovered [Tootle... for Linux](https://ubuntuhandbook.org/index.php/2020/11/tootle-l-gtk3-mastodon-client-linux/). Since I am a dedicated and thorough person, these days, I spent several hours messing around with Linux Virtual Machining until Lubuntu finally functioned *just* so I could show you what it looks like. Below is a screen capture of Tootle bordered by the most Macish LXQ desktop bars included in Lubuntu and *even* wearing the new official Apple System Font, SF Pro. Still, I think you'll agree... Tootle for Linux is not related to Tootle.

<img src="https://i.snap.as/Rx3Eu9GA.png" alt="Tootle for Linux" style="zoom:50%;" />

Personally, I find this a profound shame - I think more apps should be as colorful - and as color *configurable* - as this little, mysterious Mastodon app. I created the theme you see represented in the frames embedded above using *The Psalms* colors, naturally, and the whole process took less than five minutes. Play around with it as I remember doing, all those years ago, and you'd be surprised how hard it is to create an unusable color theme. What I find *most* shame in, though, is that Tootle appears to be completely invisible in regular app store searches, now. (And by "*most* shame," you know I really mean *entirely fucking unacceptable*.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/WBZtmOqyk8c?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

`https://www.youtube.com/watch?v=WBZtmOqyk8c`

![Tusker on iOS](https://i.snap.as/82RtZcyl.png)	

### [Tusker](https://testflight.apple.com/join/wtB7HYvG)

I found my way to the only *currently in-development* entry on this list thanks to my Mastodon friend [wakest](https://social.wake.st/@liaizon). iOS developer [Shadowfacts](https://social.shadowfacts.net/users/shadowfacts) (who also maintains [*shadowfacts.net*](https://shadowfacts.net/)) is working on their considerate, distinct app, Tusker in [this self-hosted Repository](https://git.shadowfacts.net/shadowfacts/Tusker). In [#tusker](https://mastodon.social/web/timelines/tag/tusker) on Mastodon, you'll find a few poignant praises from [Pixelfed](https://pixelfed.org/) founder and principal developer [Dan Sup](https://mastodon.social/@dansup), which - from my perspective - is especially high, indeed. 

![Tusker Landscape Mode!](https://i.snap.as/jZudSEdQ.png)

You, yourself can use Tusker *right this very minute* via Apple's beta distribution system, [Testflight](https://testflight.apple.com/), via [**this invite link**](https://testflight.apple.com/join/wtB7HYvG).



![Mastodon Account Wordcloud](https://user-images.githubusercontent.com/43663476/122717470-43f08a00-d231-11eb-890f-dfa3ff33b65d.png)

## Continuing to Explore Social Ownership

This couldn't be "just" an app guide - I think I have thoroughly accepted this, by now, just in time for some conclusionary remarks. Somehow, the subject I originally tackled specifically because I thought it would be quick, rudimentary, and straightforward has become yet another personal journey. It'd feel a bit preposterous to declare any one of these apps to be *life-changing*, but - in every sense of the term, in contemporary, inevitably social media-informed life, they do indeed constitute a form of radical, ideological wellness. Each of them managed to remind me of a different minute delight found within a developer-user dynamic made up of thoughtful and effective minds working to contribute original and valuable experiences, first. Most noteworthy of these little freedoms: the realization that the upcoming "official" Mastodon app along with any future new options are exclusively a positive thing *for the user*... None of these apps were conceived to gobble up market share because the market is fundamentally, inevitably, uncompromisingly *infinitely shared*. I don't know anything about business, but I *do* know that relief from the burden of considering proprietary multivectored development intentions has been personally breathtaking. I can only hope the reciprocal compensation is happening at even a fraction of what it "should" be. 

From another essential direction, I hope I have communicated that they're far from curious, "niche" or vanity side projects, now. When I used the term "mature" in introducing this little arena, I very much meant it - these "alt" social clients developed almost exclusively within single-person-led projects now make the Twitter for iOS app look ugly *and* fucking broken. "Giving social networking back to you" has never been more resonant. Yes, it really is Toot!'s "take a break" blue screen, Amaroq's mysterious Awoo mode toggle, iMast's music app integration, Mercury's configurable timelines, Metatext's native solidity, Tootle's custom colors, Tusker's Digital Wellness controls, Dudu's elemental readability, Roma's quiet resurrection of Mast's UI bravado, Stella's utterly bizarre visual departures, Fedi's odd animated UI behaviors, Tootoise's consideration of *pace*, B4X's unfathomable elements, and Oyakodon's adorable rough edges that have made my online life *measurably*... *immensely* better, these past weeks. 



Those of you who haven't yet signed up for Mastodon: you are missing out. I am being *actually* pampered, now, in World Wide Web terms. You are *so* welcome whenever you're ready - the water is nice and warm, as they say.
