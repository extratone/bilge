# Tilde.Town on iPhone with Blink Shell
- [Tilde.Town on iPhone with Blink Shell (Attempt 1)](drafts://open?uuid=E43D7483-F933-47DE-989C-BFD1D6931C1A)

![Blink Folder](https://tilde.town/~extratone/icons/blinkfolder.png)

*A work-in-progress guide to using [Blink Shell](https://testflight.apple.com/v1/app/1156707581) with one’s Tilde site on iPhone*.

I was completely unaware of the Tildeverse’s origin story - documented in [a Medium post](https://medium.com/message/tilde-club-i-had-a-couple-drinks-and-woke-up-with-1-000-nerds-a8904f0a2ebf) by *WIRED* Editor-in-Chief, Paul Ford - until this year, somehow, though I knew of its existence as far back as 2018. I was living in an unairconditioned Portland apartment, then, and had found myself *stuck* with Linux for the first time in my adult life. Consequentially, this period of my life became my first true introduction to the Command Line - a space I knew no more about than the layest layman. Hopping between my system’s shell and the DOS machines I was emulating on it (to explore the history of word processors, mostly,) I believe I struggled through dare I say a Rite of Computing Passage, obtaining the capability (and eventually, the muscle memory) to navigate a filesystem with `cd`, `ls`, and (on DOS) `dir`. It wasn’t until I came home in ‘19 that I discovered the two primary emulated Linux shells *on iOS*: [**iSH Shell**](https://apps.apple.com/us/app/ish-shell/id1436902243) and [**a-Shell**](https://apps.apple.com/us/app/a-shell/id1473805438).

![iSH Shell and a-Shell](https://user-images.githubusercontent.com/43663476/157366845-a604bd4c-3ea8-46fe-85e6-930adb8ca180.png)

The former is designed to emulate [Alpine Linux](https://alpinelinux.org) and has just recently added direct filesystem access via the Files app. The latter is, I’m told, quite extensible, and includes Siri Shortcuts actions that have enabled it to underpin powerful scraping shortcuts like [SW-DLT](https://routinehub.co/shortcut/7284/) - a sort of frontend for youtube-dl and now yt-dlp. Both are open source, but a-Shell is actually [a fork](https://github.com/holzschu/a-shell) of our subject app, now called “[**Blink Shell & Code**](https://apps.apple.com/us/app/blink-shell-code/id1594898306)” in the App Store.[^1]

![bbj Out](https://user-images.githubusercontent.com/43663476/155115271-faa55bfd-d151-4741-9a6c-e9664a457503.png)

Blink’s tag is “a professional, desktop grade terminal for iOS.” Its [landing page](https://blink.sh) touts a “first class iOS experience, with software and hardware keyboard, and the full edge-to-edge experience” experience. On *iPad*, Blink’s heyday was well documented by the likes of [Paul Miller’s 2018 article for *The Verge*](https://www.theverge.com/circuitbreaker/2018/3/27/17152482/ipad-pro-web-development-setup-how-to-terminal-apps) and Fatih Arslan’s 2019 “[Using the iPad Pro as my development machine](https://arslan.io/2019/01/07/using-the-ipad-pro-as-my-development-machine/).” These pieces more or less detail different use cases of the exact sort Blink was designed for - “professional” work done using an iPad as the terminal for a remote Linux/macOS machine.

![Apreche Reply](https://user-images.githubusercontent.com/43663476/157371504-32ebbca7-81bf-43c0-a762-cdbc0ad50181.png)

Since I’ve [apparently](https://twitter.com/NeoYokel/status/1421410673049972739) turned my life goal into doing stuff on my iPhone originally meant to be done on iPads, I’ve managed to find myself [an active member](https://tilde.town/~extratone) of the Tilde.Town community - a place exclusively accessible via SSH, aside from [public pages](https://raindrop.io/davidblue/tilde-22520136) - exclusively through [my iPhone 12 Pro Max](https://github.com/extratone/jorts). I’m not the first to use Blink to do this - note [Apreche](https://tilde.town/~apreche)’s reply to my thread, embedded above - but I suspect I’m the first to spend significant Town Time on my *fucking phone*, so I thought it might be worth laying out some of the particulars I’ve learned along the way. 

*It’s important to note that 99% of the use detailed in this guide/account involves the use of a paired Bluetooth keyboard.*

![Blink Settings](https://user-images.githubusercontent.com/43663476/157378620-9fb29373-d49e-4519-b734-8c75caf54dad.png)

## Locally

First, Blink’s settings menu is accessed by typing `config` and/or `⌘,`. Unfortunately, there’s no method of installing the entire selection of available [fonts](https://github.com/blinksh/fonts) or [themes](https://github.com/blinksh/themes) - you’ll have to do so one at a time, though you can optimize the process by learning/copy-and-pasting the url scheme for the fonts/themes directories on their respective repos. I especially recommend [CLRS](https://github.com/blinksh/themes/blob/master/themes/CLRS.js), [Man Page](https://github.com/blinksh/themes/blob/master/themes/Man%20Page.js), and [MonaLisa](https://github.com/blinksh/themes/blob/master/themes/MonaLisa.js), but this Post is saturated with *too* many mocked up screenshots of Blink themes to reasonably continue that list any further.

![Local UNIX Commands in Blink-ManPage](https://user-images.githubusercontent.com/43663476/155014762-7b8bfc6d-d6df-418a-b43e-6d7aa56582bb.png)

Compared with its fork, a-Shell, Blink’s local UNIX command list is a bit sparse. It’s accessed exclusively with `TAB`.

![Importing Keys in Blink Shell](https://user-images.githubusercontent.com/43663476/154846142-4d16aa31-ee99-4ce9-94c5-852765d7d0b7.png)

## SSH

If you’re entirely new to SSH as a concept, I’ve found no better introduction than [Tilde.Town’s own SSH Primer](https://tilde.town/~extratone/wiki/getting-started/ssh.html). I screwed up my first attempt at obtaining a key, but Town Maintainer [vilmibm](https://tilde.town/~vilmibm) kindly responded to my Twitter DM in December of last year asking to instate a new key. I can’t remember whether or not I generated it originally within Blink, but regardless, the app’s key management is as intuitive as I’ve seen. 

![Blink Autocomplete](https://user-images.githubusercontent.com/43663476/157376845-c2adf11e-7f8c-44d1-8a37-fec0a9fabbcc.png)

---

[1] [Blink’s icon](https://tilde.town/~extratone/icons/blink.png) is perhaps my most favorite of any application, ever.