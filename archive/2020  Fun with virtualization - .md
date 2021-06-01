# "2020 | Fun with virtualization"

*31-05-2021 21:24* 

> (This is a guest post by Antoni Sawicki aka Tenox)
### Post navigation

(*This is a guest post by Antoni Sawicki aka Tenox)*

A couple of months ago we hosted [VIrtualization Challenge for QNX v1.2](https://virtuallyfun.com/wordpress/2020/10/13/virtualization-challenge-iv-qnx-1-2/). I expected that the hard part would be to circumvent the copy protection and the rest would be easy. It turned out to be quite the opposite! The copy protection was worked around in no time by several people independently. What turned out to be impossible is to install the OS on a hard disk.

QNX 1.2 does have several drivers for different hdd controllers including BIOS mode. It has fdisk, can create partitions, install MBR, format fs, mount hard disk volumes… but it cannot install boot code. Apparently this functionality has been added only in [QNX 2.x](https://virtuallyfun.com/wordpress/2013/03/20/fun-with-virtualizing-qnx-2/). After a long debate we settled for a solution where you boot kernel from a floppy disk and use the rest of the os from a hard disk. This was implemented by Forty who won the challenge which was outlined in [this post](https://virtuallyfun.com/wordpress/2020/12/03/qnx-1-2-virtualized/).

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-boot.png)

In a rather unexpected turn of events [Dan Dodge](https://en.wikipedia.org/wiki/Dan_Dodge), co-creator and CEO of [QNX Software Systems](https://en.wikipedia.org/wiki/QNX) himself reached out to us and offered to extend the contest to finish the process properly. Dan is offering **$2000** prize for making QNX 1.2 boot from hard disk without use of the boot floppy disk. I have confirmed the details in an email exchange.

Rules: As always the winner will be the first person who provides a working image in the comments. Any emulator/hypervisor is allowed. You can use boot loader from QNX 2.x, or write your own or anything else you come up with. There are some tips in [Dan’s comment](https://virtuallyfun.com/wordpress/2020/12/03/qnx-1-2-virtualized/#comment-259337). Ask away for more details. The QNX repository is [here](http://tenox.pdp-11.ru/qnx/). Good luck! ![🙂](https://s.w.org/images/core/emoji/13.0.1/svg/1f642.svg)

**Update:** The challenge has been completed! The winner is **Mihai Gaitos** and this is the [winning entry](https://hawk.ro/qnx12_pcjs/) also [a post on this blog](https://virtuallyfun.com/wordpress/2021/02/13/reverse-engineering-qnx-1-2-to-boot-from-hdd/). I will work with Mihai to get a more detailed blog post of what has been done and Dan to hand out the $2000 prize. Congratulations!!!

**Update:** [You can try QNX 1.2 straight in your browser with PCjs!](https://hawk.ro/qnx12_pcjs/)

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/year-long-outages-1024x242.png)

Every time the yellow touches bottom it’s an outage

You’ve probably seen it, lots of outages lots of delay and well not a lot from me.

life has been incredibly busy as I thought I was out of the IT rat race but things happened and I’ve ended up staying in.

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/shipment-of-fail-1024x535.jpg)

Failure is arriving!

so yes once more again “docker” and k8 make everything easy to deploy but maintain and work, well that is another story. So it turns out that Rancher OS k8’s will shut down once the disk hits 85% capacity.

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/disk-pressure.png)

Under pressure!

ok that sounds like a lot but on a 1tb volume that is 125GB?!!! No warning no, no nothing just “disk pressure” on the console and that is it.

```
root@steady35:/opt/local-path-provisioner# df -h .Filesystem Size Used Avail Use% Mounted on/dev/sda1 873G 712G 115G 87% /opt
```

honestly WTF!

I like the ability to publish secrets and import and export settings between containers, but the incredible lack of logging is unreal. The k8 manifest for MySQL kept on failing on my server. I have no idea why.

zero logging info

I deploy the docker version directly, and if you can read this it’s working.

clearly I’m the old man out of touch.

but for a single node, UML is the way to go.

plus you can use your entire disk.

so yeah trying something new although I don’t think it’ll last all that long.

*(This is a guest post by Antoni Sawicki aka Tenox)*

I certainly can’t claim to be the first as this has already been done by our friends at [OS/2 Museum](https://www.os2museum.com/wp/unixware-1-0-personal-edition/). However with low vanilla VGA resolution and no networking the results were unsatisfactory. Having so much success with 86Box I decided to try to do a little better.

I bought my UnixWare 1.0 media kit years ago on eBay. Unlike the tape set owned by OS/2 Museum mine had CDROM as install media. Unfortunately despite many many tries with different types of cdrom/bus/ide/scsi card I could never get the OS to see it. The cdrom/iso image is just a typical set of sysv packages. As such I wanted to see if it would be possible to convert it to a set of floppy disk images and install this way. Attached the iso image in UnixWare 7.1.4 VM and did a pkgtrans like so:

`pkgtrans -s cdrom1 diskette1`

From there I created a bunch of floppy disk images, which I later used for installation. Thanks to [Plamen](http://afterpeople.com/) I was also able to get TCP/IP disks which I added to the [install set](http://tenox.pdp-11.ru/unixware/1.0/UnixWare10.rar).

**Update**: thanks to ArtiomWin I also got a BusLogic HBA driver disk, which allowed me to see the cdrom attached over SCSI. As such I decided to remaster the original iso image with added TCP/IP set, Update package and bash+gzip. The iso image is [here](http://tenox.pdp-11.ru/unixware/1.0/UnixWare10-iso.rar).

Upon first boot after install from CDROM you get prompted to choose a NIC driver:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/uxw-nic.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/uxw-nic.png)

Unfortunately none of them really worked in 86Box for some reason. They get detected and you can see the MAC Address but not much after that. 3C503 and NE2K freeze the system, WD works bit better but you can’t really communicate with anything. Maybe it’s just my PCap configuration.

After installation I mounted the cdrom again and added TCP/IP set:

`mount -r -F cdfs /dev/cd0 /mnt  
pkgadd -d /mnt tcpnfs  
pkgadd -d /mnt update`  
`cp bash gzip /bin`

One of main issues bugging me was lack of proper resolution. UnixWare 1.0 has a high resolution mode for [Tseng ET4000](https://en.wikipedia.org/wiki/Tseng_Labs_ET4000) card which is supported in 86Box. You can change the resolution using `/usr/X/adm/setvgamode` as root. It worked perfectly, except for fonts, which required some surgery in `/usr/X/defaults/Xwinfont`. This is how it looks like fixed up:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/uxw-hero-1-1024x836.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/uxw-hero-1.png)

UnixWare comes with **Merge DOS** emulator. It can even run graphical applications in windowed mode for CGA and HGC. VGA is only possible in full screen mode.

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/uxw-fs-cga1-1024x836.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/uxw-fs-cga1.png)

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/uxw-fs-hgc1-1024x836.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/uxw-fs-hgc1.png)

All this cool stuff before Linux was even born!

DOS Menu is invoked by Scroll Lock. You can switch consoles between text and X11 by pressing CTRL+ALT+SYSRQ and ‘p’. I have also added bash and gzip binaries.

The ready to run 86Box image is [here](http://tenox.pdp-11.ru/unixware/1.0/UnixWare10-86Box.rar). Virtual Box OVA [here](http://tenox.pdp-11.ru/unixware/1.0/UnixWare-1.0.ova). Install media [here](http://tenox.pdp-11.ru/unixware/1.0/UnixWare10-iso.rar). Login with user/user, root/root.

Have fun with Virtualization !

*(This is a guest post by Antoni Sawicki aka Tenox)*

A few week ago we ran a [Virtualization Challenge to virtualize QNX 1.2](https://virtuallyfun.com/wordpress/2020/10/13/virtualization-challenge-iv-qnx-1-2/). The difficult part of this one was that the boot disk was copy protected. Thanks to [Kryoflux](https://www.kryoflux.com/) and [SuperCard Pro](https://www.cbmstuff.com/proddetail.php?prod=SCP) I was able to image the disks and convert them to usable images using [HxC software tool HFE](http://hxc2001.free.fr/floppy_drive_emulator/index.html#download).

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/floppies-768x1024.jpg)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/floppies.jpg)

Technically the competition has been won by **Crazyc** who was the first to submit disk images with copy protection worked around. He however waived his monetary prize and did not do any further work on making whole system bootable from hard disk.

While the copy protection turned out to be quite easy to circumvent and several people did it independently, installation on a hard disk proved to be quite impossible. You can fdisk, create partitions, lay out file system, mount and copy files to hard disk. However there is no way to install a boot loader and the kernel. QNX 2.x and above provide a way of doing it but unfortunately not version 1.x. Many people including various QNX gurus looked at it and we all gave up at this point.

Probably the only reasonable way of using hard disk with QNX 1.x is to copy all files from all the floppies to the hdd. Then use the boot floppy disk for booting and the rest from hard disk. This is likely why the disk set came with a backup copy of boot disk. This is what **Forty** eventually did in effect winning the competition. Forty supplied a **86Box** [ready to run configuration with patched and modified boot floppy](http://tenox.pdp-11.ru/qnx/qnx1/QNX_1.2_Hard_Drive.zip) to mount and use the hard disk image. I have buffed it up a bit to a faster XT and EGA video for better resolution. This is how it looks like during boot:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-boot.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-boot.png)

You can safely ignore date/time prompt with enter. To login to the system just enter slash ‘**/**‘ as the user name:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-login-1.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-login-1.png)

You can find all the binaries in /cmds directory. The system does have some sort of networking facility but I have not figured it out yet. Probably a good candidate to explore in another post.

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-net.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-net.png)

QNX has a super cool editor which is basically [ed](https://en.wikipedia.org/wiki/Ed_(text_editor)) on steroids. Documentation for it can be found in [2.x manuals](http://tenox.pdp-11.ru/qnx/qnx2/Documentation/QNX_v21_Full_Screen_Editor.pdf).

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-ed.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-ed.png)

Also working C compiler:

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-cc.png)

Finally QNX has some sort of a DOS emulator or hypervisor called QDOS:

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-dos.png)

Unfortunately I don’t know how to exit that. There is a little bit information about QDOX in `expl inform` section about other QNX products:

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/qnx12-expl.png)

Congratulations to Forty for winning the competition and gettin $100 via PayPal. Thanks to his time and work you can boot and play the system yourself. [86Box files are here](http://tenox.pdp-11.ru/qnx/qnx1/qnx12-86Box.rar).

You may also be interested in [QNX 2.x](https://virtuallyfun.com/wordpress/2013/03/20/fun-with-virtualizing-qnx-2/), [QNX Windows](https://virtuallyfun.com/wordpress/2013/03/22/the-shape-of-things-to-come/) and [QNX 4.x](https://virtuallyfun.com/wordpress/2013/01/21/fun-with-qnx-4-networking-under-vmware/) posts.

Finally QNX 1.2 also works under PCjs emulator and you can [try it online here](https://www.pcjs.org/software/pcx86/sys/unix/qnx/1.2/).

Have fun with virtualization!

**UPDATE** : [QNX 1.2 challenge Act II – HDD Boot](https://virtuallyfun.com/wordpress/2020/12/13/virtualization-challenge-iv-act-ii-qnx-1-2-hdd-boot/)

**UPDATE**: [Reverse-engineering QNX 1.2 to boot from HDD](https://virtuallyfun.com/wordpress/2021/02/13/reverse-engineering-qnx-1-2-to-boot-from-hdd/)

*(This is a guest post by Antoni Sawicki aka Tenox)*

In a few recent projects such as [QNX 1.2](https://virtuallyfun.com/wordpress/2020/10/13/virtualization-challenge-iv-qnx-1-2/) (and [demo disk](https://virtuallyfun.com/wordpress/2020/10/05/qnx-1-1-demo-disk/)), [Interactive Unix](https://virtuallyfun.com/wordpress/2020/11/29/fun-with-vp-ix-under-interactive-unix-system-v-386-3-0-and-86box/) (also [older post](https://virtuallyfun.com/wordpress/2010/02/09/fun-with-interactive-unix/) ) and [Caldera](https://virtuallyfun.com/wordpress/2020/11/11/fun-with-caldera-wabi/) (and [older post](https://virtuallyfun.com/wordpress/2013/03/27/caldera-open-linux/)) I have tried the [**86Box**](http://86box.net/) emulator. Unlike others, now I could utilize an emulated video and network cards of wide variety. As everything I did simply worked out of the box I instantly fell in love. Truly awesome 86Box is now my daily drive for running old PC operating systems. As such I have decided to revisit some of previously half assed posts with the new weapon.

I have virtualized [Dell Unix back in 2012](https://virtuallyfun.com/wordpress/2012/03/20/dell-unix-lives-again/) using Bochs and QEMU. Even with community support we have struggled to get a decent video resolution and had to use SLIP for networking. Today let me present Dell Unix more properly, with 1024×768, 256 colors video and proper networking using emulated VGA and NIC.

I started with [allsoft.img](http://tenox.pdp-11.ru/dellunix/allsoft.img.xz) which is Dell Unix and all packages installed from the tape on Bochs. I have disabled a few services in `/etc/rc2.d` namely mouse daemon (mse), sendmail, uucp, lp, etc.

For X Window I have edited `/usr/lib/X11/Xconfig`, enabled serial mouse (Microsoft) and 1024×768 mode. I have used `Tseng ET4000AX VGA` which is detected by Xmach server. This allowed X / xinit to run correctly. However for `startx` to work you need to edit `/usr/lib/X11/xinit/xserverrc` as it seems to be using slightly different configuration. For graphical login you can probably add `x:3:respawn:/usr/bin/X11/xdm -nodaemon` to `/etc/inittab`. However I have noticed that when ran from init, xdm seem not to pick up the Dell customized config files. Perhaps rc startup script should be created instead.

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/xdm-1024x836.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/xdm.png)

As a final note on X, the system has virtual consoles, like other SVR4 you access them by pressing SYSRQ and F keys. F1 is a text mode console, F2 is Xserver. This is my Dell Unix hero shot:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/hero-1024x836.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/hero.png)

Networking was even easier. Dell Unix supports WD8003 and 3C503 NICs. I wanted to first try the WD one. In `/etc/conf/pack.d/wdn/space.c` you can find the predefined hardware probes. I have picked one of supported modes and the card was detected on subsequent reboot. That’s it. No need for kernel rebuild or any configuration. I have not tried 3C503 but if you want the driver for it is named `ie6`. For TCP/IP configuration you set your IP address in `/etc/hosts` and gateway in `/etc/inet/rc.inet` file.

I was able to quickly compile Mosaic, which curiously had Makefile settings for Dell Unix, and take it for a spin on the web with help of [WRP](https://github.com/tenox7/wrp):

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/mos-1024x836.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/mos.png)

One could probably want to compile more recent version of Mosaic with PNG support or maybe some more recent browser all together.

The system comes with a bunch of open source software in `/usr/dell` however as there was no bash or even gzip I have compiled some essentials. They are available [here](http://tenox.pdp-11.ru/dellunix/apps/) and as a [/usr/local tarball](http://tenox.pdp-11.ru/dellunix/usrlocal.tar.gz).

For the lazy, as usual you can get a complete os image for [86Box here](http://tenox.pdp-11.ru/dellunix/DellUnix22-86Box.rar). Make sure to attach pcap to your local network interface and set IP address / gateway / dns server accordingly.

If you port some cool software or find any interesting gems in Dell Unix please comment!

Have fun with virtualization!

**Update**: I have been looking at contents of various distribution media for Dell Unix that have surfaced here and there. On a DAT tape I bought on eBay a few years back I found this file:

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/pkgs.png)

Whoa! Of course I want to install all of it! This is how FrameMaker 3.0 looks on Dell Unix:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/maker-1024x836.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/12/maker.png)

I have updated the disk image for 86Box to have this included. You can run demo mode of FrameMaker by executing `/usr/frame/bin/demomaker`. I also imagine that this can be installed on pretty much any x86 SVR4 and above, maybe even Linux. If anyone has a license code / serial number please let me know!

*(This is a guest post by Antoni Sawicki aka Tenox)*

This is a continuation of the vintage DOS/Windows hypervisors and emulators for Unix series. So far I have covered things like [Merge](https://virtuallyfun.com/wordpress/2020/11/03/fun-with-openserver-and-merge/), [MergePro](https://virtuallyfun.com/wordpress/2020/11/21/fun-with-openserver-6-and-mergepro/) and [Wabi](https://virtuallyfun.com/wordpress/2020/11/11/fun-with-caldera-wabi/). This time I’m taking a closer look at **VP/ix**. This early DOS hypervisor was developed by [Interactive Systems Incorporated (ISC)](https://en.wikipedia.org/wiki/Interactive_Systems_Corporation). Initially released and included with their [INTERACTIVE UNIX System V/386 operating system](https://virtuallyfun.com/wordpress/2010/02/09/fun-with-interactive-unix/) it was also available for **SCO Xenix 386**, **Sun 386i**, **AT&T WGS** as **Simul-Task 386**. The last two versions were significantly enhanced to allow DOS/Windows graphical apps run in windowed mode, which unfortunately is not the case with IX and Xenix, where graphical apps can only run on the console. VP/ix was released around the same time as Merge in 1987 and it was its main competitor. Both products are early hypervisors, they use Virtual 8086 mode and require 386+ to run on. This is in contrast to [SoftPC](https://en.wikipedia.org/wiki/SoftPC) which is a full x86 emulator that can run on different CPU/architecture hosts.

VP/ix comes with ISC INTERACTIVE UNIX that is covered in [my previous article](https://virtuallyfun.com/wordpress/2010/02/09/fun-with-interactive-unix/). The product was installed as part of the 50 floppy disk set. You run it with an icon in Looking Glass environment or invoke from terminal or console via “vpix” command.

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/vpix-main-1-1024x839.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/vpix-main-1.png)

VP/ix comes with it’s own custom version of MS-DOS 3.30. It allows a variety of cross unix/dos enhancements such as shared disks, automatic dos/unix file format conversion, listing unix attributes from dos as well as running unix commands from dos and vice versa. One of super cool features is that you can pipe output of DOS commands to Unix command, for example:

```
C:\> dir | wc -l
```

…will do a DOS dir and pipe it to Unix wc command. You can map Unix paths to DOS drives:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/vpix-mounts-1024x839.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/vpix-mounts.png)

VP/ix has an interactive Menu invoked by SYSRQ + ‘m’ key:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/vpix-menu-1024x839.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/vpix-menu.png)

You can load floppy disks, turn sound on/off, restart/quit or run unix shell.

As for running normal text mode apps it’s business as usual:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/vpix-tb-2-1024x839.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/vpix-tb-2.png)

Multiple instances of DOS can be launched and files shared between them. Also if you are a different user on different terminal or connected remotely. Remote terminal also supports mapping dos line characters to ASCII.

The same however cannot be said about graphical DOS or Windows apps. Under INTERACTIVE UNIX and Xenix you need to run them from the text mode console:

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/vpix-fs4.png)

One day I will probably want to look at VP/ix on Sun 386i or AT&T WGS as they solved this problem. Newer versions of Interactive Unix (4.x) and VP/IX also need to be investigated.

According to [the documentation](http://tenox.pdp-11.ru/interactiveunix/Documentation/INTERACTIVE_UNIX_System_V386_VPix_Environment_Guide.pdf), you can run Windows 3.x in real mode using `win /r` however I did not have patience to install this.

INTERACTIVE UNIX 3.0 with VP/ix preinstalled can be downloaded here for [86Box](http://tenox.pdp-11.ru/interactiveunix/ix30-86box.rar) or [VBox OVA](http://tenox.pdp-11.ru/interactiveunix/InteractiveUnix30.ova), however the later does not have networking and resolution is only 800×600. Login as root/root. When importing OVA in Vbox you may need to disable import as VDI. For 86Box version please read readme on how to circumvent licensing error.

Also VP/ix for SCO Xenix is available [here](http://tenox.pdp-11.ru/xenix/apps/sco-vpix120j.zip).

Have fun with virtualization!

*(This is a guest post by Antoni Sawicki aka Tenox)*

In a recent post about [OpenServer and Merge](https://virtuallyfun.com/wordpress/2020/11/03/fun-with-openserver-and-merge/) I covered OpenServer 5 and Merge 5.3. Thanks to a comment from Uli I have learned about **MergePro** which looks like is a rebranded [Win4Lin](https://en.wikipedia.org/wiki/Win4Lin). Intrigued I wanted to try it especially that you can download it from [SCO ftp server](ftp://ftp.sco.com/pub/openserver6/600/other/mergepro.6.0f/) as Uli pointed.

I’m going to be using VMware Fusion on Mac, which is now [free for personal use](https://my.vmware.com/web/vmware/evalcenter?p=fusion-player-personal). They call it Fusion Player, however unlike Workstation and Player, it has exactly same features as non-free Fusion version. For the OS I’m going to use Xinuos OpenServer 6 Definitive, however you can easily download OpenServer 6.0.0Ni from [the ftp](ftp://ftp.sco.com/pub/openserver6/600/iso/OpenServer-6.0.0-Mar2006/OpenServer-6.0.0Ni-2006-02-08-1513.iso). I also have copies in [my archive](http://tenox.pdp-11.ru/sco/OpenServer6/).

Installation is straightforward. You can skip licensing and use evaluation license, however for convenience you can use following keys:

Xinuos OpenServer 6D2M1: SCO053269 / ejcaagmy  
SCO OpenServer 6.0.0Ni: SCO398943 / ysloudwl

If you are installing 6.0.0Ni you will also need [MP4 update](ftp://ftp.sco.com/pub/openserver6/600/mp/osr600mp4/osr600mp4_cd1.iso). 6D2M1 is already patched.

To install MergePro you need to copy [this package](ftp://ftp.sco.com/pub/openserver6/600/other/mergepro.6.0f/MergePro-6.3.0-04f_pkgadd.stream) to the host os and install like so:

`# pkgadd -d /tmp/MergePro-6.3.0-04f_pkgadd.stream`

In the following step, mount Windows 2000 or XP SP1 or SP2 ISO and run:

`# loadwinproCD`

Once Windows is loaded you need to install it as a non-root user using:

`$ installwinpro`

After it’s installed, to run you type:

`$ winpro`

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-21-at-2.37.06-PM-1024x800.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-21-at-2.37.06-PM.png)

Unfortunately I have failed to install Windows XP with variety of errors and blue screens. Windows 2000 works fine, however it feels bit sluggish and mouse click doesn’t always register. It looks like there are some sort of Windows Guest Additions being injected in to the OS so one would expect this to work just fine.

During startup I have noticed that MergePro installs and uses [KQEMU](https://en.wikipedia.org/wiki/QEMU#Accelerator) kernel module. Also this screen looks suspiciously familiar… where did I see this before?

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-20-at-7.07.34-PM.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-20-at-7.07.34-PM.png)

The BIOS and VGABios look definitely stolen from [Bochs](https://en.wikipedia.org/wiki/Bochs). HDD controllers look like [Win4Lin](https://en.wikipedia.org/wiki/Win4Lin). I’m not going to go in to deeper analysis of what MergePro is made of at this time. Looks like a topic for another article or even better – your comments ![🙂](https://s.w.org/images/core/emoji/13.0.1/svg/1f642.svg)

Also if you want to license the copy of Merge use following key:

MergePro 6.3.0f: SCO138318 / bhtecusg

Finally for the lazy here is [fully installed OVA,](http://tenox.pdp-11.ru/sco/OpenServer6/OpenServer6D2M1.ova) password is root/root and tenox/tenox for the regular user.

I got a question the other day about how to easily move files in and out of [Cockatrice III](https://sourceforge.net/projects/cockatrice/), especially since as part of my ‘try to make it stable by cutting features out’ approach I removed the ability to mount foreign directories under Basilisk II.

For my personal use, I have an AppleTalk LAN, and I just use a Windows NT 4.0 server with AppleTalk, as a file server/proxy and that works pretty good for me, so much so that I didn’t even think of any other way of doing this.

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/hfv-explorer.jpg)

HFV Explorer 1.3.1

One of the quickest and easiest is HFV Explorer, however the ‘catch’ being it doesn’t read SCSI disk images (aka things with partition maps). But for the ‘massive floppy’ images it’s more than fine.

[HFSUtils](https://www.mars.org/home/rob/proj/hfs/) is another approach, it’s like the old ‘MS-DOS utils’ of ancient Unix days, allowing you to ‘mount’ a disk image, and copy files in and out. I thought I’d give this a spin to copy [Marathon](https://macintoshgarden.org/games/marathon) into my virtual OS 8.1 image. It’s pretty straight forward first ‘mount’ the disk image:

```
C:\Cockatrice>hmount.exe scsi0.dsk
C:\Cockatrice/scsi0.dsk: contains 1 HFS partition
Volume name is "SCSI0"
Volume was created on Sat May 19 14:04:04 2018
Volume was last modified on Mon Nov 16 14:59:02 2020
Volume has 1056545280 bytes free
```

Now make a directory:

```
C:\Cockatrice>hmkdir scsi0:xfer:
```

And then copy in the file:

```
C:\Cockatrice>hcopy marathon.sit scsi0:xfer:

C:\Cockatrice>hdir scsi0:xfer:
f  ????/UNIX         0   5627676 Nov 16 15:34 scsi0:xfer:

C:\Cockatrice>
```

And just like that it’s there!

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/xfer-directory.png)

And yes it unstuffs!

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/unstuffing.png)

And just like that we have downloaded a game from the garden, copied it into a virtual SCSI disk, and gotten it to run, from the painful CLI.

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/marathon-banner.jpg)

Wasn’t that great!?

*(This is a guest post by Antoni Sawicki / Tenox)*

In the previous post about [SCO Merge](https://virtuallyfun.com/wordpress/2020/11/03/fun-with-openserver-and-merge/) I briefly mentioned [**WABI**](https://en.wikipedia.org/wiki/Wabi_(software)), which is a Windows ABI emulator for Unix. Initially released by Sun Microsystem, it’s believed that it came with acquisition of Interactive Systems Corp (ISC) and [Interactive UNIX](https://virtuallyfun.com/wordpress/2010/02/09/fun-with-interactive-unix/). It was available for SPARC and x86 Solaris as well as AIX on PowerPC. Around 1997 it was released for x86 Linux by [Caldera](https://virtuallyfun.com/wordpress/2013/03/27/caldera-open-linux/). This article will focus on Caldera’s version specifically.

Although entirely possible to install WABI on another RPM based distribution such as Red Hat, I’m a purist and wanted to try it on [Caldera Open Linux](https://virtuallyfun.com/wordpress/2013/03/27/caldera-open-linux/). The install is pretty straightforward you mount the [iso file](http://tenox.pdp-11.ru/linux/caldera/wabi22b.iso) and run install script. In a next step you need to install an update to version 2.2D. This is done by replacing */opt/wabi/bin/wabiprog* with extracted version of [this file](http://tenox.pdp-11.ru/linux/caldera/wabiprog-2.2D.gz). Thanks to readers of this blog post for sharing these.

When launched for the first time, you will be prompted to provide copy of Windows 3.1. This the main difference with [WINE](https://en.wikipedia.org/wiki/Wine_(software)) which specifically does not require copy of windows to run apps. I have noticed that WABI is rather picky about lower vs uppercase when installing software. There is an utility called *wabimakelower* to help there. You can also add an icon to one of Caldera Linux / Looking Glass program groups.

Once you run it, it’s Windows 3.1 as usual:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/caldera-wabi-1024x854.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/caldera-wabi.png)

WABI was designed for running productivity apps such as Office:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/wabi-word-1024x874.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/wabi-word.png)

You can even run Visual Studio:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/wabi-msvc-1024x874.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/wabi-msvc.png)

Curiously WABI is not a MS-DOS emulator. In order to run DOS apps you need to install such and configure it in WABI Control Panel:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/wabi-dos-1024x874.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/wabi-dos.png)

For the lazy, a readily preinstalled version is available as [OVA](http://tenox.pdp-11.ru/linux/caldera/Caldera13.ova) and [86box](http://tenox.pdp-11.ru/linux/caldera/Caldera13-86Box.rar). Root password is “caldera”.

There also is a [User Guide in PDF](http://tenox.pdp-11.ru/linux/caldera/wabi_linux_user_guide.pdf).

Have Fun with Virtualization!

*(This is a guest post by Antoni Sawicki aka Tenox)*

A friend and I were recently discussing differences between [WABI](https://en.wikipedia.org/wiki/Wabi_(software)), [WINE](https://en.wikipedia.org/wiki/Wine_(software)), [WISE](https://en.wikipedia.org/wiki/Windows_Interface_Source_Environment), [Merge](https://en.wikipedia.org/wiki/Merge_(software)), VP/IX, [FX!32](https://en.wikipedia.org/wiki/FX!32) and [SoftWindows](https://en.wikipedia.org/wiki/SoftPC). This article covers **[Merge](https://en.wikipedia.org/wiki/Merge_(software))** specifically which is a DOS/Windows emulator initially built for AT&T 6300 Plus computer. Later ported to UnixWare, OpenServer and eventually served as basis for [Win4Lin](https://en.wikipedia.org/wiki/Win4Lin). Later versions of Merge were build using [Microsoft WISE SDK](https://en.wikipedia.org/wiki/Windows_Interface_Source_Environment) which allowed to run apps without full copy of Windows kind of like WINE. I will be running it on OpenServer 5 using VirtualBox. However one could get it going on UnixWre and under any other hypervisor same as easy.

For Vbox/OSR5, when creating a VM, make it other/other type, give 256MB to 1GB RAM and 4GB HDD. Once VM is created go to Settings and change network adapter to **Intel PRO/1000 MT Desktop** and Attachment to **Bridge** mode. For some reason I could not get DHCP working out of the box. Also under Display change graphics controller to VM **SVGA**.

One can get the last “real” OSR5 from [this link](ftp://ftp.sco.com/pub/openserver5/507/iso/OpenServer-5.0.7-July2005/). There also are never Xuinos versions and specifically targeted for VMware, for example [this one](ftp://ftp.sco.com/pub/openserver507v/507v/iso/openserver507v_v300vm/).

Boot and go through the prompts as normal. At some point you will be stopped by a lovely prompt for license number and code:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-02-at-12.51.41-AM.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-02-at-12.51.41-AM.png)

Enter SCO043568 / pnhohvqm to get past this.

Watch out for this screen:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-02-at-12.57.53-AM.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-02-at-12.57.53-AM.png)

Don’t worry about not being able to get the NIC detected at this point. Leave it as Deferred for now. You need to install MP5 update and a driver update for this to work. This will be covered later.

Select some decent resolution for VESA SVGA:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-02-at-12.56.16-AM.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-02-at-12.56.16-AM.png)

Also select PS/2 Mouse:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-02-at-12.56.45-AM.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-02-at-12.56.45-AM.png)

The rest should just fly through on autopilot. Once system boots login as root with the password you set.

First thing you will need to install MP5 update. Download the ISO file from [this link](ftp://ftp.sco.com/pub/openserver5/507/iso/osr507suppcd5/) and attach to your hypervisor. Open the terminal and type “custom” to install software. Or double click that fancy “Software Manager” icon on the desktop. Under Software click Install New… and select this host. Select your attached cdrom.

You will need to install Maintenance Pack 5 and GFX / NIC Drivers:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-02-at-1.24.07-AM.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-02-at-1.24.07-AM.png)

Make sure to hit install twice one for each of these items as they cannot be selected together. Once complete you will need to reboot of course.

After reboot you should be able to add and configure the NIC. You will need to either run “scoadmin” or go to System Administration – Networks – Network Configuration Manager. Add a new LAN adapter. The Intel PRO/1000 should be detected automatically. I could never get DHCP to work and just used static IP config there. Make sure to ok re-link the kernel and reboot.

Installation of merge is a little bit more complicated. The latest version can be downloaded from [here](ftp://ftp.sco.com/pub/download/037-000-033DL/). If you are installing under UnixWare then [this](ftp://ftp.sco.com/pub/download/037-000-034DL/) is your folder. Transfer it to your OSR5 VM via browser, ftp, samba, iso file or however you like. Open a terminal and go to the directory with the cpio file file and run:

```
cpio -icv -I osr5_merge5323a_vol.cpio
```

This will produce a bunch of VOL\* files. These are installed with “custom” as well. However instead of cdrom you select Media Images and point to the directory with extracted VOL files:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/image-1.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/image-1.png)

There should be an option to install Merge.

You will be also prompted by a lovely license code prompt. Enter SCO837369 / bhtepkxy to get through. You will need to reboot again.

After login there will be a new folder on the desktop with Merge tools:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/image-2.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/image-2.png)

Root is not allowed to run it, but you can pre-install Windows as root. To do so go to Merge Setup and open System Wide Administration. You will find a button to Load Windows CD. You can just mount any bootable Windows 9x cdrom to your hypervisor and Merge will copy it for you.

There will be a prompt for network configuration. I opted for WinSock option which is user mode emulation, it’s enough to get a web browser going. If you need to use SMB/CIFS, open network shares, etc you will need the bridged mode with extra IP address for the guest.

Finally you will need to create and login as a different user to get this thing running.

This is the final product, with 4 level inception:

[![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-03-at-4.01.21-AM-1024x855.png)](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/11/Screen-Shot-2020-11-03-at-4.01.21-AM.png)

For the lazy of course provided is a fully installed OVA, one with [VBox NIC](http://tenox.pdp-11.ru/sco/OpenServer5/OpenServer%205.0.7%20Jun05%20MP5%20VBOXNIC.ova) and one with [VMware NIC](http://tenox.pdp-11.ru/sco/OpenServer5/OpenServer%205.0.7%20Jun05%20MP5%20VMWNIC.ova). Passwords are root/root and tenox/tenox. Note that this image has a static IP address of 192.168.1.111.

Have fun with virtualization!

Update: Article about [OpenServer 6 and MergePro](https://virtuallyfun.com/wordpress/2020/11/21/fun-with-openserver-6-and-mergepro/)

### Post navigation
***

==**25517**== Words

- **[2020 | Fun with virtualization](https://virtuallyfun.com/wordpress/2020/)**