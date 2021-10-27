## Community

At this point in my life, I must acknowledge to both readers and myself that **I am completely inept at community organization**. Especially when it comes to grand suggestions about how I suppose online communities might be ideally-run or just better served by particular software environments and configurations, I have literally received *zero* positive feedback, and not because I haven’t spent significant time positing publicly within the space. I spent the first half of my twenties trying to Peter Pan an independent online music magazine into existence, written by fresh-minded youths on the fringe at 140% throttle and managed to accomplish startlingly little for my all my invested time and gumption. The relevant component of that tale was a significant and all-out commitment from the beginning to run the whole project entirely within Discord. 

The one absent activity throughout my years of Telegram use - save for intermittent correspondence during one relationship - has been *messaging other users*. I managed to find and participate in a few group chats - “[Telegram iOS Talk](https://t.me/TelegramiOStalk)” and [*It's FOSS*' official channel](https://t.me/itsfoss_official), notably - in my preparation/research for this post. I’ve discovered plenty of new clever bits, like the button to jump to one’s nearest mention in a chat. I’ve also done my best to actually apply some [much-needed administrative attention](https://t.me/columbiamo/7774) to [my years-old attempt](https://reddit.com/r/columbiamo/comments/c4na0v/local_telegram_group_chat_for_columbia) at creating the [definitive location-based local group chat](https://telegram.org/blog/contacts-local-groups) for the Mid-Missouri area where I live. Truthfully… It [hasn’t exactly gone as I’d hoped](https://reddit.com/r/columbiamo/comments/q0843f/local_telegram_group_chat), but the failures have been all my own. I have yet to find a satisfactory balance in terms of moderation bots, so I’ve (as of this writing) resorted to manually removing the (significant) spam bot traffic by hand. Also, I must admit that I’ve never had to do so more than once or twice on *Extratone*’s public Discord, despite how much more circulation its public, open invite links have received.

In the past few weeks, I’ve had the privilege of watching *MacStories* relaunch their premium membership program, *Club MacStories*, on their incredible bespoke CMS. Part of this launch included their first exclusive community space, on Discord, which has been deeply rewarding for me, personally, but has also highlighted some serious limitations of that service which I not-so-long-ago [advocated so heavily for](https://bilge.world/discord-slack-comparison). Namely, **hyperlinks to specific messages** within Discord are a hopelessly problematic endeavor. Even for a public server like *Extratone*’s, navigating to a message link [like this example](https://discord.com/channels/107272441889341440/107272441889341440/893958033401593898) will require any and all users to log in to Discord on the web, which - on mobile devices, especially - seems to struggle to navigate to the precise position of the subject message after you’ve successfully done so. Slack’s public message links are smart enough at least to prompt users to open them Slack for iOS, but Telegram’s system for message links in public channels and groups makes both services look daft.

<audio controls>
  <source src="https://github.com/extratone/bilge/raw/main/audio/Voice%20Notes/DiscordFuckery.mp3">
</audio>

Telegram message IDs are purely chronological from their channel/group chat’s creation - the first message in a channel or group chat is `1` and the 15th is `15`. Together with the simplicity of channel/group chat IDs, which are just their alphanumeric @ names, this format makes URL schemes for Telegram message links super malleable and easy to understand. The sixth message posted in the [@extratone channel](https://t.me/extratone), for instance, can be found at [https://t.me/extratone/6](https://t.me/extratone/6), which even those without Telegram installed can view natively within their web browser. Within Telegram clients, said links are ultra-responsive, regardless of whether or not one had previously “joined” the channel or group containing the message. 

![Orange Noir Telegram Theme by Valespace](https://i.snap.as/moymK7EY.png)

In *MacStories*’ case, there’s another essential point of reference. When I pinged the staff in their Discord regarding their experiences running [their now-abandoned Telegram channel](https://t.me/MacStories), John Voorhees replied:

> I don't really have anything to say about Telegram one way or the other. We ran it for a short time 5 years ago as an experiment and it didn't stick.

I wasn’t yet a subscriber in those days, but little details like [behind-the-scenes voice messages](https://t.me/MacStories/281) are definitely missed. [Federico’s initial audio introduction](https://t.me/MacStories/39) describes a potential for the channel I wish more readers had enjoyed. They’re much more intimate, even, than the publication’s new exluclusive Town Hall events on Discord, which doesn’t make much sense, I know. 

![Live Streams and Video Chats](https://i.snap.as/v1zhWmwN.png)

### Streaming

Admittedly, another attention-grabbing feature that contributed to my finally getting around to this Post was [the introduction of "Live Streams" for channels and groups](https://telegram.org/blog/live-streams-forwarding-next-channel) (really just a slight augmentation of their ["Voice Chats 2.0" features](https://telegram.org/blog/voice-chats-on-steroids)) at the very end of this past August. Discord, of course, was way ahead of Telegram in implementing Voice Chats and Screen Sharing [back in October of 2017](https://youtu.be/mMloc55o1jc), and it's long since become one of the services' core features. However, *recording* live content of any kind is not natively supported, though there is a [handy utility bot named Craig](https://craig.chat) who can accomplish this for you. For the sake of transparency, I should admit that not a single one of my live streams on Discord has actually included any viewership, but I have participated in a handful of others’ and viewed a couple dozen.

https://twitter.com/NeoYokel/status/1448837428534521858

For the past few months or so, participating in any sort of voice or video chat in Discord desktop has led to [a spectacular relaunch loop](https://twitter.com/NeoYokel/status/1448837428534521858) that can only be solved by reinstalling the application, entirely.[^7] It’s not that Discord for iOS’ now full support for such streaming - both in terms of participation and simple viewership - isn’t impressive, but honestly, *Telegram* for iOS’ superiority should be immediately obvious to anyone who’s tried them both, recently. Not just in pure capacity’s sense, but in moderation tools, shared link customization, and, obviously, native recording support. I’ve embedded two recordings of different test streams of mine, below. [The first](https://t.me/extratone/7054) (embedded in [YouTube form](https://youtu.be/uhXZZBl0fn8),) was streamed from both my Surface Laptop 2 and iPhone 12 Pro Max.

https://www.youtube.com/watch?v=uhXZZBl0fn8

[The second](https://t.me/extratone/7196) is a very brief recording (in native form [directly from *The Psalms*’ GitHub Repo](https://github.com/extratone/bilge/raw/main/video/TelegramiOSLiveStreamTest.mp4)) of a stream I did *just* from the share screen function of my phone, in the wrong orientation.[^8]

<video controls>
  <source src="https://github.com/extratone/bilge/raw/main/video/TelegramiOSLiveStreamTest.mp4">
</video>

Below is a screenshot of the recorded file’s metadata (as provided by Telegram for Windows.) 

![Telegram Live Stream Meta](https://i.snap.as/oDQqSYHF.png)

As you might note, there’s definitely something to be desired from the quality of Telegram’s stream recordings, especially in its included audio. I find it a bit strange that it’s recorded in 48 kHz just to be compressed down to *46kbps*. When you’ve stopped a recording, you’ll receive both the video file and just the extracted audio in an .ogg file. Unfortunately, the latter is no less compressed than it is combined in the video file. (Both are sent to one's Saved Messages channel immediately upon stopping a recording, from where they can be forwarded virtually anywhere.) Aside from a boost in audio quality, though, Discord’s default 720p base resolution is matched by Telegram. Via server boosts, this figure can be upgraded significantly, though the end result is quite costly. According to [a not necessarily trustworthy site](https://clutchpoints.com/discord-server-boost-cost/), accounting for Discord’s [recent reduction in boost requirements](https://www.facebook.com/discord/posts/4524749577592737), here’s the pricing laydown to boost a server (per month:) 

> …a total of $34.93 for Level 2 and $69.86 for Level 3. That’s $24.45 for Level 2 and $48.90 for Level 3 for Nitro subscribers.

Among quite a few other abilities, here are the extracted audio/video requirements per server level **only**:

1. 128kbps audio/720p video upped to 60fps
2. 256kbps audio/1080p 60fps video
3. 384kpbs audio/no video boost

So, if I had the spare change to maintain a level 2 boost for *Extratone*’s Discord server, myself, I could do so for $34.93 per month, which would allow me to *stream* (not necessarily *record*) in 1080p/60fps video and 256kbps audio to up to [50 viewers](https://support.discord.com/hc/en-us/articles/360040816151-Go-Live-and-Screen-Share) (as of this writing.) Theoretically, at no cost, I can stream with virtually identical features (though I prefer Telgram's) to my Telegram channel to [infinitely many users](https://telegram.org/blog/live-streams-forwarding-next-channel#unlimited-live-streams) in 1280p/30fps with absurdly low-quality audio and share/manipulate recordings natively/instantly from within any Telegram client. If I were All Powerful, I would make all the members of my "[Family Tech Support](https://bilge.world/ios-15-family-review)" iMessage group install Telegram on their devices so we could use it, instead. I would also make them collectively attend occasional live streams, where they could ask questions verbally of my demonstrations sharing my own screen, or even share their own screens to demonstrate an issue or provide context for a question. The reality, though, is that I do not expect any sort of anticipation for my personal live help events on any platform, which innately suggests Telegram over Discord, I'd argue, for when I *do* stream such content, given its total lack of investment.[^9]

![Location Sharing in Telegram for iOS](https://i.snap.as/FRj5GGPN.png)

### Location Sharing

One of Telegram's most unique (and potentially powerful, I believe) community features is [Live Location Sharing](https://telegram.org/blog/live-locations) on its mobile apps. Borned by Siberian native developer [Roman Pushkin](https://twitter.com/romanpushkin), LibreTaxi is the single truly exciting open ridesharing alternative I've ever encountered.[^10] As [an item for *CBC radio* from 2015](https://www.cbc.ca/radio/spark/346-biometrics-audio-intelligence-and-more-1.3987746/the-man-who-wants-to-out-uber-uber-1.3987987) (among other assorted coverage compiled [here](https://telegra.ph/LibreTaxi-press-coverage-07-14) as of July, 2017) explains, it utilizes Telegram's live location sharing functions to act as a decentralized Uber/Lyft alternative in the form of [a bot](https://telegram.me/libretaxi_bot), which connects users needing a ride with users providing them, free of any fees or service charges. Discourse surrounding LibreTaxi has been silent for years, but [this channel](https://t.me/s/libretaxi_all) tracking all LibreTaxi orders in realtime is proof that it *really is* helping folks get around.

<audio controls>
  <source src="https://github.com/extratone/bilge/raw/main/audio/The%20man%20who%20wants%20to%20out-Uber%20Uber-CBC.mp3">
</audio>
*
As for the persistence of *Live* location-sharing, I can vouch for its reliability on the Android side, at least, as per my aforementioned experience with a partner who used Telegram and shared their location with me for both safety and convenience. As someone with the most immense possible privilege regarding safety and dating, I would also like to suggest sharing one's live location with a private Telegram group chat with friends as an alternative to service's like [Tinder's Noonlight](https://www.help.tinder.com/hc/en-us/articles/360039260031-What-is-Noonlight-).




![Chat Export in Telegram Desktop](https://i.snap.as/TbPFRPnG.png)

### Permanence

I've long evangelized (and extensively used) Alexey Golub's [Discord Chat Exporter](https://github.com/Tyrrrz/DiscordChatExporter) to make beautiful, stylized archives of Discord channels and/or entire servers for safekeeping. Telegram's native [Chat Export Tool](https://telegram.org/blog/export-and-more) came just a year after Alexey pushed [version 1.0 of the tool to GitHub](https://github.com/Tyrrrz/DiscordChatExporter/releases/tag/1.0.0), in August of 2018. In features, they're very similar utilities: both can export in either stylized HTML or data-only JSON formats between infinitely-configurable time/date constraints. Again, I wouldn’t know how much external backup of community activity actually weighs in the day-to-day operations of large online communities. I know I personally find it comforting to have a swift, polished method of exporting *text*, especially, living in this era of [blatant disregard for users of suddenly-abandoned online services](https://github.com/extratone/bilge/issues/79).

![TG Colors](https://i.snap.as/r0WpvFQr.png)