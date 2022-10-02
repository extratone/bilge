# The Fastest Route to Twitter Jail

![TwitterJail](https://user-images.githubusercontent.com/43663476/153813676-efbe3e23-d830-4239-940b-922c9bcb35b0.png)

## My new Twitter Jail Siri Shortcut marks a milestone in Social Foolery.

<!--more-->

I graduated high school in 2012. Back then, TweetDeck was still a standalone desktop client[^1] that allowed one to post with just the `ENTER` or `return` key. I'd made it part of the [Drywall Prime Directive](https://iowa.neocities.org) to generally keep [@ihadtopee](https://twitter.com/ihadtopee) in [Twitter Jail](https://www.urbandictionary.com/define.php?term=TwitterJail) as much as possible, which meant pounding my way into it ASAP, daily. This was often my very first task upon returning home from school. All memories - much less computing memories - are quite obscured from that era, but I wouldn't be surprised if I was spending a cumulative 45 minutes every school day punishing the fuck out of my first flat generation w/keypad Apple Keyboard to TweetDeck in Windows 7.

https://twitter.com/TWlTTER_JAIL/status/746295481123274752

It's not that automating Tweets wasn't possible in that era - I'd been posting WHEN IM COMIN DINE IN MY FOREIGN AND IM ROLLIN ONE DEEP THAT SHOULD TELL YA BOUT ME across all my social accounts every morning at 0610 since Freshman year via IFTT (now IFTTT) - but doing so at any sustained rate required actual *knowledge*. 

https://www.youtube.com/watch?v=4qyHYslaQx4

Today, even an rube like myself can whip up [**a Siri Shortcut**](https://routinehub.co/shortcut/11086/) capable of jailing a user account in *less than four minutes* from nill - what appears to be a statically-set rate limit of 310 Tweets in that time. Mind you, we're talking about entirely *on-device* processing here, and - in case you weren't aware - the device I'm referring to is my fucking cellular phone.

![TwitterJailTimeline](https://user-images.githubusercontent.com/43663476/153808840-473464ae-2922-45a9-a27b-46d0b7f3a247.png)

[**Twitter Jail**](https://routinehub.co/shortcut/11086/) technically requires three apps - two of which are ridiculously small, 100% Apple cross-platform, and entirely free - and the third represents simply [the most refined and delightful means](https://bilge.world/tweetbot-6-ios-review) anyone has ever interacted with The Bird Site.

### Requirements

- [**Actions**](https://apps.apple.com/us/app/actions/id1586435171) - Free across all platforms and just 3.3mb to download!
- [Tweetbot](https://apps.apple.com/us/app/tweetbot-6-for-twitter/id1527500834) (You might also try [Aviary](https://apps.apple.com/us/app/aviary-for-twitter/id1522043420) if you absolutely cannot bring yourself to pay a subscription fee, ever.) 
- [Data Jar](https://apps.apple.com/us/app/data-jar/id1453273600) (More or less optional.)

Upon installation, you'll be asked 1.) to set the default number of repeats (Tweets) per run. Obviously, I'd recommend ~310 to optimize your jailing. 2.) To specify which Tweetbot-authenticated user account you'd like to get jailed, and 3.) which "key path" (jar) you'd like to store the URLs of said Tweets in. The third is almost certainly useless and entirely optional (just delete the Data Jar action,) but... you never know when... you might need... those URLs.

Depending on your device (to some extent, I'd imagine,) proceeding to run the shortcut shouldn't take long. It randomly generates 91 characters text from a string (which you should also feel empowered to customize/add to,) Tweets them from your specified account, and stores the URLs of those Tweets in the jar you may or may not have specified.

You might expect me to express envy of any youths reading, but I absolutely feel none. All I can do is encourage you to [fucking try Mastodon](https://mastodon.social/invite/hca7L5sY) for God's sake and your own.

![Twitter Jail macOS](https://user-images.githubusercontent.com/43663476/154838012-2deb774f-6f02-4627-b8dd-f16286968621.png)

## Update: macOS Version Published

I’ve created [**a macOS version of Twitter Jail**](https://routinehub.co/shortcut/11135) which also requires [the Actions app](https://apps.apple.com/us/app/actions/id1586435171) but substitutes [Aviary](https://apps.apple.com/us/app/aviary-for-twitter/id1522043420) for Tweetbot given the former’s native Siri Shortcuts action does not require the app to open for each Tweet. 

[1] It's actually still available from [various sources](https://downloads.digitaltrends.com/tweetdeck/windows) - [including the Mac App Store](https://apps.apple.com/us/app/tweetdeck-by-twitter/id485812721) - but has fallen way, way out of support.

#automation #software #configuration