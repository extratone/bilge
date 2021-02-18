# iSH Wiki
The packages in Alpine Linux repositories are more updated the iSH's own repositories and have packages whose size > 512 MB as well. To use it to replace iSH's own repositories, run:

```sh
grep -v "file:///ish/apk/" /etc/apk/repositories | dd of=/etc/apk/repositories bs=4194304
echo https://dl-cdn.alpinelinux.org/alpine/v3.12/main >> /etc/apk/repositories
echo https://dl-cdn.alpinelinux.org/alpine/v3.12/community >> /etc/apk/repositories
```

Note : The reason why iSH has it's own repositories is so that the app is entirely self-contained so that iSH with `apk` can pass app review. The repositories is a pseudo `apk` filesystem mounted on /ish/apk that when read, will actually download from App Store as on-demand resources. It also means that Apple can review all packages in iSH's repositories.

iSH 1.1 includes the [APK package manager](https://wiki.alpinelinux.org/wiki/Alpine_Linux_package_management). To keep the app self contained while also not including gigabytes of packages, files are downloaded from the App Store as [on-demand resources](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/On_Demand_Resources_Guide).

If you updated from a previous version, you won't have the iSH-provided APK, since enabling it is a potentially destructive action (overwriting /etc/apk/repositories). To enable it manually, run this command after installing the 1.1 update:

```
mkdir -p /ish/apk && printf 'file:///ish/apk/main\nfile:///ish/apk/community\n' > /etc/apk/repositories && mount -t apk apk /ish/apk && tar -xf /ish/apk/main/x86/apk-tools-static-2.10.5-r1.apk -C / && apk.static add apk-tools && rm /sbin/apk.static && apk upgrade
```

If this fails with `mkdir: can't create directory '/ish/apk': Operation not permitted`, run this slightly different command:

```
printf 'file:///ish/apk/main\nfile:///ish/apk/community\n' > /etc/apk/repositories && tar -xf /ish/apk/main/x86/apk-tools-static-2.10.5-r1.apk -C / && apk.static add apk-tools && rm /sbin/apk.static && apk upgrade
```

Alternatively, if you have no important data, you may delete and reinstall the app to use the new default filesystem.

Starting from this build, the default iSH filesystem reserves the directory /ish for its own internal bookkeeping. A “default” filesystem is identified by the existence of a directory at /ish. The command above will create this directory. Current uses for this directory include updating the version file to match the build of iSH that it was opened with and mounting a synthetic filesystem to provide the ODRs necessary for the built-in APK. If you don't want this, run `umount /ish/apk && rm -rf /ish`.

If you run into any issues (which is not unlikely as we barely tested this), please contact us.

## Known issues

* We forgot to include the community repository in this version. This is fixed in 1.1.1 (build 88). Workaround: `echo 'file:///ish/apk/community' >> /etc/apk/repositories`
* If you already have a /ish directory, iSH will "take it over" by creating /ish/version. We realize this may cause problems for people who have created and are using /ish for other reasons. The next update will only reserve it for internal use if /ish/version exists. Workaround: `umount /ish/apk`, `rm /ish/version`, rename the directory.
* Resizing the terminal (e.g. hiding the keyboard, rotating the screen) will cancel any ongoing package downloads. We will fix this in the next update. Workaround: don't resize the terminal.

## Frequently Asked Questions

### Q: My favorite program doesn’t work!
**A:** That’s not a question, but this is not surprising. Much of the emulation is still not finished, and many programs *will* fail. Do not hesitate to create [an issue](https://github.com/tbodt/ish/issues/new) if the specific program is not already on the [to-do list](https://github.com/tbodt/ish/projects/7), as it will be brought to the attention of the contributors, and they will (eventually) make it work. You can also check out [this page](https://github.com/tbodt/ish/wiki/What-works%3F) on the wiki where users actively test common programs.

### Q: When is the next TestFlight build coming out?
**A:** Sooner than it took for build 32 to come out. New builds are more frequent, and the app will be updated when something new has been added or fixed.

### Q: Is iSH 32-bit or 64-bit?
**A:** The app itself is a 64-bit ARM binary so that it can run on modern versions of iOS. iSH emulates x86_32 and as such can only run software compiled for this platform (specifically, it cannot currently run 64-bit ELF executables).

### Q: Why does iSH not emulate ARM or some other architecture?
**A:** Mostly because x86 was what [@tbodt](https://github.com/tbodt) was comfortable with at the time. Using x86 also has the added benefit of letting us access to the rich set of software that’s already been built for this platform. Performance-wise the choice of architecture is not all that important, since the code is being emulated anyways (that is, using ARM wouldn’t actually help much).

### Q: Why does iSH emulate at all? Can't it use a JIT compiler, or virtualization?
**A:** iOS devices lack support for hardware virtualization, and even if such a thing did exist it would need to be exposed to applications before it could be used. Generating code on the fly, which is required for JIT compilation, is not intended for use by third-party applications and such a technique requires entitlements that cannot be used when uploading to App Store Connect (as is necessary for distribution via TestFlight).

### Q: Why is iSH on TestFlight and not on the App Store? I’m scared that Apple will find this in violation of the App Store Guidelines; will it ever be on the App Store?
**A:** ~~We really have no idea. iSH is currently in beta (hence the use of TestFlight) and Apple has continued to approve the app for this, but we have not tried to submit the app for full App Store review and cannot say what would happen if we did.~~ iSH is now [available on the App Store](https://apps.apple.com/us/app/ish-shell/id1436902243)!

### Q: I lost access to the TestFlight?
**A:** That might be because we hit the limit of testers, at 10,000, so we did some house cleaning and removed testers who have either been inactive, or haven't updated. If need be [you can join the TestFlight again.](https://testflight.apple.com/join/97i7KM8O)

### Q: Why am I getting apk not found?
**A:** App Store restrictions, however, you can [install it](https://github.com/ish-app/ish/wiki/Installing-apk-on-the-App-Store-Version).

### Q: How do you know what an instruction does?
**A:** Generally we look [here](https://www.felixcloutier.com/x86/).

1. Open the Files app
2. Click Edit in the top-right corner![](iSH%20Wiki/71757349-c711fa80-2e5a-11ea-8003-f0ebab053a71.jpeg)Arrow showing where the edit button is
3. Enable the toggle next to iSH
![](iSH%20Wiki/71757350-c711fa80-2e5a-11ea-90c6-d30dd77821f9.jpeg)Arrow pointing to toggle next to iSH
You can now see the files inside iSH from the app

## Terminal
Scrolling the terminal is possible, just swipe up and down anywhere in the main view. For scrolling your history, use the arrow key in the custom [keyboard addition](https://github.com/tbodt/ish/wiki/User-Interface#custom-keyboard).

If you hide the keyboard, you can make it re-appear by tapping anywhere on the screen.

## Custom Keyboard
iSH comes with a custom keyboard addition.
At the top of the keyboard you'll find an extra set of keys.
It helps with navigating in the terminal, and contains useful modifier keys.

Here's what they do:

Navigating with the arrow key is simple! Press the key and slide your finger in the direction you want. The key will repeat.

## Settings

## Getting started with the iSH app itself
If you do not want to compile the project from source, you can join the [TestFlight beta program](https://testflight.apple.com/join/97i7KM8O)! It's free and gives you an instant download of the app.

## In iSH
When you have iSH on your device, you can open it. You'll be greeted with the terminal. Here are some important tips:
* iSH uses the Alpine Package Manager, `apk`. You will have to run `apk update` to fetch the Alpine repository list.
* When Alpine is up-to-date, you can search for a program with `apk search <name>` and install it with `apk add <name>`.
* Above the keyboard you can see the Accessory View, and it contains crucial buttons. Starting from the left, the buttons are `tab`, `control`, `escape`, `arrow keys`, `settings` and `hiding the keyboard` (which, was formerly more formally known as `black down pointed triangle`). These modified keys will help you navigate around.

## Questions
Some questions may be answered on the [FAQ page](https://github.com/tbodt/ish/wiki/FAQ). If the question isn't mentioned or you want to directly ask the developers a question, feel free to [join the Discord](https://discord.gg/SndDh5y) or [create an issue](https://github.com/tbodt/ish/issues/new).

As said [here](https://github.com/tbodt/ish/wiki/FAQ#q-x-does-not-work) many programs do fail, so here is a list of programs known to be working (or not).

If you add a new test for a package, please add a line (same if package was already tested). Feel free to update the device tested if the build is newer.

| Package name | Is working? | Notes | iSH version number |
|:-|:-|:-|:-|
| `grep`, `head`, `cut`, `wc` |Yes||33|
| `tput` |Yes||33|
| `irssi` |Yes|| 38 |
| `ifconfig` |No| `ioctl 0x8912 failed: Invalid argument` | 33 |
| `ip` | No | `ip: socket(AF_NETLINK,3,0): Invalid argument` | 33 |
| `weechat` | Yes ||53|
| `bash` | Yes || 33 |
| `zsh` | Yes | | 48 |
| `nano` | Yes ||33|
| `nvim` | Yes | |41|
| `vim` | Yes ||33|
| `vi` | Yes ||33|
| `fish` | Yes ||45|
| `neofetch` | Yes ||52|
| `screenfetch` | No | */proc/cpuinfo: No such file or directory* |33|
| `node` | Yes || 73 |
| `curl` | Yes | HTTPS too |33|
| `wget` | Yes | HTTPS too |33|
| `python3` | Yes ||33|
| `youtube-dl` | Yes | Very slow to start |35|
| `cmus` | No | Bad system call |52|
| `ffmpeg` | Yes | |35|
| `emacs` | Yes |works recursively in `M-x term` !|36|
| `openssh` (client)| Yes | |31|
| `openssh` (server)| Yes | Follow the [instructions on the wiki](Running-an-SSH-server) |45|
| `openssh` (server)| No | tested on Ubuntu 18.04.5 `illegal instruction at 0xf79f981d: 0f de d8 66 0f de e2 66 `| 74 |
| `resolvconf` | Yes | Tested on Ubuntu 18.04.5 | 74 |
| `ps` | Yes ||34|
| `ruby` | Yes ||34|
| `irb` | Yes ||35|
| `gem` | Yes ||38|
| `go` | Yes | |67|
| `mate-session`| No | Bad system call |37|
| `tmux` | Yes ||53|
| `screen` | Yes |Detaches and reattaches!|53|
| `figlet` | Yes | |40|
| `uptime` | Yes | |40|
| `links` | Yes |  |40|
| `lynx` | Yes ||40|
| `gdb` | No | Segfault, socketcall 16 |40|
| `w3m` | Yes| Quits with `GC Warning: Couldn't read /proc/stat` |40|
|`nmap`| No | Assertion failed | 40|
|`&`, `bg`, `fg`, `jobs`|Yes||44|
|`mc`| Yes | F-keys don't work |48|
|`ed`| Yes | |52|
|`git`| Yes | |53|
|`mosh`| Yes | |54|
|`gcc `| Yes | |55|
|`gawk`| Yes | |55|
|`clang`| Yes | |55|
|`arp`| No | can't open '/proc/net/arp': No such file or directory | 73 |
|`php`| Yes | |65|
|`php (extensions)`| Yes | |65|
|`stunnel3`| Yes | perl needs to be installed |65|
|`perl`| Yes | |65|
|`openssl`| Yes | Even signing certificates work perfectly fine |65|
|`dillo`| Partially working | Follow the [instructions ](https://github.com/ish-app/ish/wiki/Running-a-VNC-Server) to install VNC server. Requires fonts-noto to be installed. Some websites don’t work |67|
|`dpkg`| No | Illegal Instruction  |73|
|`wine`| No | Illegal Instruction when trying to run any program | 73 |
|`R`| Yes | For installing CRAN packages follow the [instructions on the wiki](Installing-R-and-any-package-from-the-CRAN) | 73 |
|`lftp`| Yes | | 73 |
|`sshfs`| No | fuse: device not found, try 'modprobe fuse' first | 74 |
|`apt`,`apt-*`| No | Illegal instruction | 74 |
|`plistutil` | Yes | | 74 |
|`img4tool` | Yes | | 74 |
|`brew` (tigerbrew) | No | `Error: Cannot find a vendored version of curl for your i686 processor on Linuxbrew! Error: Failed to install vendor Curl. `| 74 |
|`systemd`| No | | 74|
|`plasma-desktop`| No | Illegal Instruction| 74 |
|`sddm`| No | Illegal Instruction| 74 |
|`init` (busybox) | Yes | | 74 |
|`dumb-init` | Yes | | 74 |
|`openrc`| Yes | both the openrc command and init system works | 74 |
|`runit`| No | | 74 |
|`dpkg` (busybox) | Yes | compile with -mtune=i386 | 74 |
|`lighttpd` | No | `(stat_cache.c.601) server.stat-cache-engine can be one of "disable", "simple", but not: fam` | 76 |
|`jq`| Yes | | 76 |
|`nautilus`| Yes | Will illegal instruction after first use, need to delete configuration. | 76 |
|`gnome-calculator`| Yes | Will illegal instruction after first use, need to delete configuration. | 76 |
|`dig`| No | Runtime check fails but you can use `drill` as a drop-in replacement | 1.0.1 |
|`drill`| Yes | | 1.0.1 |
|`wptc-track`| Yes | | 78 |
|`ddate` | Yes | | 1.0.1 |
|`metasploit-framework` | Yes | launch with `msfconsole -n` | 78 |

Testers:
jusdepatate, Mnpn, elchris414, JaquesBoum, wjid, DiscordDigital, Linux, assfugil, ReedSan

## Test Requests
If you want a specific package to be tested, please add it here including special use cases you are interested in. This makes it easier to test meaningful things.

| Package name  | What to test / Note        |
| :-------------|:---------------------------|
| `example`     | ...   |
| `docker-ce`   | For running webapps |
| `code-server`   | To run vs code in browser |
| `ghc`         | Haskell file compiling     |