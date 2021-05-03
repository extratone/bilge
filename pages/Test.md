# Test

# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

<u>This is underlined text</u>

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`

+ Sub-lists are made by indenting 2 spaces:

  - Marker character change forces new list start:

    * Ac tristique libero volutpat at

    + Facilisis in pretium nisl aliquet

    - Nulla volutpat aliquam velit

+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
58. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
code {
    /* background-color:#f7ff85 !important; */
    /* border: 1px solid #da2573 !important;
    border-radius: 1px !important; */
    font-size: 0.85em !important;
    color: #1c0021 !important;
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 400;
    /* padding: 0px 0px 0px 0px !important; */
}

body #post pre, body#collection pre, body#post pre, body#subpage pre {
    background: #FFFdeb; !important;
    border: 1px solid #da2573 !important;
    border-radius: 1px !important;
    font-size: 0.85em !important;
    color: #1c0021 !important;
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 400;
    /* padding: 0px 0px 0px 0px !important; */
}
```

Syntax highlighting

``` css
code {
    /* background-color:#f7ff85 !important; */
    /* border: 1px solid #da2573 !important;
    border-radius: 1px !important; */
    font-size: 0.85em !important;
    color: #1c0021 !important;
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 400;
    /* padding: 0px 0px 0px 0px !important; */
}

body #post pre, body#collection pre, body#post pre, body#subpage pre {
    background: #FFFdeb; !important;
    border: 1px solid #da2573 !important;
    border-radius: 1px !important;
    font-size: 0.85em !important;
    color: #1c0021 !important;
    font-family: proxima-nova-condensed, sans-serif;
    font-weight: 400;
    /* padding: 0px 0px 0px 0px !important; */
}
```


``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description                                                  |
| ------ | ------------------------------------------------------------ |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files.                         |

Right aligned columns

| Option |                                                  Description |
| -----: | -----------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
|    ext |                         extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Extratone Radio](https://i.snap.as/lBCNqyG.png)

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://i.snap.as/kT0kagG.png  "Bilge Masthead"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

This is some text.[^1] This is some more text in a different sentence.

This is some text anticipating a footnote[^2] in the middle of the fucking sentence.

*/ Footnote 1 link[^first]. */

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }
    
    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::

[1] This is a reference to some text.

[2] This is some fucking text jumping out of the middle of a sentence.

---
## Rich Media Embeds
([See the documentation](https://github.com/extratone/bilge/issues/28).)

### Web Archive Embed?

Boy, will I be *absolutely chuffed* if this works at all:

<iframe src="https://archive.org/embed/drycast" width="500" height="140" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

` End `

### Spotify

Below is the raw URL to an open.spotify podcast episode link.

https://open.spotify.com/episode/65yv6gvutNjjCrF4oeQFlc

` End `


### Are.na

Below is the raw URL to an individual Arena block.

https://www.are.na/block/5507359

` End `

### Gists

Below is a Gist example posted in Raw URL form

https://gist.github.com/extratone/614effdd51bac74793ef627a1174e972

` End `

### Instagram

Below is a *single-photo* public Instagram post URL

http://instagram.com/p/CMyh12Ahhhf

` End `

### Mixcloud

Below is a raw Mixcloud URL to a medium-length stream. 

https://www.mixcloud.com/davod/тнαиkfυl-fσя-bαиdcαмρ-2018-мix/

` End `

### Last.fm

Below is a raw Last.fm URL to an individual track.

https://www.last.fm/music/Kalibration/_/A+Halting+Machine

` End `

And now to an artist(?)

https://www.last.fm/music/Kalibration

` End `

And now to a user profile.

https://www.last.fm/user/Crazyhooligin

` End `

### Imgur

https://imgur.com/gallery/GcpLylS

` End `
---

![Extratone Radio](https://i.snap.as/lBCNqyG.png)