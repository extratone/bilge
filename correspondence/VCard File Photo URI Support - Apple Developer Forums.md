# "VCard File Photo URI Support - Apple Developer Forums" 

I love how Apple products will open up a VCF File in the Contacts App and import nearly all of the information successfully.

However at the moment, the only format accepted for the PHOTO field is Base64.

This can make for much larger VCF Files when the VCard Specification also includes an option for a Photo URI, allowing the data to be stored elsewhere and retrieved on opening of the VCard.

It would be awesome if Apple Devices could recognize and retrieve Photos located at the VCF File's specified PHOTO URI Location to allow for more compact VCF files to be distributed in various formats.

Here's an example of a VCard who's PHOTO option specifies a remote URI for the image

BEGIN:VCARD

VERSION:3.0

N:Gump;Forrest;;Mr.;

FN:Forrest Gump

ORG:Bubba Gump Shrimp Co.

TITLE:Shrimp Man

PHOTO;TYPE=JPEG;VALUE=URI:<https://upload.wikimedia.org/wikipedia/commons/8/87/My_Dog_%2861220578%29.jpeg>

TEL;TYPE=WORK,VOICE:[(111) 555-1212](tel:\(111\) 555-1212)

TEL;TYPE=HOME,VOICE:[(404) 555-1212](tel:\(404\) 555-1212)

ADR;TYPE=WORK,PREF:;;100 Waters Edge;Baytown;LA;30314;United States of America

LABEL;TYPE=WORK,PREF:100 Waters Edge\nBaytown\, LA 30314\nUnited States of America

ADR;TYPE=HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America

LABEL;TYPE=HOME:42 Plantation St.\nBaytown\, LA 30314\nUnited States of America

EMAIL:[forrestgump@example.com](mailto:forrestgump@example.com)

REV:2008-04-24T19:52:43Z

END:VCARD

Thank you!

------

> Yes! This would be helpful as people want to make these cards have more human centered design. Bringing this feature will improve VCard experience.

-Posted 1 year ago by [vgardiner21](https://developer.apple.com/forums/profile/vgardiner21)

> Any changes that we know about? I'm running into this problem now myself.
 
-Posted 8 months ago by [bthomas0144](https://developer.apple.com/forums/profile/bthomas0144)

***

Forgive me if this is too editorialized for this environment but from my perspective, the urgency of this issue is growing exponentially as the images that must be stored entirely in Base64 inline with the entirety of the metadata also grow out of quality expectations. I have been a firsthand witness to the sort of chaos caused by syncing any substantial amount of these files over iCloud in a migratory context. Even just a frank, user-facing notice of warning regarding risk/reward of making a point to add a profile image to every single new contact would resolve a huge amount of the general confusion resulting from the sort of disruptions %%this can cause.


-[Mon, 01 Nov 2021 22:58:03](https://developer.apple.com/forums/thread/132554?answerId=693470022#693470022) by extratone


-"[VCard File Photo URI Support | Apple Developer Forums](https://developer.apple.com/forums/thread/13%%2554?login=true&page=1#693470022)"