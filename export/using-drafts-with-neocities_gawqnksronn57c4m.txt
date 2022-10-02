# Using Drafts with NeoCities

![DraftsxNeoCities](https://user-images.githubusercontent.com/43663476/152070046-41f84855-408d-44c2-bfaa-8b038331d9a6.png)

## A Drafts Action Group for interacting with WebDAV-enabled sites.

<!--more-->

<audio controls>
  <source src="https://davidblue.wtf/audio/draftsandneocities.mp3">
</audio>

Thanks to recent learning, I have managed to manifest one of my alltime fantasy integrations: I have tied Drafts and NeoCities together directly via [**my NeoCities Action Group**](https://actions.getdrafts.com/g/1uF), which uses [Drafts' native WebDAV support](https://docs.getdrafts.com/docs/actions/steps/services#webdav) to (technically) interact with any website based on the protocol. I created it largely to interact with NeoCities over iOS, but frankly I was already doing so more effectively than the Action Group will ever offer with the iOS app [Koder](https://apps.apple.com/us/app/koder-code-editor/id1447489375). It’s odd and a bit out of support, but incredibly useful and supported all the way back to iOS 9. Unfortunately, many of its functions - like deleting remote files, for instance - will result in a crash on modern devices. Also unfortunate - I’m afraid my Action Group doesn’t offer solutions to these problems. On iOS, it’s limited in function to pushing files to your WebDAV server and then opening them in a web browser. 

![NeoCitiesActionGroup](https://user-images.githubusercontent.com/43663476/152169590-518d1043-c02b-49a1-9f19-76699362ab96.png)

It wasn't as simple as HTML encoding the [draft] content with percentage signs, either. In order to produce [satisfactory results](https://davidblue.wtf/drafts/A350D578-1CFA-4B5A-8655-74F6B3AD72AE.html), I had to wrap every output in a very custom HTML template which I would very much encourage you to personalize before using (considering especially that it includes my personalized footer links and [colors](http://bilge.world/colophon).) You can view that template in full [here](https://davidblue.wtf/drafts/8700B562-8716-489A-B554-641549B6B3E5.html). To be honest, I can’t quite recall where I found the original, but it was probably either included with a native Drafts action or found among [Stephen Millard’s TAD library](https://www.thoughtasylum.com/tadpole).

![toDraft-UUID](https://user-images.githubusercontent.com/43663476/153755878-5b40147a-040b-4e8f-83ae-ce187d40ec0d.png)

The most reliable means of identifying, pushing, and retrieving a draft from a WebDAV site (that I found, anyway,) is by using its [Universally unique identifier](https://en.m.wikipedia.org/wiki/Universally_unique_identifier) (UUID) in its pathname. An apt example: [the draft I’m currently whittling on](https://davidblue.wtf/drafts/7247282E-340B-4890-A2F7-0481AF31321E.html), enumerated `7247282E-340B-4890-A2F7-0481AF31321E`. The action above - [Draft to /drafts as UUID.html](https://actions.getdrafts.com/a/1ve) - will push the contents of your current draft to /drafts/`the Draft’s UUID`.html. (That's how I created the example.) 

![NeoCitiesActionGroup-Viewedonmacos](https://user-images.githubusercontent.com/43663476/153760436-80095f77-6d9a-4325-8b09-e871bb812bb2.png)

I've done my best to color code the actions based on the potential "severity" of their result, but the way they display will depend almost entirely on which particular [Drafts theme](https://actions.getdrafts.com/theme_definitions?order=updated) you're using at the moment. Nevertheless, blue/green indicate the "safest" actions - like the ones that simply [open a link to a draft you've already pushed](https://actions.getdrafts.com/a/1vc) - and yellow/orange/red actions involve [pushing/manipulating files at the root of your site](https://actions.getdrafts.com/a/1v9).

Below is the full documentation of each of the actions (and the separators, even,) including individual install links, though I would very much recommend you install [the whole bit](https://actions.getdrafts.com/g/1uF). You'll need to edit each action and replace `davidblue.wtf` with your own URL(s) unless you'd like to try and attempt my absolutely gargantuan NeoCities password.

## NeoCities Action Group

### Root
**Type:** Separator
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 69B625EC-D9E2-41B7-9767-3532666E7C97  
**Description:**  



### [Push Draft to Root as HTML](https://actions.getdrafts.com/a/1v9)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 383-keyhole  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 81C89DC8-F26E-4644-87D7-BF454B345C24  
**Description:**  
Push the current draft to the /drafts directory as an HTML file by the draft’s `safe_title`.


### [Draft to Root as UUID.html](https://actions.getdrafts.com/a/1v0)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** binary  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** ABAA6A02-806F-4B45-BEA6-E9D5F8D32236  
**Description:**  
Push the current draft to the root directory as an HTML file titled by its UUID.


### [Draft to Root as Text Timestamp](https://actions.getdrafts.com/a/1va)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** alarm  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** EFF08ADA-81B6-49C3-B132-5DB477A95685  
**Description:**  
Push the current draft to the root directory as a .txt file titled by timestamp.


### [Draft to /{title} as index.html](https://actions.getdrafts.com/a/1vb)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** indent  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 15401CFC-114E-429C-B747-054E19C46911  
**Description:**  
Push the current draft to /NeoCities as index.html


### [Open /{title}](https://actions.getdrafts.com/a/1vc)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** idea  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 34630C90-6180-4394-A296-C2A5018DFEFB  
**Description:**  
Open /drafts/[Current Draft UUID].html.


### /path
**Type:** Separator
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 6F0BE49F-3B6F-49AF-ABA7-04BA7F437C1A  
**Description:**  


### [Push Draft to /drafts as HTML](https://actions.getdrafts.com/a/1vd)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 383-keyhole  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 34A59A1C-95A8-42A9-9C23-677E9731EFC8  
**Description:**  
Push the current draft to the /drafts directory as an HTML file by the draft’s `safe_title`.


### [Draft to /drafts as UUID.html](https://actions.getdrafts.com/a/1ve)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** binary  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 9C9FCDA8-687C-475A-8213-A8185CEFEE4D  
**Description:**  
Push the current draft to the /drafts directory as an HTML file titled by its UUID.


### [Open pushed /drafts file by UUID.](https://actions.getdrafts.com/a/1vf)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** idea  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** BADE45C1-AEC4-46A6-B4BE-7B88B2357C04  
**Description:**  
Open /drafts/[Current Draft UUID].html.


### [Draft to /drafts/{title} as index.html](https://actions.getdrafts.com/a/1vg)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** indent  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 5555699A-B3A6-432D-9A20-ECA78F6A5D88  
**Description:**  
Push the current draft to drafts/NeoCities as index.html


### [Open /drafts/{title}](https://actions.getdrafts.com/a/1vh)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** idea  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 1E5CB9D6-B8FE-4934-8AEC-E795A651C45A  
**Description:**  
Open /drafts/{title}


### [Draft to Specified Path as index.html](https://actions.getdrafts.com/a/1vi)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** signs-alt  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** A7D5BE00-36D3-4E08-9058-7923571189AA  
**Description:**  
Push Draft to specified directory as index.html.

/[input]/index.html


### Misc
**Type:** Separator
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 06296787-B9EE-4759-9B9C-5F994CAA894A  
**Description:**  


### [Push clipboard .txt to clipboard/timestamp](https://actions.getdrafts.com/a/1vj)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-content  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 98AF9E4B-1D48-4F95-8D2D-C879FE16BE40  
**Description:**  
Push contents of the clipboard to the /clipboard directory as a .txt file.


### [Open NeoCities Workspace](https://actions.getdrafts.com/a/1vk)
**Type:** Action  
**Keyboard Shortcut:** ⇧⌃N  
**Icon:** cat-face  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 4B8E95CE-F6A3-4F53-88CB-B01C8398A990  
**Description:**  
Open workspace entitled “NeoCities.”


### [NeoCities list / (macOS-Only)](https://actions.getdrafts.com/a/1vl)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** directions-merge  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 898038F4-E5E4-4BDA-B15A-D2ED2D388D82  
**Description:**  
Calls a shortcut entitled “NeoCitiesRoot” with a `Run Shell Script` action containing the following:

`neocities list /`

Can only be run on macOS and requires the NeoCities CLI.

#software #configuration #automation