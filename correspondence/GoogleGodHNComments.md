 "Google Is Not God of the Web"

*26-07-2021 12:58* 

> > 22.82 Mbps will reliably download very complex web pages nearly instantaneously.The author may be unaware of how ridiculously huge web pages have gotten. I just loaded Wired.com, scrolled down and let it sit for a few seconds. It downloaded 96.2 MB, requiring over 33 seconds on one of those average connections. On a pay-as-you-go data plan, it would have cost about a dollar just to load that one page. The front page has about 500 words of content. It also covered 100% of the content with ads, twice.This is unsustainable. Web developers have utterly squandered all efficiency gains of the last 30 years, and then covered their grossly inefficient work with impossibly annoying, privacy-invading advertising. Google should be applauded if they make these wasteful developers suffer monetarily until they shape up. They've already stolen untold amounts of time and energy from us all.
![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384542&how=up&auth=71c9266da513fde81ac47491868a928e392a464b&goto=item%3Fid%3D23383548#23384542)

\> 22.82 Mbps will reliably download very complex web pages nearly instantaneously.

The author may be unaware of how ridiculously huge web pages have gotten. I just loaded Wired.com, scrolled down and let it sit for a few seconds. It downloaded 96.2 MB, requiring over 33 seconds on one of those average connections. On a pay-as-you-go data plan, it would have cost about a dollar just to load that one page. The front page has about 500 words of content. It also covered 100% of the content with ads, twice.

This is unsustainable. Web developers have utterly squandered all efficiency gains of the last 30 years, and then covered their grossly inefficient work with impossibly annoying, privacy-invading advertising. Google should be applauded if they make these wasteful developers suffer monetarily until they shape up. They've already stolen untold amounts of time and energy from us all.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23387088&how=up&auth=bd3f207d772edc968dd1954ea7d0154c2b986d77&goto=item%3Fid%3D23383548#23387088)

\>Web developers have utterly squandered all efficiency gains of the last 30 years, and

Loading Wired.com with uBlock and no javascript the page comes in below 1.5MB for me, with most functionality seemingly intact (in that the front page looks mostly normal and I can load articles that appear to have their text completely intact). The bulk of that seems to be fonts and images, which are probably unavoidable for a media site.

Some reasonable noscript whitelisting for Wired.com and a few others (out of 12 total that noscript shows me) gives a page size that's still under 5MB.

Looking at the full page with everything loaded and unblocked, the biggest offender here seems to be not web design, but an aggressively downloading autoplay video on the front page. Without that the page itself is - while not necessarily great - at least reasonably bearable.

Truth be told, I'd started this post intending to blame advertisers, and there is still some merit to that since even before the video kicks in the various third party scripts balloon the page size several times over from the minimal functional one that loads with everything blocked. But in this case, it does simply seem to be a wasteful media stream playing without regard to whether anyone wants it to or not.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389247&how=up&auth=338fa2ad1cc2907c4b0db1be40308bfd7a249944&goto=item%3Fid%3D23383548#23389247)

With uBlockO it was 1.5MB for me, without it was 3.8MB, on Firefox, coming from Germany. Which is still pretty ridiculous on both numbers for what's actually visible on the page.

Once you scroll, however, things get messy no matter what, because of their "Scott Adkins Answers Martial Arts Training Questions From Twitter" auto-play video they have right now. That ate way another 30MB quickly and the video wasn't even visible (I had scrolled past it).

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390005&how=up&auth=65f4b6b916708fae80d2974d338164f7fe2d4278&goto=item%3Fid%3D23383548#23390005)

  

I browse without 3rd-party and 1st-party scripts \[0\]. I wanted to praise my setup but it does not work well with Wired:

1.37 MB / 722.93 KB transferred, Finish: 6.57 s

versus uBlock default

8.62 MB / 4.49 MB transferred, Finish: 28.38 s

Clean setup mostly increase load time:

11.58 MB / 5.79 MB transferred Finish: 1.13 min

^ checked with "Disable Cache".

Not much content delivered for such big HTML file

660.46 / 167.60 KB transferred

because it's mostly inline script:

```
    $$('script').map((s) => s.textContent).join('').length
    568681
```

And fonts.css is inline font:

127.70 / 100.15 KB transferred

\[0\]

uBlock Origin:

```
    * * 1p-script block
    * * 3p block
    * * 3p-frame block
    * * 3p-script block
    * * inline-script block
```

or uMatrix:

```
    * * * block
    * * frame block
    * 1st-party css allow
    * 1st-party frame allow
    * 1st-party image allow
```

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390088&how=up&auth=793c4ee9659b8031bc8ece51b6cf5c8552ea1fb1&goto=item%3Fid%3D23383548#23390088)

That's still a lot. The longest pages on my website download around 200kb of data. 1.5MB is a lot of data for text-based information.

Of course, some space should be left for enhancing the text with images, but the Wired front page doesn't have that many of those.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385627&how=up&auth=b9a2246944f53d93cef1437461a78c72bc3b5f99&goto=item%3Fid%3D23383548#23385627)

25 years ago I used to read Texas Monthly magazine (on paper) because it was some of the best journalism around. I finally unsubscribed when I had to flip through 16 pages of ads to get to the table of contents, and several ads per issue contained scratch-n-sniff perfume samples which meant that reading an article required you to smell like a bordello afterwards.

Wired is the digital equivalent of that now. There's some great journalism in there, but no journalism is good enough to put up with a hostile attack on one's sensibilities just to read it.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389177&how=up&auth=ccf15a0ddd23bf1626c3579a8298839d60fde9a8&goto=item%3Fid%3D23383548#23389177)

There isn't much difference with adblock on or off for this page for me (using Chrome on Windows). With adblock off, there are three obvious ads on the top right of the page, search results on the left. With adblock on, these are gone.

In both cases, the top of the search results is a map with a few shops listed, and under this are normal search results.

Repeating this on mobile, the ads are moved inline above the map. They take up about 50% of the screen. That is a bit intrusive. However, I have muscle memory that automatically scrolls down a bit after searching and to be honest, I would not have even noticed them if I wasn't looking.

I don't know where the the 100% of content being ads claim is coming from. Perhaps it's different in different regions?

I'm not trying to be an apologist for Google here, by the way. However, when it comes to intrusive ads there are far worse offenders (although perhaps not when it comes to behind the scenes data collection, which is a bigger issue).

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388612&how=up&auth=ab58ebd30b30d1a4f8ca2da86a03d21399ef3596&goto=item%3Fid%3D23383548#23388612)

You're right, by turning off my ad-blocker, my mobile screen was fully covered with ads.

What constantly worries me however, is what happens when most visitors use ad-blockers? My guess is, a war would be declared against current web standards, where users can still modify DOM and remove unwanted content. Edit: reword for clarity.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390742&how=up&auth=84bc85563dd4f7ba0eab70f200a8a248d8015642&goto=item%3Fid%3D23383548#23390742)

I used to get Wired in print in the late '90s, and i can tell you, Wired was the print equivalent of Wired.com now!

Pages and pages of ads before the contents, and then each article would usually be one or two beautiful full colour pages, before a 'continued on page 94' which took you to the remainder formatted as cramped commieblock-looking text at the back - which you got to by skipping over a few dozen more pages of ads.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385254&how=up&auth=195613f65ec2a8b833ff8217434afdd6119a2d02&goto=item%3Fid%3D23383548#23385254)

Indeed. Ads are just noise that should be filtered out. To visit a website and be served 100 megabyes of noise along with less than 1 megabyte of actual information... It's an absurdly low signal-to-noise ratio, such an incredible waste.

We need to fix the web by blocking these things. No compromises. If a website can't exist without advertising, it should disappear. Eventually, only good websites will remain. Websites made by people who actually have something to say rather than websites made purely to attract audiences for advertisers.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388245&how=up&auth=b4984a3a504ef89a61820f3011419d610d118dc3&goto=item%3Fid%3D23383548#23388245)

There are two types of noise being served here

The advertising The tracking

The tracking is being used to: tell advertisers how well their advertising is working tell the site how well articles are working give unscrupulous sites the possibility of selling that data to others, which are probably advertisers but maybe other companies.

As far as the ratio of advertisement to content this [https://www.editorandpublisher.com/news/higher-ad-to-edit-ra...](https://www.editorandpublisher.com/news/higher-ad-to-edit-ratio-not-a-good-thing/) regarding that ratio in newspapers assumes 60 / 40 where I believe the 40 is supposed to be content (although I find the wording not 100% clear)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385955&how=up&auth=69ae4b76aef831d634ff3e6d4676a5051f8cd298&goto=item%3Fid%3D23383548#23385955)

Why should they have to "sustain themselves"? If an author wants to put their ideas out there, maybe they should pay for it themselves so they can have their own unmoderated space on the internet.

Authors that rely on advertising have an inherent conflict of interest: they simply won't write anything that offends the advertisers because they're afraid of losing their revenue. Sites like Reddit will nuke entire communities if they prove controversial enough not because they're offended by it but because it causes advertisers to refuse to associate with them. Activist groups can attack and censor anyone these days by putting pressure on advertisers and sponsorships and causing them to pull out.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386079&how=up&auth=1daab009773add564be6520b66da0efe32a9432b&goto=item%3Fid%3D23383548#23386079)

  

Why should they have to not "sustain themselves?" If a reader wants to read what an author puts out, maybe they should be allowed to be subject to advertising so that the author doesn't have to pay for it.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386415&how=up&auth=7739aad01d000346e8c27e4db8bb6f98959f8386&goto=item%3Fid%3D23383548#23386415)

With a few exceptions, I learn more from user comments on sites like this than I do from today's "journalism".

Turns out, people willing to spout random ideas on a topic are not in especially short supply and 99% of them are willing to do it for free. The best part is, these free users usually get right to the point.

Long form and investigative journalism need to be funded but the kind of information I find junk articles on the homepage of CNN or Fox is usually better hashed out (and much less biased) in the comments section than reading an article.

In a sentence, most media doesn't have much value-add. Even less so if I have to click through 6 ads and be exposed to malware to see it.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386646&how=up&auth=ef46bac063d6f96aba5b55871f7d6f37f493ca68&goto=item%3Fid%3D23383548#23386646)

\> If a reader wants to read what an author puts out

Why would anyone want to read stuff like sponsored articles which are nothing but thinly veiled advertising? Articles that were pretty much written by PR firms? Why would anyone trust journalists with conflicts of interest? Social media "influencers"?

I want real information. Real thoughts from real people. Not some censored, manipulated corporate viewpoint created to maximize profits. People who actually have something to say go out of their way to tell as many people as possible about their ideas. They don't need to get paid for it. I'm not getting paid to post here.

\> maybe they should be allowed to be subject to advertising so that the author doesn't have to pay for it.

Allowed by whom? The user is in control, not the author. It is the user who owns the computer that runs the browser. If any ad gets shown on the screen, it is because the user generously *allowed* it to happen. Most people do this out of pure good will only to end up being mercilessly abused for the sake of someone's business model. Nevertheless, it is a *privilege* which can be unilaterally revoked and there is next to nothing that websites can do to stop it. After content has left the server, the author is no longer in control.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385861&how=up&auth=5e6347bebf51b6c56f1866683cd945f20541f1cd&goto=item%3Fid%3D23383548#23385861)

Sometimes the best things aren't commercially self-sustaining. Blogs, paid for by the writers' day jobs. Professors' sites on .edu domains, paid for by research budgets.

As for professional journalism, the lack of conflicting interests caused by ads is essential for it to be considered "good", so no good journalism website should be clouded by advertising. Yes, that probably means subscriptions.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388602&how=up&auth=7c36a2b56159d99b486610b9c500e80551fb5db6&goto=item%3Fid%3D23383548#23388602)

Why must websites sustain themselves financially?

It can literally cost you $30 *a year* to host a website.

Many people will spend more on coffee. Per month.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389053&how=up&auth=7ce964de0fe542046921569f5c33463fe1aff60b&goto=item%3Fid%3D23383548#23389053)

Is it though? Nowadays you have plenty of good free CMS-es which integrate directly with Netlify. Sure, it *might* be half a centimeter more complex than WordPress admin but it's still really easy to grasp for many non-tech people (checked).

But even if it was very complex -- which it isn't -- I still fail to see how that supports a model of an ad-supported web hosting.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390760&how=up&auth=82df2b30b98be360850c9ab7e9db52134bf5e340&goto=item%3Fid%3D23383548#23390760)

  

I think the main cost is producing the content. Researching, creating, and editing the actual words and images.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385365&how=up&auth=c9963fc2858b16d4d1526ed07774245426f559d5&goto=item%3Fid%3D23383548#23385365)

I hate capitalism. I'm fully an anti-capitalist.

But I'm also a realist. We live in a capitalist society and free content has come out of advertising since before the web. It's an annoying part of the present world but not the most annoying part imo. I don't know how people denouncing *just* advertising expect the publication of free information to work.

This society has created a vast plenty. I don't see why advertisers, the public and publishers couldn't reach a truce where a moderate amount of semi-relevant text ads get shown the reader in excahnge. But everyone wants to total control, wants to club to death all competitors and that seems to be the way this world of plenty is ending.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386091&how=up&auth=8de55b63eff500133664657b312bde34ee7cc185&goto=item%3Fid%3D23383548#23386091)

  

It is hard to believe that 100mb of payload is needed to show me same amounts of ads on a page. Merely optimising that without even changing your ad volume /model would go miles in establishing the trust that had been lost.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385080&how=up&auth=2d1b80b1bf85678d83bdc87f4d66b64cd14bc2e8&goto=item%3Fid%3D23383548#23385080)

I agree, but somehow when I google for something, Wired and all these websites are the ones that appear on the first result, so what's the deal? Google don't care if your website is heavy as long as that domain provides a lot of ads income?

I've made a website pure HTML with just a small CSS and no JS; with real great content. Google doesn't take it into account. So I don't know if they are really pushing for a light network, or maybe, I don't know, because it is easier to convert these website into AMP?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385856&how=up&auth=00f5b182676c2d1bb5d63dfca1d26ec11fc949e4&goto=item%3Fid%3D23383548#23385856)

High network utilization doesn't have to mean an unresponsive website.

Google cares more about responsiveness. A site is responsive if you can start reading it quickly, regardless of how much network traffic is being used by ads, as long as the ads are loaded asynchronously after the primary content.

Penalizing for high total network traffic is short-sighted and would prevent most video hosts from ranking well in Google Search.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23425948&how=up&auth=902e97a6e6f9ba6a340dda7add34bdff20469a09&goto=item%3Fid%3D23383548#23425948)

having worked specifically on website responsiveness improvement for a medium-size publisher, I can certainly attest that ads heavily influence performance, even if added asynchronously after the first paint, or after the site becomes interactive; we tried every trick in the book, and then some.

the main reason is that ads are coded by people that have no interest in performance. I've seen huge JS libraries loaded to display a static image. I've seen multiple versions of the same library loaded in the same ad. I've seen things that wouldn't fly anywhere else.

Why? Because the ad agencies are under a lot of time pressure to make things quickly, and there is NO penalty if the quality is terrible. So they take what worked last campaign, add new tags to satisfy the new customer, and ship it out. It displays? Perfect. It's huge and slow as hell? Who cares, it's not their website that gets slow as molasses.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388270&how=up&auth=950f41a4b3f4635ad8e531dddc504d76ae8722f4&goto=item%3Fid%3D23383548#23388270)

  

Do you know how they decide if someone is able to start reading quickly? Personally I find asynchronously loading ads around the text so distracting that I basically can't focus on reading until it's done loading so for me I basically need to wait for the whole site needs to load anyway. In the same vein, I would prefer Google down score all sites with anything but entirely static ads.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388758&how=up&auth=3f3355bf5b839af8f5945c9a71dbb45719a26e8a&goto=item%3Fid%3D23383548#23388758)

  

One of the performance checks they use is how quickly the body text renders into a readable format as a page loads. If your site has slow loading web fonts, AND you haven't specified a fall-back font (i.e. serif, or sans-serif etc.), Google will penalise it.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23423488&how=up&auth=e254408968240d50f47692f30bd7da6050cd5fc9&goto=item%3Fid%3D23383548#23423488)

They decide by the Wired guys having a coffee with the Google guys or a chat in some party.

Google is people afterall. Corrupt as fuck. That's why plenty call it gulag.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389487&how=up&auth=6d1b1fc0c8a021ebacffa7412c4fb0d7e245dd5a&goto=item%3Fid%3D23383548#23389487)

  

You're being downvoted but this is actually a useful suggestion. I use millionshort.com all the time when I want to strip out the low-value SEO crap that dominates search results.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386375&how=up&auth=84d3398adce820152da8ab7e08528038b44e856a&goto=item%3Fid%3D23383548#23386375)

"Google should be applauded if they make these wasteful developers suffer monetarily until they shape up."

As the browser author with the dominant market share, Google could start by not enabling these "wasteful developers". These ridiculously huge web pages can lock up a user's computer when the user's browser is a "modern" and "supported" one but not when the user agent is something simpler.

I can read wired.com really fast using various tcp clients to make the http requests and links to view the html. If user A reads the articles with Chrome and user B reads them using something simpler, how is user A advantaged over user B? All things being equal, if we quiz them on the readings, would user A score higher than user B?

The difference is the advertising, which almost always requires graphics - the more dazzling the better, and detailed tracking, which requires Javascript and the presence of other "modern" browser "features". There is a strong argument to be made that Google's browser caters more to the online ad industry (who wants to show ads and do tracking) than to users (who want to read wired.com quickly and efficiently).

Software developers have long been squandering user's resources beginning with Microsoft Windows. Hardware manufacturers were Microsoft's first customers and there was an incentive to get users to keep "upgrading" their hardware. - buying new computers.

Web developers are simply following the tradition.

A user can get those 500 words of content in an instant with zero ads, using the right user agent, even on an "obsolete" device. However there are zero incentives for online ad industry-supported companies/organisations maintaining "modern" browsers, web developers writing code to run on them nor hardware manufacturers to help the user do that.

The easiest way to change the "UX" for the web user is to change the user agent. Trying to get web developers to change what they design to only use a small fraction of what Chrome and the user's computer can do is far more difficult, if not outright impossible.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23387330&how=up&auth=e3d72d50e519af785aaaf5dca9b9c6488a0380ab&goto=item%3Fid%3D23383548#23387330)

\> Trying to get web developers to change what they design to only use a small fraction of what Chrome and the user's computer can do is far more difficult, if not outright impossible.

This is not only improbable to happen that web developers will change their malicious behaviour, it's also the user agent's fault for allowing that.

Why is there no connection speed detection in the browser? Why does the browser allow media playback by default? Why is there no mechanism that reflects the expectations of the user? Is the user expecting videos on the news website or just to read text and images?

I personally think that user agents are not really user agents anymore, as there's not even the idea of offering the user a choice like this.

And personally, I do not agree with the concept of trusting random websites on the internet - by default. Any website on the web should be distrusted by default, with the user having the choice on what to load and what to expect when navigating to that specific resource.

If I visit an i.imgur.com/somename.jpg, why am I redirected to an html page with megabytes of files just because the user agent accepts html then? Should this not be outright impossible?

But please take my comment with a grain of salt, I am building a web browser concept that allows filtering and upgrading the web (which is superhard to build) \[1\] and it's still a ton of work to get anything working in a stable manner.

\[1\] [https://github.com/cookiengineer/stealth](https://github.com/cookiengineer/stealth)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23387963&how=up&auth=30cdaac92ae9f186795fa496c8d811bdb44ad864&goto=item%3Fid%3D23383548#23387963)

All those things you mention are design choices.

Perhaps one of the impediments to the development of new user agents is a feeling that they must be complex and meet some "standard" of features. A standard that is nigh impossible to meet for the average programmer. On top of that, web developers demand the ability to create complex web pages full of executable code.

However we have no proof that users would reject a cornucopia of different agents that did not all have the same set of features. User agents do not need to be designed to satisy web developers. User agents can be designed to satisfy users.

They can be designed to do one thing well instead of do everything.

No user agent need be intended to "replace" any other, and certainly not to replace "modern" browsers. The intent is to create choice and user experimentation.

It is still possible to access the web with simple programs. It is not gopher or gemini but it still can work in a relatively simple way. Web developers probably do not like that but it remains true. The complexity of today's web sites is optional. It is a deisgn choice. Made possible by... "modern" browsers.

Godspeed.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386698&how=up&auth=82e7fa0ec63f62a11b6806dd199a92180d1f9406&goto=item%3Fid%3D23383548#23386698)

  

I find it ironic that you bring up Windows as an example, when the amount of data the parent comment mentioned - ~100MB -- is enough for a full install of Windows 3.11 and Office 4.3... and will yield many times more enjoyment than the front page of Wired.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386793&how=up&auth=d80ff41652fdedd1bc7d123dd5077d1234eb0ee6&goto=item%3Fid%3D23383548#23386793)

It is sad that Microsoft would never acknowledge that some users might want to run older software on newer computers. IMO, it is easier to see the performance improvements in new hardware when running older software than it is when running "the latest" software. I would have run 3.11 for many years on newer hardware. However the goal of the company and the message pushed to its software users was/is always "upgrade".^1 Today, it is "update".

1\. Over time almost all user choice in "upgrading" has been removed. "Forced upgrades" is a thing.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23391486&how=up&auth=c31aa10c237fa571dc08c97b71aa960666545c51&goto=item%3Fid%3D23383548#23391486)

You are not market share Microsoft aiming for. But you are not obliged to use run Microsoft Windows either. Linux runs perfectly on old hardware.

42 MB RAM without graphical system

64 MB RAM with graphical system

You may run Windows applications on Wine. Or Windows 3.11 on virtual machine.

Netbook I bought in 2008 was underpowered for Windows XP but was perfect for Linux. I still have it around. With up to date Firefox and Chrome it feels slow but in console mode it's snappy.

No need for install with LiveUSB. Everything is here, countless people made it possible, would you use it?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23393112&how=up&auth=bd10876a16e1de929ca72459458ba84ed286c060&goto=item%3Fid%3D23383548#23393112)

"Linux runs perfectly on old hardware."

I prefer NetBSD. I do not need graphics. I make custom images that boot from USB or the network.

As for Windows, there was a time, in the 32-bit era, and before the widepsread availability of virtual machines and Windows 3.11 images, when users were compelled to upgrade hardware and Windows versions. It was not made easy for a non-technical user to buy new hardware and use 3.11 if the hardware came with a more recent Windows version pre-installed. Microsoft will not facilitate installing older Windows versions on newer hardware ("metal", not VM) and may actively discourage it. In contrast I can easily install any version of NetBSD I want on new hardware. I am not compelled to install the most recent version. There is user choice.

How easy is it today to run Office in a VM on Linux?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23393157&how=up&auth=3d767945145854fa3444b1cd36b57e9d061a2b85&goto=item%3Fid%3D23383548#23393157)

\> Microsoft will not facilitate installing older Windows versions on newer hardware

It usually works though nowadays, unless you go nuts and try to boot Windows XP or something. Are there any processors that flat-out can't run Windows 7 atm?

(Older versions of macOS, on the other hand, absolutely will not run on newer processors.)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23395939&how=up&auth=f818f2506e1cd85e05aacb5384faf175ff87d973&goto=item%3Fid%3D23383548#23395939)

If trying to get this work, Windows 7 is a good choice?

Have you ever successfuly imaged Windows 7 from an older laptop and installed it on a new compuer?

I only need Office. I do not necessarily need the latest version, so long as documents are XML-based.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23396047&how=up&auth=039481f9cd9201c444e95d58480eeed51564bccc&goto=item%3Fid%3D23383548#23396047)

I have never imaged OS's—I'm sure it's a fine practice since lots of people do it, but it feels "unclean". I always do clean installs.

That said, I was able to pretty quickly install Windows 7 on a then-just-released Ryzen 3950X last October. I do remember there being one hitch, I think I had to slipstream in USB 3.0 drivers.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386935&how=up&auth=3aaa98450621e5937fb330dd14f697a9ad48aa29&goto=item%3Fid%3D23383548#23386935)

  

You can run many old operating systems including esoteric one using virtual machine. Modern computers use very little overhead for virtualization.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390606&how=up&auth=1db977d22a499d7db5fbfc1ec09ecfb996c3c443&goto=item%3Fid%3D23383548#23390606)

  

This is not a solution to avoiding the resource consumption of running a "modern" OS on a "modern" computer. Your comment completely misses the point.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386598&how=up&auth=6965420d1cbeccbdedb4f87ffd192b245d54b32b&goto=item%3Fid%3D23383548#23386598)

  

A lot of sites even download new content continuously even after the page has been fully rendered! They swap out silent media ads one after another, in hopes that you minimized and ignored the page.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23387000&how=up&auth=80dff26915b549fca7b9fff44d22e1ba6ed924a8&goto=item%3Fid%3D23383548#23387000)

Even with adblocking it downloads 30 MB almost instantly, and while typing this reply it's now up to 48 MB. Oh wait, it's at 50 now. It keeps going up.

Looking at the requests it seems to be downloading a video from Cloudfront. And yes, in the middle of the page there is a video playing. I'm sure people with metered connections will love that.

That said, with adblocking at least the design looks clean enough. I'm willing to bet that this is what their designers see, and then another team adds all ad overlays on top of the existing design.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23387880&how=up&auth=a5ca449e5f6643b4312906293434cc7abfbe6400&goto=item%3Fid%3D23383548#23387880)

My browsing these days looks like

\- JS off by default

\- Web fonts off by default

\- Media elements larger than 100KiB not loaded by default

uBlock origin is the god of internet.

Edit(s): formatting

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386918&how=up&auth=d3263571bdb3477df2959424f5e679b39a1155f6&goto=item%3Fid%3D23383548#23386918)

\> Google should be applauded if they make these wasteful developers suffer monetarily until they shape up.

So you want Google to use their dominant position to force webmasters into a new paradigm that probably(?) benefits Google more than today's status quo? And when people start yelling for antitrust provisions, will you still back Google?

![](https://news.ycombinator.com/s.gif)

![](https://news.ycombinator.com/s.gif)

I stopped visiting wired.com years ago, when, instinctively, I could just sense the bloat by the spike in CPU, and lag in pageload, for what was ostensibly plain text, plus a serif font and one header image.

As if I wouldn't notice that casual reading material was causing my cooling fans to spin up.

As if I were multi-tasking so hard, that it couldn't be discernible which dog in the room could take the blame for who just farted.

The wired.com website first showed hints of becoming unusable when their audience participation widget provided by Disqus, for reader/user comments, became this opaque blob of compressed/minified JavaScript. Then they started piling on video. This was back around 2009 or 2010. By 2013, I had mostly washed my hands Conde Nast publications.

Whoops.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388109&how=up&auth=52706eef7e95a7adbb7d458404c31643b61d6de6&goto=item%3Fid%3D23383548#23388109)

\>Web developers have utterly squandered all efficiency gains of the last 30 years

It's true, whenever a company has pleaded with me to bring a site in with better performance, I have adamantly refused to do so.

When companies say guess what, Bryan, we are going to focus a sprint on just making sure everything download as fast as possible and we get rid of anything getting in the way of the best possible user experience, I have spent that sprint watching quirky animation, and sometimes turned that animation into a base64 encoded gif and put it in a div that was set with a z-index low enough that it would be not seen by people but would still have to be downloaded by the browser!

I do all these things of course, because it was decided by the Secret League of Obnoxious Web Developers (SLOWD) that we should do the utmost in our power to make the web slower for everyone.

OR - it could be that I have in fact asked project management at sites repeatedly to focus on performance (and accessibility, another thing that always gets ignored) and been told that nobody care about that stuff.

I guess it's up to you to determine where the fault lies.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388472&how=up&auth=aac44c3fbb13b90817a122f2a3a0aaddca20d630&goto=item%3Fid%3D23383548#23388472)

  

I prefer fast non bloated websites but your example does remind me of a tangential example. Video Game Load times. People complain but they really only complain if the content is not great. If the content is great no complaints. Case in point, any game by Valve has atrocious load times, even and including their latest, Half Life: Alyx. And yet Valve's titles are among the highest rated games. And so, load time is rarely prioritized because it clearly doesn't matter. What appears to matter is content people want. (T\_T)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388546&how=up&auth=fd0454ddb253ee23f5f37247b1a7a97cbaedaa08&goto=item%3Fid%3D23383548#23388546)

I think the context of what you're serving matters. In this case the game content is good enough that the performance probably doesn't matter.

The worst example of a refused performance improvement I can think of was in relation to improving a help site, it had generally bad reviews from users (it is very difficult to get good reviews from users for a help site because if a user is coming to your help site they are already in a bad mood)

but obviously if you are on a site that you are mad about being on and it then takes a long time to load all the data so you can try to figure out your problem you are going to be steaming.

Project manager wouldn't prioritize the three performance improvement tickets I made with lots of cogent description of why it needed to be done. Somehow though, this is my fault.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388317&how=up&auth=63d4c3490435228a1a7079d243a3f637795b00e2&goto=item%3Fid%3D23383548#23388317)

Looks like you’re saying that developers can’t discuss priorities with management.

In some companies this might be true.

But in many, when a CTO or a senior dev demonstrates business value of a speedy website, it would get attention.

I’m sure project management doesn’t care about keeping packages up to date either. But most devs can successfully communicate that this is necessary and that the alternative is way worse.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388511&how=up&auth=5ad1d3df2ff95e1bcf06a11795cfabcddd6d5d3f&goto=item%3Fid%3D23383548#23388511)

Yes, when I was CTO I did a lot to make our website speedy.

When I was consulting I would often do performance analysis of the sites I consulted at, show how performance improvements could be made, put links to relevant studies on performance improvements and the effects on the bottom line with nice quotes, to have the task of cleaning everything up be put in the backlog and forgotten forever.

\>I’m sure project management doesn’t care about keeping packages up to date either.

How many days or weeks does it take you to update a package? It generally takes me a minute, sometimes problems happen and I need to spend some hours but those are infrequent. If a package update is going to take too long it becomes something for project management to be aware of and sometimes it is not allowed to update a package.

But generally issues with site performance need handling over a longer period of time than updating a package, I would think that was evident to anyone that has ever updated a package or done a performance analysis of a site. The comparison between something that generally takes a minute and something that takes weeks seems insincere.

But I can make an example where an update was needed that would take a significant amount of time, the reason that the update was accepted was that it would fix certain bugs with the old package and it needed to be done. Either the package was updated or the bugs were allowed to remain or we could fix the bugs with longer time than it took to update the package. I think it is obvious how this is a different argument than the site performance thing, the package update is an argument that this way we will fix the problems that you the business have pointed out, the site performance thing is an argument that this is a problem we want you the business to acknowledge.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389415&how=up&auth=d350e02049cbea5e2b5253376dc8833a3f78cd66&goto=item%3Fid%3D23383548#23389415)

  

I once worked for a place where the business unit got us to deploy one of those crappy client side A/B testing scripts which blocks rendering. Conversion rates started to dip and the same people came back to us complaining about it. I was able to pull together plenty of evidence to show them what the issue was. All they cared about was if we could A/B test it using the aforementioned client side script. Some people just can't be reasoned with, so glad I got out of that place.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388179&how=up&auth=d8902f496f2a33446a8b353bd3b90ee786e26f35&goto=item%3Fid%3D23383548#23388179)

I don't think anyone is under the impression that web developers can't make excuses; we have plenty of evidence of that.

I think discussions like this are capable of serving as valuable reference material when we are engaged with project managers on this topic.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388384&how=up&auth=91300a71f519f882185df4360c3a0e04857d3139&goto=item%3Fid%3D23383548#23388384)

I don't think there is a paucity of research that shows that higher performing sites get more users and are generally more valuable for the site owners. The problem is not lack of reference material, the problem is that nobody considers the problem that important (generally) when presented with that reference material.

Now the thread is quite big so I have not read everything but I have skimmed through it all, and have not seen anything that would be a really useful argument for getting someone to consider maybe we should try to improve site performance. A bunch of people complaining about Google, Wired, and a few other things that they complain about is not as impressive as just the hits you get if you search "effects of site performance on user retention" (replace user retention with other useful metrics to get sources for the argument being written up)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385312&how=up&auth=8c6d5059576db5a572a2d01ff2a030ccdb959f5a&goto=item%3Fid%3D23383548#23385312)

  

What if my audience is people in the US on desktop devices? Does it make sense for me to build for data capped networks which aren't a thing for 99% of US desktop devices? Does it make sense that I now have to spend time and money optimizing my company site for an audience that I don't care about so we don't get down-ranked?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390425&how=up&auth=1b1493e2c79ce25cca6b7e126271675f7f7e3fb7&goto=item%3Fid%3D23383548#23390425)

  

100% understand. I am not suggesting that this is true for everyone, and I agree that this is a good goal for many. My point was that my site targets an audience (corporate employees on their work computers). These policies ask us to spend a lot of time and money building out a site for an audience we don't have.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385116&how=up&auth=f1f7bc6112608596e127a2e32ecc7eda90b331b0&goto=item%3Fid%3D23383548#23385116)

" Web developers have utterly squandered all efficiency gains"

It depends on how you measure efficiency.

Edit: I should add what I would thought would be obvious, and that it is that bloat is related to advertising which drives their bottom line, and I'm doubtful of any existing material alternatives to 'wired.com's already problematic ability to exist. Ergo, the bandwidth is set to optimise for things developers perceive to be inefficient, but not other members of the team.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385543&how=up&auth=875aeb516dda5b2e7bcba9b8cb609372941baac0&goto=item%3Fid%3D23383548#23385543)

  

Web-designers and web-developers design and build the things that the people with the money ask them to. It's that simple.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388937&how=up&auth=0afcce8b2c791c0cbbb13cf0d944559fbb82a95a&goto=item%3Fid%3D23383548#23388937)

You should build what they need - though a lot of the problem is that those specifying websites have very little idea about how the web works and what is needed.

Unfortunately this isn't the 60's at Sterling Cooper where you can brain storm an idea like go to "work on an egg" or a "a mars a day helps you work rest and play"

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23426807&how=up&auth=f843a31d38c5b3723694b15a55ae3d692e7b69bf&goto=item%3Fid%3D23383548#23426807)

In my experience, even if you start by "building what they need".

When you present your V1 "they" come back and say something along the lines of "can't you make it look nicer/cooler? You know add some wow factor!"

What they mean is: "I just took a pile of money from the client for this and you didn't make it look expensive enough"

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385854&how=up&auth=f80531d43c53ecdb6c54b13d878d9d8ca88b585d&goto=item%3Fid%3D23383548#23385854)

  

The people that 'ask them to' are bound by an inexorable set of rules appear in the system, for the most part. That system is observable and a little bit predictable, it's just more economic than it is technical, so it's worthwhile for devs to take one step out of their zone sometimes to see how that math works. I don't really think anyone at wired actually wants a slow site or tons of crap ads.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23387017&how=up&auth=337ce87c0dd2c1333aaf620965aaaaa4805c8719&goto=item%3Fid%3D23383548#23387017)

(Disclaimer: previously worked at Google search)

I think some commenters are attributing to Google an ulterior motive, whether ill- or good-intentioned, separate from its core business. But in this case no such motivation is necessary.

Basically, Google wants its users to be satisfied - otherwise it will lose to, say, Bing. So it measures user satisfaction - e.g., if a user clicks on a Google result, and immediately hits back button in three seconds, it's a strong signal that the user was not satisfied. And Google tries very hard to increase this "user satisfaction" (and other similar metrics), because not only does it help Google's business, but it also improves the service itself.

And, guess what? When a page takes fifteen seconds to load, lots of people hits the back (or close) button. Showing such a page *is* giving the user a bad experience. Unless there's literally no alternatives, it makes sense for Google to "penalize" such a page.

Of course no metric is perfect, so it will occasionally backfire and penalize a great page that takes thirty seconds to load. But that's life.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389025&how=up&auth=596038580999b25e1d10b8680e36d1bcfeb52d9c&goto=item%3Fid%3D23383548#23389025)

  

Good answer... Out of interest (I understand if you can't answer NDA etc). Taking your example of the back-button (I assume it relates to "dwell time" we keep reading about...) My question is, does this feedback mechanism also include "closing the website" ? I seldom back-button(on desktop) i just use new/close tab.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23393603&how=up&auth=241287a55f9b0e3898b1d5da56d2ae47af6aab03&goto=item%3Fid%3D23383548#23393603)

  

I wasn't in the team that gathered those events, so I don't remember the details (and it's probably covered by NDA, as you say), but I guess Google would be gathering these data if there was a reasonable(?) way for them to get it.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388421&how=up&auth=a752606e13c677ba4b6aaa7008577b81ee7bc8b9&goto=item%3Fid%3D23383548#23388421)

  

How is this helping Google not lose to Bing, when the change would equally improve Bing experience (rising tide rises all boats?).

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389618&how=up&auth=b846aa226ac78d50b2233f7f8cf8153183242ab3&goto=item%3Fid%3D23383548#23389618)

  

Not all websites are going to improve their performance, even with Google's incentive. If Google ranks fast websites better than slow ones, that gives Google an advantage over any competitor that doesn't, as long as slow websites still exist.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388840&how=up&auth=702eb378ac0f8a493c9d382acf5c743e430e092a&goto=item%3Fid%3D23383548#23388840)

  

Google already has market dominance, they lose nothing if things rise equally for both themselves and bing.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23426075&how=up&auth=eb460f41a5b7d2181d0ce91d5cc67d0f1e235c7e&goto=item%3Fid%3D23383548#23426075)

  

You can easily instrument this server side - cookie and referrer is enough to track a single hop journey

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385061&how=up&auth=9f95ccfbb37c3ed838d63f19c7be6dbdd5223e0d&goto=item%3Fid%3D23383548#23385061)

There are lots of questionable ways in which Google owns the web (AMP, reCaptcha harassing users without Google cookies, Chrome's "Fire And Motion" web standards strategy), but this one isn't one of them.

In the webdev community it's well known that good performance is very important for user satisfaction, and that's backed up by research. There are no ideal metrics, and unfortunately every single one of them has some dumb edge cases. You could endlessly bikeshed which metrics could be better, but this particular set is not unreasonable.

It makes sense for search engine to pick websites that not only have the relevant content, but also are able to actually get that content on screen without frustrating users with slow-loading crap that makes browser freeze and stutter.

Keep in mind that your high-end desktop web experience is in minority. The web is now mostly mobile, and mobile is mostly low-end Android. That's a shit sandwitch, and it desperately needs an intervention.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385701&how=up&auth=f39dcc03d313d3b8b0af24d347e21b2c4263af2c&goto=item%3Fid%3D23383548#23385701)

\> it's well known that good performance is very important for user satisfaction

Even putting that aside, I'm not sure how them changing from one rank scoring system to another on their own search engine is them playing "God" for the web. The whole goal of Search is to rank items per some metric of "quality", and speed seems as good and fair as any to me.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388427&how=up&auth=888d4068843a96d8cb73cd2df9a73328246ac7f1&goto=item%3Fid%3D23383548#23388427)

\> The whole goal of Search is to rank items per some metric of "quality", and speed seems as good and fair as any to me.

No matter what I search for, I'm not going to be pleased to have the results listed in order of page load speed. The goal of search is to rank items according to a metric that matches what the *searcher* is looking for, not a metric that reflects the search engine's internal preferences.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389134&how=up&auth=19880ac3567d395bde06f54a56ca5a2cbf6da319&goto=item%3Fid%3D23383548#23389134)

Page-load speed would be one metric among hundreds. But we can't assume that Google has lost sight of the ultimate metric - did the searcher find what he was looking for ?

For any competitive search engine, its internal preferences are expected to be a reflection of its users' preferences and not a whim as you seem to be implying

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384549&how=up&auth=3e3002e442829fd3cee790a4c40a9846f8cfd938&goto=item%3Fid%3D23383548#23384549)

  

What's infuriating to me about these types of "signals" to the search rankings is that they have little to do with the content that I'm searching for. Google will hide results that I might find useful because the web master hasn't kept up with whatever Google decided was today's best practices. How about ranking based on the best source for what I'm looking for?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384814&how=up&auth=7e43e00775530ccfcb7c71a0145c6f344835e15f&goto=item%3Fid%3D23383548#23384814)

  

Google's ability to surface useful results has been thoroughly defeated by SEO spammers. To a lesser extent, the same is true of other search engines (Bing, etc.) though Google is the foremost SEO spam target for obvious reasons. Given that state of things, there is some sense in promoting more user-friendly pages that are thus a bit less likely to be SEO spam.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385614&how=up&auth=6fd083d98c6f862fbdc60ecb408b6cbd6adc2899&goto=item%3Fid%3D23383548#23385614)

\> there is some sense in promoting more user-friendly pages that are thus a bit less likely to be SEO spam

If there's a metric that will improve ranking, the SEO people are all over it, and have more incentive and resources to optimize for it than normal publishers.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385990&how=up&auth=16d7ec68d6f6c28ebd99a8e954f5529c9b8ade9b&goto=item%3Fid%3D23383548#23385990)

I wonder if Google could combat this by having every X search pages swap page 1 with, say, page 5? Or give users the option to jump straight to a given search result page by default?

That way the SEO-ignorant sites that actually have the info you want, but get pushed out of the way due to SEO spam, will have some chances at traffic.

I have never written a search engine, so this comment is worth about 1 kb.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386714&how=up&auth=8f087d3adeb22eb3d286f1a3977d6792499ffaed&goto=item%3Fid%3D23383548#23386714)

  

For some queries I instinctively jump a few pages ahead because I know the first few pages are going to be absolutely filled with SEO spam. The remainder is still not free of spam, but has a higher chance of containing what I want to find.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385278&how=up&auth=46b6a3b050806702559251989463333fae7897be&goto=item%3Fid%3D23383548#23385278)

  

Nah, this is just unimaginative. The issue is that it is really hard to admit one was wrong and start from scratch. Rules should be simple enough for mortals to read. If they keep adding to the existing formula there will be web-lawyers required.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385001&how=up&auth=f7956721eff69ecb499ede5b198e68129f32a24e&goto=item%3Fid%3D23383548#23385001)

If only one website has what I'm looking for, then definitely give me that site. If multiple sites have what I want, then prioritizing by which sites will give it to me fastest sounds like it both helps me with this search and helps with future searches (since it puts incentives towards making sites less slow).

In general, prioritizing speed highly helps small independent sites and over large bloated sites: they typically have less JS, fewer round trips on the critical path, etc. Make your site simple enough (ex: [https://danluu.com/](https://danluu.com/)) and it will automatically be fast.

(Disclosure: I work for Google, speaking only for myself)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385496&how=up&auth=9314f7c58d8dede68a762e9d1a1a22e5185170bc&goto=item%3Fid%3D23383548#23385496)

Sounds like a solution that fits your needs. The topics you deal with probably fit that idea perfectly.

I would make it more generic. Have the user provide his system specs and give them the option to filter out what is or isn't reasonable for them.

I use: 1) a decent desktop, 2) a phone with reasonable specs, 3) a laptop with shit poor specs

a) 400 mbit cable, b) free wifi (crazy slow), c) my ISP provides wifi hotspots that are reasonably fast, d) a prepaid wireless plan where 10 euro equals 1 GB

Shortcomings/experience is pretty obvious with each combination. The laptop (to pick just one) cant reasonably open a google search result, the duck works just fine, fb messenger works too, it can download and play HD videos. Most significant but not all that obvious, it has a qwerty keyboard with which I can write substantial amounts of text. If the search result was tailored for this I could see myself use forums and blogs (with comment sections) over prepaid tethering. It's webcam is unsuitably poor.

Edit: pay 5 cents to view a clean page in stead of 1 euro bandwidth to freeze my client all of a sudden seems a fantastic deal.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384646&how=up&auth=cf211d6c737385c5f7155d4b7aeaecf5c0719ddb&goto=item%3Fid%3D23383548#23384646)

  

That's why we should ditch google search for alternatives. So far I've been using DDG and am quite happy though it needs improvements in search results they may be the ones to listen to our needs unlike google who is too big to care.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385455&how=up&auth=a0f44d1f1c88fddd36ae633ca964e9603075e88d&goto=item%3Fid%3D23383548#23385455)

  

DDG just gives you Bing's results, while avoiding giving Microsoft information on you. This will necessarily produce worse results, but you might decide that this is worth the tradeoff.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385493&how=up&auth=ff6a7e39b382ea6707b9bf209c85d7e9e4e04744&goto=item%3Fid%3D23383548#23385493)

  

DDG also gives google results. If it grows in adoption it might get better than the two is what I think. If not, some other search engine is welcome, something better than google and bing

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389170&how=up&auth=6da55678c179bf7f9d97016a5bd197644b15f71c&goto=item%3Fid%3D23383548#23389170)

  

Source? Take any query and it will mostly be carbon copy of Bing results. Haven't seen any Google results on DDG yet. An engine that did both would certainly be desirable.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23392406&how=up&auth=8a36ce3eebead200fc41d9819b507873f09f5eda&goto=item%3Fid%3D23383548#23392406)

  

I was under the impression that google results are also used. I guess I was wrong about it. Does anyone know why google results are not aggregated as well? Technical or legal reason?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23394918&how=up&auth=b38a1ad82adebe1025ba4271259af4cf22ecfa8a&goto=item%3Fid%3D23383548#23394918)

Likely to be monetary reasons. DDG is basically (not entirely accurate but close enough) in the business of reselling Bing Search API and monetizing it through Bing ad network revenue (+some affiliate revenue through Amazon and Ebay).

If you also added Google results, your input costs essentially double. Also if so much of your marketing is based on bashing Google, it would be harder to justify such move from a branding perspective.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23409614&how=up&auth=4641bfdb686daf6efce77c2a9f6a81b8ff248b02&goto=item%3Fid%3D23383548#23409614)

  

Forgive my ignorance, I really didn't know all of that. I only my criticism of google for the reasons I stated, they have grown so much that they don't care about their users and their search quality has been deteriorating quite rapidly. In part it'snot their fault as an army of marketers found their way to play the game to push their products up in results but, it's not only that. Google has been acting more and more like a corporate monopoly, they're not what they were when they started for sure

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386858&how=up&auth=d541e3f2abba50bc84ef6ffc0c6c3c20a79b5620&goto=item%3Fid%3D23383548#23386858)

\> today's best practices

Speed has always been a good practice for as long as the web has existed. The specific metric changes, but the goal is the same. It's just that "simple" metrics are very easy to game.

An example of this is how they went from "First Paint" to "First Contentful Paint" to "Largest Contentful Paint". They're all trying to get at the same *concept*, which is when the page loads, but each iteration gets more precise and accurate. Realistically, as a webdev, if your site loads fast, it shouldn't matter which metric is used.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389081&how=up&auth=a9a5b66dfdd349569735deb0d56f510fa46f457f&goto=item%3Fid%3D23383548#23389081)

\>Realistically, as a webdev, if your site loads fast, it shouldn't matter which metric is used.

I like this ! Very true !

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384590&how=up&auth=8f5c297d65039eaa0e78a0419a765eca88505182&goto=item%3Fid%3D23383548#23384590)

  

So glad you were able to articulate what I've been feeling for years. Google promotes good *websites* which has little to do with good *content*. It's a (debatable) signal of website quality, which is only tangentially related to content quality.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384742&how=up&auth=551fed0f8899a42adbecd03603287fda11c02c11&goto=item%3Fid%3D23383548#23384742)

Back in 1998 or so people weren't just enthusiastic about the Google search engine because its results were good but because the search page was simple and fast.

Compare that to Altavista or Yahoo whose pages were belarded with all sorts of irrelevant links and ads *around* the search results. Slow to load and hard to visually navigate.

I still think the sparse pages are the best.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385888&how=up&auth=56d7e0aeb956dc434c808787f1f1dd755f379e05&goto=item%3Fid%3D23383548#23385888)

I worked at one of these companies during this era and yours is an often forgotten fact. It was a very long time before Google search result quality was any good. Their initial popularity was due almost entirely to page load speed, which they included on every page to highlight it.

The second was being able to serve a large index with parallelized querying, which was relatively easy for a newcomer company with no user base to engineer, and much harder for existing search engines trying to protect a revenue stream. People often don't really remember how late Google was to this business and how much of a difference that page speed indicator was.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390030&how=up&auth=0ecdf7a58cb8d3cf655bcbc4581b451895c1dd4b&goto=item%3Fid%3D23383548#23390030)

  

The same exact argument could be made for Chrome. Google was extremely late to the browser game and most of the initial switch was on how quick it was in comparison to other browsers at the time.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23395455&how=up&auth=a67b504679ae7b77c9a55927ba9f558f91bf9819&goto=item%3Fid%3D23383548#23395455)

  

I was replying to the parent comment above mine stating that Google came late to the browser game just as they did with the search game and if part of what initially made Google appealing was that they were simple and faster than other search engines, that is true when Chrome was introduced as well. Google explicitly marketed Chrome speed as a selling point. For example: [https://www.youtube.com/watch?v=nCgQDjiotG0](https://www.youtube.com/watch?v=nCgQDjiotG0)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384888&how=up&auth=0c6721075ff5329ec9620fb533067bfe32a0703f&goto=item%3Fid%3D23383548#23384888)

  

HotBot and Copernic.us I think is what people used. Lycos too. But what started search engines down this wayward path was Overture that combined with doubleclick proved to be too attractive a revenue model and we’ve gone down hill since.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383662&how=up&auth=6d133a44c1a4bce715494ce78a1a72f7a9349178&goto=item%3Fid%3D23383548#23383662)

\> There is a very reasonable argument for essential services like search engines and news websites to conform to/adopt standards like AMP, but for the rest of The Open Web, ingenuity and risktaking should be encouraged, not discouraged, for the true good of all Peoplekind.

Hadn't really considered this - because minimalist page size is often such a given - but, for instance, many amateurs often don't know yet how to crush their pngs and such.

\> [https://bilge.world/open](https://bilge.world/open)

Cool - thanks for this!

(As an aside, it's great to see a continuation of topics like this - which is commenting on last week's article from Parimal Satyal. It makes this place seem more like a forum.)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383851&how=up&auth=b08033e2bc8777d014a82e7c3a23a1b6153101ce&goto=item%3Fid%3D23383548#23383851)

Actually, I'd be interested in an alternative web where ingenuity and risk-taking would be utterly forbidden. Just HTML, and a very basic subset at that. No Javascript at all, no CSS.

So much of the web would be better and more universally usable without "modern" cruft.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384114&how=up&auth=2bc5836868bd797f0254c5368c7e128ef442bd3c&goto=item%3Fid%3D23383548#23384114)

Who decides what is and isn't cruft? You?

Is data journalism cruft? Are web applications? Is Google Office cruft? What about the web application my parents have been using to order groceries during the pandemic - that has loads of JS, and loads of CSS to make it readable to anyone over 40. Does that qualify as cruft?

Are dyslexia friendly styelsheets cruft? Is Google Maps cruft? It's full of JavaScript. Are browser games cruft? I played QuakeJS last night and had a lot of fun with it. I was also using a WebXR 3D app the other day to preview a rental property remotely - is being able to socially distance myself cruft?

It's all cruft until you ask the people who use it.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384195&how=up&auth=ec336ec132294747523a5ef564d54da3c8f949aa&goto=item%3Fid%3D23383548#23384195)

That it *works* is table stakes. A web application your parents wouldn't be able to use to order groceries because it was so broken wouldn't even be discussed, it would be pulled off the Internet and replaced with something that works.

The criticism about cruft is one level up. Not about how to accomplish something, but how to do it in a way that isn't extremely wasteful of both computer resources and end-user's time.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384370&how=up&auth=2dc0965e378dcbd5a234e858a25fc70f9a94f77c&goto=item%3Fid%3D23383548#23384370)

Most of that doesn't belong on the alternative web I have in mind. It can keep living on the current one.

Usability features like dyslexia friendly fonts, large fonts, etc., belong in the browser, not on a web page. If anything, this would be *easier* on the alternative web.

The key idea would be that when you go to a URL on this alternative web, you know you're not going to get slammed with some cycle-sucking, RAM-sucking, virus-carrying, UI horror. More gopher-ish, but relatable to those who have used a web browser.

I can dream.

edit: Ha. Right now, this comment has 6 points, and my original above has -2 points. My illusions of HN rationality are thus reduced. *sniff*

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386325&how=up&auth=8de71fcdcd490cb351e973d4b721c7b23a9ff061&goto=item%3Fid%3D23383548#23386325)

\> Who decides what is and isn't cruft? You?

Browser vendors do. Popups were cruft. Flash was cruft. Not all the time. Just almost all the time.

Ever used Reader View? There's the great de-cruftifier! It doesn't work with web apps, but it sure works great on content. Perhaps some day browsers will default to Reader View, and the web will become more pleasant.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384003&how=up&auth=10eb00687525d83498c5db0c92d94a272c2afc90&goto=item%3Fid%3D23383548#23384003)

\> Actually, I'd be interested in an alternative web where ingenuity and risk-taking would be utterly forbidden. Just HTML, and a very basic subset at that. No Javascript at all, no CSS.

Definitely. A lot of the "ingenuity and risk-taking" are efforts to make the web something it was never indented to be (e.g. a binary(ish) application runtime/delivery platform) that has lots of downsides.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384551&how=up&auth=edc62385442e9710c1995a28d0775c306cd52af9&goto=item%3Fid%3D23383548#23384551)

  

I was thinking about this though not quite as severe. I would also love to see something like this in the end though. It sucks that as a mobile user I'm paying for analytics, unoptimized images, and poorly-written code when just simple markup and text would do. With the speed at modern networks run server-side processing shouldn't be as taboo.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385226&how=up&auth=5f5a36a5d3178968638d8bd254d40de6fd45d177&goto=item%3Fid%3D23383548#23385226)

One reason for a minimal web would be the idea that I could one-day be living on the far end of a rather slow modem as my only Internet connection. Sucking ten tons of Javascript/images/adtech down a link like that would be pretty awful.

Didn't think of it before, but your "server-side" suggestion could minimize some of the pain of that, I guess. Low-bandwidth VNC on the client to a browser that's actually running in a DC somewhere. Maybe a VNC add-on to block/freeze rapidly updating squares (videos, gifs, etc).

Not great, exactly, but would ameliorate some of this.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385814&how=up&auth=6b107e4238963c56c3afc15c8ecc67253a603548&goto=item%3Fid%3D23383548#23385814)

Alternative Web? The big "selling" point of Mosaic and other early Web browsers was bringing diverse information sources together into one application! Gopher, WWW, WAIS, FTP, and probably others, all available in one program, and a GUI program at that, unless you were stuck using Lynx over SLIP or some other bizarre excrescence of the dial-up age.

The fact Web browsers won rather disproves your whole notion.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386274&how=up&auth=43297a3f73a1ce0fefca6dadb99b141fa784d2dc&goto=item%3Fid%3D23383548#23386274)

I guess. The fact that no human can plausibly consider writing their own web browser from scratch these days seems telling. Nor really can any real human seriously consider finding a bug in a web browser, tracking it down in the source code, and submitting a patch.

Web browsers have become satanic mega-behemoths of inscrutable code. (I'm too lazy to look--are there more lines in Chrome, deps included, or the Linux kernel?) They are the utter antipode of the Unix philosophy, and arguably an engineering abomination.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23391868&how=up&auth=e71c7776f804d93343c6e41463727daf63e45232&goto=item%3Fid%3D23383548#23391868)

It exists right here and now. Disable javascript - almost everything works. You can disable CSS and images as well - just a few clicks in uBlock Origin on uMatrix \[0\].

People with Vision Lost browse the web. No need for separate web.

\[0\]

uBlock Origin (advanced user)

\* \* 1p-script block \* \* 3p block \* \* 3p-frame block \* \* 3p-script block \* \* image block \* \* inline-script block

uMatrix

\* \* \* block \* \* frame block

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385023&how=up&auth=d5ea397fbeed0e5c6c2089e0b1e03e62292e4366&goto=item%3Fid%3D23383548#23385023)

Totally appreciate what you're saying - some of the time I'm just in a basic text mood as well. (And am a fan of, for instance, legiblenews.com.)

Most of the time I'm a JavaScript maximalist, though. Crufty, dank and deplorable.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385076&how=up&auth=11cacd5ef93ef5eaff3133a8a5b2325794288f57&goto=item%3Fid%3D23383548#23385076)

I think most people haven’t internalized that Google is no longer a search engine but an answering engine.

A search engine tries to find all sorts of relevant information related to your query. The more the merrier (it’s searching after all) and then sorted in a way that puts the relevant results first. An answering engine, in the other hand, tries to minimize the number of results. In an ideal world, it would only return one thing, which tells you exactly what you want.

One example of this change is the fact that it’s no longer useful to go beyond the first page or so of Your results. Because anything down that low is irrelevant as an answer and is probably discarded by google anyways, which wasn’t the case when it was a search engine.

I’m not saying this is a bad thing. In fact, I suspect the majority of time the majority of people want an answer, and not a multitude of results. But I think this is what leads to google search changing in a way that does not meet many people’s expectations here.

It means google emphasizes stuff that gets people answers quickly. They parse text and reveal the answers on their page itself. And they are not very useful for exploring anymore.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386736&how=up&auth=6f329a074cd3832d99311b66dd8a133ba893c891&goto=item%3Fid%3D23383548#23386736)

...and the answers it gives are often not even right (or wrong).

*In an ideal world, it would only return one thing, which tells you exactly what you want.*

In Google's ideal world, it would also only return one thing, which tells you exactly what *they want to tell you*.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386913&how=up&auth=9f020b8de1afedd11e7aec602762a1d420ef5dc9&goto=item%3Fid%3D23383548#23386913)

  

I think this is true of any “answering engine” in an ideal world. In an ideal world, it would act as a function and return a single output for any input, because any particular question should ideally only have a single correct answer.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389121&how=up&auth=df61b3e0740b35245524b33e3a91220e3a34c0e2&goto=item%3Fid%3D23383548#23389121)

How would it decide which source to get this answer from?

Because let's face it, one of the biggest challenges with that idea isn't that there are tons of different valid answers to a question (though that could be the case for many political queries or ones related to art/media quality), but that hundreds or thousands of pages and sites contain the requested info, and search engines have to rank them in some sort of order.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389163&how=up&auth=05ff980b501efe915b06aef734f3c82df5f97e8e&goto=item%3Fid%3D23383548#23389163)

\>I’m not saying this is a bad thing. In fact, I suspect the majority of time the majority of people want an answer, and not a multitude of results.

True ! To give a concrete example... LONG FORM RECIPE PAGES - Should be on SERP 100+. It's gotten a little bit better, but still see sometimes a 2000 word article when I google something like "apple pie recipe" or "apple pie oven temperature"

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385918&how=up&auth=d82da16e5a07bf0f3918b551bb95c4dd28708f8f&goto=item%3Fid%3D23383548#23385918)

This meme is tired. We get it, Google makes money from advertising.

Your comment is same as "NYTimes is a advertising company hurr durr because they make money from advertising"

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390310&how=up&auth=b142f99307eaf30ff6ae01d1b72d4d9e9c7a265e&goto=item%3Fid%3D23383548#23390310)

No, I don't think you do get it. Originally, Google's experiment, the reason they came into existence, was to organize the world's knowledge and sell advertising to people who were seeking it, on the idea that you must be interested in something if you're searching for it. *That's* like the New York Times.

Now, Google seems to be trying to learn the details of all the *people*, and they're selling access to that. Their mission seems to have flipped.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386112&how=up&auth=76b55acf6ef8832ce21ec629e85f1ac64c2f0759&goto=item%3Fid%3D23383548#23386112)

  

Well that's a very rude comment. You are also using false equivalence to halt any discourse on the matter. Doesn't seem very safe.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385582&how=up&auth=3c646126ba027795805d919739ecea11bd5b605c&goto=item%3Fid%3D23383548#23385582)

  

Both, actually. They figure that if you can get all your answers from Google itself, they get all of the ad dollars and don't have to share. That's why they try to get the implied question answered with pages served from them if possible.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384714&how=up&auth=d97817a6c90d94e1dc4233523de61823d7f6d8f1&goto=item%3Fid%3D23383548#23384714)

One anecdote where their “Largest Contentful Paint” metric fails, and fixing degrades performance:

We have a large 300kb animated gif that takes up maybe 20% of the viewport above the fold. The gif demonstrates visually what our service does.

A couple months ago Webmaster Tools reported that page as being “slow” pointing to the large image download. So we decided to show the first frame of the gif as a (30kb) png file, and then swap in the gif 2 seconds after the page is fully loaded.

Except now the new “largest contentful paint” metric is failing on those pages because it includes the 2 second delay when the animated gif is swapped in. I guess technically they’re not wrong in how they’re calculating it.

In fewer words, Google doesn’t like anything being lazy loaded if it’s above the fold.

The metrics and how they’re calculated are questionable. We ended up optimizing for Google and removed the lazy load (ignoring that we think it’s a better UX to lazy load that specific gif).

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384908&how=up&auth=87e6b9f96bf9a47c2641043ef9296e9eeaf2f509&goto=item%3Fid%3D23383548#23384908)

\> We have a large 300kb animated gif that takes up maybe 20% of the viewport above the fold. The gif demonstrates visually what our service does.

You might be able to turn a 300kB GIF into a much smaller encoded video; as long as it doesn't have audio, you can autoplay it.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389369&how=up&auth=0007fe089a16dfe849bf3f7fc83b233162b3cbf5&goto=item%3Fid%3D23383548#23389369)

Interesting case scenarios: 1) a Site has a stupid big gif that shows logo and staff parties, basically adding nothing but sucking up bandwidth(Not your case)

2) Your case, where you actually add value-content with the gif.

Now the speed metrics are just that, speed metrics they "report" in isolation from "content".

So now my question is: Is Google's OTHER-content-signals good enough to overcome any penalty that might have been applied because of the speed ?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385440&how=up&auth=4715e7c25b349700e406d54cdb62ace6e0657cff&goto=item%3Fid%3D23383548#23385440)

That sounds like a nightmare. Is there any other way to delay the loading of the gif that doesn't negatively affect your score? Like a JS callback or similar.

As an aside, the other replies to your comment is very telling of the HN audience. Many of which aren't knowledgeable in the webdev field, but "they did it in the 90's", "use bleeding-edge tech" and "everything you're doing is wrong". Also IFRAMEs, hahaha.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385050&how=up&auth=c48ebbb2117843ebcd91c1c89518f79f4c315e09&goto=item%3Fid%3D23383548#23385050)

  

I will not stay on a site with auto-playing video or GIFs. I can't focus on anything with it there.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385801&how=up&auth=965d1c8e1204cae30909316040e073bd10ec5e1c&goto=item%3Fid%3D23383548#23385801)

  

Or you can scroll down. It's presumably a hero imagespace that serves to explain their product in the fastest way. 300kb for a gif isn't that big for such an inefficient type.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389854&how=up&auth=9e636f830ea48d0992b3b40530bfe877843bd006&goto=item%3Fid%3D23383548#23389854)

  

It takes me some effort to focus on most things. I'm not going to invest the energy to decide if the assault on my senses adds some value.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384930&how=up&auth=741a496139192d619a71c795c200e63b7a387c0e&goto=item%3Fid%3D23383548#23384930)

  

As a web developer who has recently spent an ungodly amount of time trying to make my pages meet Google's impossible standards for qualifying as "fast" on mobile, I sympathize with the author's point. But I think he's missing the even bigger picture. Personal computing is mobile now. And even though the phones have as many megabytes, kilotonnes, little clowns or whatever the device greatness is measured in these days, browsing the web on them is still slow as hell. And I would seriously entertain the suggestion that it's all Apple's evil plot if every Android phone I ever used didn't suck donkey balls for browsing the web. Whatever the reasons for this are, what's at stake now is not web's diversity but it's relevance altogether. I'd rather live in the world where web is needlessly optimized for performance than in the world of apps.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388242&how=up&auth=8076805bd7b8252fcce7c82b7cd01163cf15252f&goto=item%3Fid%3D23383548#23388242)

It doesn't help that ~every mobile device is 6+ cores while the web still largely pretends that there's only a single CPU core & that that core is getting faster. The web should have started adapting back in 2006 when this trend really become common reality, but it didn't.

So you're stuck with 1 shitty CPU core, and you're stuck sharing it with the browser & JS runtime (yes there's of course multithreaded aspects to the browser itself, but you're still sharing an awful lot of CPU time on your single thread with the browser). 1/6th to 1/8th the performance of the phone is the *most* you can achieve if you're lucky. That's a fucking terrible starting point, and nobody should be surprised the mobile web sucks ass as a result.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383785&how=up&auth=57acc89deb02fb0a7fa821f4941a07034e71beb3&goto=item%3Fid%3D23383548#23383785)

  

It's funny that Google is so large, that one way to grow their business is to improve the user experience of the internet as a whole.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384149&how=up&auth=88d5e07e64cd01a4416b14a25ec8a382f6984061&goto=item%3Fid%3D23383548#23384149)

\> Google is so large, that one way to grow their business is to improve the user experience of the internet as a whole.

(where user = advertiser)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384191&how=up&auth=1b9e6b7c870ac35545f518dcf479de12cabb11a4&goto=item%3Fid%3D23383548#23384191)

User == user

Advertiser == 0.6 \* customer

Their revenues are increasingly diversified, Google received far more dollars from myself and company via non ad revenues, more than $1000 / month now and growing (re: gcloud)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384206&how=up&auth=389bd34eb10ba2b4a3d34b746053572903ef1bcf&goto=item%3Fid%3D23383548#23384206)

  

User == user, in the sense of a drug user. Hooked up, can't say no, will suffer through almost anything, and is a disposable commodity from the supplier's POV.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383863&how=up&auth=74cf563e7aff4c1a0da0e8efa8557f0768954f43&goto=item%3Fid%3D23383548#23383863)

  

If this were true chrome would ship with ad block and they would accept cold hard cash for their services.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383911&how=up&auth=f45e251abd141ec0ae2edc6a37f0273ed6947a8c&goto=item%3Fid%3D23383548#23383911)

I tried this, I used it, no big adoption, product got killed.

Largely people prefer the free perception of the internet and wouldn't pay the prices it would cost if direct payments were made.

I believe its in the $x00s per year

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384422&how=up&auth=a8cfa4a25a13cf294e046b1f33f9e15f144f6bfc&goto=item%3Fid%3D23383548#23384422)

\> Largely people prefer the free perception of the internet

You have any reasoning behind this or are you taking the people who killed the product at face value? If I were to guess that product (i have no idea to what you’re referring) was designed to fail, like youtube premium.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384169&how=up&auth=dc6f823d4a99272f76a6b0d8f05ea0e1d5e418a2&goto=item%3Fid%3D23383548#23384169)

Google Chrome already ships with an ad blocker (it is in the "site settings"). It is, however, very weak.

I think Google would love to block ads more aggressively, but the conflict of interest is so obvious it is going to be raining lawsuits the instant they do that.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384237&how=up&auth=6ae527e64ac6b8ead21c9fbe50b264973e94f3e5&goto=item%3Fid%3D23383548#23384237)

  

A more aggressive ad blocker would block Google's primary source of revenue. So no, they have no interest in shipping an ad blocker akin to others.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384271&how=up&auth=4026a52cae0ef99db98f9202bd228672031050f8&goto=item%3Fid%3D23383548#23384271)

  

It really makes me wonder what the internet would be like if google had built microtransactions into a browser to support their sites instead, or as a complement to ads (e.g. an advertiser can pay for your time on the site in exchange for an ad, and google would only middleman the ad negotiation, not the transaction).

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386454&how=up&auth=68b1169e2c44b4d8e522f74a6887c7f9cd259878&goto=item%3Fid%3D23383548#23386454)

I think the surreptitious tracking is the real problem. I don't mind ads on podcasts, because their tracking is explicit and opt-in ("enter our show's promo code on the sponsor's product page.")

Likewise Google Contributor did not reduce tracking, which is why I never signed up.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385120&how=up&auth=ee4b722d7378a01f4825250d039835a2602ebd71&goto=item%3Fid%3D23383548#23385120)

  

Exactly the way it looks today, because most people aren't willing to pay for content.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23387579&how=up&auth=16a6530afbb5c60d6dcf6bed7e34535b20199e9e&goto=item%3Fid%3D23383548#23387579)

  

NY times has 3.5M digital subscribers. Netflix has 120M. There are 4.5 billion internet users.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383958&how=up&auth=8a98d3b99c23f1324c9c095b1c76b713fac23797&goto=item%3Fid%3D23383548#23383958)

  

There is no way that anybody would see /amp as improving the user experience of the internet as a whole other than an "product management by KPI" dumbed down organization.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384119&how=up&auth=663fa236d4fef7d72e20f39e8007cc52c6fd8c50&goto=item%3Fid%3D23383548#23384119)

  

AMP is a huge, huge improvement over the sites that it was intended to help: local news sites that are unusable, tab-crashing, malware-infested swamps. I don't know what their problem is, but they are like drug addicts and AMP is their rehab. Without AMP these sites are simply useless.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385113&how=up&auth=72ecd49ac9ea59eafcc9ec5f68f255214301a2d4&goto=item%3Fid%3D23383548#23385113)

  

I see amp as improving the user experience of the internet as a whole. Amp sites aren't amazing, but they are usually better than the alternative.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384800&how=up&auth=f68f78d6d33b107fb753e104632af8e24983c839&goto=item%3Fid%3D23383548#23384800)

\> web.dev is operating on some irritating assumptions:

\> 1. Smaller assets are ideal.

\> 2. Minimalistic design is necessary.

This doesn't sound right to me. Aren't the three new page metrics mostly targeting what happens when the page initially loads?

[https://web.dev/vitals/](https://web.dev/vitals/)

\> Largest Contentful Paint (LCP): measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.

\> First Input Delay (FID): measures interactivity. To provide a good user experience, pages should have a FID of less than 100 milliseconds.

\> Cumulative Layout Shift (CLS): measures visual stability. To provide a good user experience, pages should maintain a CLS of less than 0.1.

The first two are about initial loading. For the last one, you can avoid layout shift by e.g. reserving space for images that are yet to load fully.

For example, it sounds like your page could load 100MB of images with the most complex design ever, and it would get a good score as long as the initial viewport of the page displays quickly, is interactive quickly, and doesn't jump around as it's loading.

They sound reasonable metrics to me in terms of fighting bloat but with flexibility for web developers (as opposed to AMP). Who gets to decide the metrics is another issue though.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388838&how=up&auth=9673eb2db838bf0c324e6f762b7757dfd8366611&goto=item%3Fid%3D23383548#23388838)

If not Google, someone else must step in and set some standards. Either way, I don't see anything wrong, their platform, their rules. Don't like their rules? Don't use them. When less people use their products, they will listen to what customers want.

Having said that, what exactly do customers want? They want the best experience on whatever device they're on. This is 2020, there's so much that has happened since the 1990s. We can't simply keep using standards from the 1990s.

\> 22.82 Mbps will reliably download very complex web pages nearly instantaneously.

The author needs to come down from his high horse and use internet in developing countries. I was in India the other day for a client meet and I was on one of the largest networks there. I had a subscription to NYT and I tried to load an article and whoa, it took me 3 full minutes for the browser to fully load the article to the point where it was even barely readable. I'm not saying the network in India is slow, I'm saying, even with the best networks, when you're travelling your speeds will be in KBPS. If we don't have strict standards, the sizes of these pages will only grow and grow.

Later that day, I loaded the same article from my desktop again. The site made a gazillion requests in the network tab to so many advertising vendors and each of them had consistently sizeable assets. More than being offended for selling me out despite a paid subscription, I was offended how ridiculously unoptimized sites like NYT are, despite being a popular online, large scale publisher.

I'm happy such sites like NYT will be penalized if they don't provide their users a good experience.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383938&how=up&auth=c3ae33c4efb0640dd068868050a8c48844328b27&goto=item%3Fid%3D23383548#23383938)

Not sure what this article is arguing.

Sometimes you want to make a slow website that doesn't fit well on a phone screen?

Leaving aside the fact that you *can* of course do that, and that if I'm using a search engine on my phone I probably (usually?) don't want to look at your slow site that I have to horizontally scroll...

\> *Modern web design principles are very rarely directed at regular people looking to make a website on something they are interested in. Instead, the focus is on creating websites that perform well:*

\> *Don't use too many colours. Write short, catchy headlines. Don't let content be too long. Optimise for SEO. Produce video content, attention span is decreasing. Have a an obvious call to action. Push your newsletter. Keep important information above the fold. Don't make users think. Follow conventions.*

All that's true to some extent if you're making a *product* on the web and you have a few seconds to hook a customer before they move on. If you're making a website for enthusiasts in some niche, though, content is your draw and you can worry less about some of these things.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384333&how=up&auth=0548d064558809203d4c50d426464afce052b4b5&goto=item%3Fid%3D23383548#23384333)

*Sometimes you want to make a slow website that doesn't fit well on a phone screen?*

Sometimes you should have the choice of making a slow web site that doesn't fit on the phone screen. A large corporation shouldn't dictate how you present your information.

Sometimes you want to put a document on the web without having to pay someone to run on Google's treadmill of changing standards and policies for the rest of your life.

I'll take a crappy-looking web site with good content over an SEO-pumped disaster that provided no information.

Craigslist, eBay, and dozens of others didn't get to be huge because of their good looks.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384478&how=up&auth=7ddc389042700e8997f4a42b1862fd86989bbcbd&goto=item%3Fid%3D23383548#23384478)

  

Sometimes you can choose to make a website whose sole purpose isn't to attract Google Search traffic, and that's OK! Not every website has to rank in Google Search to be useful.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384741&how=up&auth=f5b5dc6b7983ab260bd3f18f01e4847b1f2af523&goto=item%3Fid%3D23383548#23384741)

  

but that isn't really true. google gets ~80% of the searches on the web. that means that if someone who isn't conforming to google's frankly arbitrary ranking system is being censored, to use strong language.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388271&how=up&auth=d9b2a97e3f290bf6c69cba1c7558bffdf62903e4&goto=item%3Fid%3D23383548#23388271)

\> but that isn't really true. google gets ~80% of the searches on the web.

Not every destination started as a web search.

Case in point, the list of links on this very site that we're all commenting on. This discussion didn't start with a google search. Google was never involed at all. Not *everything* on the web goes through google search. Nearly all *searches* go through Google, but there's a hell of a lot more to the web than searches.

As also evidenced by some of the largest & most visited sites driving a ton of non-search traffic - like reddit. And facebook. And twitter. And etc...

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385483&how=up&auth=8819d27350bb8363629ff06a955864ec57a436c2&goto=item%3Fid%3D23383548#23385483)

*google's frankly arbitrary ranking system*

Oh, it's anything but arbitrary. It's totally strategic, which is why people pushing back against them being able to dictate web policies is exactly the right thing to do.

I now see people link these "amp" web links, where the domain you are linking to isn't the domain you are trying to reach.

That's one step away from somebody seeing

```
    paypal.ampstuff.com
```

and thinking it's ok and then getting ripped off.

No.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385379&how=up&auth=fbb87f1a0f7abd8506c340de2f388b96f42a8d9b&goto=item%3Fid%3D23383548#23385379)

How does one do that when browsers have the search and address bars merged?

You content yourself with the users that type [https://](https://news.ycombinator.com/item?id=23383548https://) before your site name and never make a typo?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384476&how=up&auth=2bccf82a883ad73e9dc79259110c7a956a9d47f1&goto=item%3Fid%3D23383548#23384476)

  

I think we’re at the point with the internet where modern design is inversely proportional to good content. I find more stuff on half-forgotten .edu sites, old.reddit threads, and weird forums than anything “responsive” nowadays. Most of the nice looking sites are just regurgitating stuff from the older, rougher ones anyway.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384458&how=up&auth=fa3b26ddc3585155c3c0f3f68629bdef16aa0cc3&goto=item%3Fid%3D23383548#23384458)

The author seems to argue:

\- Small size is not always better, especially when the wait may be worth it for the audience

\- Minimalistic design is not always necessary, and in fact it's a good idea to take some risks in the other direction, if it could result in a desired outcome

\- Google doesn't have an intrinsic right to dictate best practices. In fact, the idea of a single set of best practices runs counter to the spirit of the web, in which a website can be a creative or cultural experience which transcends convention.

\- In addition, on that last item: The web \_can be\_ more than what it is now. So monolithic standards could easily get in the way.

\- Google is going to hold an event and tell visitors how to conduct "modern web development." The author is not comfortable with Google's singular focus on Google's preferred standard and mode of web development being The Only Way, so they are going to attend and push back.

It's a good post. Even the headline by itself resonates in a lot of different ways, especially if you've spent a lot of time on the receiving end of Google's dev messaging.

Speaking more broadly, quite often the blanket design advice given to web enthusiasts and subjective-values-driven creatives comes from the economic side of the web. It starts from "don't annoy your users" and draws a (suspiciously) straight line from there directly to "Largest Contentful Paint". This represents a potentially huge, complicating energy drain for a project that may have a lot of other important design parameters to start with.

In another way, it changes the question. The web wasn't designed as a way to get your customers really specific information as quickly as possible. There's so much more to it than that.

A lot of HN users are researchers from the economics-first side of things though, not artists, so this may be a bit hard to understand. It's like hearing yet another friend tell you they've signed on for a liberal arts degree.

Such researcher-consumers (who incidentally write some amazing online reviews, but that's another story) are also well known for getting frustrated at the slightest delay or sales pitch. Art on the web can end up, therefore, being perceived as a broken web experience, a bad sales pitch for an ephemeral and vapid product, as opposed to something which inspires or changes viewpoints. "I can't even find the site map!"

The web doesn't even have to be users-first--quite often what's best is a series of standards and compromises that alternately put creators and users first at different points.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386955&how=up&auth=fb2677eb05ed277a4a5b2e2dc084beec6608a5cb&goto=item%3Fid%3D23383548#23386955)

They’re arguing that the whole idea behind the web is that different people can try different things with different priorities and constraints.

The priorities shouldn’t be dictated by a single company.

I don’t fault Google for what they are doing (besides the AMP stuff). The problem the author is talking about is largely because google is the de facto way pretty much the entire world finds new stuff.

If website discovery was driven by blofs and the like wns people then added the stuff they liked to their RSS readers then the authors issue would be resolved.

Unfortunately that world doesn’t exist anymore and Google’s preferences end up dictating what all websites prioritize.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385240&how=up&auth=afef83994936b237a2f6d4e12baa9097f8b8beb5&goto=item%3Fid%3D23383548#23385240)

  

Anyone who can force the web developers to make more responsive, small, junk free, sites that focus on user than ads will have my support. I don't see anyone else making the attempt to force a change. The author is mistaken in their views.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383865&how=up&auth=fe23b64a2d440620773c15a022778d07bce56a00&goto=item%3Fid%3D23383548#23383865)

I thought this was going to be a reasonable article but its just another whine from a designer who wants to add another 6mb of pretty animation to a web page.

1 and 2 are totally wrong and 3 googles moving away from amp ant letting normal pages rank.

I have wasted to many hours of my time on conference calls with people like this.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386336&how=up&auth=4e7da177d31388ee1723bc9190e22f4d61f22904&goto=item%3Fid%3D23383548#23386336)

  

I keep telling people that search shouldn't be a monopoly but they just keep looking at me like I'm a crazy person

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383828&how=up&auth=748aeed3661b1f61298394707adef50309687bcb&goto=item%3Fid%3D23383548#23383828)

Google Search is in a horrendous state right now. Search results have been getting worse each year, with interesting information being buried 20 pages down.

I really hope they have plans to improve this or find an approach that works as a middle ground for generic SEO content.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383956&how=up&auth=55d0d04e963abdbd037d7ba627f1018f99df9525&goto=item%3Fid%3D23383548#23383956)

I don't know if it's a combination of overreliance on algorithmic rankings + seo or what, but if I search for something like "Panasonic GH5" (something I searched recently), I want to see the top two ranked items as the Panasonic product page, followed by the Wikipedia page.

When I run that search on Google in Canada, there is a Panasonic link on the first page (third link), but it's for the US store listing, which has less info on it than the normal product page.

But as you say, search is in a horrendous state. So is video discovery on Youtube. It seems like my front page recommendations on Youtube have turned to garbage in the last 12 months.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384327&how=up&auth=0b48182398cd123b47cc2a6c44f6a378a94d8d1d&goto=item%3Fid%3D23383548#23384327)

Maybe the idea is to encourage Panasonic to pay Google to get their result on the first page.

Maybe ten or fifteen years in the future, paying to Google (or Facebook, or...) will be the only way to have your web page delivered to anyone.

I mean, why should Google display your page to anyone for free, if someone else is willing to pay to have their page displayed instead. It's not like people are going to switch en masse to something else, just because Google results become slightly less relevant. And when paying becomes the new normal (e.g. it will become normal to pay to have Hacker News on the first page for "Hacker News"), the results will return to be more relevant again.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384859&how=up&auth=d079f2d2d067ce32efacd55f044b801001d6d1e3&goto=item%3Fid%3D23383548#23384859)

  

For certain niches, this is already happening. Pretty much every web hosting company nowadays run ad campaigns for their own brand, because other companies kept advertising on those keywords, and the only way to put their own web site up top is to outbid the competitor.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384228&how=up&auth=c034515e79d6053cd9adbc5d99a63b76799d74ac&goto=item%3Fid%3D23383548#23384228)

I agree that Google search is horrendous but Youtube is actually manageable. If you want decent recommendations you need to curate your viewing history. If you watch some random video and find a lot of annoying related videos showing up in your recommendations then go into your history and delete that one video from the history. Now Youtube will "forget" you watched that video and stop recommending things related to it.

I use Youtube in a very specific way: I subscribe to a bunch of channels that I like and only watch what those people post. My recommendations tend to be very focused around things related to my interests. Occasionally I will look up a random video for whatever reason and I'm always careful to delete it from my history unless I actually want more recommendations related to it.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389594&how=up&auth=2c497c0faa28d466fa1ed5b62235a0c203bf18c1&goto=item%3Fid%3D23383548#23389594)

  

I agree and will go further. I love YouTube, the content and the concept. I watch more YouTube than any other streaming service (except for Space-Force on NetFlix - damn it's good !). Sure not every video that is recommended will be what you like.. but it's quite a hard problem I think to recommend something in EVERY GRID POSITION that you will like.. Usually I'm willing to watch at least 2/5 to 4/5 videos being recommended AND I have "discovery" most of my fav channels I still follow to this day via their algorithms. But maybe it's just me :)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390349&how=up&auth=43021aa955ec87c1fb71ec5d764bf5816140c939&goto=item%3Fid%3D23383548#23390349)

  

About a year ago, my Youtube front page feed was pretty good. Then it has slowly degraded since then. I went from Youtube being the service I used the most to watch stuff to becoming much less interested. Most of my recommendations don't even come from my subscriptions.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390378&how=up&auth=6454c89eaa3bb3740ef38d15d3a8205089254d3f&goto=item%3Fid%3D23383548#23390378)

I like my recommendations not coming from my subscriptions. I check my subscriptions for new stuff often, so I want the recommendations to be other stuff.

But you're right, they outright sucks. They are definitely dynamic because I only have to show my son a single Roblox video to change it, but at the same times there are stuff that is repeatedly showing up that I have no interest in. Even stuff that I've told YouTube that I'm in no way interested in...

What I REALLY miss is a random category - for stuff that I would never otherwise see.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384969&how=up&auth=aa3a7acff400ceb7ad0bba28db117b67d9ba1357&goto=item%3Fid%3D23383548#23384969)

Youtube 12 months ago was less bad without me having to do anything.

Youtube can make me do work to improve my experience, but I do have another option, stop using Youtube's front page and just discover stuff via Reddit or search engine results.

I had a similar experience with Google News trickling up garbage news sources, and I spent way too much time blacklisting sources, and have basically given up on it.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384522&how=up&auth=5f2c734b5acc7b5c14696dfbdc2ebd1f0ca467fa&goto=item%3Fid%3D23383548#23384522)

  

They are relying too much on AI and "collective wisdom". The results you get now are what Google thinks you want based on what others want, not on what you are actually searching for. What you typed is now treated as a mere clue, not as a search key.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386181&how=up&auth=4439435a6f7649da668a1b1be96c0aa1d03a40e1&goto=item%3Fid%3D23383548#23386181)

  

Depends maybe Panasonics enterprise SEO game is weak - you should rank your product pages on page one

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390373&how=up&auth=f3c22d7131d79551dc39d7a1f23a604dfd23b464&goto=item%3Fid%3D23383548#23390373)

From the perspective of a search engine's end user, Google should find those product pages and set them at the top of the results whether Panasonic's SEO is good or not, otherwise I'm going to switch to a search engine that can figure that stuff out.

The onus is on the search engine to produce good results, because they're the one providing the service. Hell, that's why I started using Google around 2000, they had the best first page search results.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384285&how=up&auth=1f94dd0e957c28ff99848bf4e1e062b1919bd360&goto=item%3Fid%3D23383548#23384285)

*Google Search is in a horrendous state right now. Search results have been getting worse each year, with interesting information being buried 20 pages down.*

I ran into this over the weekend.

I had a question about something I took a photo of in a small village, and I knew a priest I met there would have the answer.

I went to Google to find the parish web site, and it's simply not in Google. Not at all. Lots of sorta-kinda matches in places thousands miles away, even when I specified the very unique village name, state, and ZIP Code.

So I dug through the pile of dross that comes home with me after I travel and found an old parish bulletin that had the web address printed on it. It turns out the church has a web site — a pretty nice one — but Google doesn't know about it. Or it's so heavily down-rated by Google that it didn't come up in the first seven or eight pages of results, no matter how I formed the search query.

So I went to the parish's web site to see if he has an e-mail address. The web site indicated that he is no longer the priest there. So I put his name into Google to see where he'd been moved. (I've been told by other priests that unless you're tied to a school or other institution, priests in America are shuffled around every four to six years.)

His name is fairly uncommon, so I expected Google to show me links to church bulletins or announcements about arrival or going away parties, or even church employee rosters, of which there are thousands on the web. But instead, it was page after page after page of SEO spam for "Complete phone number for $priest\_name!" "Is $priest\_name cheating on you? Find out!" "$priest\_name in your city want to meet you!" The few I clicked through just in case had none of the promised information.

I gave up on Google, and phoned the parish office when it opened this morning. He retired six months ago. Here's his phone number.

Time wasted with the company that promised to take all of the world's information and make it available to everyone: 20-40 minutes.

Time spent getting the information the old fashioned way: 2 minutes.

Thanks for nothing, Google.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384543&how=up&auth=ab7fe550fa06a71eb7ef599dc88209be35f63d13&goto=item%3Fid%3D23383548#23384543)

  

You are getting that because *other people* do not care about what you are searching for :( their AI is maximizing the chances of quickly finding what most people want, not what you want.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384617&how=up&auth=d847fecad31096b1575a281e275a7ce8e0309a0a&goto=item%3Fid%3D23383548#23384617)

  

Most people want offers to sell fictional criminal records and address records that don't match what I searched for? I don't think the AI understands what the word "most" means.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384671&how=up&auth=0dd95290d39ead31249d31a8c885f5e422f73330&goto=item%3Fid%3D23383548#23384671)

  

unfortunately, those websites are probably more popular than the church's website in question (or at least, receive more clicks from google search)

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385477&how=up&auth=c64c63cbb85b8f45a270f307771495b1cfd4f599&goto=item%3Fid%3D23383548#23385477)

That reminds me... It used to be fun to search about oneself, all kinds of weird references used appear.

Now there is just spam.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384104&how=up&auth=0b3950573d13b4910e7faa741a921a47502c5b15&goto=item%3Fid%3D23383548#23384104)

\> Google Search is in a horrendous state right now.

I bet they simply optimized for the *average* person on the web, and we're outliers.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384107&how=up&auth=048cb327a4af62d1a7b425e3299721bfa1a6c291&goto=item%3Fid%3D23383548#23384107)

  

I have to append 'reddit' to a lot of queries now to find relevant information it seems. I was researching standing desks recently and was having a hard time getting through the cruft with regular google searches.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383869&how=up&auth=f54f219554322bc14b6974df8f044e82ea4425c8&goto=item%3Fid%3D23383548#23383869)

I would agree search seems to have gotten worse.

I wonder how much of the search abuse / manipulation they are dealing with given the current situations and upcoming elections?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383939&how=up&auth=57e791aefa87a7ac964dfcb971855839ee607b39&goto=item%3Fid%3D23383548#23383939)

This seems like a common claim here on HN. I would expect the creativity of the world's SEO hackers to outstrip any single team, so I expect you'rer right. But I struggle to find queries where interesting information isn't in the top handful of links.

\[badgers in montana\], \[while loop python\], \[how to fix noisy refigerator\], \[nude stallman\] all do just fine. Are there veins of queries that are particularly polluted? Even \[homeopathy covid\] is pretty good.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384298&how=up&auth=38f8cb6447420aec593a950b9326385dec07b842&goto=item%3Fid%3D23383548#23384298)

*SEO hackers to outstrip any single team*

SEO hackers are taking advantage of Google's biggest weakness: they are an advertising company that makes money on search ads.

If search were run by a nonprofit like Wikipedia or the Internet Archive, it could be made to filter out sites with ads on them. SEO hackers would have no way to get their foot in the door unless they drop all of their ads, removing their own revenue source. This would create a space on the internet for non-commercial activity to flourish without ads and all of the tracking garbage that comes with it. A form of cultural ad blocking that, in the long run, could be a lot more effective than the technical arms race of client-side ad blockers.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384088&how=up&auth=7f5a083476c9e08d63bfc0fa21b6b71abbefd9e7&goto=item%3Fid%3D23383548#23384088)

Searches on highly-specific/technical terms often fail for me. Also, for programming, I often get spammy sites instead of more "official" sources. For your example, the while loop in python, I would expect the official python resource to be first. I find this even worse in other languages.

I would prefer not to see W3Schools, Tutorialpoint or GeeksForGeeks to be so highly ranked. This problem is even worse when I search for ML stuff, with pages upon pages of Medium blogspam.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384302&how=up&auth=b75bebb3f2262d2c0b850db8941a5251133f7986&goto=item%3Fid%3D23383548#23384302)

  

Recipes are a good example. Not only am I confident that Google isn't providing the most useful or authoritative results, it's easy to see that they have forced authors to morph their content into a terrible cookie cutter format. Scrolljacking, obnoxious ads, and pages upon pages of introductory text are the norm. At this point I often use image search and just guess at how they made it rather than try to slog through the results.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384105&how=up&auth=1d1a23c37d9e3a1b22a4ad3189f56e25d03c2a21&goto=item%3Fid%3D23383548#23384105)

  

The search AI probably opted out because of your preferences... I often search error messages, but sometimes I don't find anything and I think to myself: - Am I the only person in the world who got this error!? Or I finally find a forum post and the answer is "just google it"

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384047&how=up&auth=a18fb2b381734e9e647cbbf347c4b80fffaddf4d&goto=item%3Fid%3D23383548#23384047)

I tend to think search results could benefit from a little bit of curation.

For example, when I search anything HTML, CSS or Javascript related, W3Schools manages to be the top link in many of the cases.

While W3Schools is fine, I guess... I have to ask if they truly represent the best result for my search query.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383988&how=up&auth=e10e902bf6f1c191862f14e030563a0bfd6f534c&goto=item%3Fid%3D23383548#23383988)

  

Did you actually search “nude stallman”? I can’t bring myself to do it for obvious reasons but I am curious what you saw.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384151&how=up&auth=5145d4b32dfba841c13ba4ff0569881cccc8d5e9&goto=item%3Fid%3D23383548#23384151)

  

The worst recesses of hell, lurking in the back of your mind, suddenly brought to the forefront. The sort of thing you sleep to get away from.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386814&how=up&auth=c42015eb5ccf0ceed54905b76f1f6e7b4fee2e4d&goto=item%3Fid%3D23383548#23386814)

Google Search is an index, it can do whatever decision it like. If we don't like it, we can use other indices, even better, we can build more alternatives.

The web is a open network. Anyone can share content as well as indices. I know it's mostly impossible to beat google, but niche indices has their place to shine.

For example, here, HN is an index of hand picked (mostly great) content, and there are multiple "unofficial" HN variances. See? the web is very diverse and free.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389517&how=up&auth=e3d6f4d4f351129c48fe3635431a56e7062394a5&goto=item%3Fid%3D23383548#23389517)

  

\>5. Rally a group of developers and PR to bash Webkit as the only one not implementing those flawed API and name it as the new IE.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383680&how=up&auth=6f1675ea413e7bcfe36ca81751574c68e0a74702&goto=item%3Fid%3D23383548#23383680)

Google has largely made the internet a safer and more efficient system by pushing standards through their market dominance.

Is this a bad thing?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383734&how=up&auth=7aefd65946d193438ab43ae1740ea3cb00d983d3&goto=item%3Fid%3D23383548#23383734)

My biggest problem with Google is that in the 2010s they began flagging sites that had too many links as "link farms" - this discouraged bloggers from posting blogrolls and killed many directories. This really damaged the Open Web that the author is talking about. You saw a widespread abandonment of blogs during 2011-2015. (People stopped seeing traffic to their blogs and just assumed blogs had died due to lack of interest.)

In a way, yeah, they made the Web safer. And cleared it out almost completely in the process.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384324&how=up&auth=668d25c6e98343db1df57d02de1dfc89065d89fe&goto=item%3Fid%3D23383548#23384324)

  

The disconnect between the expectations of impact and the real impact of big tech experiments on the populace is perpetually surprising.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383787&how=up&auth=729a7f63208253d092b1e62a2061ebd8a18fbaf6&goto=item%3Fid%3D23383548#23383787)

What about the people who abuse Google search to promote bad things?

Should Google not adjust their algorithms to demote bad or harmful content. There are two sides of the coin.

Is it really much different from the security cat and mouse game?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383982&how=up&auth=fae98abe01829a6724ec91c6b68ef8df2297381f&goto=item%3Fid%3D23383548#23383982)

It is a private platform, correct?

Would you prefer no search or what we had before Google?

What would search look like of they did nothing? What would the world look like over the last 20 years?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384627&how=up&auth=04a1ed1f375bdbdccd2345a743888b546908bb64&goto=item%3Fid%3D23383548#23384627)

You can't really say "before Google" like they've been the same for twenty years. Google's search *used* to be really good. They would actually use what you typed in the search box to perform the search.

Then Google started adding more portal-like features and using NLP to perform searches on what they wished you had entered in the search field. They also started tailoring search results to your past search history and whatever profile they constructed about you.

Some people might want a natural language question answerer, others might want a search of only current events, but some definitely just want to search for content.

Google has catered to the former at the expense of the latter. They try to stuff all their different modes into a single text box and display them on a single results page. There's no segmentation to clearly different functional modes.

For me I'd love to see Google go back to actual web searches. Support Boolean operators and term quoting. Return me *only* search results without offering me shit they *think* I want to see.

I abandoned Google as my main search engine in favor of DuckDuckGo years ago. While not perfect they at least show me actual search results. If I want other modes of search like video or news I can click those tabs but they don't force that content on me.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384749&how=up&auth=5462ad2c61c889c8702b7032f0a683cb819a9ddc&goto=item%3Fid%3D23383548#23384749)

Arguably other companies would have taken the burden, and it could have been for the better, who knows.

We might not see any obvious candidates for that, as Google was dominant and they had no market access.

Imagine a timeline where Palm ruled the phone market, and we’d be here asking rhetoric questions about what it would have been if Palm didn’t do it.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384246&how=up&auth=6fe2e60ebcc7dfb0e18d55343ceb87d0793fb93c&goto=item%3Fid%3D23383548#23384246)

  

I think Google is dipping below the standard of Altivista (adjusted for amount of content). It was out there you could find it but it it might take clever search strings. But it was a tool that worked for the user and priority was helping people find what they want. Vs helping people find what advertisers want now.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384075&how=up&auth=84fac5b46962d38594b4686ad3e4fd4f11f299d8&goto=item%3Fid%3D23383548#23384075)

  

If by "made the Internet a safer and more efficient system" you mean "a non-stop barrage of Pinterest results", sure.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383716&how=up&auth=a42890eb37e84e6384695d67907de6a79a47e2af&goto=item%3Fid%3D23383548#23383716)

There is always the trade-off between higher quality through what is essentially regulation and standards and squeezing out those who don't comply (which disadvantages new entrants).

With drugs, we weight that trade-off heavily towards higher quality over new entrants. The question is, is that an acceptable trade off on the web?

Reading this, I now think I should go put AMP on my personal blog. Before that, I needed an HTTPS cert. Before that, I needed to confirm I owned the site to Google.

All things which may make the web better, but it certainly increases the operational burden and may discourage others from bothering in the first place.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383740&how=up&auth=c5c0858ccf430702d722be9f7254ff4335934020&goto=item%3Fid%3D23383548#23383740)

Push a static site to netlify for free and all of this is taken care of you for free.

The burden is necessary given the proliferation of bad actors

I would not recommend AMP, but there are dozens of standards that are not part of what the public sees, low level enough they don't care to see. These are the important things Google has caused the world to adopt as best practices. You don't have to have http, but you are telling users you don't care about their security. This was largely pushed by green/red indicators in the URL bar.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384182&how=up&auth=1f0ee0db95206cbc5765b598517b7bfe26f996a8&goto=item%3Fid%3D23383548#23384182)

\> *Push a static site to netlify for free and all of this is taken care of you for free. The burden is necessary given the proliferation of bad actors*

This heavily pushes the web toward centralization, which I see as a really bad thing, in many ways the cure is worse than the disease. It's happening in so many ways (have you tried standing up your own email server?) and this sort of thing drives it the hardest.

I don't think Google is all bad, in fact I appreciate a lot of what they have done for the world (you mention some of these things). But as with nearly everything in life, it's complicated. I worry a lot that we're headed towards an internet where the individual is at the mercy of organizations to allow them to have a voice.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384386&how=up&auth=224f729db193cbd3e71a58185b5930737b9a3978&goto=item%3Fid%3D23383548#23384386)

\> The burden is necessary given the proliferation of bad actors

But the bad actors don't really abuse technical standards. They abuse links. The only part in Google's list of criteria that has largely remained untouched in the last two decades and is still *the* factor for ranking. So much so, that I'm confident that, if ranking factor relevance was a search result, the first page would just be the same result over and over: Links.

That's the reason for the centralization of power: those with more links will be ranked on the top, will have more visibility and, you guessed it, get more links. Guess what happens: they then start to sell either links or they rent out subdomains and folders on their website.

Google, as a company, does not care about bad actors. Some teams in Google do, but they are not the ones setting the policies.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384037&how=up&auth=e4c07c0bd9dd34dfc1e4a9fcc3c8824cc21a5b54&goto=item%3Fid%3D23383548#23384037)

  

But google isn't pushing, it's baiting. And what you get is all websites look and act the same. A lot of creativity is falling through the cracks. And it's not just google. Why did we need og: tags and twitter:cards when meta tags are already there

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383861&how=up&auth=aece3581d27af72daac8d0393fdec5f415226a7d&goto=item%3Fid%3D23383548#23383861)

  

My answer is zero, but most people's answer is much larger. Having said that, how many Google services and systems are there for *us*?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384193&how=up&auth=763e9ef575df168ae71f7409d6ef9f9f2a920ca7&goto=item%3Fid%3D23383548#23384193)

None. And I would not trust a service today that depends on any Google service either.

I'll visit YouTube for free entertainment sometimes, but I hardly depend on it for anything, and I really wish more creators posted their content elsewhere, even at a price.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384470&how=up&auth=6775ddc6149c625460dd437f9233a320d93132b3&goto=item%3Fid%3D23383548#23384470)

Nothing that they actually made themselves after I (I'm not OP) have stopped using Google search, it's just YouTube now.

What has Google actually created that's successful, in house, other than search & gmail?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23388769&how=up&auth=ac6cf75c7772a9b6860d1f8dac4c88866d1cc197&goto=item%3Fid%3D23383548#23388769)

  

nah buddy, google is a leech in the way the Romans weren't. Not even a comparison, google is not taxing you it's stealing your content and your users

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383833&how=up&auth=dccdf9741db74c9c8c4a3c8b3e7be34fba7de219&goto=item%3Fid%3D23383548#23383833)

mhh\_\_\_ types this while using chrome (open source) on android (open source), after reading their email in gmail and searching for the latest cat dancing videos on youtube. The sad reality

most of the folks who claim never to use google or google never makes something available - almost always hot air.

I do remember hotmail and MSN and AOL which preceded gmail, gmail was really pretty great when it came out.

I think microsoft may oddly be coming back a bit after the balmar years. I'm not a huge fan of facebook taking over (yuch).

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383930&how=up&auth=95e4e2563a0e6f760a35a11f2818855cc9d1e2b7&goto=item%3Fid%3D23383548#23383930)

  

Chrome isn't open source, and a large part of android isn't either (google play services). Gmail is quickly becoming a walled garden itself (anyone who runs their own email service can tell you that). And YouTube is a hot mess.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383882&how=up&auth=a5fb8b56005713968c582e7ed6cc96265c717a85&goto=item%3Fid%3D23383548#23383882)

  

You’re only considering the (debatable) positives (chrome sucks ass, folks). If you can’t engage in a good faith discussion why bother posting?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383931&how=up&auth=aa829915a3f999dac6a362e28d554f07c878b7dd&goto=item%3Fid%3D23383548#23383931)

You must not remember the web before google and google funded firefox!! This whole "google has never done anything" meme just seems ridiculous on its face.

Google took on and basically CRUSHED some major market players and powers (Microsoft basically lost the entire web and handset markets from a monopoly position) as a result of google service offerings.

Check out how much money they pumped into firefox as well - that used to be a major part of their push vis a vis IE.

Regardless of how much google "sucks" - they seem to have at least some things that folks like.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384222&how=up&auth=9db1429d2c5c713577d69dde61e036135f6716ec&goto=item%3Fid%3D23383548#23384222)

  

Right, well given that they HAVE obviously done a lot of things, I would interpret them to mean “they haven’t done anything I’ve liked or wanted or expected”, which is certainly fine to express. I don’t see why this justifies brushing away google’s decline with “but their products have engagement”. It’s like arguing because people buy an iphone, the iphone is the smartphone people want—in reality it’s just necessary and mildly better in some subjective way than the competition.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23394500&how=up&auth=a24bffc2ba0842de61679f2977380a1c14eeb999&goto=item%3Fid%3D23383548#23394500)

  

Again, I think you don't realize how substantially better the iphone was compared to the competition (which then has worked to copy the iphone).

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23394482&how=up&auth=87d23646d990a535f1ce2485417f8b0d719aca0a&goto=item%3Fid%3D23383548#23394482)

Interesting - I'd never heard of COSS.

I'd thought they were doomed (ie, no linux cloud offering expected, no multi-platform or open source offerings). Windows Mobile did crash and burn, but Azure actually has linux containers (most common type I think) and their other stuff is sometimes open source / linux friendly now - (SQL Server??) it's whiplash for those of us who were around for the EEE period.
***

==**113864**== Words

- **[Google Is Not God of the Web | Hacker News](https://news.ycombinator.com/item?id=23383548)**

# "Google Is Not God of the Web"

*26-07-2021 12:57* 

> I agree with the general thrust of the article, but not a lot of the details. And then there's this:> Our phones have as much RAM as my “studio” work desktopThis is unlikely to be true. From what I can find, the latest iPhone has 4GB of RAM, and Samsung is up to 8GB (and they are growing this stat fast to be sure), but no "studio" desktop made in the last five years is going to have that little.> 22.82 Mbps will reliably download very complex web
> pages nearly instantaneously.This is definitely not true. It is true that the download time is not large, but between DNS and TLS latency and the fact that most "complex" web pages are built of assets from dozens of different servers, your actual wait time for the assets can be quite long. But even if you discount that, the render time is probably longer than the download time. If your page is that complex, I hope it's very beautiful to look at.
![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384262&how=up&auth=402e1aed7ce751f797396c600b3f79f0a7708ab6&goto=item%3Fp%3D2%26id%3D23383548#23384262)

I agree with the general thrust of the article, but not a lot of the details. And then there's this:

\> Our phones have as much RAM as my “studio” work desktop

This is unlikely to be true. From what I can find, the latest iPhone has 4GB of RAM, and Samsung is up to 8GB (and they are growing this stat fast to be sure), but no "studio" desktop made in the last five years is going to have that little.

\> 22.82 Mbps will reliably download very complex web > pages nearly instantaneously.

This is definitely not true. It is true that the download time is not large, but between DNS and TLS latency and the fact that most "complex" web pages are built of assets from dozens of different servers, your actual wait time for the assets can be quite long. But even if you discount that, the render time is probably longer than the download time. If your page is that complex, I hope it's very beautiful to look at.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23386195&how=up&auth=ed771c2a8f4386e3af294839c8df97ba6341ec2b&goto=item%3Fp%3D2%26id%3D23383548#23386195)

And we are allowing it. From the dangerous tactic of allowing them to MITM all users via the AMP platform, to pushing their features only in their browser. A browser, which I may remind, was pushed to success by abusing their market position.

Had Google pulled this in the 90's they would have been attacked like Microsoft.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23389616&how=up&auth=f2d818fb0ad1618a18535e4de0843a4ea9609e42&goto=item%3Fp%3D2%26id%3D23383548#23389616)

I see a lot of hate for SEO - Sure it can be use for crappy things but so can a lot of business functions. I see a lot of complaints about ppl saying "oh but this stupid page outrank company abc or the page they would expect." I am just thinking out loud... if we are willing to employ "specialist" lawyers, accountants, programmers etc in our business, why do we balk at employing a SEO specialist as a specialist business function?

There are many good seo companies(true, you have todo your home-work, but that is true for other service providers as well).

The dream is of course to not have to use them and just reply on Google and it's good nature and or algorithms... But is that not saying.. Oh we will just relay on never getting sued and therefor never need a lawyer cause, crimes are bad ?

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385297&how=up&auth=308ac5bb8e3e61d5610b78559f18494ac09498b5&goto=item%3Fp%3D2%26id%3D23383548#23385297)

  

The web is optimized for Google Chrome, not the inverse. It's not surprising. Google is an advertising company with >90% search market share. There is little competition in the economy, only product differentiation.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23387866&how=up&auth=0d52b838393056ea6e0a7823ce752eaa0dd827b7&goto=item%3Fp%3D2%26id%3D23383548#23387866)

Didn't expect something as silly as this, especially the assertion that page sizes don't matter and since internet speeds are going up, web people are free to use it.

I don't see internet costs going down per MiB. Not everyone is on an unmetered connection. And users expect the large amount of bandwidth to be utilized for Netflix or something like that.

And how do you say Google is being evil for doing this? Even if there was no search monopoly and imagine there were two competing search engines. I think both of them would factor page load times in search results for better user experience.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390049&how=up&auth=fb3b1d78b482f25946488d0422d568f65bdee1fa&goto=item%3Fp%3D2%26id%3D23383548#23390049)

\> The entire point of the web was to democratize and simplify publishing \[...\] But the iPhone's \[...\] shitbox performance means we're all sort of ready to throw that progress away.

A hilariously ignorant statement. Simplified and democratized publishing doesn't require one smidge of javascript, not one pointless tracker cookie, not a single facebook pixel, no hideous autoplaying videos, not even a jot of CSS. It needs nothing but HTML and text, rendered plenty fast by any computer made this side of 1995.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385078&how=up&auth=eca821412491915d7be5655cf3ef6d7ff8a6bcc9&goto=item%3Fp%3D2%26id%3D23383548#23385078)

  

It would be nice if you could specify preferences. For instance, if you hate tracking and ads, you could tell google that and it would down-weight those results.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384743&how=up&auth=85a87bab503ffa7bb39bdbb3f0396c8919df4672&goto=item%3Fp%3D2%26id%3D23383548#23384743)

  

It thought I be in favor of whatever this article was arguing but then it went in a weird direction by arguing against certain things that are just considered good practice but its bad now because google is saying it. Like yes, I would consider it a good thing to have lighter websites. Unless your site is catering to some niche that *needs* to offer 1 to 1 perfect image quality there no reason to not compress your assets.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384236&how=up&auth=e7dc446efbeb80ba6988f70e8298ba40e701298b&goto=item%3Fp%3D2%26id%3D23383548#23384236)

  

Casual users don't care about details in user experience, when you innovate casual experience they will consider using new search engine.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384849&how=up&auth=b3afd52f687cd5c41a2f41e05b78d0de3cdd7bf0&goto=item%3Fp%3D2%26id%3D23383548#23384849)

  

I recently began having a lot of problems with Chinese "searchbot" traffic for a website. Filtering it out, my load went down by two orders of magnitude. It made me wonder how much of the purpose of this sort of thing is SEO. And how much slower Google is making the web for everyone by ranking on it, and therefore encouraging the shenanigans.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23390281&how=up&auth=0cb1c2021b13c23921d25cee42ee2fb0b9ecce80&goto=item%3Fp%3D2%26id%3D23383548#23390281)

  

Every website is different, but if a single bot is bringing your website to a crawl, you should probably start caching a few things and working on performance.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385283&how=up&auth=12a85e064d33df52eda773105262e1164e19a298&goto=item%3Fp%3D2%26id%3D23383548#23385283)

  

I wish there was a way to index the web which was not so susceptible to marketers gaming the ranking system; it is clear Google has lost the battle there. Moreover, I don’t believe it is in Google’s best interest to surface the best results for me, but those that will generate them the most revenue.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385395&how=up&auth=d3a1bb8b7166e6698ac3887bd516ce86a94112df&goto=item%3Fp%3D2%26id%3D23383548#23385395)

  

Many inlinks are good for search ranking - people create fake sites and spam. domain is important for search ranking - people pick domain after search keyword. Faster pages rank higher - people make fast websites. Quality content rank higher - like if that ever going to happen.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23383901&how=up&auth=cb54f22373e039af9614848e72cb8195efbf7abc&goto=item%3Fp%3D2%26id%3D23383548#23383901)

  

God, how? Like, in the monotheistic sense or the polytheistic sense? If we're going poly, then Google is definitely one of the Gods of the web. Maybe even the top God, but there may be some competition there.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385030&how=up&auth=43fcb49942989cd91ba3f7630cfc1cddf1817c05&goto=item%3Fp%3D2%26id%3D23383548#23385030)

Google is the God of Control of the web. It thinks it knows what the people want, but it's just using its influence to make it look that way.

The only difference is that Google isn't even aware that's what it's doing.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23385162&how=up&auth=213e65883109b49429a0ad3418980faffb5a98ab&goto=item%3Fp%3D2%26id%3D23383548#23385162)

  

My favorite Google war story is implementing a web application using Google's polymer, only to watch their Google bot choke on crawling the site. It took about a year for them to get their bot working.

![](https://news.ycombinator.com/s.gif)

[](https://news.ycombinator.com/vote?id=23384759&how=up&auth=b546c3b4f9e992c107c86bf64825e8c9a6a5d91e&goto=item%3Fp%3D2%26id%3D23383548#23384759)

The article is an unexpected take on what I would have assumed "the basics of web development" that would not be argued against. I would like to touch to some of the points here, as the arguments of the article were not very clear to me:

\> The simple assumption that it is always better to have the smallest page possible – that images should be resized and compressed to hell and typography/other elements should be few in number. I strongly agree with this statement overall, and the article doesn't seem to provide any counter-arguments against it. We need to serve the smallest page possible because the larger the page, the more resources it consumes, it is that simple. Every \_unnecessary\_ byte added to a page literally translates to more storage for the page, more processing power to prepare the page, more data being sent on the wire, more data on the client-side to interpret the given data, and all these add up to more energy being used to consume that page and more resources being wasted. If I can remove one byte from a page, this is for sure a win for everyone, one byte is one byte, whether that saving is relevant considering the scale and the effort is a whole another discussion, and the claim was never "send the smallest page at all costs". Considering the time and effort, if there is a way to send a smaller page, then do it, it is no different than turning the lamp off of an empty room, just on a different scale.

\> Instantaneous page loads should be priority over any other standards of measure for a web page – like interesting design, for instance. I have never seen such a claim anywhere before, needs citation. As a developer, I think the look and the feel of the pages are as important as performance or efficiency, and web on its own can be used as an art platform, which would make this whole point irrelevant. Again, the overall point is this: if you can offer the same thing with smaller pages witha reasonable amount of effort, do it.

\> Minimalistic design is necessary. I have never seen such a claim, needs citation. As a user, I prefer cleaner design over fancier things, but this is neither a "rule" nor the industry standard. There are various research being done on this topic and I am no expert on it, but a joint research \[1\] done by University of Basel and Google/YouTube User Experience Research shows that the users perceive the cleaner designs as more beautiful, making the point that if the user perception is a goal for the given webpage, then keeping things simple might actually make a difference there. Again, depends on the use-case.

\> 22.82 Mbps will reliably download very complex web pages nearly instantaneously This is a pain I am living with every day. I have a 4 year old mobile phone with 6GB of RAM, and it takes at least 8-10 seconds for Medium to be usable over a ~100Mbps connection, combined with fetching the page and rendering / interpreting it. This is exactly the point I was making above, if the page was smaller, it would have actually made a difference of seconds. The same device over the same connection at the same time opens the bettermotherfuckingwebsite.com in under a second, so, there is something to be seen there.

In addition to that, even if I had 1Ghz connection, a 1-byte waste is a waste, irrelevant of my connection speed. I am not talking of the effort of saving that byte, but it is important to acknowledge the waste.

\> Google has the right to dictate “Best Practices.” This is a point that I agree with more than the other ones, but this seems to be a separate topic to me. The previous arguments were against the practices themselves, and this one is against the entity that is supplying those practices. Even though I agree with the majority of the points there, it would have been a more informative read if the claims and frustrations there were stated with better point-by-point explanations and data to back those claims up. Google having a huge power and monopoly to push people to certain standards is a big problem, but it is not clear in the article whether the author is arguing against the practices or Google itself.

Overall, I believe it would have been a more resourceful article if the points and claims against the given practices were backed by better alternatives and data. We all accept that more data is more processing power + more energy, therefore trying to minimize it is an important goal, if the author thinks it should not be, then would be more interested in the answer of "why?" rather than a rant against long-standing practices.
***

==**12100**== Words

- **[Google Is Not God of the Web | Hacker News](https://news.ycombinator.com/item?id=23383548&p=2)**