# Run Siri Shortcuts with Hyperlinks

![Shortcuts Run Links](https://user-images.githubusercontent.com/43663476/155768732-03ca73a9-9b18-414f-ae86-a27bbe01ce04.png)

## Imagine running shortcuts from anywhere you can place a link.

<!--more-->

There seemed to be a bit of confusion regarding a shortcut I posted on RoutineHub a few days ago entitled “[**Generate Shortcuts Run Links List**](https://routinehub.co/shortcut/11143),” so I thought I’d attempt to overview how I’ve come to use Shortcuts’ URL scheme as my primary method of calling shortcuts across both iOS and macOS.

The basis of the whole shit is `shortcuts://run-shortcut?name=` and `shortcuts://x-callback-url/run-shortcut?name=`. Using these along with URL-encoded shortcuts titles (for those containing a space,) we can create links that will run shortcuts from anywhere on iOS or macOS as hyperlinks. These days, this is how I run most of my even semi-regular-use shortcuts, largely from my first Dot in Iconfactory’s [Tot](https://apps.apple.com/us/app/tot-pocket/id1498235191).

![Tot](https://user-images.githubusercontent.com/43663476/155801898-e6c74cee-c26a-458c-a915-c3f969c6f3fd.png)

With a few exceptions, all the links you see in the above screenshot above “Drafts Instrument Panel” are shortcuts run links of the same type. Most of these, I typed out by hand with [a TextExpander snippet](https://app.textexpander.com/public/14093096578d4f40eeea15649f5cefbb). Here’s what the mess looks like underneath:

![Tot Code](https://user-images.githubusercontent.com/43663476/155803031-436d36a3-c0be-4da1-9df4-72a9d6e8e350.png)

I had a bit of an issue creating the shortcut, itself. Though Shortcuts includes a native [URL Encode action](https://www.matthewcassinelli.com/actions/url-encode/), I couldn’t seem to get it to reliably generate URL-encoded shortcuts names, which is why I inserted the [Text Case](https://apps.apple.com/us/app/text-case/id1492174677) action, instead.

<!--comment-->

#automation #software #configuration