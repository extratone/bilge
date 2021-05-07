# "Rediscovering the Small Web - Neustadt.fr" | Parimal Satyal

*07-05-2021 07:23* 

> Most websites today are built like commercial products by professionals and marketers, optimised to draw the largest audience, generate engagement and 'convert'. But there is also a smaller, less-visible web designed by regular people to simply to share their interests and hobbies with the world. A web that is unpolished, often quirky but often also fun, creative and interesting.
Most websites today are built like commercial products by professionals and marketers, optimised to draw the largest audience, generate engagement and 'convert'. But there is also a smaller, less-visible web designed by regular people to simply to share their interests and hobbies with the world. A web that is unpolished, often quirky but often also fun, creative and interesting.

\- [Parimal Satyal](https://neustadt.fr/index.html), 25 May 2020

Every website redesign begins with inspiration.

For this one, there were two: Anders' [clean, readable website](https://anders.unix.se/), which inspired the homepage, and [Marijn's site](https://marijn.uk/index.html), which reminded me just how *fun* the web can be. The colours, graphics, [creative navigation](https://marijn.uk/music/), [interesting ideas](https://en.wikipedia.org/wiki/Holocene_calendar)... the simple fact of clicking through the pages of someone's personal website in 2020 made me nostalgic of the web of the late 90s and early 2000s that I grew up with.

Some of you might have read my previous article, [Against an Increasingly User Hostile Web](https://neustadt.fr/essays/against-a-user-hostile-web/). In it, I argue that we are replacing an open web that connects and empowers with one that restricts and commoditises people. I talk about how the modern web of surveillance, bloat and walled gardens is at odds with the open web that I love. I was pleasantly surprised by how much the sentiment seemed to be shared by so many other people who emailed me, [wrote responses on their own blog](https://www.eduardomorais.com/stream/id/3519) and [discussed it](https://news.ycombinator.com/item?id=15611122) on [online forums](https://lobste.rs/s/5bi46y/against_increasingly_user_hostile_web). Despite being two and a half years old, that article rather disappointingly still reflects the state of the web today.

But stumbling upon Marijn’s site gave me hope. It led me down a rabbit hole of many other small websites made by people with all kinds of interests: movies, aviation, music, art, computers. It reminded me that the creative, personal, fun web I grew up with is not a thing of the past. It’s still here in 2020. You just have to know where to look.

My aim is not to convince you that everything was better in the past; it wasn't. You had trojans, malware, endless pop-ups, terrible security practices, browser incompatibility, slow Java applets. No, technically, the modern web is more secure and more usable.

This essay is my attempt to show you what the small and independent web can look like, why it’s different from the the sites that dominate web traffic today, why it's worth exploring and how easy it is for anyone to be a part of it.

This essay is somewhat long; you might find this table of contents handy:

1.  [Retro Redesign](https://neustadt.fr/essays/the-small-web/#retro-redesign)
2.  [The First Webpages](https://neustadt.fr/essays/the-small-web/#first-webpages)
3.  [Masters and Navigators](https://neustadt.fr/essays/the-small-web/#masters-navigators)
4.  [Modern Gatekeepers](https://neustadt.fr/essays/the-small-web/#modern-gatekeepers)
5.  [The Commercial Web (of Marketing)](https://neustadt.fr/essays/the-small-web/#commercial-web-of-marketing)
6.  [The Product-Oriented Website](https://neustadt.fr/essays/the-small-web/#product-oriented-website)
7.  [The Web as a Creative Space](https://neustadt.fr/essays/the-small-web/#web-as-creative-space)
8.  [Highlights: From the Past](https://neustadt.fr/essays/the-small-web/#highlights-from-the-past)
9.  [Highlights: From the Present](https://neustadt.fr/essays/the-small-web/#highlights-from-the-present)
10.  [Your Own Corner of the Web](https://neustadt.fr/essays/the-small-web/#your-own-corner)

## Retro Redesign

On my [homepage](https://neustadt.fr/), I mention that this website is “a tribute to the creative web of the 90s”. This is not simply because this website has animated gifs and a [guestbook](https://users2.smartgb.com/g/g.php?a=s&i=g26-37520-60). The *way* I built it is also inspired by how I built my earliest websites: everything is written in **plain HTML**.

No content management systems, no generators, no templates, no themes, no plugins. Just plain markup and styling, the most basic of the basic building blocks of the web.

I didn’t originally plan to do it like this. I previously [used a static site generator](https://neustadt.fr/essays/crafting-a-simple-blog-with-metalsmith) to output plain HTML and was simply working on a new design template for that. But my three-year-old node.js setup was now spewing error messages, telling me some dependencies had to be updated and that a plugin was no longer compatible. Because I'm lazy and didn't want to fix any of that, I wondered if I couldn’t just do it all manually instead and save myself the trouble.

So I did. I decided to hand-code everything in plain HTML and CSS, manually link all the pages and even hand-write the RSS feed. And to be honest, I haven’t had this much fun making a website since when I first started playing around with [Microsoft Frontpage](https://www.webdesignmuseum.org/old-software/html-editors/microsoft-frontpage-97) and [Adobe Photoshop 4.0](https://www.webdesignmuseum.org/old-software/graphic-software/adobe-photoshop-4-0) in the late 90s and early 2000s.

This approach wouldn't work for a bigger website. But for a small one like mine with about 10 total pages, it has many obvious benefits: next to no dependencies, easy to maintain, reasonably future proof, easily portable and most important of all, terribly fun to work on. I stayed up till six in the morning for two straight days working on the redesign, not because I couldn’t sleep but because I didn’t want to stop. Admittedly, about 30% of that time was spent scouring [GifCities.org](https://gifcities.org/) and the [Internet Archive](https://archive.org/web/) for animated GIFs and backgrounds. (You might notice that each page of the website has a different background, including some with [original art](https://neustadt.fr/essays/china-one-nation-how-many-languages/) by my friend).

Redesigning my website this way inspired me to scour archives of old websites for interesting relics from the early web. This in turned led me to the fun, creative websites that are actively maintained even today.

To understand what these small websites represent and why I think they are important, we need to start in the past.

## The First Webpages

The web was still in its infancy in the early 90s. You probably know the story.

It had only just been [invented by Sir Tim Berners-Lee](https://home.cern/science/computing/birth-web/short-history-web) in 1991 and released into the [public domain](https://home.cern/science/computing/birth-web/licensing-web) in 1993, making it available for free to anyone in the world to use and build on. In its very early days, it was really only accessible to the more technical crowd, much like *Gopher*, *FTP*, *Usenet* and other internet protocols at the time. It wasn't until the first easy-to-use graphical browser [Mosaic](http://www.ncsa.illinois.edu/enabling/mosaic) was released for free in 1993 that regular computer users would discover the web for the first time. Others like myself discovered it later still when the Mosaic-spinoff [Netscape Navigator](http://sillydog.org/netscape/) (the foundation of today's [Firefox](https://www.mozilla.org/en-GB/firefox/new/)) and Internet Explorer became commonplace.

It was all terribly exciting. Unlike traditional media, you could now speak back and participate. It was the first interplanetary communication system where anyone, anywhere in the world, could make a page and share their thoughts and ideas with the world. Netscape would later even include [an editor](https://www.ccsf.edu/Pub/Fac/composer.html) that let users make webpages visually, the same as using a word-processor ("WYSIWYG", as it was called back then: *what you see is what you get*). The goal was to enable anyone, even those without the technical skills, to put a page up.

But if you wanted your web page to be "on the web", where would you put it?

You needed a web host of some sort to store the pages and share a public address so other people could visit. It would ideally also be free so you could try things for fun without having to think about it too much. That's where [Geocities](https://web.archive.org/web/19980704165228/http://www20.geocities.com/join/freehp.html) came in, along with other free web hosts like [Tripod](https://web.archive.org/web/20000815052634/http://www.tripod.lycos.com/), [Fortunecity](https://web.archive.org/web/20000229235048/http://www.fortunecity.com/build/index.html) and [Freeservers](https://web.archive.org/web/20000815053429/http://www.freeservers.com/). They were perhaps the biggest catalysts to democratising the web.

![Geocities introduction page from February 1998](https://neustadt.fr/essays/the-small-web/Geocities-1998.jpg)

Geocities introduction page from February 1998, accessed via [Internet Archive](https://web.archive.org/web/19980213154923/http://www13.geocities.com:80/main/info/)

It was so simple, anyone who wanted to could create a free account and build a website to share their hobbies and ideas. And share they did! People made websites about virtually everything: music, philosophy, [art projects](https://web.archive.org/web/20011004132631/http://www.geocities.com/~intransit1/home/home_frm.html), [ASCII art](https://web.archive.org/web/20010424064639/http://www.geocities.com/spunk1111/), [candy](https://web.archive.org/web/20000815075236/http://www.pezcentral.com/pezmenu.html), and [about their lives](https://geocities.restorativland.org/Athens/Olympus/1406/main.html).

A key detail was that most people who made these websites were neither professionals nor companies; they were simply people who wanted to share their interests. Like I did back in 2001 with my [unofficial fansite for German metal band Gamma Ray](https://web.archive.org/web/20020103123131/http://www.geocities.com:80/gammarayfan):

![My Geocities-hosted Gamma Ray fansite from January 2001](https://neustadt.fr/essays/the-small-web/gammarayfansite-2001.jpg)

My Geocities-hosted Gamma Ray fansite from January 2001, accessed via [Internet Archive](https://web.archive.org/web/20020103123131/http://www.geocities.com:80/gammarayfan/)

But how would someone go about finding these pages? We didn't have Google in the early days. Other search engines like [Lycos](https://web.archive.org/web/19980214192548/http://www.lycos.com/), [Excite](https://web.archive.org/web/19970630113649/http://www06.excite.com/) and [Northern Lights](https://web.archive.org/web/19980206192654/http://www.northernlight.com/) did exist but were nowhere near as efficient as modern search engines. Finding something you were interested in was not as simple as typing a few words and getting to that information in one click.

No, the web was much more of an adventure. It was a *place* that you wandered to discover new areas, like exploring the vast open seas. A new virtual space that lead to all kinds of strange, interesting, exciting places. This is what the web was like, at least, in our collective imagination.

## Masters and Navigators

The web was a different kind of place in those early years, and we had different words to talk about it. In an article titled [Cyberspace, the old-fashioned way](https://rhizome.org/editorial/2015/nov/30/oldweb-today/), authors at the Rhizome project make a very important point:

> Today's web browsers want to be invisible, merging with the visual environment of the desktop in an effort to convince users to treat "the cloud" as just an extension of their hard drive. **In the 1990s, browser design took nearly the opposite approach, using iconography associated with travel to convey the feeling of going on a journey.** Netscape Navigator, which used a ship's helm as its logo, made a very direct link with the nautical origins of the prefix cyber-, while Internet Explorer’s logo promised to take the user around the whole globe.

![Old logos of Netscape Navigator and Internet Explorer](https://neustadt.fr/essays/the-small-web/navigator-explorer.jpg)

Old logos of Netscape Navigator and Internet Explorer

Navigation. Exploration. Browsing. Surfing. The web was akin to a virtual manifestation of physical space. We even had a word for it: *webspace*. In Geocities, this was expressed with the notion of *[neighborhoods](https://web.archive.org/web/19980704165140/http://www20.geocities.com/neighborhoods/)*, creatively-named categories like *Area51* for sci-fi, *Heartland* for families and pets, *RainForest* for the environment, *Vienna* for classical music, *CapeCanaveral* for science and mathematics.

![A partial list of neighborhoods avialable on Geocities in 1998](https://neustadt.fr/essays/the-small-web/geocities-neighbourhoods-1998.png)

Neighborhoods avialable on Geocities in 1998, accessed via [Internet Archive](https://web.archive.org/web/19980703151237/http://www11.geocities.com/neighborhoods/)

Another word that was very common back in the Geocities days that has since died out is the word "webmaster" (mostly gender-neutral, although sometimes declined to the feminine "webmistress"). The idea was that you created a *space* on the web, of which you were the *master*. You welcomed visitors (sometimes with a splash screen), guided them around by explaining what the site was about and the different spaces available to them (usually on the home page) and reminded them to leave a word on the guestbook on their way out.

But the semantics of the web of yore made sense in the context of how you *practically* interacted with it. You very rarely just came in for one specific thing and then immediately left like you might today; you usually *entered* a website and looked around. You browsed.

Which takes us back to the original question of how other *internautes* found your website in the first place. You were lucky if your small site showed up in pre-Google search engines, but even if it did, it would mean that somebody was actively looking for it. But not everybody who visited your website *was* looking for anything specific. They might simply have wanted to find other websites about a topic they were interested it.

One way of doing so was by browsing directories, like the Geocities neighbourhoods: lists of websites often arranged by categories and sub-categories. In fact, most search engines were also directories, or *portals* as some were called back then.

![In 1997, Excite was both a search engine and a directory, organised into channels.](https://neustadt.fr/essays/the-small-web/excite-channels.jpg)

In 1997, Excite was both a search engine and a directory, organised into channels, accessed via [Internet Archive](https://web.archive.org/web/19970601223506/http://www10.excite.com/)

One of the biggest ones was the [DMOZ open-directory project](https://web.archive.org/web/20010206123038/http://www.dmoz.org/about.html), based on the original Mozilla directories, whose goal it was to *"produce the most comprehensive directory of the web, by relying on a vast army of volunteer editors"*. You can still browse [a 2001 archive of the old directory](https://web.archive.org/web/20010224172816/http://www.dmoz.org/) to get a sense of how it worked.

![About DMOZ page from 2001](https://neustadt.fr/essays/the-small-web/dmoz-2000.jpg)

About DMOZ page from 2000, accessed via [Internet Archive](https://web.archive.org/web/20000408141943/http://dmoz.org/about.html)

The other way to discover new websites relied on a key feature of the web: hyperlinks. You would go to one website and find your way to many others, much like if you go to my "[Retro Stuff](https://neustadt.fr/retro-stuff)" page and follow one of the links to something interesting elsewhere on the web. This idea of linking to things *elsewhere* was particularly common; most websites had a "links" page with their own personal collection of interesting webpages.

This cross-linking was the main way I personally discovered my favourite websites, which I would then add to my bookmarks to be able to find them again later. In fact, the practice of cross-linking had an intersting cultural element: *webrings*.

![An example of a webring, about European History](https://neustadt.fr/essays/the-small-web/example-webring.jpg)

An example of a webring (about European History) from [Ray's Miscellany](http://brisray.com/web/webrings.htm)

[Webrings](http://brisray.com/web/webrings.htm) were "circular" collections of websites, often around a topic or a theme. The idea was that you could go from one website to another by clicking on the "next" or "previous" buttons usually placed on the bottom of each member's homepage. These have also largely disappeared.

## Modern Gatekeepers

Today, most of the time spent on the web is either *on* a small number of very dominant platforms like Facebook and LinkedIn, or mediated *through* them.

There is so much "content" that is constantly pushed at you as a user that very few of us actually venture out to browse and explore anymore. We simply don't need to. But these platforms thrive on "user engagement"—likes, comments, clicks and shares—and their algorithms are more likely to give visibility to content that generates this behavior. Instead of browsing, the web is for many an endless and often overwhelming stream of content and commentary picked out by algorithms based on what they think you already like and will *engage* with. It's the opposite of exploration.

When you're not *receiving* information passively and instead actually actively looking for something, you most likely have the same singular point of entry as about [87% of all web users](https://www.statista.com/statistics/216573/worldwide-market-share-of-search-engines/): Google.

Google has become the de facto gatekeeper of the web, an arbiter of what is useful and what should get visibility. Except, most websites that appear on the first page, the links that you are most likely to click on—[less than 1% of searchers click on something in the second page](https://backlinko.com/google-ctr-stats)—are designed to be there by optimising for Google's algorithms. One consequence of this is that most of the websites that people get to "organically" are created by professionals and marketers who "position" themselves on those keywords. This means that the smaller, amateur web gets hidden in the shadows of web professionals who design around specific keywords and audiences.

![Google's results for 'bartending recipes' won't take you to the small web](https://neustadt.fr/essays/the-small-web/google-bartending-recipes.jpg)

Google's results for "bartending recipes" won't take you to the small web

Not only is Google largely a monopoly in search— other search engines like Bing, DuckDuckGo and Qwant are [still far behind in adoption](https://www.statista.com/statistics/216573/worldwide-market-share-of-search-engines/)—it is also the biggest ad selling platform. Last year, it represented "31,1% of worldwide ad spending, or $103,73 billion" ([source](https://www.emarketer.com/content/global-digital-ad-spending-2019)). The power that comes from being in such a position, along with being present in almost all major websites (through their widely-used analytics platform, despite the [numerous privacy concerns](https://www.emerald.com/insight/content/doi/10.1108/OIR-02-2018-0056/full/pdf?title=protecting-privacy-on-the-web-a-study-of-https-and-google-analytics-implementation-in-academic-library-websites)) means it can actively push its own vision of the web.

And this web is quite different from the kind of "small web" crafted by webmasters of the 90s and early 2000s. Google's web has a [different set of values and vocabulary](https://web.archive.org/web/20190214003848/https://marketingplatform.google.com/about/analytics/) that come with it: personalisation, insights, engagement, conversion, performance, optimisation.

## The Commercial Web (of Marketing)

There has always been a place for commerce and marketing on the web.

[Amazon](https://www.webdesignmuseum.org/web-design-history/amazon-com-1995) was already selling books online back in 1995, [eBay](https://www.webdesignmuseum.org/web-design-history/ebay-1997) was launched in 1997 and [Dell](https://web.archive.org/web/19970605120422/http://www.dell.com/) sold over a million dollars worth of equipment by the end of the same year. By the 2000s, despite the [dot com bust](https://ideas.ted.com/an-eye-opening-look-at-the-dot-com-bubble-of-2000-and-how-it-shapes-our-lives-today/), online commerce was growing. This development was natural; the web enabled sellers to reach more distant clients without having to rely on phone orders, fax or the postal system. The commercial web co-existed and grew with the personal, amateur one. The open nature of the web meant that all kinds of websites could thrive.

But today's web is *mostly* commercial. The smaller web of individuals has neither the resources nor the will to compete for visibility and audience the way the commercial web does.

Companies and marketers understood that the web presented new opportunities to sell more and *target* users based on their online activity. They started pouring money into digital ad strategies, analysing how people used the web, what they talk about, what they search for and what they click on. Marketing companies convinced brands that you had to be online and produce content to be more relevant because that's where their customers already were. They invented words like "native advertising" and "sponsored content" (content made to look like a regular articles but are really paid advertising). Companies started pouring money into their digital strategies to understand and alter influence the behavior of internet users to their advantage.

[![Companies like Quantcast offer detailed behavioral/psychographic data on us web users, including our actions across different websites, to marketers to track and influence us](https://neustadt.fr/essays/the-small-web/quantcast.jpg)](https://www.quantcast.com/products/measure-audience-insights/)

Companies like [Quantcast](https://www.quantcast.com/products/measure-audience-insights/) offer detailed behavioral/*psychographic* data on us web users, including our actions across different websites, to marketers to track and influence us.

With its content strategy, analytics (the surveillance infrastructure that I [spoke about in my previous article](https://neustadt.fr/essays/against-a-user-hostile-web)) and search engine optimisation, the commercial web brought a completely different set of priorities: to *engage* their "audience", *convert* them and *retain* them for as long as possible.

For them, the web was just another marketing channel.

Compared to the small web, this commercial web is tactical and predatory. It can dynamically generate hundreds of pages around common search queries. It can follow web users across different websites, analyse their interactions, and use that information to target them more precisely. It also has serious resources. Just last year, companies spent [over 300 billion euros](https://www.emarketer.com/content/global-digital-ad-spending-2019) in online digital advertising, most of this money going to the same platforms and gatekeepers—Google and Facebook—that sell their ability to better target you based on the information you give them.

**What this means is that web users end up interacting and spending most of their time on the visible, predatory commercial web, while the very long tail of smaller, amateur websites remains hidden in the noise.**

## The Product-oriented Website

The design of the modern commercial web is also "sanitised": it is polished, follows conventions and is optimised for efficiency. This is one of the reasons so many websites you go to today look and feel the same. The codes of the commercial web have become so dominant that we have forgotten that the small web still exists and has a completely different priorities.

Modern web design principles are very rarely directed at regular people looking to make a website on something they are interested in. Instead, the focus is on creating websites that perform well:

*Don't use too many colours. Write short, catchy headlines. Don't let content be too long. Optimise for SEO. Produce video content, attention span is decreasing. Have a an obvious call to action. Push your newsletter. Keep important information above the fold. Don't make users think. Follow conventions.*

![An SEO person's idea of good design for better conversions](https://neustadt.fr/essays/the-small-web/neil-patel-design.jpg)

An SEO person's idea of *[Universal Web Design Principles That Improve Usability And Conversion](https://neilpatel.com/blog/web-design-conversions/)*

Modern websites are designed to direct user behavior towards certain goals: a purchase, a click, a share or a sign-up. The words, the colours, the message are tailored to these goals, much like packaging on products in the super market.

A 2008 article called by Smashing Magazine called [10 Principles Of Good Website Design](https://www.smashingmagazine.com/2008/01/10-principles-of-effective-web-design/) was the top result when I searched for "[good web design](https://startpage.com/do/metasearch.pl?query=good%20web%20design)" whilst writing this essay. There are many others, some more recent, but they all pretty much say the same thing. The author of this one even clearly begins by stating that *"\[...\] user-centric design has established as a standard approach for successful and profit-oriented web design*".

But the web is not always "profit-oriented" and it certainly does not need to be "user-centric" (and I say this as a UX consultant). If it were, there would be very little creativity and self-expression left. The rich diversity of the web would be reduced to the online equivalent of a massive, orderly, clinical shopping mall meant to drive sales. No, the web can just as well be "author-centered", hobby-centered or even be [dog-centered](https://blog.geocities.institute/archives/6551)!

It is worth remembering a website does not have to be a product; it can also be art. **The web is also a creative and cultural space that need not confine itself to the conventions defined by commercial product design and marketing**.

## The Web as a Creative Space

With the dominance of the commercial web and the normalisation of its code and techniques, it is easy for most people to think that the web is a complex machine. Most websites today are built with sophisticated content management systems, SEO and social media strategies, multiple plugins, detailed analytics and audience tracking, optimized for different breakpoints and served via a global CDN.

But the web is really a lot simpler than that. You really only need two things: a web host and HTML (and basic CSS for formatting). And you don't need to make it "user-centered"; much like the early webmasters on Geocities carving out their own corner of the web, you can express yourself any way you want. It’s the difference between product and art.

**A painter wouldn’t add more red to her painting or change the composition because market data showed that people liked it better. It’s her creative vision; some people might like it, others might not. But it is her creation, with her own rules. The question of "performance" is simply irrelevant. It's the same thing with the small web.**

If the commercial web is "industrial", you could say that the small web is "artisanal". One is not better than the other. They serve different needs and both can co-exist in an open web. It would nevertheless be a shame if we only spent time on the commercial web and never got the opportunity to experience the creativity, passion and quirkiness of the small web.

To show you what the it can look like and how different it can be from modern websites, I have collected a few examples that I think illustrate the richness of the small web.

## Highlights: From the Past

We will first look at small websites from the past and then move on to ones that are up and running today.

To be able to dig up these websites and give you access to them, I am grateful to the wonderful and important archival work done by:

-   [Internet Archive](https://archive.org/web/), which, thanks to the 439 billion web pages saved since the mid 90s, lets you travel back in time and see how a website looked in the past.
-   [Restorativland](https://restorativland.org/), a "restored visual gallery of the archived Geocities sites, sorted by neighborhood".

On to the examples.

### A Laurel & Hardy Fansite

A fan-made site from 1998 about comedy duo Stan Laurel and Oliver Norville Hardy. The author has this to say about the website:

> On this website you will find: over one hundred pictures, a small collection of sound files, the complete movie list - from the silent eara to the talkies. Ever wondered what they were singing? Go to the lyrics page and read the text. Laurel & Hardy were the stars but they couldn't have done it without the help of others. You can see who they were on the Supporting Cast page.

If you go to the [siteinfo](https://geocities.restorativland.org/Hollywood/Studio/5352/siteinfo.html) page, you’ll notice that the “why” of the website is simply “why not!!”. Why not indeed!

[![A screenshot of the home page of A Laurel and Hardy Fansite](https://neustadt.fr/essays/the-small-web/laurel-hardy-fansite.jpg)](https://geocities.restorativland.org/Hollywood/Studio/5352/index.html)

A screenshot of the home page of *A Laurel and Hardy Fansite*

![](https://neustadt.fr/essays/the-small-web/link.png) [Visit A Laurel & Hardy Fansite](https://geocities.restorativland.org/Hollywood/Studio/5352/index.html) on Restorativland

### Fractal Explorer

A complete website about fractals by Fabio Cesari, (then) a 24 year old student of computer engineering at the University of Bologna, Italy. Includes very clear explanations, image galleries and step-by-step guided tours:

> Many people have probably been fascinated by the infinite complexity and beauty of fractals. I wrote this brief tutorial to explain, in simple terms, how the Mandelbrot set and Julia sets are generated. This document provides an informal introduction to these subjects, and is only intended to be a starting point to learn more about fractals and fractal geometry.

[![A screenshot of the homepage of On to Mars!](https://neustadt.fr/essays/the-small-web/fractal-explorer.jpg)](https://web.archive.org/web/20020223163039fw_/http://www.geocities.com/fabioc/)

A screenshot of the guided tour of a Mandelbrot set in *Fractal Explorer*

![](https://neustadt.fr/essays/the-small-web/link.png) [Visit Fractal Explorer](https://web.archive.org/web/20020223163039fw_/http://www.geocities.com/fabioc/) on Internet Archive

### The National Coca-Cola Bottle Clearing House

This website is almost certainly a definitive list of every single commemorative Coca-Cola bottle since the 70s. There are some surprising entries. For example, did you know there was an 8oz (~240ml) *Dominos Pizza International Expo 1991* edition, or that such an expo existed at all? Or a 10oz (~300ml) *English Royal Wedding* one in 1982?

[![A screenshot of the homepage of The National Coca Cola Bottle Clearing House](https://neustadt.fr/essays/the-small-web/coca-cola-clearinghouse.jpg)](https://geocities.restorativland.org/Heartland/2983/)

A screenshot of the homepage of *The National Coca Cola Bottle Clearing House*

![](https://neustadt.fr/essays/the-small-web/link.png) [Visit The National Coca-Cola Bottle Clearing House](https://geocities.restorativland.org/Heartland/2983/) on Restorativland

### NetHistory

Before the Internet existed, BITNET was “*an early world leader in network communications for the research and education communities, and helped lay the groundwork for the subsequent introduction of the internet, especially outside the US*". ([LivingInternet.com](https://www.livinginternet.com/u/ui_bitnet.htm)).

This website is an “informal history of BITNET and the Internet”:

> If you're looking for a dry, formal history of the Internet, look elsewhere. The purpose of NetHistory is to give you a feeling for what it was like in the pioneering days of BITNET and the Internet. Hopefully, you will gain some perspective and come to understand the early Internet experience (although one could argue that the experience in question is a lot like sitting in front of a mainframe terminal in the middle of the night with a Twinkie-and-Jolt buzz). At worst, you should find it entertaining.

NetHistory has extensive archives of early network publications (VM/COM, NetMonth, FSFNet, DargonZine, Nutworks, The Gilding Byte among others) and “personal insights of the people who were there while BITNET and Internet history was being made”.

[![A screenshot of NetHistory's Archive page](https://neustadt.fr/essays/the-small-web/nethistory.jpg)](https://web.archive.org/web/20010516205238/http://nethistory.dumbentia.com/)

A screenshot of *NetHistory*'s Archive page

![](https://neustadt.fr/essays/the-small-web/link.png) [Visit NetHistory](https://web.archive.org/web/20010516205238/http://nethistory.dumbentia.com/) on Internet Archive

### joan stark's ASCII Art Gallery

Think text art is dull? This artist has something to tell you:

> You might not think so after visiting this website. There is much more to these low bandwidth graphics than smileys and emoticons. ASCII Art has progressed beyond being a simple computer graphics technique and has become a popular art form. You'll be amazed at what can be created by only using ASCII (American Standard Code of Information Interchange) characters. Some of the text graphics at this site are html-colorized, some are JavaScript-animated, others are simply text. All are unique, created by hand, and certainly not the same ol' boring text art that you might be expecting!

[![A screenshot of joan stark's ASCII Art Gallery](https://neustadt.fr/essays/the-small-web/joanstark-ascii.jpg)](https://web.archive.org/web/20010420182629/http://www.geocities.com/spunk1111/indexjava.htm)

A screenshot of *joan stark's ASCII Art Gallery*

![](https://neustadt.fr/essays/the-small-web/link.png) [Visit joan stark's ASCII Art Gallery](https://web.archive.org/web/20010420182629/http://www.geocities.com/spunk1111/indexjava.htm)on Internet Archive

## Highlights: From the Present

As excited as I was to find these wonderful relics, I was even more excited to learn that the small web exists today just as it did back when I was a kid. It's just less visible. Among the projects contributing to keeping the small web alive, three are particularly exciting to me:

-   [Wiby.me](https://wiby.me/) is a search engine for old-school, interesting and informative webpages, with a useful "[surprise me](https://wiby.me/surprise/)" button that takes you to a random result.
-   [Neocities.org](https://neocities.org/) is a modern web host that lets anyone create a basic website for free and be a part of a community where you can follow other webmasters.
-   [Curlie](https://curlie.org/) is "*the largest human-edited directory of the Web. It is constructed and maintained by a passionate, global community of volunteer editors*".

### Ottaviana's Kitchen

This website from 1996 is still up today and features a family's Italian recipes passed down from generation to generation:

> My Grandparents were immigrants from Italy. They came to Ellis Island, in search of the great American dream. This was where my mother was born in Newark, NJ. The recipes were passed to her from her mother, and then passed to me from mine. Since I have no children of my own, what better way to pass on these recipes but on my web page so everyone can enjoy them, and maybe start their own tradition with them. So for now, Buon Appetito.

You can read the [entire menu](http://ottavianaskitchen.com/menu.htm) and find authentic recipes to [sauces](http://ottavianaskitchen.com/sauces.htm), [soups](http://ottavianaskitchen.com/soups.htm), [risotti](http://ottavianaskitchen.com/risotto.htm), [cookies and dessert](http://ottavianaskitchen.com/cookies.htm), and much much more.

[![A screenshot of a recipe page from Ottaviana's Kitchen](https://neustadt.fr/essays/the-small-web/ottavianas-kitchen.jpg)](http://ottavianaskitchen.com/sauces.htm)

A screenshot of a recipe page from *Ottaviana's Kitchen*

![](https://neustadt.fr/essays/the-small-web/link.png) [Visit Ottaviana's Kitchen](http://ottavianaskitchen.com/intro.htm)

### Europäische Schmetterlinge

This is a German website about European butterflies created in 1998 and maintained until 2005 by Mario Maier. But it isn't just *any* old website about butterflies; this one is a near-exhaustive collection of almost all butterflies in Europe organised by genus/species, each with a description, an indication of its "flight time" and the corresponding caterpillar's plants of choice, along with photos (most taken by the author himself).

[![A screenshot of the page on Melitae didyma butterflies on Europäische Schmetterlinge](https://neustadt.fr/essays/the-small-web/europaeische-schmetterlinge.jpg)](http://www.butterflies.de/)

A screenshot of the page on *Melitae didyma* butterflies on *Europäische Schmetterlinge*

Some of the pages like [this one on *Agrodiaetus ainsae*](http://www.butterflies.de/Deutsch/ainsae.htm) seem to have more information than currently [available on Wikipedia](https://en.wikipedia.org/wiki/Polyommatus_fulgens)! I originally found the [Geocities version](https://geocities.restorativland.org/Paris/Cafe/1508/) on Restorativland and then found this version that is currently up.

![](https://neustadt.fr/essays/the-small-web/link.png) [Visit Europäische Schmetterlinge](http://www.butterflies.de/)

It looks like the same author had a larger website for *all* butterflies on Earth that was up until 2018. You can visit [an archived copy of Butterfly Corner](https://web.archive.org/web/20180421072253/http://www.butterflycorner.net/Schmetterlinge-aus-aller-Welt.1.0.html).

### Marseillaise.org

Everything you wanted to know about the French national anthem *La Marseillaise*, from Ian Patterson’s website that’s been up “in one form or another since 1996”.

> Welcome. No doubt you've come here to see what all the fuss is about on the 14th of July. I think you'll find all you want to know here. La Marseillaise is the national anthem of France, believed by many to be the most stirring of all anthems. Here you will find a transcription of its score, complete sound clips in various formats and a translation into English.

[![A screenshot of Marsaillaise.org](https://neustadt.fr/essays/the-small-web/marseillaise-org.jpg)](http://www.marseillaise.org/english/)

A screenshot of *Marsaillaise.org*

![](https://neustadt.fr/essays/the-small-web/link.png) [Visit Marseillaise.org](http://www.marseillaise.org/english/)

### The Webtender

Interested in mixing your own drinks? The Webtender, which has been online since 1995, features over 6000 recipes, a handbook with information on bar glassware, tools, measurements and ingredients, a forum, a wiki and even lets you search for recipes based on what you have in your bar!

[![A screenshot of the home page of Webtender](https://neustadt.fr/essays/the-small-web/webtender.jpg)](https://www.webtender.com/info/)

A screenshot of the home page of Webtender

> I got the idea to this database when I saw a program called Bartender for the Amiga. I wanted to create a useful web-service, and decided to make something similar for the World Wide Web. Remember that this was just at the same time as the Web (I prefer to call it that) became popular with not only students and people connected to the Internet at work, but also to people at home.
> 
> So, during spring 1995 I started to collect drink recipes from various Internet sources, including the mentioned program. One of the main sources was The (Un)Official Internet Bartender's Guide and postings to the newsgroup `rec.food.drink`.
> 
> Then I decided to let my visitors help building the database. A lot of people make their own drinks, or have their own favourite, so why not let them add it to the database? I created a simple web form that visitors could use to add their drinks. It bacame a success!
> 
> Today, about 1500 of the drinks have been added by me, and the rest have been contributed by visitors.

![](https://neustadt.fr/essays/the-small-web/link.png) [Visit The Webtender](https://www.webtender.com/info/)

### Distant Skies - A Crystalis Fansite

A fan-made website about an action-RPG game called Crystalis:

> 'Crystalis' is an Action-RPG for the Nintendo Entertainment System. It was released in Japan in April of 1990 and in the United States the following July. It was praised by critics at the time for its graphics and gameplay and it inspired a devout, if somewhat small, fan following. In Japan the game was called ゴッド・スレイヤー はるか天空のソナタ or God Slayer: Sonata of the Distant Sky.

Built in the visual style of the game itself, the site provides detailed information about the story, characters, game world, spells and items in the game. Even though I don’t know the game, it’s fun to browse around.

[![A screenshot of the home page of Distant Skies](https://neustadt.fr/essays/the-small-web/distant-skies.jpg)](https://distantskies.neocities.org/)

A screenshot of the home page of *Distant Skies*

![](https://neustadt.fr/essays/the-small-web/link.png) [Visit Distant Skies - A Crystalis Fansite](https://distantskies.neocities.org/)

## Your Own Corner of the Web

So the small web still exists, and is still giving us all kinds of websites to browse through and discover.

As fun as it is to explore what's out there, the best part is really to join in and make your own website. Not on closed platforms or on social media mediated by ad companies, but simply in your own little corner of the web. It's the best way to see how simple and open the web really is.

You could easily put up those drawings you've been making, share your thoughts and ideas, or reviews of your favourite whiskies. Make a website to share your writing tips or your best recipes. Or a list of your favourite addresses in your city for travelers who might be visiting.

All you would need is to learn basic markup (HTML) and styling (CSS), set up a site on a free host like [Neocities.org](https://neocities.org/) and start playing. As you can imagine, Neocities is a Geocities-like free web host (minus the ads) whose mission it is to "*make the web fun again by giving you back control of how you express yourself online*". Discovering and joining Neocities was one of the reasons I got so excited about the small web. You can spend hours and hours [browsing through](https://neocities.org/browse?sort_by=last_updated) the many sites hosted there, or just get a free account to play with.

[![A screenshot of the home page of Neocities](https://neustadt.fr/essays/the-small-web/neocities-home.jpg)](https://neocities.org/)

A screenshot of the home page of Neocities

If you don't know how to make websites, HTMLDog has excellent tutorials to learn [basic HTML](https://htmldog.com/guides/html/beginner/) and [basic CSS](https://htmldog.com/guides/css/beginner/). If you prefer video, Khan Academy has an excellent free course for beginners called "[Making Webpages](https://www.khanacademy.org/computing/computer-programming/html-css)" that looks very complete.

If you have no prior experience, it might take you a while to get a hang of how to change text sizes and colours, add images and link between pages, but I think that’s part of the fun.

You could of course always just get a pre-made template or a theme and use that, but it's a different exercise. It’s the difference between buying art and learning how to paint or sculpt. The end result might be the same but the exercise is very different. It might be more practical but is nothing like creating an HTML page from scratch and putting it up on the web for the world to see.

Another great thing about the web is that you can always view the source of any public website to take inspiration and learn. Make sure you pick simple, basic ones; the modern web is full of bloated websites that make HTML unreadable. This website, for example, only uses basic HTML and CSS and I invite you to play with [the code](https://github.com/parimalsatyal/neu/blob/master/essays/the-small-web/index.html) to your heart’s content. It’s all in the [public domain](https://neustadt.fr/license.txt), so you can even copy all of it and modify it (and you don’t have to credit me or even link back, it’s all free).

If you do end up making a website after reading this, I’d love to see it (and perhaps even add it on here): send me an email at [webmaster@neustadt.fr](mailto:webmaster@neustadt.fr).

## Thoughts and Feedback

The small web still exists and has a lot to offer.

It might not be as polished as the commercial web we're used to, but I hope I have, at the very least, piqued your curiosity and made you want to explore it too.

I would love to hear from you if you have thoughts and comments about the essay, or if you have other interesting examples, or corrections. You can email me at [webmaster@neustadt.fr](mailto:webmaster@neustadt.fr). This essay along with everything else on this website is also on [GitHub](https://github.com/parimalsatyal/neu/blob/master/essays/the-small-web/index.html); if you find errors or have suggestions for an edit, you can simply send me a pull request.

I hope you enjoyed your stay on my website. Feel free to browse around; the [Retro Stuff](https://neustadt.fr/retro-stuff) has other relics from the 90s and the 2000s that you might enjoy. And of course, you can [sign my guestbook](https://users2.smartgb.com/g/g.php?a=s&i=g26-37520-60) on your way out if you'd like.

**Elsewhere:** The [discussion on Hacker News](https://news.ycombinator.com/item?id=23326329) around this essay has plenty of other interesting links and ideas that you might also enjoy. *(Updated 28 May).*

**Merci:** Thanks to Mario, Zach and Alex for [pointing out and fixing](https://github.com/parimalsatyal/neu/pulls?q=is%3Apr+is%3Aclosed) some typos.

— ← [back home](https://neustadt.fr/)

[![CC0 Public Domain Logo](https://neustadt.fr/img/publicdomain.png)](https://neustadt.fr/license.txt)  
[Rediscovering the Small Web](https://neustadt.fr/essays/the-small-web/), written by Parimal Satyal on 25 May 2020 and published on [Neustadt.fr](https://neustadt.fr/). This text is in the public domain with a [CC0 1.0 Universal license](https://neustadt.fr/license.txt); you are free to do whatever you want with it (obviously doesn't apply to the websites and resources I've linked to, or the logos and graphics in the background). A link back is nice but not required.
***

==**36486**== Words

- **[Rediscovering the Small Web - Neustadt.fr](https://neustadt.fr/essays/the-small-web/)**
