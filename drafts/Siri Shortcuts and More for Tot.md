# Siri Shortcuts and More for Tot
- [GitHub Issue](https://github.com/extratone/bilge/issues/314)
- [Notes-Siri Shortcuts and More for Tot](drafts://open?uuid=E6D127B8-B5CE-45F5-8D6A-0BC5CE12A149)

![Tot Folder](https://user-images.githubusercontent.com/43663476/159338345-8ea492b1-de57-4b41-8461-3655c35be400.png)

I’d lusted after Iconfactory’s [Tot](https://tot.rocks) for its app icons for a long time, but it wasn’t until a sale at the beginning of the year that I actually dove in and bought [Tot Pocket](https://apps.apple.com/us/app/tot-pocket/id1498235191) - the iOS app. As a primarily iPhone-bound user, now, I’ve found it extremely handy as a container for URL-scheme-powered links, largely to run Siri Shortcuts and open specific drafts in [Drafts](https://apps.apple.com/us/app/drafts/id1435957248).

![Tot Dashboard Compare](https://user-images.githubusercontent.com/43663476/160951975-ebc1cc18-3a90-4372-988b-779d69deed28.png)

Tot’s had its own URL scheme all along, which I utilized in two published Drafts actions: “[Append to 7th Tot Dot](https://actions.getdrafts.com/a/1uL)” (which works cross-platform) and “[Fetch Contents of # Tot Dot](https://actions.getdrafts.com/a/1ub)” (which uses Applescript and is therefore macOS-only.) Here’s an example of the scheme, itself:

```
tot://7/append?text=%0A[Text]
```

For better or worse, though, there is now a much more reliable solution. Iconfactory [added Siri Shortcuts actions for Tot](https://blog.iconfactory.com/2022/03/tot-shortcuts-geek-bliss/) on all supported platforms, and I’ve already switched to using them, instead. I find the overview in their blog post (and release notes) to be a bit vague, so I think it’s worth listing each of the new actions:

![Tot Actions Showcase](https://i.snap.as/tWyBQKCI.png)

1. **Add to Dot** - “Adds text to a dot by prepending or appending.”
2. **Get Dot** - “Gets all the text from a dot.”
3. **Query Dot** - “Gets text and [JSON data + metadata] from a dot.”
4. **Set Dot** - “Sets all the text in a dot.”
5. **Show Dot** - “Shows the specified dot.”

These comprehensively replace the functions of both Tot’s URL scheme and the available macOS script, adding significant functionality on top. For one thing, `Add to Dot` is smart enough to automatically add a space before appending any content to the end of a Dot, unlike the URL scheme’s append function.

## Shortcuts

The first and most basic Siri Shortcut I have to offer is [**Tot ⇨ Apple Notes**](https://routinehub.co/shortcut/11500) which simply transfers the current contents of all 7 Tot Dots to individual Apple Notes per each. If you’d like to transfer content in the other direction, using `Send a Copy` in the pre-sharesheet from Apple Notes and then selecting Tot’s icon seems to do so fairly reliably:

![Apple Note Shared to Tot](https://user-images.githubusercontent.com/43663476/162532529-d273a9bf-2aca-4961-82e8-6d3ee8bf54fa.png)

Next is [**Tot Jar**](https://routinehub.co/shortcut/11456), which uses the `Query Dot` action to store the full JSON data of all 7 dots in individual key paths within a single dictionary in [Data Jar](https://apps.apple.com/us/app/data-jar/id1453273600).

![Tot Jar Result](https://user-images.githubusercontent.com/43663476/162535816-e3fb6862-8ffd-4071-a2a7-db3681eac79c.png)

[**Hot Tot Dot Swap**](https://routinehub.co/shortcut/11457) - undoubtedly my best-titled Shortcut, yet - allows one to reliably swap the contents of two Tot Dots. [**Dot Info**](https://routinehub.co/shortcut/11459) prompts you to select a Dot and then displays all available information about it that is *not* content. It will then ask if you’d like to append said info to the Dot, itself, in this format:

![Dot Info Result](https://i.snap.as/n5TgXpPB.png)