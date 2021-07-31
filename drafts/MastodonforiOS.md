# Mastodon for iOS Review

![Mastodon for iOS](https://i.snap.as/sHTDx8AV.png)

Indeed, [**it is here**](https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974). Essentially, Mastodon Commander-in-Chief Eugen Rochko and his team developed a whole, exceptional iOS app in the span of time it took me to write the [third-party Mastodon iOS app showcase](https://bilge.world/mastodon-ios-apps) just before this item in *The Psalms*’ feed. If you’re new to this conversation, perhaps it’d be best to start in February of this year, with [Eugen’s announcement of the “official” Mastodon app’s development](https://blog.joinmastodon.org/2021/02/developing-an-official-ios-app-for-mastodon/) on the official Mastodon blog. “We need an official Mastodon app that is free to download and that is specialized in helping new users get started on the platform,” argues Eugen, in response to feedback indicating “the lack of an app that carries [Mastodon’s] name in the app stores trips up newcomers.” My first thought regarding the idea of an app *Specialized* in onboarding cynically jumped to the assumption that such a design choice would result in a less-than-ideal experience for those of us who already call Mastodon our home. However, as a [Patreon](https://patreon.com/mastodon) supporter of the Mastodon Project, I’ve had the privilege of testing the final result for the past five weeks, and I can tell ya… It is so much more than that.

https://youtube.com/watch?v=bD8GQvNrE7E

## Onboarding

I’d like to offer the [demo video](https://youtu.be/bD8GQvNrE7E) embedded above as an unusually succinct (from me) demonstration of the delightfully well-considered onboarding process. I would go so far as to declare it **the best all-around social network onboarding process currently available**. Having very recently slugged through the official Twitter app’s equivalent, the frames greeting new Mastodon users within this app are unbelievably exceptional. 

![Onboarding in Mastodon for iOS](https://i.snap.as/P5oxTAg9.png)

First, we’re presented with a list of Mastodon instances (servers,) organized by category. Those friends of mine to whom I’ve failed to “sell” Mastodon have cited server selection as a major obstacle of confusion and I can’t imagine a better means of addressing it than the tool in this app. It’s beautiful and fast in a way previous tools - like [instances.social](https://instances.social) - cannot be, especially for those most lacking in attention. Once we’ve chosen a server, we are immediately presented up front with a clearly readable document containing the “ground rules” set by its administrators. In my experience, these rules tend to be notably **easy-to-understand** and **not open to interpretation**, as if they were written primarily in the interest of community wellness, instead of a defense from legal action. 

After we’ve agreed to the relevant terms of the server we’ve chosen, it’s on to account creation, which offers the options to which citizens of the social web have become accustomed - profile picture, username, email address, and password - but notably without the [inexplicable errors](https://gimletmedia.com/shows/reply-all/n8hxzr7/176-twicarus) exhibited for years in Big Social’s equivalent functions. Immediately following this frame, we are prompted to check our inboxes for a confirmation link. The explanation for my dramatic exclamation in the demo video comes down to Mastodon for iOS’ implementation of [applinks](https://developer.apple.com/documentation/bundleresources/applinks) - a means of hyperlinking within the operating system between apps, which (in my experience) is hardly ever utilized correctly. The result is that I was able to click the incoming confirmation link within Outlook for iOS and then proceed *within the Mastodon app* instead of being bounced off to a web browser. This integration should not be remarkable, but - in the context of iOS development as it stands in 2021 - it most certainly is.

After confirmation, we are offered the option to explore the app’s “Find people to follow” function, which is informed by "a mix of most followed accounts and most-engaged-with accounts from recent times that post primarily in your language," as [Eugen explained](https://mastodon.social/@Gargron/106674282886448440) in response to an earlier draft of this post. Indeed, the remarkably relevant results offered to me in the demo were not actually remarkable at all: I just know a lot of folks on mastodon.online. That's the whole bit! If you need "proof," [here is the finished result](https://mastodon.online/@keys), but obviously, I would advise you download the app and try yourself. (It's a cliché, yes, but seriously... What do you have to lose?)

![Trending & Profile Editing in Mastodon for iOS](https://i.snap.as/F21Jm29Q.png)

## Advantages

One of the distinctly missing functions among the breadth of third-party offerings has been the ability to edit one's profile information from within the app. Mastodon for iOS addresses this in a particularly visually impressive way (see image embedded above.) Some also have yet to be updated with support for Polls, which the new app encompasses in a manner that puts Big Social's equivalents to shame. The ability to vertically drag individual options in the compose interface, for instance, reflects insight only gained by *actually using these features*. The result is definitively the best means of crafting a Mastodon poll, for what that's worth.

![Polling in Mastodon for iOS](https://i.snap.as/NKHk8e1W.png)

### Shortcuts

As of this writing, Mastodon for  iOS also includes Siri Shortcut support by way of a single action, entitled "Post on Mastodon." Mostly in the interest of demonstration, I have created and published two Shortcuts around this action on RoutineHub: 

1. "[**Mastodon Share**](https://routinehub.co/shortcut/9776/)" - a text-only Shortcut meant for the Share Sheet.
2. "[**Mastgur**](https://routinehub.co/shortcut/9781/)" - a more complicated Shortcut utilizing Imgur actions to get around the current Mastodon for iOS action's lack of multimedia support.

![Mastodon Share Siri Shortcut](https://i.snap.as/rzxVoniy.png)

Mastodon friend Emma's [customization of the latter](https://mstdn.cloud.themaymeow.com/@emma/106656610574981709) is a great example of how quickly one can tailor these (and all other) Siri Shortcuts to their own particular use.

## Challenges

As of this writing, coverage of the app’s release amounted only to [a single news item from *The Verge*’s Adi Robinson](https://www.theverge.com/2021/7/30/22602275/mastodon-decentralized-social-network-official-ios-app-launches), which notes the omission of local/federated “firehose” timeline views out of a desire to “reduce the potential for conflict with Apple.” As a Mastodon user who *does* occasionally engage with my federated timeline, I’d find this decision perfectly reasonable, regardless. If we’re all honest with ourselves, even the most powerful of Mastodon powerusers should realistically just… wait until we get home, to a desktop, in order to browse such a high-bandwidth feed. 

![Composition Details in Mastodon for iOS](https://i.snap.as/3PreFFPx.png)

## Delights

The “relentless originality” I spoke of in my *third-party* showcase is no less exemplified in this first-party Mastodon app. Its color palette is a welcome departure from Tootsuite’s (the mother web application,) while still remaining definitively recognizable. The artwork dispersed throughout the app is adorable, as you’ve seen, and its bespoke audio player is without a doubt my favorite of such devices.

![Mastodon for iOS Audio Player](https://i.snap.as/IRzEOzXl.png)

Custom audio notifications especially stood out among those third-party apps, so the project-sourced app’s inclusion of the iconic Mastodon “boop” is yet another small inclusion that adds a surprising amount of substance to the whole experience.

<audio controls>
  <source src="https://github.com/extratone/bilge/raw/main/audio/MastodonBoop.mp3">
</audio>

Though quite specific to myself and the few other iPhone users who regularly command our handsets with physical keyboards, the Mastodon app’s inclusion of **Bluetooth keyboard shortcuts** provoked a moment of true euphoria when I first discovered them. 

### Mastodon for iOS Keyboard Shortcuts
| Action                         | Key        |
|:------------------------------:|:----------:|
| Open Compose Window            | ⌘ + N      |
| Send Toot                      | ⌘ + Return |
| Home Timeline/Refresh Timeline | ⌘ + 1      |
| Explore Tab                    | ⌘ + 2      |
| Notifications                  | ⌘ + 3      |
| Favorites                      | ⌘ + F      |
| Settings                       | ⌘ + ,      |

![Mastodon for iPhone - Universal Clacker Award](https://i.snap.as/H7NjCvd7.png)
