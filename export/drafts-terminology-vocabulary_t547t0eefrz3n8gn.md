# How I Maintain a Vocabulary List in Drafts with Terminology

![Terminology URL Scheme and Vocabulary Workspace](https://i.snap.as/EQ4GSUGH.png)

<!--more-->

As I wrote in [my app store review of Terminology](https://tilde.town/~extratone/appreviews/terminology) (which is not shown publicly, I’ve since learned,) I prefer it over popular dictionary apps like [LookUp](https://apps.apple.com/us/app/lookup-english-dictionary/id872564448) (which I also have and use regularly) because it allows me to *add new terms* that don’t show up in search results. Somehow, the idea that one might store words that don’t necessarily appear in any dictionary seems a foreign one to the creators of LookUp, which I’ve since found out to be the cause of [its Siri Shortcuts actions failing on me](https://twitter.com/NeoYokel/status/1477323450549219328).

https://twitter.com/NeoYokel/status/1477323450549219328

[Terminology](https://apps.apple.com/us/app/terminology-dictionary/id687798859) *does* support adding “custom” terms, if unintentionally, through its “notes” function. Because it’s related to Drafts (they’re from the same creator,) it was quite easy to “integrate” the two in order to form the workflow you see demonstrated in [the video below](https://user-images.githubusercontent.com/43663476/165031796-5df78c01-faee-4fd4-84d0-f0bf95fd383f.MOV).

https://imgur.com/gallery/Q04Kxrg

First, I use the [Lookup in Terminology action](https://directory.getdrafts.com/a/1CS) paired with a keyboard shortcut (`^⇧D`) in Drafts to search a selected word in Terminology. There, I “like” the word and - if needed - add a definition via the notes button (immediately to the left of the heart in the upper right corner.) I’ve configured a custom button - “[Drafts-definition](terminology://x-callback-url/importAction?name=Drafts-definition&shortName=Drafts&description=Send%20term%20and%20full%20Markdown%20definitions%20to%20Drafts&urlTemplate=drafts://create?text%3D%5B%5Bdefinitions%5D%5D%250A%5B%5Bnote%5D%5D&dispatchType=0
terminology://x-callback-url/importAction?name=Drafts-definition&shortName=Drafts&description=Send%20term%20and%20full%20Markdown%20definitions%20to%20Drafts&urlTemplate=drafts://create?text%3D%5B%5Bdefinitions%5D%5D%250A%5B%5Bnote%5D%5D&dispatchType=0)” - (which you should be able to import with that hyperlink) that sends the term *including its notes* back to Drafts with the following configuration:

```
drafts://create?text=[[definitions]]%0A[[note]]
```

That button results in a new Draft in a specific format, demonstrated by this example:

![Antagonistic Vocabulary Draft Example](https://i.snap.as/K0adnLf5.png)

I then manually add the “Vocabulary” tag to the Draft, completing the process and placing it within the parameters defined by [my Vocabulary workspace](https://directory.getdrafts.com/w/1zN), which shows only drafts with that tag, sorted alphabetically.

## Publication

For the past few weeks, I’ve been wreaking havoc on NeoCities’ global activity feed using [the action group I created](https://bilge.world/using-drafts-with-neocities) on [the /drafts directory](https://davidblue.wtf/drafts) of davidblue dot wtf. Specifically, the action that uploads HTML files to that directory named by the UUID of the draft. (Here’s [the corresponding link for this post](https://davidblue.wtf/drafts/F20BB579-E235-4F04-8BCE-22AAF15A97C2.html), for example.) With consequent [draft_open_urls](https://docs.getdrafts.com/docs/actions/templates#identifier-tags) left in the footer of each as per my current, more or less universal [HTML template](https://tilde.town/~extratone/template/1.4.txt), I’m able to immediately open the appropriate draft locally. 

![Vocabulary Index Shortcut](https://i.snap.as/2npm338t.png)

In order to maintain [an updated index](https://davidblue.wtf/vocabulary) of the whole list, I’ve created [a Siri Shortcut](https://www.icloud.com/shortcuts/113f8e45729c4466860c3c7c668e939d) which transforms the UUIDs of the drafts in the vocabulary workspace into markdown-formatted hyperlinks of their web-dwelling counterparts.

![Terminology Favorites List](https://i.snap.as/D8GtXEd3.png)

Even if you’ve no intention of publishing your personal vocabulary - or integrating it with Drafts - Terminology is still the dictionary app I’d recommend over any others.

<!--comment-->

#configuration #software #automation