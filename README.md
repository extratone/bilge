![Screenshot](https://github.com/extratone/bilge/blob/main/Captures/Bilge%20Capture%202020-11-08.png)
# Bilge (Writeas Blog)
## Documentation for my blog, [bilge.world](https://bilge.world).
I proudly use [Write.as](https://write.as) as my blog's CMS. I am relatively new to Git and GitHub, but it occurred to me that a repository would be a great place to track technical changes and even versions/revisions of drafts.

***

![Writeas Customization](https://i.snap.as/xpwZqmy4.png)

# Installation (Bilge Theme)

To "install" my theme on your own Writeas blog, copy and paste the contents of [Custom CSS.css](https://github.com/extratone/bilge/blob/main/Custom%20CSS.css) and [Custom Javascript.js](https://github.com/extratone/bilge/blob/main/Custom%20Javascript.js) into the respective "Custom CSS" and "Custom Javascript" fields in your blog's customization menu. 

See: "[Customizing Writeas](https://guides.write.as/customizing/)"

***

# [Colophon](https://bilge.world/colophon)

*The Psalms* is proudly hosted by [Write.as](http://write.as/about) - a new sort of blogging content management system built atop [Markdown](https://daringfireball.net/projects/markdown/) and maintained by a company which [explicitly shares](https://write.as/principles) my commitment to a better, Open web. 

A somewhat-outdated version of this site's theme is [listed among others](https://write.as/themes/bilge) in Writeas' official themes list. The full, up-to-date CSS and JS can be found below and on in [this GitHub repository](https://github.com/extratone/bilge), which I created in November, 2020 as an experiment in using Git to track editorial changes. (*That means you can see [current in-progress drafts](https://github.com/extratone/bilge/tree/main/Drafts)!*)

- Download the entirety of this blog in EPUB format **[here](http://bilge.world/.epub)**.
- Subscribe to this blog's RSS feed **[here](https://bilge.world/feed/)**.
- This blog is federated at **@b@bilge.world**.

## Typography

**Body Text**: [Adobe Caslon Pro](https://fonts.adobe.com/fonts/adobe-caslon)

**Nav/Headers/Other**: [Proxima Nova](https://fonts.adobe.com/fonts/proxima-nova) & Variations

## Colors

* [Expired Sour Cream](https://colornames.org/color/fff4e6) 
* [David Blue](https://colornames.org/color/00006b) 
* [Red](https://colornames.org/color/ff0000)
* [Alarmed Suburbanite](https://colornames.org/color/f43f32)

### CSS

```css
/* Written in April 2020 by David Blue for bilge.world.

Full, up-to-date source code available at https://github.com/extratone/bilge/

Version 2.4 (Caston Bilge!)

   To the extent possible under law, the author(s) have dedicated all
   copyright and related and neighboring rights to this software to the
   public domain worldwide. This software is distributed without any
   warranty.

   You should have received a copy of the CC0 Public Domain Dedication
   along with this software. If not, see
   http://creativecommons.org/publicdomain/zero/1.0

   I am not a web designer or coder. This code is messy. Hope you enjoy.
   Open to any suggestions.

*/

@import url('https://use.typekit.net/kst2rrh.css');

body {
  font-family: adobe-caslon-pro, serif !important;
  font-weight: 400;
  font-style: normal;
  background-color: #FFF4E6;}
/* old background-color: #f2f2f2 */

#blog-title a {
    font-family: proxima-nova-condensed, sans-serif; font-weight: 900;    
    font-style: normal;
    /* font-style:bold !important; */
    color: #00006b;
}

header nav a {
  font-family: proxima-nova-condensed, sans-serif !important;
  font-weight: 900;
  font-size: 1.2em;
}

header p.description {
   /* font-style: italic; */
    font-family: proxima-nova-condensed, sans-serif !important;
    font-weight: 700;
    line-height: 200% !important;
    color: #00006b !important;
    font-size: 1em;
    margin-left: inherit;
    margin-right: inherit;
}

body#collection header {
   margin-bottom: 1em !important;
}


header nav a {
    color: #00006b;
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 900;
    /* margin-bottom: 1em; */
}

body, article {
    font-family: adobe-caslon-pro, serif !important;
    font-weight: 400;
    line-height: 155%;
    font-size: 1.1em !important;
    color: #000000;
    /* margin-top:1rem !important; */
}


body, article a:link {
    color: #00006b;
}

body, article a:visited {
    color: #F43B28;
 }

 h1 {
     color:#00006b !important;
     font-family: proxima-nova-condensed, sans-serif;
     font-weight: 900;
     font-size: 2em !important;
 }

h2 {
    color:#00006b !important;
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 700;
    font-size: 1.4em !important;
}

h3 {
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 400;
    font-size: 1.15em !important;
}

h4 {
    font-family: proxima-nova-condensed, sans-serif;
    font-size: 1em !important;
}

h5 {
    font-family: proxima-nova-condensed, sans-serif;
    font-size: 1em !important;
}

h6 {
    font-family: proxima-nova-condensed, sans-serif;
    font-size: .85em !important;
}

.post-title a:visited, .post-title a:link {
    font-family: proxima-nova-condensed, sans-serif !important;
    font-weight: 900;
    color: #00006b !important;
    font-size: 1.7rem !important;
}

body#post article time.dt-published, body#subpage article time.dt-published {
  font-family: proxima-nova-condensed, sans-serif !important;
  color: #00006b !important;
  font-size: 1rem !important;
}

body footer nav {
    font-family: proxima-nova-condensed, sans-serif !important;
    color: #00006b;
}

blockquote {
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 400;
    color: #333333 !important;
    border-left: 2.5px solid #00006b !important;
}

hr{
  border: 2px solid red;
}


body footer a.home:link, body footer a.home:visited {
    color: #00006b;
}

.action {
    font-family: proxima-nova-condensed, sans-serif;
}

nav#manage ul a {
    color: #00006b;
}

nav#paging a {
    color: #00006b !important;
    font-family: proxima-nova-condensed, sans-serif !important;
}


a.bt {
   background-color:#0d0d0d !important;
   color: #00006b !important;
}

a.hashtag {
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 700;
    color: #00006b !important;
}

body#collection #wrapper time, body#subpage #wrapper time, body#post article time.dt-published, body#subpage article time.dt-published {
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 700;
    font-size: 0.95em;
    color: #00006b !important;
}


.custom-nav {
  text-align: center;
  text-transform: uppercase;
  font-family: proxima-nova-condensed, sans-serif;
  font-weight: 700;
  color: red;
}
.custom-nav a:link, .custom-nav a:visited, .custom-nav a:hover, .custom-nav a:active {
   color: #00006b;
}
.custom-nav a:hover, .custom-nav a:active {
   text-decoration: underline;
}

#subscribe-btn {
    border: 1px #FF0000;
    background: #00006b;
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 700;
    font-size: 1em;
    color: #FFF4E6;
}

#emailsub {
    font-family: proxima-nova-condensed, sans-serif !important;
    font-weight: 700;
}
```

### Javascript

```javascript
var topP = document.createElement("p");
//topP.style.textAlign = "center";
topP.innerHTML = '<hr><div class="custom-nav"><a rel="me" href="https://mastodon.social/@DavidBlue">Mastodon</a> // <a href="https://twitter.com/NeoYokel">Twitter</a> // <a href="https://discord.gg/4hdQcVd">Discord</a></div>';
var cont = document.getElementById("wrapper");
if (cont !== null) {
    // Add to blog index and tag pages
    cont.appendChild(topP);
} else {
    // Add to individual blog post page
    cont = document.getElementById("post-body");
    cont.insertAdjacentHTML("afterend", topP.outerHTML);
}

// src: https://platform.twitter.com/widgets.js

// src: https://hypothes.is/embed.js

window.hypothesisConfig = function () {
  return {
    "openSidebar": false, 
    "theme": "clean",
    branding: {
      appBackgroundColor: '#f7ff85',
      ctaBackgroundColor: 'rgba(3, 11, 16, 1)',
      ctaTextColor: '#00006b',
      selectionFontFamily: 'Georgia, serif'
    }
  };
};
```