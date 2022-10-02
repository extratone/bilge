# Mastodon for iPhone Review

![Mastodon for iOS](https://i.snap.as/sHTDx8AV.png)

<!--more-->

<audio control>
  <source src="https://davidblue.wtf/audio/mastodoniosreview.m4a">
</audio>

Indeed, **[it is here](https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974)**. Essentially, Mastodon Commander-in-Chief Eugen Rochko and his team developed a whole, exceptional iOS app in the span of time it took me to write the [third-party Mastodon iOS app showcase](https://bilge.world/mastodon-ios-apps) just before this item in *The Psalms*’ feed. If you’re new to this conversation, perhaps it’d be best to start in February of this year, with [Eugen’s announcement of the “official” Mastodon app’s development](https://blog.joinmastodon.org/2021/02/developing-an-official-ios-app-for-mastodon/) on the official Mastodon blog. “We need an official Mastodon app that is free to download and that is specialized in helping new users get started on the platform,” argues Eugen, in response to feedback indicating “the lack of an app that carries \[Mastodon’s\] name in the app stores trips up newcomers.” My first thought regarding the idea of an app *Specialized* in onboarding cynically jumped to the assumption that such a design choice would result in a less-than-ideal experience for those of us who already call Mastodon our home. However, as a [Patreon](https://patreon.com/mastodon) supporter of the Mastodon Project, I’ve had the privilege of testing the final result for the past five weeks, and I can tell ya… It is so much more than that.

https://youtube.com/watch?v=bD8GQvNrE7E

## Onboarding

I’d like to offer the [demo video](https://youtu.be/bD8GQvNrE7E) embedded above as an unusually succinct (from me) demonstration of the delightfully well-considered onboarding process. I would go so far as to declare it **the best all-around social network onboarding process currently available**. Having very recently slugged through the official Twitter app’s equivalent, the frames greeting new Mastodon users within this app are unbelievably exceptional.

![Onboarding in Mastodon for iOS](https://i.snap.as/P5oxTAg9.png)

First, we’re presented with a list of Mastodon instances (servers,) organized by category. Those friends of mine to whom I’ve failed to “sell” Mastodon have cited server selection as a major obstacle of confusion and I can’t imagine a better means of addressing it than the tool offered by this app. It’s beautiful and fast in a way previous utilities - like [instances.social](https://instances.social) - cannot be, especially for those most lacking in attention. Once we’ve chosen a server, we are immediately presented up front with a clearly readable document containing the “ground rules” set by its administrators. In my experience, these rules tend to be notably **easy-to-understand** and **not open to interpretation**, as if they were written primarily in the interest of community wellness rather than to construct a defense from legal action.

After we’ve agreed to the relevant terms of the server we’ve chosen, it’s on to account creation, which offers the options to which citizens of the social web have become accustomed - profile picture, username, email address, and password - but notably without the [inexplicable errors](https://gimletmedia.com/shows/reply-all/n8hxzr7/176-twicarus) exhibited for years in Big Social’s equivalent functions. Immediately following this frame, we are prompted to check our inboxes for a confirmation link. The explanation for my dramatic exclamation in the demo video comes down to Mastodon for iOS’ implementation of the operating system's intra-app linking function (with the syntax `mastodon://`,) which (in my experience) is hardly ever utilized correctly. The result is that I was able to click the incoming confirmation link within Outlook for iOS and then proceed *within the Mastodon app* instead of being bounced off to a web browser. This integration should not be remarkable, but - in the context of iOS development as it stands in 2021 - it most certainly is.

After confirmation, we are offered the option to explore the app’s “Find people to follow” function, which is informed by "a mix of most followed accounts and most-engaged-with accounts from recent times that post primarily in your language," as [Eugen explained](https://mastodon.social/@Gargron/106674282886448440) in response to an earlier draft of this post. Indeed, the remarkably relevant results offered to me in the demo were not actually remarkable at all: I just know a lot of folks on mastodon.online - especially those who post the most. That's the whole bit! If you need "proof," [here is the finished result](https://mastodon.online/@keys), but obviously, I would advise you download the app and try yourself. (It's a cliché, yes, but seriously... What do you have to lose?)

![Trending & Profile Editing in Mastodon for iOS](https://i.snap.as/F21Jm29Q.png)

<!--more-->

## Advantages

One of the distinctly missing functions among the breadth of third-party offerings has been the ability to edit one's profile information from within the app. Mastodon for iOS addresses this in a particularly visually impressive way (see image embedded above.) Some also have yet to be updated with support for Polls, which the new app encompasses in a manner that puts Big Social's equivalents to shame. The ability to vertically drag individual options in the compose interface, for instance, reflects insight only gained by *actually using these features*. The result is definitively the best means of crafting a Mastodon poll, for what that's worth.

![Polling in Mastodon for iOS](https://i.snap.as/NKHk8e1W.png)

### Shortcuts

As of this writing, Mastodon for  iOS also includes Siri Shortcut support by way of a single action, entitled "Post on Mastodon." Mostly in the interest of demonstration, I have created and published two Shortcuts around this action on RoutineHub:

1. "**[Mastodon Share](https://routinehub.co/shortcut/9776/)**" - a text-only Shortcut meant for the Share Sheet.

2. "**[Mastgur](https://routinehub.co/shortcut/9781/)**" - a more complicated Shortcut utilizing Imgur actions to get around the current Mastodon for iOS action's lack of multimedia support.

![Siri Shortcuts for Mastodon for iOS](https://i.snap.as/H212I22P.png)

Mastodon friend Emma's [customization of the latter](https://mstdn.cloud.themaymeow.com/@emma/106656610574981709) is a great example of how quickly one can tailor these (and all other) Siri Shortcuts to their own particular use.

## Challenges

As of this writing, coverage of the app’s release amounted only to [a single news item from ](https://www.theverge.com/2021/7/30/22602275/mastodon-decentralized-social-network-official-ios-app-launches)*[The Verge](https://www.theverge.com/2021/7/30/22602275/mastodon-decentralized-social-network-official-ios-app-launches)*[’s Adi Robinson](https://www.theverge.com/2021/7/30/22602275/mastodon-decentralized-social-network-official-ios-app-launches), which notes the omission of local/federated “firehose” timeline views out of a desire to “reduce the potential for conflict with Apple.” (see: the Inc.’s [blatantly inconsistent enforcement](https://litchie.com/2021/07/idos2-will-be-gone) of its store policies in the past few months.) As a Mastodon user who *does* occasionally engage with my local and federated timelines, I find this decision reasonable considering the wellspring of third-party apps on iOS which *do* support said views and the app’s explicit focus on brand new, fragile users. My personal experience disagrees with Eugen’s description of these timelines as a suboptimal means of capital-D Discovery, however, considering I’ve found \~70-80% of [the 600+ accounts I follow](https://github.com/extratone/bilge/blob/main/curation/mastodonfollowing.csv), there. (Though it should be noted that I *do not* represent any majority in my social media-specific preferences or behavior.)

Though the onboarding process’ people to follow finder is pretty darn stellar, I worry that our hypothetical new user has a high chance of landing on a more-or-less empty timeline. (For many, I’m sure this would be a welcome relief, at least initially.) A well-limited Local timeline view, at least, might prove a valuable upcoming addition. Regardless, I am 100% positive these omissions from the *initial release* version of this iOS app do not constitute some new ideological opposition to the greater concept of Federation.

![Composition Details in Mastodon for iOS](https://i.snap.as/7UTf6Qyx.png)

Naturally, a recurring complaint about the app is already surfacing in hashtag iOS on the Fediverse: [no multiple account support](https://mastodon.social/@wiredfire/106672087623244223)?! Perhaps you’ve already written me off as a mindless devotee, but - especially after exploring [the whole breadth of Mastodon apps available on iOS](https://github.com/extratone/mastodon-ios-apps) (all of which support multiple accounts) - the significance of this omission as a target for gripes seems laughably minuscule. Considering I have yet to delete any of the 20 apps I tested, I personally feel *pretty well covered* when it comes to checking my (embarrassingly numerous) alt accounts. It’d be one thing if longtime users/powerusers were left wanting for available apps designed for us, but we have a more diverse, quality palette to choose from than any other social media protocol. To decry this app - which was explicitly designed from the very beginning for new users - for skipping a function offered by *more than a dozen alternatives* is patently absurd. If you’ve got multiple accounts you feel the need to check regularly, order them by frequency, authenticate all but number one in the free, dependable [Amaroq](https://apps.apple.com/us/app/amaroq-for-mastodon/id1214116200), and save Mastodon’s new app for your main.

## Delights

The “relentless originality” I spoke of in my *third-party* showcase is no less exemplified in this first-party Mastodon app. Its color palette is a welcome departure from Tootsuite’s (the mother web application,) while still remaining definitively recognizable. The artwork dispersed throughout the app is adorable, as you’ve seen, and its bespoke audio player is without a doubt my favorite of such devices.

![Mastodon for iOS Audio Player](https://i.snap.as/IRzEOzXl.png)

Custom audio notifications especially stood out among those third-party apps, so the project-sourced app’s inclusion of the iconic Mastodon “boop” is yet another small inclusion that adds a surprising amount of substance to the whole experience.

Though quite specific to myself and the few other iPhone users who regularly command our handsets with physical keyboards, the Mastodon app’s inclusion of **Bluetooth keyboard shortcuts** provoked a moment of true euphoria when I first discovered them. As per my ‘*[iPhone and the Bluetooth Keyboard](https://github.com/extrakeys)* project, I have bestowed upon Mastodon for iPhone semi-officially “our” Universal Clacker Award for its consideration of us “full keyboard-strapped cellular phone users.” (As of this writing, the award is just a “trophy.”)

![Mastodon for iPhone - Universal Clacker Award](https://i.snap.as/H7NjCvd7.png)

### Mastodon for iOS Keyboard Shortcuts

*Updated as of [release version 1.4.1](https://github.com/mastodon/mastodon-ios/commit/e4c38c70e29ea873b77312436845ddd7fc0ca7dd).* - `05182022-123850`

*Please note that the list below includes view-dependent commands.*

| **Action**                                    | **Command** |
|:-----------------------------------------:|:-------:|
| Previous                                  | K       |
| Next                                      | J       |
| Back                                      | H       |
| Open                                      | L       |
| Open Author’s Profile                     | P       |
| Open Reblogger’s Profile                  | ⌥P      |
| Reply to Post                             | ⌥ ⇧ N   |
| Toggle Reblog on Post                     | R       |
| Toggle Favorite on Post                   | F       |
| Toggle Content Warning                    | O       |
| Preview Image                             | I       |
| Switch to Home                            | ⌘ 1     |
| Switch to Search                          | ⌘ 2     |
| Switch to Notifications                   | ⌘ 3     |
| Switch to Profile                         | ⌘ 4     |
| Compose New Post                          | ⌘ N     |
| Show Favorites                            | ⌘ F     |
| Open Settings                             | ⌘ ,     |
| Previous Section                          | ⌘ ⇧ [   |
| Next Section                              | ⌘ ⇧ ]   |
| Discard Post                              | ⌘ W     |
| Publish Post                              | ⌘ ⏎     |
| Add Attachment - Browse                   | ⌥ ⌘ B   |
| Add Attachment - Photo Library            | ⌥ ⌘ P   |
| Add Attachment - Take Phoro               | ⌥ ⌘ C   |
| Toggle Poll                               | ⇧ ⌘ P   |
| Toggle Content Warning                    | ⇧ ⌘ C   |
| Select Visibility - Public                | ⌘ 1     |
| Select Visibility - Followers Only        | ⌘ 2     |
| Select Visibility - Only people I mention | ⌘ 3     |
| Paste                                     | ⌘ V     |
| Paste and Match Style                     | ⌥ ⇧ ⌘ V |
| Select All                                | ⌘ A     |

An important consideration to inform the perspective through which we analyze such an app, I’d argue, is that **this app could have been very bad**. Those who bewilderingly measure the success of social networking services/protocols by their profit growth viability, alone, may well suggest it *should* have been bad. Had it been just mediocre, half-assed, and/or full of bugs, I’m sure I would still have paused everything to write and publish this review. The reality, though, is nothing less than exceptional. Unlike some of the third-party examples I discussed, I would argue Mastodon for iPhone to be an “objectively” excellent piece of software in that I cannot imagine any one sort of iPhone user *not* finding it refreshing in some way.

I would sincerely worry for the person who feels nothing at all from the artwork, the bespoke UI, or the general care exhibited in its craftsmanship, *but* they wouldn’t have exhausted reasons to use it. From the very first beta release I installed to the first release version pushed to the App Store just yesterday, the app has *never* crashed, and the single bug I encountered was documented and fixed before I had time to begin a feedback report. While Twitter’s official iOS app does include a few Siri Shortcuts actions, they are all made immediately useless by a universal command to open the app, itself. Remove the obsessive insistence that any/all functions only be performed with your app in focus - even when it surely makes no difference to your ad tech mechanism - and you have Mastodon’s single action, “Show When Run” toggle included.

I’m not sure what I expected from an “official” Mastodon app upon first reading that winter blog post, but what I’ve been delivered is quite a gem. Regardless of how its specific feature omissions may strike your ideological organ(s,) you cannot deny that great time and energy was invested in this app.

![Mastodon for iOS QR Code](https://i.snap.as/hqmcJQGx.jpg)

## Notable Hyperlinks

- The newly-publicized [GitHub Repository](https://github.com/mastodon/mastodon-ios)
- The app’s [Product Hunt Page](https://www.producthunt.com/posts/mastodon-for-ios) (Congratulations on “#1 Product of the Day!”… I think?)
- [The Mastodon Project Patreon page](https://www.patreon.com/mastodon)
- [Mastodon for Android](https://play.google.com/store/apps/details?id=org.joinmastodon.android) has since been launched. See [this blog post](https://blog.joinmastodon.org/2022/04/official-apps-now-available-for-ios-and-android/).

<iframe style="border: none;" src="https://cards.producthunt.com/cards/posts/306607?v=1" width="500" height="405" frameborder="0" scrolling="no" allowfullscreen></iframe>

<!--comment-->

#software