# "Virtualization Challenge IV – QNX 1.2"

*31-05-2021 21:24* 

> (This is a guest post by Antoni Sawicki aka Tenox)
*(This is a guest post by Antoni Sawicki aka Tenox)*

This is a Virtualization Challenge. A competition to virtualize an OS inside emulator/hypervisor. (Previously [1](https://virtuallyfun.com/wordpress/2015/08/09/venix86-challenge/) / [2 /](https://virtuallyfun.com/wordpress/2015/09/19/virtualization-challenge-ii/) [3](https://virtuallyfun.com/wordpress/2018/07/18/virtualization-challenge-iii-acorn-arm-minix/))

This time the object of the competition is **QNX version 1.2**. A demo disk is covered [here](https://virtuallyfun.com/wordpress/2020/10/05/qnx-1-1-demo-disk/). This is the set of floppy disks:

![](https://virtuallyfun.com/wordpress/wp-content/uploads/2020/10/floppies-3-768x1024.jpg)

As you can see the boot disk is **copy-protected**. As such I have imaged these disks using both [KryoFlux](https://www.kryoflux.com/) and [SuperCard Pro](https://www.cbmstuff.com/proddetail.php?prod=SCP). The magnetic flux stream images are [available here](http://tenox.pdp-11.ru/qnx/qnx1/). For verification I have converted the raw stream of the **demo disk** in to a sector image using [HFE tool](http://hxc2001.free.fr/floppy_drive_emulator/index.html#download). The converted disk boots and works correctly in an emulator. The demo disk can also help with analyzing the boot process since it’s known to work.

The contest is to virtualize the OS, install it and provide a fully working hard disk image with the OS installed. Any emulator of your choice or method is acceptable as long as anyone can download and run it. The prize is **$100** via PayPal and of course the fame! ![🙂](https://s.w.org/images/core/emoji/13.0.1/svg/1f642.svg) The winner will be whoever **comments the article first** with a verifiable working solution.

A bonus **$50** prize will be awarded if you can patch the boot floppy disk so that it can be installed as if the copy protection was never there.

Good luck!!!

**UPDATE**: The competition has ben won: [QNX 1.2 Virtualized](https://virtuallyfun.com/wordpress/2020/12/03/qnx-1-2-virtualized/)

**UPDATE 2** : [QNX 1.2 challenge Act II – HDD Boot](https://virtuallyfun.com/wordpress/2020/12/13/virtualization-challenge-iv-act-ii-qnx-1-2-hdd-boot/)

**UPDATE** **3**: [Reverse-engineering QNX 1.2 to boot from HDD](https://virtuallyfun.com/wordpress/2021/02/13/reverse-engineering-qnx-1-2-to-boot-from-hdd/)
***

==**1393**== Words

- **[Virtualization Challenge IV – QNX 1.2 | Fun with virtualization](https://virtuallyfun.com/wordpress/2020/10/13/virtualization-challenge-iv-qnx-1-2/)**