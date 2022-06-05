# Retrieve Live NPR Program Information with Siri Shortcuts
- [GitHub Issue](https://github.com/extratone/bilge/issues/331)
- [**The Psalms**](https://bilge.world/npr-siri-shortcuts)
- [Notes - Retrieve Live NPR Program Information with Siri Shortcuts](drafts://open?uuid=32965B91-A784-4651-9F9E-EE02C9548DE2)
- [WTF](https://davidblue.wtf/drafts/FC5D51EA-5AF1-45E2-8E4B-2313AF84C31D.html)

![What's on NPR? Banner](https://i.snap.as/SsekiEOI.png)

This past month, *MacStories* hosted a community Siri Shortcuts contest called [*Automation April*](https://www.macstories.net/stories/introducing-automation-april/). One of [its winners](https://www.macstories.net/stories/introducing-the-2022-automation-april-shortcuts-contest-winners) - a shortcut called "[What's on KUTX](https://www.icloud.com/shortcuts/68b1d8edadb9446599c90d988ef21eb3)?" credited to Jack Wellborn - caught my eye as a lifelong dependent upon National Public Radio. Via [John Voorhees' comment](https://www.macstories.net/stories/introducing-the-2022-automation-april-shortcuts-contest-winners/#whats-on-kutx-a-music-discovery-shortcut):

> The solution Wellborn came up with is ingenious. It turns out that KUTX uses a web API that can return information about the currently playing track. The API is used to drive an ‘On Now’ widget on the station’s website, but Wellborn discovered that they could query the API and get the track information back as JSON. So, they built a shortcut that queries the API when run, returning the info about the currently-playing song.

I began playing around with [the NPR API](https://api.composer.nprstations.org) Jack used and discovered quite accidentally that their shortcut could be modified to display current *program* information for those NPR stations that are *not* music-oriented, like mine. For the vast majority of the 24-hour cycle, [KBIA](https://www.kbia.org/about) - "Mid-Missouri's NPR station" - plays news programs, mostly from NPR, itself, supplanted by BBC news late at night. 

https://twitter.com/NeoYokel/status/1533556819624349697

After some trimming and the addition of the URL for KBIA's [Apple Music Stream](https://music.apple.com/us/station/npr-news-kbia-mid-missouri/ra.870744176), I came up with [**What's on KBIA?**](https://www.icloud.com/shortcuts/04ec61d2f057497bba899eb434b3da07), which displays upon run the current program's title as well as a hyperlink to open its distinct webpage. By way of a simple [Choose from Menu](https://www.matthewcassinelli.com/actions/choose-from-menu/) action, it then prompts one with three options:

1. Open the program's webpage (again.)
2. Open KBIA's stream in Apple Music.
3. Open KOPN's stream in Apple Music. ([KOPN](https://www.kopn.org) is Columbia's community radio station.)

![What's on KBIA? Shortcut](https://i.snap.as/SrtjX9E1.png)

## Creating a Shortcut for *Your* NPR Station

All I really needed to customize Jack Wellborn's original shortcut was my NPR station's "UCSID,"which, for reference, is `5387648fe1c8335046a1d4b4`. Upon installation of my **What's on NPR?** shortcut, you'll be prompted to specify this. Unfortunately, retrieving it via NPR's API requires special authorization, for some reason, but - since we're retrieving data from an NPR station's playback widget already configured to use the API - it's actually as easy as opening your browser's "Dev Tools" or showing on your given station's homepage. If you're unfamiliar, [here's a handy guide](https://balsamiq.com/support/faqs/browserconsole/) to doing so on some popular desktop web browsers.

<center><a href="https://apps.apple.com/us/app/web-inspector/id1584825745"><img src="https://i.snap.as/6dahYnnY.png" alt="Web Inspector" width="30%"></img></a></center>

Honestly, though, if you're already on your iOS/iPadOS device and you're willing to install a single, free Safari Extension, I believe you'll find [Web Inspector](https://apps.apple.com/us/app/web-inspector/id1584825745) to be the single, simplest method of retrieving your station's UCSID.

![Finding UCSID-Web Inspector](https://i.snap.as/r1VgmbNv.png)

### Finding your station's UCSID with Web Inspector

1. Navigate to your station's homepage (ex. `kbia.org`.)
2. Start playback of the live stream you'd like to query (may or may not be necessary, depending.)
3. Open Web Inspector via the [Safari Extensions Menu](https://i.snap.as/2632HFBC.png).
4. In the `DOM` tab, use the search icon to filter for `ucsid`.
5. Your station's UCSID is the value for the `data-stream-ucsid` field.

Depending on how modern your station's website is (I think - I'm supposing, here,) you may or may not find this field. For reference, [here is the HTML source of KBIA's webpage](https://tilde.town/~extratone/shortcuts/kbia/example.txt) from which I drew in its entirety. If you're having trouble, please feel free to [contact me](https://davidblue.wtf/db.vcf) however you wish, ideally with your preferred station's identifier/web url.

<center><a href="https://apps.apple.com/us/app/broadcasts/id1469995354"><img src="https://i.snap.as/e68mJ9cQ.png" alt="Broadcasts" width="30%"></img></a></center>

### "Integration" with the Broadcasts app

[**Broadcasts**](https://apps.apple.com/us/app/broadcasts/id1469995354) is a very popular and highly-praised universal Apple application for internet radio streaming. By default, my What's on NPR? shortcut includes an action to begin streaming a station in Broadcasts, but it requires further configuration.

![Broadcasts App Integration](https://i.snap.as/eTkiNc6O.png)

In all likelihood, a search of the [Broadcasts Directory](https://i.snap.as/OvItUZSE.png) for your station's four-letter identifier should yield results. Once you've added your station to your library in Broadcasts, hold its icon (or `^ Tap`) to present the context menu (shown in the screenshots embedded above) and select `Edit`. The exact value for the `Name` field in configuration menu that results must be supplied as the answer to the second configuration step of my What's on NPR? shortcut.