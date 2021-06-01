# "QNX 1.2 Virtualized | Fun with virtualization"

*31-05-2021 21:24* 

> (This is a guest post by Antoni Sawicki aka Tenox)
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
***

==**2748**== Words

- **[QNX 1.2 Virtualized | Fun with virtualization](https://virtuallyfun.com/wordpress/2020/12/03/qnx-1-2-virtualized/)**