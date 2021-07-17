# The State of Mastodon iOS Apps

![Mastodon iOS Apps Surveyed](https://i.snap.as/3q29AwpI.png)

## A safari through the enchanting space of third-party Mastodon clients on iOS.

Apple's second virtual World Wide Developer Conference came and went as I wrote this guide - you can metaphorically picture me looking up from my machine having overheard the news of the [2021 Apple Design Award Winners](https://developer.apple.com/design/awards/) announcement. Perusing through them, I saw two I would have voted for, myself: [CARROT Weather](https://apps.apple.com/us/app/carrot-weather/id961390574) - the [beautifully vulgar](https://twitter.com/NeoYokel/status/1368223231111557125), grumpy bitch frontend for your preferred weather information service, and [Craft](https://apps.apple.com/us/app/craft-docs-and-notes-editor/id1487937127) - perhaps the most innovative take on word processing of the past two or three years - listed under "Finalists." (Read: losers.) The most positive personal discovery of (all?) WWDCs: an app called [**Be My Eyes**](https://www.bemyeyes.com/), which "connects blind and low-vision people with sighted volunteers and company representatives for visual assistance through a live video call," along with an exceptionally crafted, cross-device accessible-as-fuck TTS solution called [Voice Dream Reader](https://apps.apple.com/us/app/voice-dream-reader/id496177674). *However*, a double take in games from Genshin Impact and [the fucking *League of Legends* game](https://apps.apple.com/ph/app/league-of-legends-wild-rift/id1480616990) certainly sours the mouth and suggest yet further just how much Apple, Inc. has *sold out*. Also, the fact that [Poolside's app](https://apps.apple.com/gb/app/poolside-fm/id1514817810) made the page at all is incredibly frustrating, despite how cheeky I've found its vaporwave-informed UI fuckery since beta. 

I know you almost certainly did not arrive here to hear one motherfucker's complaints about WWDC, but - as with everything Apple, Inc. does - every morsel of curatorial expression/discrimination/favoritism from The Great Money God within this platform *must* be scrutinized and criticized.

Despite how deeply I've gone into iOS this year, I do not believe myself to be a qualified judge of software design, but I no longer believe Apple to be, either. Regardless of the revenue-related controversies of late, Apple have simply become terrible stewards of the App Store. Scams and blatant intellectual property theft abound, while the majority of the most innovative entries I've ever seen remain entirely obfuscated and uncelebrated by all of Apple. Inc.'s mechanisms. If you required an explanation for the amount of time I've invested into App Guides - a space to which I never would have imagined intentionally bringing *The Psalms* - I hope you can understand.

I must confess: I have been _meaning_ to write this app guide since even before I [interviewed Mastodon creator Eugen Rochko](https://bilge.world/eugen-rochko-interview) on the morning of his Big Press Day, just over 4 years ago. I’ve exhaustively explored different means of convincing my own longtime Twitter friends to move, over that time, with very little success. Eugen, himself, published an [official blog post](https://blog.joinmastodon.org/2021/02/developing-an-official-ios-app-for-mastodon/) at the beginning of February detailing his plans to open up onboarding by way of “an official Mastodon app that is free to download and that is specialized in helping new users get started on the platform.” As a Patreon supporter of [The Mastodon Project](https://www.patreon.com/mastodon) (full disclosure,) I've been testing this app (see preview shots at the very end,) and am quite smitten with it. That said, I thought it might be worth going over the third-party options iOS users currently have available to them, largely because the offerings are each innovative and mature applications in their own right. (Also, it’s become quite apparent that the normal tech media sources you’d go to for such a guide aren’t going to give Mastodon the attention it deserves.)

![Masto Mascot iOS Art](https://i.snap.as/Y624NGHM.jpg)

## Obligatory(?) Context

I originally intended to be as clinical as possible in this Post, having realized its potential as the singular comparison of its kind to appear in search results for new and potential users of Mastodon. From my perspective, Mastodon has long since surpassed regard as a novel social media experiment who's function is to prompt academic conversations about decentralization, open source, ad tech, and federated social's solutions to all of the Big Web's Big Boy (proprietary) Problems (though I have been compelled to [invest significantly](https://github.com/extratone/bigblue) in that very conversation.) In the less intellectual hours of my day-to-day life (read: most of the time,) Mastodon is nothing more or less than my favorite place on the internet. It is a relentless delight which I only lament because I want to share so much of it with my friends, but have continued to fail in my efforts to articulate that **Mastodon is not a compromise; it is a better social space**.

If you didn't know, this seems to have become *my general shit*, for lack of a better term: the ethical considerations of open source/"alternative" software are very important, yes! ... but they are *far* from the whole, and they are not a requisite for new users. The second of [this World Wide Web Blog's fundamental considerations](https://bilge.world/about), in fact:

> The Open Source/Open Web community continues to struggle with their *brand image* (if you will) in both old and new ways that needlessly alienate (and sometimes obfuscate) some of their most important contributions from the average user. **Technology media has failed in their responsibility to address this issue.**

The blog on which you're reading this, in fact, is federated on ActivityPub. If you so chose, you could be reading it in any client capable of displaying large bodies of text. The crucial point, though, is that *you didn't need to know that* - you could very well go on reading it on the web in total ignorance/apathy regarding Federation.

*Oh boy, here we go...* No. I did not want to say anything ideological - I wanted this Post to function as little more than a pretty screenshot showcase and simple associative list responding to all of the Reddit posts I've seen to the tune of "is there an iPhone app?" As I explored them, however, I was reminded of the sheer creativity the "alternative" software community is capable of. Even the roughest of these considered apps seem unable to be faceless - sorting through the obscene amount of (unlabeled) screenshots accumulated over the past weeks of testing in my Recents folder has been *so* much easier than I thought it would be because of their relentless originality. If you've actually used any iOS applications and/or browsed the singular App Store from which they can be acquired in the past 3-4 years, you're undoubtedly skeptical: what we might have called "feature overlap"  at one time has become all but the platform's core ethos. If you're the sort who enjoys screwing around with apps, generally, as I have for the whole of iPhone history, you have grown accustomed to disappointment.

https://twitter.com/NeoYokel/status/1402057069927309318

Regardless of who is to blame, we can all agree that the App Store is currently oversaturated nigh *beyond usability* with mediocre entries built from the beginning with zero apparent ambition toward original function. This, alone, wouldn't be so problematic if Discovery were not so [completely and totally Fucked](https://twitter.com/NeoYokel/status/1379068906917224448) (except when [dev-facing](https://tools.applemediaservices.com/app-store/),) but I needn't comment further on that subject at the moment - I'm just trying emphasize how absolutely unheard of it is for a single protocol/service's third-party client representation on iOS to be so thoroughly special. It was astonishing to find all but one or two of these apps *in a functional state*, actually. In all my equivalent experiences downloading the entirety of a given service's API-supported palette (e.g. IRC apps, [topically](https://www.vice.com/en/article/pkbgvg/major-internet-projects-are-leaving-freenode-after-korean-prince-takeover),) an all-too-significant purpose of whatever ends up getting published is simply documenting the ~20% of available titles that *actually work* at the given moment. (I'd have mentioned the "best [service/task] iPhone apps for [year]" listicles found in online publications like *Digital Trends* were it not for the percentage of them in which it's clear the author *did not actually download* some/most of the apps listed‽‽‽) Perhaps due to [iOS 14.5's implementation of ATT](https://www.wsj.com/video/series/joanna-stern-personal-technology/apple-software-chief-explains-ios-145-defends-companys-reach-exclusive/57D138E3-3677-4A78-9534-62DAD443FE97), all of the Mastodon apps I could find and test (not counting non-English language-supporting apps, in fairness' interest) are currently functioning.

So, if there's virtually zero chance a new Mastodon user might download one of the apps we're about to consider and find it broken, what practical function remains for this guide? Hopefully, to establish a SEO catch-all for such users from a non-automated source less associated with the project than the official apps list. Those for whom Mastodon is still an unfamiliar subject should find the collected imagery intriguing, hopefully. 

https://www.youtube.com/watch?v=g2MSr_7J1GY

![Mastodon iOS Icon Strip](https://i.snap.as/H25gzEg2.jpeg)

## The Big 6

My first step in writing this guide was to post [a thread on r/Mastodon](https://www.reddit.com/r/Mastodon/comments/mxymr1/your_thoughts_on_thirdparty_mastodon_clients_for/) soliciting thoughts on third-party Mastodon apps from other users, who expressed a lot of love for Toot! and Metatext:

> Toot is just a joy to use. It has a little too much sometimes (it actually contains little mini games...which really aren't needed), but the experience of using it has some really clever UI twists. -[u/mikepictor](https://www.reddit.com/user/mikepictor/)

Pragmatic Code's [Linky](https://apps.apple.com/us/app/linky-for-twitter-and-mastodon/id438090426) was also mentioned by multiple respondents. It's not a client, but a bridging tool for smoother URL sharing that integrates with iOS' share sheet. I did not have time to try it, myself, but from all accounts, it is an obligatory mention. So too is the [**GitHub Repository/List**](https://github.com/extratone/FediiOS) I created in order to "formally" offer a list with much greater brevity and zero editorialization.

First, let’s begin with The Big 6 - those apps The Mastodon Project, itself, has seen fit to [list on joinmastodon.org](https://joinmastodon.org/apps).

https://youtube.com/watch?v=LdBFMibyh3Y

### [Toot!](https://apps.apple.com/app/toot/id1229021451)

Dag Ågren‘s [Toot!](https://apps.apple.com/us/app/toot/id1229021451) is not only my personal app of choice - I would (and have) go so far as to say it’s the single most innovative mobile social app I’ve ever encountered, largely because of its jacknife-esque instance selection. It’s held a place in my phone’s dock since the day I first downloaded it, for this and many other reasons. While one might find bugs/loose ends (understandably) exploring the functions of other indie social clients, within Toot!, they will only find little delights, like [its wholly unique Share Sheet interface](https://imgur.com/gallery/xAXs95J).

![Toot! Themes](https://i.snap.as/bXG5SAUv.png)

Toot! is extremely beautiful (despite its unfortunate name,) and I am quite superficial in my taste. It’s Obsidian theme (which may or may not be related to the topical notetaking system of the same name) is especially gorgeous.

<audio controls>
  <source src="https://github.com/extratone/bilge/raw/main/audio/Toot!%20Custom%20Sounds.mp3">
</audio>

In my [cacophonous attempt](https://mastodon.social/@DavidBlue/106302686196643266) to compare the notifications of all available Mastodon apps simultaneously, it's worth noting that Toot!'s always came first. Its [charming custom audio alerts](https://whyp.it/t/toot-ios-app-custom-sounds-92997) also make them my favorite by far.

They're not just cute: in reflection informed by a newly-considered function of these apps - serving as representing the network as a whole - it occurred to me that **Toot! audio alerts playing from my iPhone have prompted more first-time conversations about Mastodon in the wild than I can count**. (Seriously: they should be considered an onboarding mechanism.)

![Toot! Settings](https://i.snap.as/30YJR456.png)

In my experience, it’s also the most robust of the lot - as in, it is very much the exception rather than the norm to encounter any sort of error or other obstruction in normal, day-to-day use. My own real reservation applies to the entire selection discussed today: I wish Toot! supported Bluetooth keyboard shortcuts.

![Mast for iOS](https://i.snap.as/KF4Slx39.png)

### [Mast](https://apps.apple.com/us/app/mast-for-mastodon/id1437429129)

I originally had high hopes for Shihab Mehboob‘s [Mast](https://apps.apple.com/us/app/mast-for-mastodon/id1437429129) - which used to look very different from the way it does, today. That’s almost certainly to do with its ownership [changing hands](https://twitter.com/jpeguin/status/1354854403124178947) at some point (no, I do not have any further details on that story, unfortunately.) That’s not to say the current app isn’t a worthwhile offering, it’s just far less _visually ambitious_ than the original I remember. However, it’s also significantly more reliable.

https://twitter.com/JPEGuin/status/1354854403124178947

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

iMast is also the singular Mastodon app with a Siri Shortcuts action!

### [Mercury](https://apps.apple.com/us/app/mercury-for-mastodon/id1486749200)

Daniel Nitsikopoulos' [Mercury](https://onmercury.app) represents yet another entirely original direction in Social clients. It's fresh and "opinionated" in its explicit lack of support for instances that "[promote abuse and harassment](https://onmercury.app/help)." From all appearances, this appears to be the singular source of negative reviews on [its iOS App Store page](https://apps.apple.com/us/app/mercury-for-mastodon/id1486749200). It's also the other option to offer custom audio notifications, though I couldn't capture a sample. Its [Trello Roadmap](https://trello.com/b/6EseiLSQ/mercury-roadmap) and [Feedback Repo](https://github.com/dNitza/mercury-issues/issues) are public but mostly inactive. As you can see in the grid embedded above, I absolutely adore its Scoops theme and find my $0.99 Tip 100% worth its custom icons.

![Metatext for iOS](https://i.snap.as/w7PTFpTf.png)

### [Metatext](https://apps.apple.com/app/metatext/id1523996615)

Metatext is perhaps the buzziest of all these apps - well-praised in every space I could find conversation on the subject. It's developed under [Justin Mazzocchi](https://mastodon.social/@jzzocc)'s software studio, [Metabolist](https://metabolist.org/) and is as [Open Source](https://github.com/metabolist/metatext) as it gets! (As per my hardware keyboard shortcuts crusade, I added [my own issue](https://github.com/metabolist/metatext/issues/40) requesting support.) [u/GummyKibble](https://www.reddit.com/user/GummyKibble/) noted that "it looks like a native app on both iOS and iPadOS." This term - *native* - seems inextricably linked with Metatext. I vaguely understand what it means, and I do agree, but it's worth noting that I speak with some privilege, having compared all of these apps on the top performing handset Apple currently has to offer. In many ways, it is the most frugal of the new offerings, especially, yet it strikes a keen balance between function and delight.

## Less-Than-Sanctioned

![Tootle for iOS](https://i.snap.as/S6VkSlY0.png)

### [Tootle](https://apps.apple.com/us/app/tootle-for-mastodon/id1236013466)

I'm not entirely positive which Mastodon app was *actually* the first on my iPhone, back in 2017, but I know for sure it was either Amaroq or the dearest, infinitely-colorful Tootle. Its [App Store Page](https://mastodon.cloud/@tootleapp) Version History suggests it has not been updated in 14 months, yet the app - which was apparently "Designed for iPad" - appears to be working just fine. There are some overlapping UI elements, but they're barely noticeable. Were it not for the new dev-facing store search tool mentioned above, I would have assumed this app long gone, to be honest, but using it again has somehow managed to genuinely twinge my nostalgia nerve.

In my search for any extra-App Store representation other than [Tootle's Mastodon Account](https://mastodon.cloud/@tootleapp) (which last posted the day after my birthday, last year,) I discovered [Tootle... for Linux](https://ubuntuhandbook.org/index.php/2020/11/tootle-l-gtk3-mastodon-client-linux/). Since I am a dedicated and thorough person, these days, I spent several hours messing around with Linux Virtual Machining until Lubuntu finally functioned *just* so I could show you what it looks like. Below is a screen capture of Tootle bordered by the most Macish LXQ desktop bars included in Lubuntu and *even* wearing the new official Apple System Font, SF Pro. Still, I think you'll agree... Tootle for Linux is not related to Tootle.

![Tootle for Linux](https://i.snap.as/Rx3Eu9GA.png)

Personally, I find this a profound shame - I think more apps should be as colorful - and as color *configurable* - as this little, mysterious Mastodon app. I created the theme you see represented in the frames embedded above using *The Psalms* colors, naturally, and the whole process took less than five minutes. Play around with it as I remember doing, all those years ago, and you'd be surprised how hard it is to create an unusable color theme. What I find *most* shame in, though, is that Tootle appears to be completely invisible in regular app store searches, now. (And by "*most* shame," you know I really mean *entirely fucking unacceptable*.)

https://www.youtube.com/watch?v=WBZtmOqyk8c

![Tusker on iOS](https://i.snap.as/82RtZcyl.png)	

### [Tusker](https://testflight.apple.com/join/wtB7HYvG)

I found my way to the only *currently in-development* entry on this list thanks to my Mastodon friend [wakest](https://social.wake.st/@liaizon). iOS developer [Shadowfacts](https://social.shadowfacts.net/users/shadowfacts) (who also maintains [*shadowfacts.net*](https://shadowfacts.net/)) is working on their considerate, distinct app, Tusker in [this self-hosted Repository](https://git.shadowfacts.net/shadowfacts/Tusker). In [#tusker](https://mastodon.social/web/timelines/tag/tusker) on Mastodon, you'll find a few poignant praises from [Pixelfed](https://pixelfed.org/) founder and principal developer [Dan Sup](https://mastodon.social/@dansup), which - from my perspective - are especially high, indeed. 

![Tusker Landscape Mode!](https://i.snap.as/jZudSEdQ.png)

You, yourself can use Tusker *right this very minute* via Apple's beta distribution system, [Testflight](https://testflight.apple.com/), via [**this invite link**](https://testflight.apple.com/join/wtB7HYvG).

![Roma for iOS](https://i.snap.as/oBYO4T1e.png)

### [Roma](https://apps.apple.com/us/app/roma-for-pleroma-and-mastodon/id1445328699)

Installing Roma for the first time led to a puzzling quest with a particularly pleasant end. I noticed fairly quickly that the iOS app was a re-branded release of what used to be Mast. My first instinct upon this discovery was to DM Mast's original developer, [Shihab Meboob](https://twitter.com/JPEGuin), on Twitter, but frankly, I've already bothered him enough there over the years, so it's understandable that I didn't hear back. When I downloaded the desktop app I found on [Roma's web page](https://www.roma.rocks/#desktop) and noticed its similarity to [Whalebird](https://whalebird.social/en/desktop/contents), I decided to use the site's contact form to [inquire](https://github.com/extratone/bilge/blob/main/correspondence/Roma%20Inquiry.md) about what exactly was going on as gingerly as I could. Happily, I received a reply just *minutes* later from Leo Radvinsky, head of [Leo.com](https://leo.com/), "a Florida-based boutique venture capital fund that invests in technology companies:"

> Hi David, 
>
> In both cases we funded the original developers of both Mast and Whalebird to create a branded whitelabel app specially made for Pleroma. The idea was to make Roma a cross platform brand/app. It didn't really work out so now we're working on a new app from scratch called Fedi for iOS and Android and releasing that as open source. 
>
> https://play.google.com/store/apps/details?id=com.fediverse.app&hl=en_US&gl=US 
>
> https://apps.apple.com/in/app/fedi-for-pleroma-and-mastodon/id1478806281 
>
> I think Roma has been removed from the app stores as it's no longer supported. 
>
> Let me know if you have any other questions

Though my hopes for the original Mast to live on in Roma form were more or less dashed by this message, the suggestion that someone is investing **actual capital** into federated social is certainly worth celebrating. If Roma is still available on the App Store as you're reading this, I insist you download it immediately. It represents an incredible and original attention to detail which should not simply be forgotten.

![Fedi for iOS](https://i.snap.as/4TO8CL5D.png)

### [Fedi](https://apps.apple.com/us/app/fedi-for-pleroma-and-mastodon/id1478806281)

Naturally, the app inheriting the work/resources established by Mast and Roma, called Fedi, should be next up for discussion. Hopefully, my relative lack of experience with [Pleroma](https://pleroma.social/) - another ActivityPub-based, federated social network - won't let you down, here. After a brief shock from the uniqueness of Fedi's UI passes, one immediately notices how beautifully it is animated, wholly disregarding my [recently-acquired](https://twitter.com/NeoYokel/status/1357394407201398791) preference for as little animation as possible. Perhaps more than any other app discussed here, Fedi feels uncannily bespoke in a way which iOS apps almost never do. It is undoubtedly the result of a very specific vision - to disregard the whole modern template for social apps and completely reimagine the archetype. Personally, I'm not sure if it would be easy to get used to, but my tastes/habits in this regard are very much the result of the past decade of proprietary social apps' blandness. Going forward with substantial financial backing and the talents of whoever it was that got it this far, no doubt we should all have very high hopes for Fedi.

![DUDU (嘟嘟) for iOS](https://i.snap.as/Kt8ZbQFk.png)

### [DUDU (嘟嘟)](https://bit.ly/duduios) 

DUDU (or "嘟嘟," which translates to "Toot," appropriately,) definitely wins for *Cutest Iconography*. It's a non-English-native application with exceptional English support, which I personally appreciate very much. Compared the entries immediately above, DUDU represents a much more modest interpretation of what a Mastodon client can offer. It’s robust, free of over-animation, and - most distinctly - very *wide*, which might have something to do with the "designed for iPad" subtitle on its App Store Page.

![Tootoise for iOS](https://i.snap.as/AZ7fRWc7.png)

### [Tootoise](https://apps.apple.com/us/app/tootoise/id1465090190)

Yet another "Designed for iPad" entry, Naoki Kuwata's [Tootoise](https://apps.apple.com/us/app/tootoise/id1465090190) is defined by its custom incoming post rate accommodations and its gorgeous Solarized theme. Its "Max number of new arrival posts" setting ranges from 0-400, allowing one to freeze their timeline entirely from any accidental (or habitual) Pulls to Refresh (set at 0,) load 400 Toots from such a gesture, or anything in between (at 40-Toot increments, anyway.) The advantages of this specification become immediately apparent when one actually begins to explore it, especially for those who have come to Mastodon after feeling overwhelmed by Big Social.

![Stella for iOS](https://i.snap.as/LzzNxqj9.png)

### [Stella](https://apps.apple.com/us/app/stella/id921372048)

Yet another entirely one-of-a-kind experience, the slightly-mysterious Stella is listed as a "Mastodon, Twitter & News Client," and is notably one of the two apps on this list which do indeed support Twitter! More than that, it is the first app I've seen in a very long time that allows one to *simultaneously* post to two separate social services (Twitter and Mastodon, in this case.) Without documentation, it's a bit clunky, but its customizable timelines feature also allows one to combine multiple "sources" (social accounts) into a single timeline.

![B4X for Pleroma & Mastodon for iOS](https://i.snap.as/aSYoZ8t2.png)

### [B4X](https://apps.apple.com/us/app/b4x-for-pleroma-mastodon/id1538396871) 

B4X is yet another quite perplexing entry. The "Developer Website" link on its App Store Page leads to [b4x.com](https://www.b4x.com/contact_us.html) - a web page entitled "Anywhere Software." The GitHub icon in its footer led me to discover [a repository](https://github.com/AnywhereSoftware/B4X-Pleroma) which is labeled as such to lead one to believe it is, indeed, the development space for the iOS app we're discussing, but does not contain a single .swift or .pbxproj file - universally essential for iOS apps, as I understand it. Regardless, B4X appears to be built atop Anywhere Software's "rapid application development tools." I like its elemental simplicity and nice 'n' wide post display.

![Oyakodon for iOS](https://i.snap.as/sFfxE4R7.png)

### [Oyakodon](https://apps.apple.com/us/app/oyakodon-for-mastodon/id1229174544)

Isao Takeyasu's [Oyakodon](https://apps.apple.com/us/app/oyakodon-for-mastodon/id1229174544) feels a bit like it originally began as a school project, and I mean that in the best possible sense. While it’s probably the least polished of the lot - and therefore likely the least viable candidate for the role of your primary, daily-driven Mastodon client - is is far from a throwaway application. Some evil component of Takeyasu’s mind was clearly let loose if only for a moment, for Oyakodon’s Facebook-style theme is reminiscent enough of Big Blue to alarm. The volume of its design definitely peaks in its Cute theme, which is so violently loud I could not help but extract its color palette to illustrate just how furious its creator must have been.

![Oyakodon Cute Theme Palette](https://i.snap.as/AFbihGYF.jpeg)

Truly diabolical design, there. For better or worse, Oyakodon doesn’t really work very well in its current state, but it _does_ work. 

![StarPterano for iOS](https://i.snap.as/D34uONFT.png)

### [StarPterano](https://apps.apple.com/us/app/starpterano/id1436972796)
I very vaguely remember happening upon StarPterano in my very first moments on Mastodon, so finding it still published on the App Store - buried as it was - brought me a particular sort of joy. If I’m not mistaken, it holds a special personal accolade as the only iOS app which has caused me to involuntarily shriek. This might sound like an insult, but it is actually the peak of my praise. I believe my knowledge of iOS development safely allows me to suppose that StarPterano was built with complete disregard for any established UI element libraries. That is, the familiar toggles and buttons developers rely on to standardize the iOS experience were cast aside entirely in favor of handbuilt, translucent buttons of a sort of neon quality which call menus and text entry fields no less alien to the platform. The most astonishing bit, though, is that it _works_. On my 12 Pro Max, it’s exceptionally smooth, in fact.

<audio controls>
  <source src="https://github.com/extratone/StarPterano/raw/master/DonParade/Sound/decision21.mp3">
</audio>

I would imagine those _real_ iOS developers among you should find [StarPterano’s GitHub Repository](https://github.com/pgostation/StarPterano-iOS5) particularly interesting, considering. In the interest of preservation, I have [forked it](https://github.com/softwarehistorysociety/StarPterano) as well, and fully intend to dive in to its code, one of these days. The audio player embedded above cites a three-second .mp3 file in the repository which perhaps once accounted for the “Sounds” toggle still found in the Settings menu of StarPterano’s current build. I couldn’t get the app to reproduce it, which is actually what set me on the hunt that led to the repo. 

![Ore2 for iOS](https://i.snap.as/Ln2L96Qa.png)

### [Ore2](https://apps.apple.com/us/app/ore2-for-twitter-mastodon/id1107176601)

Ore2 is another (apparently) non-English-native Mastodon client focused on consolidating Mastodon and Twitter within a single space. Alongside Stella, it's the second of the first two apps I've come across in a very long time which allows one to post to both services simultaneously. Considerable work was obviously done on making its timeline-based tabs switchable with touch. Personally, I very much prefer my current crossposting configuration via [this (generously-public) web tool](https://crossposter.masto.donte.com.br), but I am all but certain those users exist who will find Ore2’s setup preferable. 


![tooot for iOS](https://i.snap.as/b0GaeasV.png)

### [tooot](https://apps.apple.com/us/app/tooot/id1549772269)

Inadvertently, I have saved the best story of the lot for last. Developer and researcher Zhiyuan Zheng documents both the narrative context leading up to the creation of his first app, [tooot](https://apps.apple.com/us/app/tooot/id1549772269), as well as the philosophy behind its design in “[Building my first app - toot](https://xmflsct.com/2021/tooot/).” His reference to the downfall of a prominent social app in mainland China called Douban - and the “Douban Refugees”  which resulted - are alarmingly missing from all English news organizations save for [a single _Quartz_ article](https://qz.com/1726194/the-decline-of-douban-an-online-sanctuary-for-chinas-liberals/) from October 2019. He eludes to a “boom” of Mastodon adoption in the past few years and cites a lack of “user friendly mobile clients” which I can only assume to be a conundrum specific to China.

“With the aim of contributing to the community and to this movement, I decided to take my quarantine time to build an enjoyable mobile client for Douban Refugees,” he explains. He notes that decentralized platforms have universally rejected algorithmic recommendation if for any other reason than “without centralized computing power, such [a] recommendation service is also not that feasible.” “Adapting” back to a linear timeline in a manner which still encourages exploration was clearly a major design consideration for tooot.

> The core consists of 3 needs: 1) what I can read; 2) what I can write; 3) what I have done.

Obviously, I very much appreciate Zhiyuan writing publicly about his thoughts on decentralized social and sharing specific considerations in his app’s design and look forward to continued updates.

## Get Bent, Big Social

A few universal truths among these apps stand out as obligatory mentions. First - in comparison with their Proprietary, Big Social counterparts - they are all _ridiculously_ **frugal**. Not a one weighs over 40mb, while minor (unexplained) updates to the official Twitter app [often exceed 100mb](https://twitter.com/NeoYokel/status/1393294957352468494). They are all astonishingly **robust** - I did not experience a single crash in the course of normal testing these "alt" social apps- even from the beta builds - while I distinctly remember the official Twitter app crashing several times over this period, even after I deleted and reinstalled it (an accepted maintenance requirement for anyone using it heavily for its entire history.) Also, on the topic of the platform, itself, they are also made absurdly **interoperable** by the ActivityPub standard. My [PixelFed](https://pixelfed.social/DavidBlue) posts show up seamlessly on their timelines among content from [Diaspora](https://diasp.org/), [Pleroma](https://pleroma.social/), and Mastodon, itself. 

https://twitter.com/NeoYokel/status/1393294957352468494

The overwhelming impression I was left with after testing these apps was one of unwavering competence, cleverness, and true innovation. 

## Continuing to Explore Social Ownership
![Mastodon Account Wordcloud](https://user-images.githubusercontent.com/43663476/122717470-43f08a00-d231-11eb-890f-dfa3ff33b65d.png)

This couldn't be "just" an app guide - I think I have thoroughly accepted this, by now, just in time for some conclusionary remarks. Somehow, the subject I originally tackled specifically because I thought it would be quick, rudimentary, and straightforward has become yet another personal journey. It'd feel a bit preposterous to declare any one of these apps to be *life-changing*, but - in every sense of the term, in contemporary, inevitably social media-informed life, they do indeed constitute a form of radical, ideological wellness. Each of them managed to remind me of a different minute delight found within a developer-user dynamic made up of thoughtful and effective minds working to contribute original and valuable experiences, first. Most noteworthy of these little freedoms: the realization that the upcoming "official" Mastodon app along with any future new options are exclusively a positive thing *for the user*... None of these apps were conceived to gobble up market share because the market is fundamentally, inevitably, uncompromisingly *infinitely shared*. I don't know anything about business, but I *do* know that relief from the burden of considering proprietary multivectored development intentions has been personally breathtaking. I can only hope the reciprocal compensation is happening at even a fraction of what it "should" be. 

From another essential direction, I hope I have communicated that they're far from curious, "niche" or vanity side projects, now. When I used the term "mature" in introducing this little arena, I very much meant it - these "alt" social clients developed almost exclusively within single-person-led projects now make the Twitter for iOS app look ugly *and* fucking broken. "Giving social networking back to you" has never been more resonant. Yes, it really is Toot!'s "take a break" blue screen, Amaroq's mysterious Awoo mode toggle, iMast's music app integration, Mercury's configurable timelines, Metatext's native solidity, Tootle's custom colors, Tusker's Digital Wellness controls, DUDU's elemental readability, Roma's quiet resurrection of Mast's UI bravado, Stella's utterly bizarre visual departures, Fedi's odd animated UI behaviors, Tootoise's consideration of *pace*, B4X's unfathomable elements, Ore2's parallel timelines, tooot's development story, and Oyakodon's adorable rough edges that have made my online life *measurably*... *immensely* better, these past weeks. At the forefront of this perception is undoubtedly the comparatively extensive *control* over my social experience as a user offered by the diversity of mobile experiences these applications offer.

Those of you who haven't yet signed up for Mastodon: you are missing out. I am being *actually* pampered, now, in World Wide Web terms. You are [*so* welcome](https://bit.ly/dbmastodon) whenever you're ready - the water is nice and warm, as they say.

## ...Party One

![Mastodon for iOS](https://i.snap.as/sHTDx8AV.png)

Yes, you are looking at the upcoming ***Official*** Mastodon app on iOS, coming very soon to the Awful App Store. You can join me in testing the app right this very moment by contributing to [the Mastodon Project's Patreon](https://www.patreon.com/mastodon). Though I do plan to publish [a dedicated review](https://github.com/extratone/bilge/issues/195) on its release date, what I'll say for now is that it's very cute, as distinctly clever as any of the third-party apps we've just seen, and supports **Bluetooth keyboard shortcuts** on iPhone!

#software