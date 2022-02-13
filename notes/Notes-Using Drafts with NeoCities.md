# Notes-Using Drafts with NeoCities
- [GitHub Issue](https://github.com/extratone/bilge/issues/297)
- [Drafts Directory](https://actions.getdrafts.com/g/1uF)
- [NeoCities/WebDAV Action Group · Issue #13 · extratone/drafts](https://github.com/extratone/drafts/issues/13)
- [[WebDAV Service - Drafts User Guide]]

![NeoCitiesActionGroupPreview](https://user-images.githubusercontent.com/43663476/150894801-5e536946-969f-4910-a22a-24cde4c4c6e1.png)

## Social
- [NeoCities Chatroom Discord Message Link](https://canary.discord.com/channels/763850583823482880/763850583823482883/935415154022187038)
- [Reminder](x-apple-reminderkit://REMCDReminder/D89261F2-BDA9-4A5E-AC12-BFF14F04FF61)
- [(2) A set of Drafts Actions for interacting with your NeoCities site via WebDAV. : neocities](https://www.reddit.com/r/neocities/comments/si7ydf/a_set_of_drafts_actions_for_interacting_with_your/)

### Suggestions/Requests for a WebDAV (NeoCities, in my case) Action Group
[Suggestions/Requests for a WebDAV (NeoCities, in my case) Action Group - Actions - Share What You've Made - Drafts Community](https://forums.getdrafts.com/t/suggestions-requests-for-a-webdav-neocities-in-my-case-action-group/11994)

![NeoCitiesActionGroupPreview](https://user-images.githubusercontent.com/43663476/150894801-5e536946-969f-4910-a22a-24cde4c4c6e1.png)

Howdy folks! After discovering that Drafts includes [a WebDAV service](https://docs.getdrafts.com/docs/actions/steps/services#webdav) a few days ago, I've been toying around with my first attempt at Action development from scratch. I've long fantasized about a more direct way to interact with my NeoCities site(s) - (NeoCities supports WebDAV as its exclusive means of remote file management.)    The end goal for the Action Group would be to utilize Drafts' WebDAV support to its absolute fullest extent to interact with/manage files on a web server over WebDAV.

So far, I've been able to push drafts to the server successfully but only when titled by UUID or Timestamp. (`[[uuid]].html/[[time]].html`)  When I try to use `# Notes-Using Drafts with NeoCities` or `[[display_title]]`, the resulting path is unreadable for some reason.

Anywho, I thought I'd open a thread here. Any suggestions/tips from those of you with more experience developing actions are more than welcome!

Here's [the (unlisted) Action Directory link](https://actions.getdrafts.com/g/1uF) for those with the time/curiosity to check on my progress.