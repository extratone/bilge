## Drafting

I have used this “flow” so extensively for so long that it has come to define the whole of the abstract method in my muscle memory. Observe me browsing the web on my phone in an exhausted or particularly distractible state and you’d probably catch at least one or two completely irrational, inexplicable instances of sharing to my “[Saved Messages](https://telegram.org/blog/albums-saved-messages)” Telegram channel, which would be problematic for just about any other link-saving service. Add too many links to Safari’s Read Later list and you’ll end up crashing the browser on your Mac. I don’t even feel comfortable sending links willy nilly to the brilliant bookmark managing/curatorial service Raindrop, these days, after finding out that my [Reading List feed](https://raindrop.io/davidblue/reading-list-13380406) has *actual daily followers*, but there are zero consequences to sending ultimately-worthless or duplicate links to my personal Telegram channel, which has no content limit and is instantly and competently searchable.

![Send to Telegram Drafts Action](https://i.snap.as/p3K96LiX.png)

Over the years, I’ve discovered a bunch of other uses for the Saved Messages channel. As demonstrated in the screenshots embedded above, the [Send to Telegram Action](https://actions.getdrafts.com/a/18E) for my writing app, Drafts, utilizes Telegram for iOS’ Universal Links support (in the format `tg://…`) to instantly send the whole text of the current document in Drafts to a Telegram channel of one’s choice. I suspect this was intended to streamline posting for admins of public channels, but I’ve used it to quickly “back up” work as well as to transfer edits directly to my (Windows-running) PC. By adding `&to=+[my phone number]` to the end of the action’s URL, I was able to remove the single, unnecessary step of choosing the destination chat. Because text messages are automatically split at 5000 characters, though, I usually depend on the [Share as Markdown File Action](https://actions.getdrafts.com/a/1V4) (the output of which I also send to Saved Messages through the Share Sheet) for the latter function. Anecdotally I’ve also used this method literally just to inspect unknown content passed to the Share Sheet because it’s often **faster than Quick Look** to share to my Saved Messages channel and then immediately open it in the app. (Hilarious, I suppose. Mostly sad, these days.)

I found my inspiration for this Post in replying to a [thread on the Automators.fm Discourse forum](https://talk.automators.fm/t/equivalent-to-drafts-but-for-windows/6159) regarding a Windows equivlalent to the same Mac/iOS/iPadOS app Drafts mentioned above. I suppose my reply was a bit off-topic, in retrospect, but still worth including:

> I have been using [**Telegram**](https://desktop.telegram.org/), of all things for years. Notably, if you hit Ctrl + 0 from *anywhere* in the Windows client, you and your cursor are taken to the compose field beneath your personal "Saved Messages" channel, which is searchable, has an extremely high per-message character limit (after which it just automatically splits,) and is ridiculously reliable in saving "drafts" live as you're typing. As in... I have actively tried to lose characters by killing the application and then logging in on my phone and have yet to accomplish losing a single one (among other advantages: zero formatting added to plain text by default - not even line breaks - no total file limit and *2GB* per file limit uploads, absurdly cross-platform, literally more reliable than SMS in poor network conditions.) You can immediately reenter a sent message with `↑` to edit, copy it, escape with just `Esc` and then paste to start a new revision. 

The feature within Telegram that makes this whole usecase worthwhile was introduced in [June, 2016](https://telegram.org/blog/drafts), and is entitled - appropriately - “Drafts.” Unlike the Drafts function in Twitter’s various native clients, for instance, Telegram’s really is impossible to fool, though it’s not perfect. [Markdown formatting support](https://telegra.ph/markdown-07-07) is inconsistent across Telegram clients - the iOS app being the most woeful - and the few keyboard shortcuts the app supports on iPad are not supported whatsoever on iPhone.