# Telegram Extras

![TelegramShortcuts](https://user-images.githubusercontent.com/43663476/151065307-88e3eaa0-ce93-4a89-b91c-c50fb649cc4d.png)

## Shortcuts, bots, and some other methodologies discovered since my Big Telegram Post.

<!--more-->

<audio controls>
  <source src="https://davidblue.wtf/audio/TelegramExtras.mp3">
</audio>

Since I published “[I Trust Telegram](https://bilge.world/telegram),” the messenging service has been *in the news*. Their launch of [Sponsored Messages](https://t.me/s/durov/172) predated its publication, but I omitted any mention of them because I’d yet to see any meaningful effects on my own use of the service. All I’ll say now: nearly four months of daily use later, **this is still the case**. I’ve published a few Siri Shortcuts and a Drafts action in the interim, though, and thought these few additional discoveries worth another Post.

## Siri Shortcuts

![SeekTelegramMessagebyID](https://user-images.githubusercontent.com/43663476/152031447-334443d7-f038-4518-b65c-2e3305597bdd.png)

### [Seek Telegram Message by ID](https://routinehub.co/shortcut/10930)

As [I noted in the Big Telegram Post](https://hyp.is/miMJ-oOQEeyVkGegS1hLbw/bilge.world/telegram), navigating to/referencing specific messages in Telegram is ridiculously easy due to its URL format: `https://t.me/[Channel@]/[Chronological Message ID]` My Seek Messages by ID shortcut will prompt you to set defaults for both Channel @ and message number upon installation. This could be useful for channel/group administrators who need to reference/update a message containing community rules, but specifying them is entirely optional. Otherwise, the shortcut will prompt you to enter a channel or group’s @ (minus the symbol itself,) followed by the numeric ID of the message you’re looking for. It will then copy the complete URL to the clipboard and open it in [Telegram Messenger for iOS](https://apps.apple.com/us/app/telegram-messenger/id686449807). I’ve found it handy when joining a new channnel/group to quickly indulge my curiosity about its first few messages.

![URLListtoTelegram](https://user-images.githubusercontent.com/43663476/152036933-ec106c9c-474d-4c5a-ab0e-ad7da6a97f7a.png)

### [URL List ⇨ Telegram](https://routinehub.co/shortcut/10926)

Effectively, this shortcut allows you to send links to a set of Safari 15 tabs to a contact of your choice in Telegram. It’s the singular one of the shortcuts shared in this Post that makes use of Telegram Messenger for iOS’ native Siri Shortcuts actions, and is therefore the most finnicky. In the first take of [my video demo](https://t.me/extratone/9978), it timed out trying to send 200+ links to my Saved Messages channel, but was successful in the second (the take I published) in sending just four links. Upon each run, the shortcut will prompt you to select a contact. The selection *must* be a phone number, ideally in International Format.[^1] It will then parse a list of URLs in your clipboard and send them one at a time via Telegram’s native action without opening the app.

![ClipboardtoTelegramMessage](https://user-images.githubusercontent.com/43663476/152039638-f5e6e817-3b36-4cc2-bf74-184ad6dde9c4.png)

### [Clipboard ⇨ Telegram Message](https://routinehub.co/shortcut/10929)

This one makes use of Telegram Messenger for iOS’ URL scheme, which isn’t really documented properly anywhere. 

`tg://msg?text=[Content]&to=[TargetPhone#]`

Upon installation, the shortcut will prompt you to specify a target phone number in International Format. In the following runs, the shortcut will open Telegram to the conversation with the phone number you’ve specified (use your own phone number to set it to your personal Saved Messages channel) with the contents of your clipboard in the text entry field. You’ll need to hit `Enter` or tap the Send Message button to actually send the content.

## Other Integrations

### Drafts

Users of Agile Tortoise’s [Drafts for iOS](https://apps.apple.com/us/app/drafts/id1236254471) can use my [Send Draft to Telegram Saved Messages action](https://actions.getdrafts.com/a/1u5) to do exactly that. 

https://twitter.com/NeoYokel/status/1488573937223094275

Like the last Siri Shortcut above, the action utilizes Telegram’s URL scheme to send the contents of your current draft to a Telegram conversation with a phone number of your choosing. (Remember to change the action’s placeholder!) 

If you’d like to specify a different conversation, [this action](https://actions.getdrafts.com/a/18E) published to the Action Directory by user maique omits the phone number bit of the URL scheme - `tg://msg?=[DraftContent]`.

![TelegramTextExpanderGroup](https://user-images.githubusercontent.com/43663476/152044387-3302150d-a9b1-44a4-a2fa-a48d35d29faa.png)

### TextExpander

Group and/or channel administrators, especially, might find my public [Telegram-specific TextExpander snippet group](https://app.textexpander.com/public/de52c54ef169a96393d50cb4752706ce) to contain some useful inspiration. `.tid`, for example, will help you construct a Telegram message link by ID just as the first Shortcut in this Post will, while `.scheme` will replicate the app’s URL scheme.

![TotandTelegram](https://user-images.githubusercontent.com/43663476/152045888-b10c1a1a-d924-479d-8f04-24d4efa688a1.png)

### Tot

If you happen to have [Tot Pocket](https://apps.apple.com/us/app/tot-pocket/id1498235191) on your iOS device already, I’ve found it a particularly ideal place to compose Telegram messages with formatting and hyperlinks considering its similar format limitations. Drafts users can use my [Append to 7th Tot Dot action](https://actions.getdrafts.com/a/1uL) to send draft content to the last Dot directly. Some markdown formatting will need to be altered - #-headings aren’t supported by either Tot or Telegram, for instance - but formatting can be directly carried over to Telegram in Rich Text format by selecting all in Tot and copying, as displayed in the screenshots embedded above.

## Bots 

![TelegramRaindropBot](https://user-images.githubusercontent.com/43663476/152048357-bba6ddb6-eb0d-4139-ba6e-79b69ef9651a.png)

### [Raindrop.io Bot](https://t.me/raindropiobot)

As far as I’m concerned, @OlegWock’s [Raindrop Telegram Bot](https://github.com/OlegWock/raindrop-telegram-bot) is an absolute must for any users of the Raindrop.io bookmarking service. Not only does it allow one to send Raindrop bookmarks directly to a chat when in inline mode (as demonstrated in the above screenshots) - it is also *the* quickest method of saving images, videos, and documents to one’s Unsorted Bookmarks list on an iOS-running device. As I [mentioned in the Big Post](https://hyp.is/bGmFuoOgEeyp5F9tAvJq-w/bilge.world/telegram), Telegram’s sharesheet integration remains by far the least discriminate of any such integration on iOS.

![RoseTelegramBot](https://user-images.githubusercontent.com/43663476/152051128-e6a3d557-e2d5-4c84-b881-a35825b73375.png)

### [Rose](https://t.me/MissRose_bot)

I’ve gone through the standard gauntlet of freemium administration bots for [my experimental local Telegram group](https://t.me/columbiamo). The one I think I’ve settled on, though, is by far the [best documented](https://missrose.org/guide/getting-started/adding-rose/) and most inuitive I’ve come across. Miss Rose comes conservatively-configured of the box in a sense that one will experience better results than its “competitors” in moderating a small group like mine just be leaving the defaults in place. My personal favorite functions are `/notes` - which allows one to save group documents that can be recalled with `/`or `#` - and `/export`, which exports the entirety of one’s options (including those notes) as a .txt file. (See the rightmost screenshot embedded above.) 

## Other Insights

<video controls>
  <source src="https://user-images.githubusercontent.com/43663476/152056943-3fc9970f-491f-4060-bfb4-ba45731b4bc9.MOV">
</video>

### Telegram as Task Manager

I had absolutely no idea that [Reminders](https://telegram.org/blog/scheduled-reminders-themes) existed in Telegram until a few weeks ago. When sending to one’s Saved Messages channel, holding down on the Send Message button will display the option to `Set a Reminder`. Anything that can be sent can be added as a reminder, including - in my case - .exe files of programs I’d like to install on my PC later. Frankly, I can’t think of any other task management/reminders application that offers this ability - paid or otherwise.

![Telegram for macOS](https://user-images.githubusercontent.com/43663476/152087363-ab3fb744-d905-4128-ad9b-80a5a2e9530c.png)

### The macOS App

A recent update to the [Telegram for macOS app](https://apps.app.com/us/app/telegram/id747648890) has rendered it by far the most beautiful way to use the service.

## Themes

I’ve spent quite a bit of time archiving third-party Telegram themes, lately. Below is a list of installation links to some of my favorites which I’ll do my best to keep updated. Otherwise, refer to [this Telegraph post](https://telegra.ph/Superb-Telegram-Themes-for-iOS-01-27) or type `#themes` in [*Extratone*’s group chat](https://t.me/extratoe).
1. [𝘞𝘐𝘕𝘋𝘖𝘞𝘚](https://t.me/addtheme/windowseternal) [𝘌𝘛𝘌𝘙𝘕𝘈𝘓](https://t.me/addtheme/windowseternal)
2. [Allo4Life](https://t.me/addtheme/allo4life)
3. [Fresh Mint - Tweetbot 6](https://t.me/addtheme/freshmint)
4. [Greyhound](https://t.me/addtheme/greyhound)
5. [Space Piss](https://t.me/addtheme/spacepiss)
6. [Vampire Reference](https://t.me/addtheme/vampirereference)
7. [Signals](https://t.me/addtheme/signals2022)
8. [Futuretab](https://t.me/addtheme/futuretab2022)
9. [Slander Crimson](https://t.me/addtheme/slandercrimson)
10. [Academia](https://t.me/addtheme/academia2022)
11. [Hermitage](https://t.me/addtheme/hermitage2022)
12. [Divorced Empress Navier](https://t.me/addtheme/navier2022)
13. [Roro Jump](https://t.me/addtheme/rorojump2022)
14. [Dark, Post-Academia](https://t.me/addtheme/postacademia)
15. [UOrange](https://t.me/addtheme/uorange)
16. [Vaporfucked](https://t.me/addtheme/vaporfucked)
18. [Dark Shell](https://t.me/addtheme/darkshell2022)
19. [Honey Highlight](https://t.me/addtheme/HoneyHighlight2021)
20. [Mirage on Kimberly](https://t.me/addtheme/miragekimberly)
21. [Lynch on Rhino](https://t.me/addtheme/lynchrhino)
22. [Mars Orange](https://t.me/addtheme/marsorange)
23. [Sepia Blues](https://t.me/addtheme/sepiablues2022)
24. [Strawberry Night](https://t.me/addtheme/StrawberryNight2022)
25. [Tapbots](https://t.me/addtheme/tapbots)
26. [Green Dark](https://t.me/addtheme/greendark2022)
27. [Puaro](https://t.me/addtheme/puaro2022)
28. [DarkQD](https://t.me/addtheme/darkqd2022)
29. [Mineshaft Gold](https://t.me/addtheme/mineshaftgold2022)
30. [Jellygram](https://t.me/addtheme/jellygram2022)
31. [Japan Serenity](https://t.me/addtheme/japanserenity2022)

[1] Ex: `+1 (573) 823-4380`

<!--comment-->

#software #automation #configuration