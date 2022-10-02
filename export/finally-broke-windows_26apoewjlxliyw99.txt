# Finally Broke Windows

![Broke Windows](https://i.snap.as/CF3xPXEF.jpg)

## An attempt to fix a Windows Insider Build issue led to soft-bricking my Surface Laptop 2.

<!--more-->

I finally did it, ladies and gentlemen... I managed to break the Windows installation on my [Microsoft Surface Laptop 2](https://www.davidblue.wtf/t/surface/) to such an extent that it has been unrecoverable. I am currently borrowing my mother's MacBook Pro and waiting on a Windows 10 installation .ISO file to download so that I can hope to mount it correctly on the last, shitty USB thumb drive I still have lying around.

![Fuck Grammarly](https://i.snap.as/GG9y4pmC.png)

*YEAH, THAT'S RIGHT BITCH.*

I now suspect I began down this path a few months ago when I discovered [Windows Insider Channels](https://blogs.windows.com/windows-insider/2020/06/15/introducing-windows-insider-channels/) and rejoiced... As I've discovered that one can relatively easily find a beta version of virtually _any_ piece of software, it's become a bit of a habit for me. More or less unconsciously, I’ve ended up with an application library full of _Developer Beta_ and _Nightly_ _Build_\-type shit. I don't think there was/is a single web browser installed on that machine that is not the given entity's "Developer Edition" which - considering most of the regular installs allow you to opt into dev tools, anyway - seem like they might be redundant. I don't particularly care, anymore - I mostly just love their icons. [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)'s logo is a blue Firefox(!,) [Edge Chromium Dev](https://www.microsoftedgeinsider.com/en-us/download)'s is... more interesting than the regular version. [Google Chrome Canary](https://www.google.com/chrome/canary/)'s icon is a surprisingly-tasteful variation of the company's usually-horrendous color palette.

What I'm trying to say is... I have continued upon this habit of opting for unstable versions of software in a sort of defiance against the common sense notion that relying upon them is generally a _bad idea_.[^1] I suppose I was just **waiting to experience any consequences** from such a decision, and well... Here they are!

It all began when my Surface's integrated webcam became invisible to all applications that used a video input - including Microsoft's own Camera app and OBS. It showed up in Device Manger, where I did the generally-recommended troubleshooting task of uninstalling it completely (including its drivers) and rebooting to force Windows to reinstall it. It did so successfully every time, to no effect on the original issue. I also went into the Surface's BIOS menu, where its hardware devices are explicitly listed, and disabled/re-enabled the camera, to no effect. Normally, the absence of a webcam function would be more or less irrelevant to my day-to-day workflow, but now that [I'm partaking in "virtual" college courses](https://www.davidblue.wtf/college-return/), at least one of my professors has pressured me to appear _on cam_ as soon as possible.

On Sunday night, I decided to revisit the problem with greater commitment, diving into a variety of deeper troubleshooting steps which I do not recall. The crucial one, though, was my decision to use the System File Checker tool ``(sfc /scannow)`` with the added instruction to _fix_ whatever errors it found.[^2] This drove my dearest little laptop into a cycle of self-diagnoses which results in an option screen including "Reset PC." After trying virtually every other option, I decided to try resetting, only to be met with connectivity error messages after pursuing the "Install via Network" option, leaving the use of a bootable Windows 10 recovery USB as my only choice, in theory.

Another problem now arose: my mother's MacBook Pro is the only other machine I have any sort of access to at the moment, and MacOS no longer supports the creation of such a bootable USB for Windows via the Boot Camp Utility any longer. Nevertheless, I tried to make one by downloading the correct OS ISO and mounting it via UNetbootin, which didn't work. I then called [Columbia Computer Center](https://www.colcomputers.com/), who very generously agreed to make one for me and only charge me for the drive itself ($10!)

Unfortunately, that one hasn't worked either, so I'm afraid I'm just going to have to take the thing to them... [Stay tuned](https://www.davidblue.wtf/t/surface/) for the Final Verdict.

[1] This is why I’ve always downloaded the developer iOS beta releases on my actual, daily driver handset.

[2] I’m pretty sure it was “-f” but I’m not going to do the research to verify that… Sorry!

#software