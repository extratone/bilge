# On Drafts' Mail Integration
Updated `09142022-142742`

- [GitHub Issue](https://github.com/extratone/drafts/issues/88)
- [**The Psalms**](https://bilge.world/drafts-mail-integration) 
- [WTF](https://davidblue.wtf/drafts/359A8D7E-40AA-4B44-A861-1C5EC1C3B957.html)
- [Local](shareddocuments:///private/var/mobile/Library/Mobile%20Documents/com~apple~CloudDocs/Written/359A8D7E-40AA-4B44-A861-1C5EC1C3B957.md)
- [Directory Example](https://directory.getdrafts.com/a/1wR)
- [Documentation](https://docs.getdrafts.com/docs/actions/steps/system#mail)
- [Template Gist](https://gist.github.com/extratone/8cc2cd8cc7b8e95a80f9e60b5fe71bd4)
- [Sending Mail with Drafts - Integration Guides - Drafts Community](https://forums.getdrafts.com/t/sending-mail-with-drafts/3597)
- [Sending Mail with Drafts](drafts://open?uuid=03B85CC3-501F-42DB-AD82-112C9DD713E8)
- [Mail Action Wizard](https://tools.getdrafts.com/wizards/mail)
- [On Drafts and Obsidian](drafts://open?uuid=56EED87E-678E-4248-8E94-31650615C69A)
- [OMG Davod](drafts://open?uuid=4618537B-882C-47C6-ACF9-86128B4577B2)
- [ ] [Publishing with email-to-publish urls](https://write.as/chaff/drafts-mail-example). ([WordPress](https://wordpress.com/support/post-by-email/)) - ([Writeas](https://howto.write.as/publish-via-email))
- [x] [Mail Assistant for macOS](https://docs.getdrafts.com/misc/mail-assistant)
- [ ] [Drafts Directory Search - Mail](https://actions.getdrafts.com/search?utf8=✓&q=mail)
- [x] You can drag and drop to automatically-formatted Markdown links from Apple Mail! - [Raw Video](https://user-images.githubusercontent.com/43663476/189246053-c53d970a-a6ea-48da-8878-116d0abf2a2b.MOV) - [Imgur](https://imgur.com/gallery/8OHcdAm)
- [x] [Email to Myself Action](https://actions.getdrafts.com/a/1Mr)
- [Wayback Machine - Save Page Now](message://%3C20220908232838.1912DB0010B@st11p00im-smtpin011.me.com%3E)

---

### Examples

- [Evernote](https://www.evernote.com/shard/s715/sh/2c58551e-4707-41ca-9768-543b2fdcaa14/5c3bebf1055972ae72346a6227148d1c)
- [Spark Mail Example](https://app.sparkmailapp.com/web-share/GFZ2OLZskkVOrDVslliHP_H7lalF_81dS00IvpJv)

## Social

- [Imgur Video](https://imgur.com/gallery/INqF20r)
- [ ] [Capture Obsidian Members Group thread about Drafts comparison](things:///show?id=FUKBdpUBfdKMuXDcWecp1g)

---

![Send2Self Example in Mail](https://user-images.githubusercontent.com/43663476/189065881-56ddbc72-f397-4fe3-be57-e409668427fe.png)

## One of the app's most universal 'native' advantages, revisited.

<!--more-->

I've spent more cumulative time playing with my Obsidian configuration in the past 24 hour hours than the sum of the whole I'd spent doing so in the 3(?) years since I installed beta (or was it alpha?) one. While I still find it [janky as hell](https://youtu.be/Q8vkBuYJOz8) and deeply untrustworthy - among far too many other woes - I must admit that the bulk of shear hype surrounding its existence has indeed resulted in enough developer attention to achieve some technically interesting capabilities. Naturally, most of these feel absurdly redundant in context and *all* rely on age-old dependencies, but... well, today I uploaded the text of my almost five-year-old Microsoft Surface Laptop 2 Review to [its own dedicated Archive.org page](https://archive.org/details/microsoft-surface-laptop-2) in *thirteen* different formats rendered using Obsidian's (desktop-only) [Pandoc integration](https://obsidian.md/plugins?id=obsidian-pandoc)!

I lambaste with the sincere intent, at least, of being genuinely constructive, and I began upon this post hoping to do so *and* finally get around to highlighting one of Drafts' most essential (and taken for granted, I suspect) powers in its entirely cross-platform, system-level integration with Mail on Apple Platforms.

One of Drafts' most immediately apparent advantages as a *native* iOS/iPadOS/macOS application is readily found in [its integration with Mail](https://docs.getdrafts.com/docs/actions/steps/system#mail). Though I've personally managed to almost escape my twenties having yet to endure an email-heavy job, I still find the practice of sending topical/sacred information to myself to be the upmost reliable and direct means of retrieving it.

As I've configured it, within Drafts on any of its 3 platforms, all I need do is press `^M` to have the text of the current Draft sent instantly to an iCloud Mail alias I use for such things. 

<video controls width="520" height=auto>
  <source src="https://user-images.githubusercontent.com/43663476/189148302-688897be-b837-4f94-b5ea-c89972516c5a.MOV">
</video>

If I were sending to more folks than just myself on a regular basis, I'd definitely make use of Drafts' [Mail Action Wizard](https://tools.getdrafts.com/wizards/mail) to help simplify and solidify the process of creating a dedicated action, which almost certainly *would not* have the `Send in Background` toggle selected, as demonstrated, for the sake of giving myself a preview of outbound messages to... important folks. For macOS users, there's also a bespoke Catalyst app called [Mail Assistant](https://docs.getdrafts.com/misc/mail-assistant), which I've yet to try.

## Formatting

The parameters of [the Mail action step](https://docs.getdrafts.com/docs/actions/steps/system#mail) can be filled with any combination of items from [the original Drafts template tags array](https://docs.getdrafts.com/docs/actions/templates/drafts-templates) *or* from the relatively new set of [mustache template tags](https://docs.getdrafts.com/docs/actions/templates/mustache.html).

<script src="https://gist.github.com/extratone/8cc2cd8cc7b8e95a80f9e60b5fe71bd4.js"></script>

The current version of [my personal Send-to-Self action](https://directory.getdrafts.com/a/1wR) sent [this example result](https://app.sparkmailapp.com/web-share/GFZ2OLZskkVOrDVslliHP_H7lalF_81dS00IvpJv) using the format represented in the Gist embedded above. If you'd like, you can wrap the [body] tag (or any part of the message, actually) in double %s and select the `Send as HTML` toggle to have the result rendered as HTML. (See [this example](https://app.sparkmailapp.com/web-share/elWlx8eNRiw1nWICBT5p7eGcTs5XZsFO6-JuM1n1).)

![Setting a Drafts Mail-to-Self-specific rule on iCloud Mail on the Web](https://user-images.githubusercontent.com/43663476/190239278-4f5e7f12-37c1-4ad9-9c2e-7d7e76000f88.png)

If - like me - you're an iCloud Mail user primarily from iOS/iPadOS, here's how to create an iCloud Mail rule for messages you've sent yourself from Drafts:

1. Visit [iCloud.com/mail](https://www.icloud.com/mail/) in your web browser and authenticate.
2. Open the Rules settings menu by tapping the gear icon in the upper left ⇨ Preferences ⇨ Rules.
3. Create a new rule with the "Add rule" link.
4. By default, the "If a message..." field selection should be "is from." In the text entry field, enter `drafts-mail@drafts5.agiletortoise.com`.
5. By default, the "Then..." field selection is "Move to Folder." I have personally set mine to "Move to Folder and Mark as Read," but this depends on your preference. Select a folder or mailbox for Drafts messages to be moved to and click "Add."

## Publishing via Email

I've spent a lot of time this year working on integrating Drafts with [NeoCities](https://bilge.world/using-drafts-with-neocities), [Write.as](https://bilge.world/automating-writeas-posts), and other publishing services, but - for new users, especially - Drafts' mail integration offers a pathway to publishing with virtually zero configuration for those services who still offer mail-to-save/post email addresses. These include [WordPress](https://wordpress.com/support/post-by-email/), [Blogger](https://support.google.com/blogger/answer/154172?hl=en#:~:text=Click%20Save.-,to%20post%20by%20email%3A,-Important%3A%20Anyone%20who), [Write.as](https://howto.write.as/publish-via-email), [LiveJournal](https://www.livejournal.com/support/faq/187.html), [Evernote](https://help.evernote.com/hc/en-us/articles/360050995914), [Day One](https://dayoneapp.com/guides/tips-and-tutorials/create-entries-with-email/), [Things](https://culturedcode.com/things/support/articles/2908262/), [Todoist](https://www.keepproductive.com/blog/email-tasks-into-todoist), and more.

Perhaps the easiest method of setting this up would involve finding your private email address for a given service(s), pasting them in the aforementioned [Mail Action Wizard](https://tools.getdrafts.com/wizards/mail), titling the action by the name of the service, and installing. There's also an [Email to Myself action](https://actions.getdrafts.com/a/1Mr) on the Drafts Action Directory to get you started.

<video controls width="520" height=auto>
  <source src="https://user-images.githubusercontent.com/43663476/189246053-c53d970a-a6ea-48da-8878-116d0abf2a2b.MOV">
</video>

### Drag and Drop to *Formatted* Markdown Hyperlinks from Apple Mail

Going the other direction, users of Apple Mail (the client) might find it pleasantly surprising that one can drag a message from Mail into Drafts in order to automatically create a markdown-formatted hyperlink that opens said message from anywhere.

For more details, see the official [**'Sending Mail with Drafts' Integration Guide**](https://forums.getdrafts.com/t/sending-mail-with-drafts/3597).

<!--comment-->

#software
