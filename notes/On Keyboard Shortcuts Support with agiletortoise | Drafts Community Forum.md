# On Keyboard Shortcuts Support with agiletortoise | Drafts Community Forum

[**First Reply**](https://forums.getdrafts.com/t/does-keyboard-shortcuts-cheatsheet-exists/8503/13)

***David Blue***
Of the many things I have to thank you for (that I’ve been experimenting with lately,) this is the most significant, but for reasons not entirely related to just Drafts. Without being too wordy:

I’ve been using a bluetooth keyboard with my iPhone since it was introduced with iPhone 4. (It began as a conscious experiment - I chose a new phone instead of a new laptop to take to my first year of college.) 

I have accumulated a lot of evidence to suggest that number of *iPhone* users who’ve used a hardware keyboard with their phone is *extremely* tiny, but I think it’s a dynamic that’s still worth documenting properly. As you’ve probably observed, even the association of iPad and keyboard in the past few years has actually made it worse - lookup any given iOS app’s keyboard shortcuts and you’ll return a list *for iPad* and nothing else. Over the years, I’ve maintained a habit of going down the iPad list, testing each shortcut on iPhone, noting down the results in a table, and then emailing said list to the developers. (Naturally, they almost never respond. Shout out to Tapbots for being the only recent exception.)

Basically, I have come to the conclusion that the responsibility of writing the definitive **iPhone x Bluetooth Keyboard** guide/reference/documentation is my own. 

I'm posting this response here because I want to invte past, present, and future users to please share any thoughts they have on this if they so desire, but I'd very much like to consult you privately if you can spare the time and energy. 

Thanks!

***

***agiltortoise***
Are there a lot of apps where the keyboard shortcuts on iPad differ from the ones on iPhone? They should function the same on either device in Drafts, and from a developer perspective I would think it would be harder to make them not work on iPhone than to just let them be the same.

iPhone does not have the benefit of the iPad overlay to help discovery. In Drafts you can at least enable shortcuts for actions to display in the list (in … action list options).

***
***David Blue***
> from a developer perspective I would think it would be harder to make _******them not work on iPhone than to just let them be the same.

Thank you for confirming that! I've always suspected, but I am ultimately not a developer. 

the answer to your question, in my experience, is **yes**…

I would go so far as to say the _majority_ of the cross-platform apps which have bluetooth keyboard support have incongruities between the devices.

Depending on how much you know about Tweetbot 6, you might find it interesting to know that its two remaining essential shortcuts (F to favorite a Tweet and ⌘ + R to reply) are no longer supported, though there was a point where I had both Tweetbot 5 and Tweetbot 6 on my phone when those shortcuts were still working on the former. As I said, they did actually respond to me about this! First with doubt:

> Which ones do you think you are missing, don't think that should've changed.

Then - in the interest of thoroughness - I did one more systematic run through of Tweetbot’s iPad shortcuts list just to make sure, sent the results to them, and heard back a week later: “thanks! we’ll take a look at these.”

I consider myself pretty competent at finding documentation on any given obscure, dated issue, but never with proprietary Apple stuff before lol.

I would kill for an actual look at the code involved - I’ve been seriously considering buying a used Mac Mini just so I could poke around Xcode myself.

***
***agiletortoise***
iOS keyboard shortcuts are implemented with UIKeyCommand. If you Google that, there are many article about how they are implemented. [This is a good one](https://nshipster.com/uikeycommand/).