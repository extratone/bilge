# Keyboard Shortcuts Bug Feedback Report
Feb 4, 2021 at 13:40
Note: this issue has occurred with Full Keyboard Access turned ~OFF~.
During the course of normal usage in Safari, Bear, Drafts, and Tweetbot, I have experienced four instances now (seemingly untriggered,) where keyboard shortcuts have ceased working. (Example shortcuts: ⌘ + Up and Down arrows, Unmodified Up and Down arrows to scroll, ⌘ + [ and ], ⌘+L. I can list more examples if it’d be useful.)
I have tried toggling the handset’s Bluetooth function on/off both in the Command Center and in Settings with no effect. Keyboard reconnects but the shortcuts are still unresponsive. The same goes for switching the keyboard itself on and off. The only solution appears to be rebooting the handset.
At this time, I don’t know what causes this issue. It’s happened seemingly at random.
- - - -
Feb 4, 2021 at 23:56
The issue occurred again just a few minutes ago, so I searched out and installed the Bluetooth Logging Profile from the Developer website and (apparently) successfully triggered a syslog using the [both volume buttons + side button] command, though **I DID NOT REBOOT THE DEVICE** between installing the profile and triggering the syslog because it would have corrected the issue before I could log it. 
I have attached both the syslog file and a short screen recording (including my audio commentary) of the shortcuts not working in Safari. If it’s important, I believe the device was still capturing this log while I was recording this screen recording.
<a href='IMG_1618.MP4'>IMG_1618.MP4</a>
<a href='sysdiagnose_2021.02.04_23-36-44-0600_iPhone-OS_iPhone_18D52.tar.gz'>sysdiagnose_2021.02.04_23-36-44-0600_iPhone-OS_iPhone_18D52.tar.gz</a>