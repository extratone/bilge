# "the actual guide to being really annoying on the internet (part two) - ill" | 

*07-05-2021 07:29* 

> This is the second part of ‘a comprehensive guide to being really annoying on the internet’, an attempt to explain how this blog works. This is mainly just a technical explanation so I’d recommend reading the first part before getting mad at how boring this is. The Basics This website is hosted on Neocities, a […]
**This is the second part of *[‘a comprehensive guide to being really annoying on the internet’](https://ill.neocities.org/index.php/2020/07/06/a-comprehensive-guide-to-being-really-annoying-on-the-internet-part-one/), an attempt to explain how this blog works. This is mainly just a technical explanation so I’d recommend reading the first part before getting mad at how boring this is.***

### The Basics

This website is hosted on Neocities, a free Webhosting service for cool internet people. Neocities is a static hosting service, essentially meaning that you’re only able to upload websites that consist of HTML, CSS, and JavaScript files. In normal person terms this essentially just means that you’re unable to directly run a typical content management system (or CMS) such as [WordPress](https://wordpress.org/) or [Ghost](https://ghost.org/), leading to the necessity of this blog post. I ended up choosing Neocities for three reasons – it offers a respectable free tier, it has a massive in-built community of scarily friendly people, and it’s currently really easy to claim a relatively short subdomain. If you have the money to spend on upgrading beyond the free tier you can use your own domain, but I’m always broke. By default you’re given 1GB of storage space, which seems relatively small until you realize how tiny static websites end up being (this blog is currently 13.7mb, which is probably quite bloated by Neocities standards). In order to set up a blog using Neocities you’re only really given two options – either code something by hand using HTML and CSS or use a piece of software called a static site generator. A static site generator essentially builds your website for you, collecting all of your posts and compiling them into a bunch of HTML and CSS files. This differs from typical CMSes as the whole website is generated at once as opposed to on-demand, making your blog significantly faster and lighter (which is why Neocities can let people host their sites for free). Typical examples of static site generators would be [Jekyll](https://jekyllrb.com/) or [Hugo](https://gohugo.io/) – both of which I’m too dense to be able to use properly.

I’ve had extensive experience using WordPress in the past and it feels like the blogging software that I’m most comfortable with – sure it may be bloated but it’s versatile, easy to learn, and fully open source. However, how do we go about using it to run our Neocities blog? The answer is both simple and convoluted – we run WordPress locally on our computer, use a plugin that converts our site into a collection of static files, and then upload said files onto our Neocities. In order to run WordPress locally I use a program called XAMPP – this program essentially just sets up a small, local server that we can use to set up our blog. There are some alternative programs that do the same thing, but I have zero experience with any of them and won’t even pretend to know as to whether they’re worth using. Once we have XAMPP installed we can set up WordPress as normal, writing posts from our browser as if we’re on an actual server. Once we’re ready to put our blog on the internet we can use a WordPress plugin called WP2Static to convert our site into HTML files that play nice with Neocities. From there it’s just a case of pushing your changes to Neocities, sending links to your friends, and eventually realizing how much of a waste of time blogging is. This isn’t necessarily the easiest, fastest, or lightest method of running a blog on Neocities but it’s what seems to work for me – at the end of the day, it doesn’t matter how high-tech your website is if you just leave it to rot after a week and your focus should be on finding what enables you to focus on writing as opposed to the “best” system possible. It’s easy to fall into the trap of endlessly modifying your workflow as opposed to getting actual work done – your setup needs to just work and not draw attention to itself.

### The Set-Up

1\. For the interests of your sanity, I’m not going to go through the steps of setting up a local instance of WordPress in this piece. I’d highly recommend following [this guide](https://themeisle.com/blog/install-xampp-and-wordpress-locally/) published by Themeisle, which goes through the setup of XAMPP and WordPress step by step.

2\. While we’re setting things up I think this is a good time to install [neocities-ruby](https://github.com/neocities/neocities-ruby), a command-line interface that makes pushing changes to Neocities significantly easier. Assuming you’re on Windows, head to [this URL](https://rubyinstaller.org/downloads/), click on the Ruby+Devkit link in bold, and run the installer.

3\. Once Ruby has installed open up Powershell or Command Prompt (both should work). Run the command “gem install neocities” and let the program install. Once this finishes up you should be able to get the following output when you run the command “neocities help”.

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic1.png)

4\. Now, let’s focus on setting up WP2Static. Assuming your server is still active, open your browser and head to “localhost/{your site name here}/wp-admin”. You should be faced with a login screen that looks like the one in the picture below. Log in using the username and password you set while installing WordPress.

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic2.png)

5\. We’re now greeted with the Dashboard, the place where we’re able to make changes to our blog. Hover your mouse over the plugins button and click on “add new”.

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic3.png)

6\. Search for “WP2Static” and install it. Once this is activated click into plugin settings. Set the “where you host the optimized version of your site” field to “subdirectory on current folder”. Set the destination URL to your Neocities subdomain and take note of the target directory. Once you’re ready, click on save current options.

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic4-1024x484.png)

