# Colophon

*The Psalms* is proudly hosted by [Write.as](http://write.as/about) - a new sort of blogging content management system built atop [Markdown](https://daringfireball.net/projects/markdown/) and maintained by a company which [explicitly shares](https://write.as/principles) my commitment to a better, Open web. [**My theme**](https://write.as/themes/bilge) is adapted from [Anxiety](https://write.as/themes/anxiety) by Max Henderson. The full CSS can be found below.

## Colors

[Expired Sour Cream](https://colornames.org/color/fff4e6)
[David Blue](https://colornames.org/color/00006b)
[Red](https://colornames.org/color/ff0000)
[Alarmed Suburbanite](https://colornames.org/color/f43f32)

---

~~~css
/* Written in 2020 by Max Henderson.
Modified in April 2020 by David Blue for bilge.world.

Version 2.3

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

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;500;700&family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap');

body {background-color: #FFF4E6;}
/* old background-color: #f2f2f2 */

#blog-title a {
    font-family: 'IBM Plex Sans Condensed', sans-serif !important;
    /* font-style:bold !important; */
    color: #00006b;
}

header nav a {
  font-family: 'IBM Plex Sans Condensed', sans-serif !important;
  font-size: 1.2em;
}

header p.description {
   /* font-style: italic; */
    font-family: 'IBM Plex Sans Condensed', sans-serif !important;
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
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    /* margin-bottom: 1em; */
}

body, article {
    font-family: Merriweather, sans-serif !important;
    line-height: 150% !important;
    font-size: 1em !important;
    color: #0d0d0d;
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
     font-family: 'IBM Plex Sans Condensed', sans-serif;
     font-size: 2em !important;
 }

h2 {
    color:#00006b !important;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 1.4em !important;
}

h3 {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 1.15em !important;
}

h4 {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 1em !important;
}

h5 {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 1em !important;
}

h6 {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: .85em !important;
}

.post-title a:visited, .post-title a:link {
    font-family: 'IBM Plex Sans Condensed', sans-serif !important;
    color: #00006b !important;
    font-size: 1.7rem !important;
}

body#post article time.dt-published, body#subpage article time.dt-published {
  font-family: 'IBM Plex Sans Condensed', sans-serif !important;
  color: dimgray !important;
  font-size: 1rem !important;
}

body footer nav {
    color: #0d0d0d;
}

blockquote {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    color: #333333 !important;
}

hr{
  border: 2px solid red;
}


body footer a.home:link, body footer a.home:visited {
    color: #000000;
}

.action {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
}

nav#manage ul a {
    color: #0d0d0d;
}

nav#paging a {
    color: #0d0d0d !important;
    font-family: 'IBM Plex Sans Condensed', sans-serif !important;
}


a.bt {
   background-color:#0d0d0d !important;
   color: #0d0d0d !important;
}

.custom-nav {
  text-align: center;
  text-transform: uppercase;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
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
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 1em;
    color: #FFF4E6;
}
~~~