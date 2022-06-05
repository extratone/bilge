# Retrieve Live NPR Program Information with Siri Shortcuts
- [GitHub Issue](https://github.com/extratone/bilge/issues/331)
- [Notes - Retrieve Live NPR Program Information with Siri Shortcuts](drafts://open?uuid=32965B91-A784-4651-9F9E-EE02C9548DE2)

![Finding UCSID](https://i.snap.as/F6m7OrxL.png)

This past month, *MacStories* hosted a community Siri Shortcuts contest called [*Automation April*](https://www.macstories.net/stories/introducing-automation-april/). One of [its winners](https://www.macstories.net/stories/introducing-the-2022-automation-april-shortcuts-contest-winners) - a shortcut called "[What's on KUTX](https://www.icloud.com/shortcuts/68b1d8edadb9446599c90d988ef21eb3)?" credited to Jack Wellborn - caught my eye as a lifelong dependent upon National Public Radio. Via [John Voorhees' comment](https://www.macstories.net/stories/introducing-the-2022-automation-april-shortcuts-contest-winners/#whats-on-kutx-a-music-discovery-shortcut):

> The solution Wellborn came up with is ingenious. It turns out that KUTX uses a web API that can return information about the currently playing track. The API is used to drive an ‘On Now’ widget on the station’s website, but Wellborn discovered that they could query the API and get the track information back as JSON. So, they built a shortcut that queries the API when run, returning the info about the currently-playing song.

I began playing around with [the NPR API](https://api.composer.nprstations.org) Jack used and discovered quite accidentally that their shortcut could be modified to display current *program* information for those NPR stations that are *not* music-oriented, like mine. 