7\. As there are some minor changes you might want to make before letting your site go live, I’d recommend having a separate folder on your desktop for the “production” version of your site – if anything just so you have some form of backup. Each time we want to push a change to our blog we need to copy and paste the contents of the above target directory to our “production” folder – so in this case I’d copy the files in C:\\xampp\\htdocs\\ill/mystaticsite to C:\\Users\\ciara\\Desktop\\neocities-ill. It makes more sense than it sounds, I swear!

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic5.png)

### The Process

Now let’s start talking about the actual method of getting godawful posts on here. I’m going to assume that you’ve already thrown together a few paragraphs in whatever program you prefer to write in (if you don’t have any preferred writing program Notion is extremely comfy to write in now it has a proper free tier, even if Neocities will get mad at me for pointing that out) and that you’ve followed all the steps above. The following steps may be a bit confusing at first but you’ll very quickly be able to just zone out and listen to a podcast while running through them after more than like five posts, even if that’s probably not a good thing.

1\. Let’s make sure that our local instance of WordPress is actually running. Open up the XAMPP control panel and make sure Apache and MySQL are running – if they aren’t just press the start button and wait for a minute or so.

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic6.png)

2\. Now we need to head to our admin panel. Open up your browser and head to “localhost/{your site name}/wp-admin”. Once you’ve logged in, hover over the “New” section of the toolbar and select “post”. This is the most self-explanatory part of the process but there are one or two tweaks we need to make for our posts to play well with Neocities (and our non-existent readership).

3\. WordPress automatically puts a comment section on our posts – a feature that doesn’t seem to work on Neocities. Head to the “Discussion” section and make sure the allow comments setting is turned off – I have zero clue what a pingback is so I just leave it on.

4\. By default, WordPress puts your full posts onto your homepage – something I inexplicably find really annoying. If you want to fix this, press the plus button underneath your first paragraph and select the “More” block.

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic7.png)

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic8.png)

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic9.png)

5\. And now for the two things that you’ll probably end up forgetting about – setting a featured image and category. Both of these can be found on the document sidebar on the right – make sure that your featured images are JPGs to save a little bit of storage space and that you uncheck the uncategorized category before publishing your piece. Once this is done you should be ready to publish your piece – give it a quick read over and then press on the blue publish button.

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic10.png)

6\. Once your post is published it’s time to export our site. Head to the WP2Static section of the control panel and press on the “start static site export” button. Depending on your computer (and the size of your site) this might take a while – it takes around eight minutes for my site to export so I usually just go grab a cup of tea or put on a podcast at this point.

![](https://ill.neocities.org/wp-content/uploads/2020/07/export.jpg)

7\. After your site has exported we need to copy our files to the “production” folder. Open up your file explorer and head to the target directory we took note of earlier. Drag and drop the files into the folder on your desktop – if you’re asked about merging/replacing files just say yes.

![](https://ill.neocities.org/wp-content/uploads/2020/07/pic11-1024x468.png)

8\. It’s now time to put your site on Neocities. Open up either PowerShell, Command Prompt, or whatever terminal you use (I’m personally using Microsoft Terminal for this piece) and CD into your production folder. Once you’re in there run the command “neocities push .” – you may be prompted to log in to your account, this is perfectly normal. I’ve had some friends mention that the program may hang the first time you run it, if that’s the case just hit Ctrl+C and run the command again. Let your computer do its thing and in a few minutes your site should be live on Neocities!

![](https://ill.neocities.org/wp-content/uploads/2020/07/terminal.jpg)

You’ll need to repeat this process each time you write a post, something that’ll become significantly less tedious once you have it memorized through muscle memory – don’t worry too much about learning these steps off and instead focus on annoying your friends into reading whatever you just released and leaving really polite comments on other Neocities sites. You’re now a blogger, I sincerely apologise for that. At some stage in the future I plan on running a piece outlining all the small adjustments I’ve made to the site and all the minor annoyances I’ve ran into – I’m not sure exactly when that’ll come out but for now just focus on writing consistently and working towards something you can write pretentious tutorials on. After all, there’s no point in existing online if you aren’t at least slightly annoying on there.
***

==**10334**== Words

- **[the actual guide to being really annoying on the internet (part two) - ill](https://ill.neocities.org/index.php/2020/07/16/the-actual-guide-to-being-really-annoying-on-the-internet/)**
