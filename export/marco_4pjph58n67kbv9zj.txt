# Marco! Lives

![Marco! Banner](https://i.snap.as/D6SijbwF.png)

## The first release version of my only original contribution to the iOS community is now ready to assist when you can't find your phone.

<!--more-->

One of the handful of Siri's most useful features has been the "Hey Siri! Where are you?" command, to which Siri will respond "I'm here" or "here I am!" Were it possible to view how many times one has triggered a particular Siri command on iOS, my personal reliance on it would almost certainly be embarrassing. Often, my handset isn't even obscured from view - it's just faster to have Siri speak up than it is to scan the room. Occasionally, however, my device has managed to become embedded beneath and/or within some genuinely-perplexing series of couch cushions/blankets/briefcase pockets/etc. which require a more constant homing sort of audio reproduction. Asking friends/family to call one's phone is the general goto, yes, but honestly the actual length of time cellular telephones will ring before sending a caller to voicemail in 2021 is *ridiculously* short, especially when rummaging through Gourd-knows-what. For that matter, most of my peers keep their phones on silent mode, 24/7. What then?

https://www.youtube.com/watch?v=3evgnSlnkjk

Since [the very first time](https://bilge.world/siri-shortcuts-ios12-review) I set eyes upon Siri Shortcuts in iOS 12 Beta, I have wanted to create one to address this issue in a creative, entertaining, and (hopefully) genuinely-useful way. On that day almost three years ago, I even knew it would be called *Marco!*, believe it or not. In the past few months, I've returned to the project on and off and ended up with several different versions of varying complexity. One day, I'd like to figure out how to integrate the full extent of my ideas for Marco! into a Shortcut which can be reliably triggered when one's device is locked, but for this first release version, I have included only what I and a few other (much appreciated) volunteers were able to trigger in every situation we could conceive of.

Marco! Version 1.0 can be downloaded on [**RoutineHub**](https://routinehub.co/shortcut/8987/) (which I would highly recommend,) or directly via [**this iCloud share link**](https://www.icloud.com/shortcuts/cec781677c5648f2a8982213700938b4). I know it's a bit excessive, but I even created a [GitHub Repository](https://github.com/extratone/marco) just for this Shortcut, seeing as it is undoubtedly the most original I will ever contribute, and the singular one with potential for continued development.

Download Marco! as is and (as long as you don't rename it) use "Hey Siri!... Marco!" This should immediately run the Shortcut, which includes my voice saying "Polo! Bitch!" followed by five repeats of the flashlight/noise cycle as described in detail below.

![Marco! JellyCuts Steps](https://i.snap.as/9Ow1cbmz.png)

As documented by the [Jellycuts file](https://github.com/extratone/marco/blob/main/docs/Marco!.html) above, Version 1.0 of Marco!'s actions are as follows:

1. Turn Low Power Mode OFF
2. Turn Airplane Mode OFF
3. Turn Wi-Fi On
4. Turn Bluetooth On
5. Set brightness to 100%
6. Turn Do Not Disturb OFF
7. Turn appearance Light
8. Set playback destination to iPhone
9. Set volume to 89%
10. Vibrate device (Not currently working.)
11. Play **my voice** saying “Polo!” + a few other items
12. Toggle (flash) the flashlight 5 times (odd number leaving your flashlight on constantly unless it was on before the Shortcut was triggered)
13. Simultaneously (in the same repeat action) plays three separate classic Mac sounds 5 times.

The most clever bit about this particular Shortcut is its use of Base64 text to include audio playback. I just fixed a bug on [my own Base64 audio encoder Shortcut](https://routinehub.co/shortcut/8914/) if you'd like to try it out. Since this version includes my own voice (subject to taste, I realize,) as well as some minor profanity, I do intend to publish a clean variation at some point in the future. If this is an obstacle for you, and/or if you'd like a custom version made with audio of your own choosing, please do [send me an email](mailto:davidblue@extratone.com)! I would be more than happy to make one for you.

#software #automation