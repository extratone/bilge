# The State of Mastodon iOS Apps

![Mast Details](https://i.snap.as/UsH95qJv.png)

## A survey of third-party Mastodon clients on iOS.

Apple's second virtual World Wide Developer Conference is imminent and its [2021 Apple Design Award Finalists](https://developer.apple.com/design/awards/) have been released. Perusing through them, I see two I would have voted for, myself: [CARROT Weather](https://apps.apple.com/us/app/carrot-weather/id961390574) - the [beautifully vulgar](https://twitter.com/NeoYokel/status/1368223231111557125) frontend for your preferred weather information service, and [Craft](https://apps.apple.com/us/app/craft-docs-and-notes-editor/id1487937127) - perhaps the most innovative take on word processing of the past two or three years. Despite how deeply I've gone into iOS this year, I do not believe myself to be a qualified judge of software design, but I no longer believe Apple to be, either. Regardless of the revenue-related controversies of late, Apple have simply become terrible stewards of the App Store. Scams and blatant intellectual property theft abound, while the majority of the most innovative entries I've ever seen remain entirely obfuscated and uncelebrated by all of Apple. Inc.'s mechanisms. If you required an explanation for the amount of time I've invested into App Guides - a space to which I never would have imagined intentionally bringing *The Psalms* - I hope you can understand.

I must confess: I have been _meaning_ to write this app guide since even before I [interviewed Mastodon creator Eugen Rochko](https://bilge.world/eugen-rochko-interview) on the morning of his Big Press Day, just over 4 years ago. I’ve exhaustively explored different means of convincing my own longtime Twitter friends to move, over that time, with very little success. Eugen, himself, published an [official blog post](https://blog.joinmastodon.org/2021/02/developing-an-official-ios-app-for-mastodon/) at the beginning of February detailing his plans to open up onboarding by way of “an official Mastodon app that is free to download and that is specialized in helping new users get started on the platform.” As a Patreon supporter of [The Mastodon Project](https://www.patreon.com/mastodon) (full disclosure,) I can tell you that progress is good, but we shouldn’t expect to see a release version of the app for the remainder of this year. That said, I thought it might be worth going over the third-party options iOS users currently have available to them, largely because the offerings are each innovative and mature applications in their own right. ==Also, it’s become quite apparent that the normal tech media sources you’d go to for such a guide aren’t going to give Mastodon the attention it deserves.==

## Obligatory(?) Context

I originally intended to be as clinical as possible in this Post, having realized its potential as the singular comparison of its kind to appear in search results for new and potential users of Mastodon. From my perspective, Mastodon has long since surpassed regard as a novel social media experiment who's function is to prompt academic conversations about decentralization, open source, ad tech, and federated social's solutions to all of the Big Web's Big Boy (proprietary) Problems (though I have been compelled to [invest significantly](https://github.com/extratone/bigblue) in that very conversation.) In the less intellectual hours of my day-to-day life (read: most of the time,) Mastodon is nothing more or less than my favorite place on the internet. It is a relentless delight which I only lament because I want to share so much of it with my friends, but have continued to fail in my efforts to articulate that **Mastodon is not a compromise; it is a better social space**.

If you didn't know, this seems to have become *my general shit*, for lack of a better term: the ethical considerations of open source/"alternative" software are very important, yes! ... but they are *far* from the whole, and they are not a requisite for new users. The second of [this World Wide Web Blog's fundamental considerations](https://bilge.world/about), in fact:

> The Open Source/Open Web community continues to struggle with their *brand image* (if you will) in both old and new ways that needlessly alienate (and sometimes obfuscate) some of their most important contributions from the average user. **Technology media has failed in their responsibility to address this issue.**

*Oh boy, here we go...* No. I did not want to say anything ideological - I wanted this Post to function as little more than a pretty screenshot showcase and simple associative list responding to all of the Reddit posts I've seen to the tune of "is there an iPhone app?" As I explored them, however, I was reminded of the sheer creativity the "alternative" software community is capable of. Even the roughest of these considered apps seem unable to be faceless - sorting through the obscene amount of (unlabeled) screenshots accumulated over the past weeks of testing in my Recents folder has been *so* much easier than I thought it would be because of their relentless originality. If you've actually used any iOS applications and/or browsed the singular App Store from which they can be acquired in the past 3-4 years, you're undoubtedly skeptical: what we might have called "feature overlap"  at one time has become all but the platform's core ethos. If you're the sort who enjoys screwing around with apps, generally, as I have for the whole of iPhone history, you have grown accustomed to disappointment.

Regardless of who is to blame, we can all agree that the App Store is currently oversaturated nigh *beyond usability* with mediocre entries built from the beginning with zero apparent ambition toward original function. This, alone, wouldn't be so problematic if Discovery were not so [completely and totally Fucked](https://twitter.com/NeoYokel/status/1379068906917224448), but I needn't comment further on that subject at the moment - I'm just trying emphasize how absolutely unheard of it is for a single protocol/service's third-party client representation on iOS to be so thoroughly special. It was astonishing to find all but one or two of these apps *in a functional state*, actually. In all my equivalent experiences downloading the entirety of a given service's API-supported palette (e.g. IRC apps, [topically](https://www.vice.com/en/article/pkbgvg/major-internet-projects-are-leaving-freenode-after-korean-prince-takeover),) an all-too-significant purpose of whatever ends up getting published is simply documenting the ~20% of available titles that *actually work* at the given moment. (I'd have mentioned the "best [service/task] iPhone apps for [year]" listicles found in online publications like *Digital Trends* were it not for the percentage of them in which it's clear the author *did not actually download* some/most of the apps listed‽‽‽) Perhaps due to [iOS 14.5's implementation of ATT](https://www.wsj.com/video/series/joanna-stern-personal-technology/apple-software-chief-explains-ios-145-defends-companys-reach-exclusive/57D138E3-3677-4A78-9534-62DAD443FE97), all of the Mastodon apps I could find and test (not counting non-English language-supporting apps, in fairness' interest) are currently functioning.

So, if there's virtually zero chance a new Mastodon user might download one of the apps we're about to consider and find it broken, what practical function remains for this guide? Hopefully, to establish a SEO catch-all for such users from a non-automated source less associated with the project than the official apps list. Those for whom Mastodon is still an unfamiliar subject should find the collected imagery intriguing, hopefully. 

![Mastodon iOS Icon Strip](https://i.snap.as/H25gzEg2.jpeg)

## The Big 6

My first step in writing this guide was to post [a thread on r/Mastodon](https://www.reddit.com/r/Mastodon/comments/mxymr1/your_thoughts_on_thirdparty_mastodon_clients_for/) soliciting thoughts on third-party Mastodon apps from other users, who expressed a lot of love for Toot! and Metatext.

First, let’s begin with The Big 6 - those apps The Mastodon Project, itself, has seen fit to [list on joinmastodon.org](https://joinmastodon.org/apps).

https://youtube.com/watch?v=LdBFMibyh3Y

### [Toot!](https://apps.apple.com/app/toot/id1229021451)

Dag Ågren‘s [Toot!](https://apps.apple.com/us/app/toot/id1229021451) is not only my personal app of choice - I would (and have) go so far as to say it’s the single most innovative mobile social app I’ve ever encountered, largely because of its jacknife-esque instance switching function. It’s held a place in my phone’s dock since the day I first downloaded it, for this and many other reasons. While one might find bugs/loose ends (understandably) exploring the functions of other indie social clients, within Toot!, they will only find little delights, like [its wholly unique Share Sheet interface](https://imgur.com/gallery/xAXs95J).

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

![Amaroq for iOS](https://i.snap.as/JV5vzmky.png)

### [Amaroq](https://apps.apple.com/us/app/amarok-for-mastodon/id1214116200)

The Original… Genesis… If Amaroq was not the first Mastodon app on the App Store, it’s certainly the oldest to survive. Its GitHub Repository’s [first commit](https://github.com/ReticentJohn/Amaroq/commit/9648ebdecf8ab20819ba10fe18b6317a8026fd86) dates back to April 17th, 2017.  While you’re there, you might note that it’s the only one of these entries coded entirely in Objective-C - the near-40-year-old language originally underpinning iOS before Swift’s birth in 2014. Amaroq was the first Mastodon app I used and remains the strongest free option for iOS users. It’s been nearly a year since its last update, so its missing a few narrower functions like Bookmarking and Polls, but the core features it _does_ include are rock solid. The only wild card: what the fuck is Awoo Mode???

![iMast for iOS](https://i.snap.as/7A9pJMzD.png)

### [iMast](https://apps.apple.com/us/app/imast/id1229461703)

For better or worse, [@rinsuki](https://mstdn.rinsuki.net/@rinsuki)’s iMast will require either a basic grasp of the Japanese language, or the patience to translate its menus and work backwards. (OCR came to mind, but I’m not quite dedicated enough to try it for this guide.) Assuming [Google’s translation](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:64ce057e-5adc-4578-a0ef-e9ddb6b5d545) of [its GitHub Pages site](https://cinderella-project.github.io/iMast/) is correct, iMast is also Open Source “under the Apache License 2.” Unlike Amaroq, it appears to have been built in Swift from the ground up. Unfortunately, that's about all I can comment on, though I would very much love to hear from any iMast users/Japanese speakers and will update this Post accordingly.

![Mercury for iOS](https://i.snap.as/1aTfNFtD.png)

### [Mercury](https://apps.apple.com/us/app/mercury-for-mastodon/id1486749200)

Daniel Nitsikopoulos' Mercury 