# On Drafts' Mail Integration
Updated `09082022-132102`

- [GitHub Issue](https://github.com/extratone/drafts/issues/88)
- [WTF](https://davidblue.wtf/drafts/359A8D7E-40AA-4B44-A861-1C5EC1C3B957.html)
- [Local](shareddocuments:///private/var/mobile/Library/Mobile%20Documents/com~apple~CloudDocs/Written/359A8D7E-40AA-4B44-A861-1C5EC1C3B957.md)
- [Directory Example](https://directory.getdrafts.com/a/1wR)
- [Documentation](https://docs.getdrafts.com/docs/actions/steps/system#mail)
- [Template Gist](https://gist.github.com/extratone/8cc2cd8cc7b8e95a80f9e60b5fe71bd4)
- [Sending Mail with Drafts - Integration Guides - Drafts Community](https://forums.getdrafts.com/t/sending-mail-with-drafts/3597)
- [Sending Mail with Drafts](drafts://open?uuid=03B85CC3-501F-42DB-AD82-112C9DD713E8)
- [Spark Mail Example](https://app.sparkmailapp.com/web-share/GFZ2OLZskkVOrDVslliHP_H7lalF_81dS00IvpJv)
- [Mail Action Wizard](https://tools.getdrafts.com/wizards/mail)
- [On Drafts and Obsidian](drafts://open?uuid=56EED87E-678E-4248-8E94-31650615C69A)
- [Imgur Video](https://imgur.com/gallery/INqF20r)
- [ ] [Publishing with email-to-publish urls](https://write.as/chaff/drafts-mail-example). ([WordPress](https://wordpress.com/support/post-by-email/)) - ([Writeas](https://howto.write.as/publish-via-email))
- [x] [Mail Assistant for macOS](https://docs.getdrafts.com/misc/mail-assistant)
- [ ] [Drafts Directory Search - Mail](https://actions.getdrafts.com/search?utf8=✓&q=mail)
- [ ] You can drag and drop to automatically-formatted Markdown links from Apple Mail! - [Raw Video](https://user-images.githubusercontent.com/43663476/189246053-c53d970a-a6ea-48da-8878-116d0abf2a2b.MOV)
- [Wayback Machine - Save Page Now](message://%3C20220908232838.1912DB0010B@st11p00im-smtpin011.me.com%3E)

---

![Send2Self Example in Mail](https://user-images.githubusercontent.com/43663476/189065881-56ddbc72-f397-4fe3-be57-e409668427fe.png)

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

## Publishing via Email

<video controls width="520" height=auto>
  <source src="https://user-images.githubusercontent.com/43663476/189246053-c53d970a-a6ea-48da-8878-116d0abf2a2b.MOV">
</video>

### Drag and Drop to *Formatted* Markdown Hyperlinks from Apple Mail

For more details, see the official [**'Sending Mail with Drafts' Integration Guide**](https://forums.getdrafts.com/t/sending-mail-with-drafts/3597).

