# Why Siri Speech Synthesis is Worth It - Shortcuts User Group
- [RoutineHub - Siri Speech Synthesis (MacOS)](https://routinehub.co/shortcut/10583/)
- [RoutineHub - Make Audio from Article Body (Siri Speech Synthesis)](https://routinehub.co/shortcut/9953/)
- [[Siri Speech Synthesis in iOS 15]]
- [[Siri Speech Synthesis in iOS 15]]
- [Start of the Discord thread](https://discord.com/channels/551914015131959308/551914015131959317/917469831777898576)

==

-mvan231#3698
I recall a number of people asking for text to speech as audio file output. Seems we can do this with google translate using URL like this:
https://translate.google.com/translate_tts?ie=UTF-8&q=It%27s+half+past+five+in+the+afternoon&sl=en&tl=ar&client=tw-ob&ttsspeed=1

English (US) accent:
https://translate.google.com/translate_tts?ie=UTF-8&q=It%27s+half+past+five+in+the+afternoon&sl=en&tl=en&client=tw-ob&ttsspeed=1

==

-zulyn#6525
Synthesis of speech in “Make spoken text from audio” takes a surprisingly long time, even for shorter content, whereas both the Google and speak text options start instantly. The downside to speak text is that the speech can become incomprehensibly garbled if my phone is too hot (ie simultaneously charging and connected to lte)

==

So! I wrote a lot about this back in August (iOS 15 Beta):

https://bilge.world/siri-tts

(A bunch of the embeds are broken right now but the most important one - the very first audio player - should still provide a good example of my shortcuts’ result.)

The reason to use Siri over any other speech synthesis available to both consumers and otherwise… Is that she is just *way way* more natural sounding than literally all of them. 

I made a comparison between Google’s, IBM Watson, and Siri Voice 2 (Siri Simone): 
*((CW: It includes profanity… Sorry about that… Feels really juvenile of me at this particular moment lol.)*

https://whyp.it/t/text-to-speech-services-showdown-14260

**The Shortcuts**

iOS: https://routinehub.co/shortcut/9953
MacOS: https://routinehub.co/shortcut/10583

—

~~In case it’s not obvious, I have been looking for a way to generate natural enough sounding speech-synthesized TTS for my whole computing/writing life, basically, so when the new Siri~~

**Some further considerations**:

The problem with the MacOS shortcut is that “Safari Reader” - the super-clever parsing tool that’s better at cleaning web text smartly than any other workflow available to consumers by a country mile - is not currently functioning in Shortcuts for the Mac. Just last night I asked Federico Viticci to look back into why, exactly, so we can gauge a vaguely accurate chance of Apple fixing it anytime soon.

In case my post doesn’t articulate it clearly or if you just don’t have time to read it, my essential argument is this: **the difference between the new Siri Voices and all other speech synthesis I’ve ever heard is that they are profoundly more pleasant to listen to when consuming spoken text at length**. In a sense that I legitimately believe could change lives for blind and low-vision users who generate TTS for their own listening daily. Obviously, that above statement has a very subjective component - all that matters is whatever *you* find yourself preferring - but I’d suggest/ask that you *really give Siri Voice 1-4 a good long chance* before you go back to Google or IBM or what have you. 

One more thing sorry:

If it would help any of you, I am available, willing, and wanting to work with you one on one over video/audio/DM/whatever. Obviously my authority in Shortcuts is nothing compared to Matthew’s or many of you, I suspect, *except in this particular arena*. I can’t tell you how much joy it’d bring me to help so please ask!