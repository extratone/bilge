# Automating Write.as Posts on macOS 

![Post to Writeas Blog](https://user-images.githubusercontent.com/43663476/152098127-6408d6fc-8afd-482c-86aa-0bee8c1b0027.png)

## A setup for posting to Write.as blogs directly using Siri Shortcuts, the Write.as CLI, and (optionally) Drafts for Mac.

<!--more-->

Though there is currently a [Write.as desktop application in the works for macOS](https://code.as/writeas/macos) and the web editor is certainly no slouch, I thought I'd attempt to take advantage of my newfound knowledge of [the Write.as CLI](https://github.com/writeas/writeas-cli), [Drafts Actions](https://actions.getdrafts.com/a/1u0), and [Siri Shortcuts](https://routinehub.co/shortcut/10981) on macOS to manifest one of my all-time dream integrations: publishing directly to write.as with [Drafts](https://apps.apple.com/us/app/drafts/id1435957248).

To start - assuming you already have the CLI installed - lets run `writeas help post` in our shell:

![WriteasHelpPost](https://user-images.githubusercontent.com/43663476/152664380-32cf084e-bde1-4d59-85d0-9f15c2da78a7.png)

For my own use, I really needed to consider just two arguments, here: which blog I'm posting to and in which format. Since [my blog's CSS](https://github.com/extratone/bilge/blob/main/Custom%20CSS.css) overwrites all but `monospace`, I always publish in `--sans`. Keeping this in mind, I allotted for these two options in my Siri Shortcut as customizations set on install.

![ShortcutSetup](https://user-images.githubusercontent.com/43663476/152664543-028221a5-4359-4bdd-8701-15fc38dcb5b2.png)

Now, whenever it's run, my shortcut will be running this command: `write-as post -c chaff --font sans` plus whatever input I've given it. By default, it will grab from the clipboard, but I'm going to use [a custom Drafts action](https://actions.getdrafts.com/a/1u0) to send input, instead.

![DraftstoWriteasAction](https://user-images.githubusercontent.com/43663476/152664614-b53bc430-caf0-4ecd-9547-df324f6fe836.png)

Very simply, this action simply calls a shortcut entitled "Post to Write.as Blog (macOS)" sending the [[[safe_title]]](https://docs.getdrafts.com/docs/actions/templates#content-tags) of the Draft as the markdown title followed by a space and then the draft's [[body]].

<video controls>
  <source src="https://user-images.githubusercontent.com/43663476/152664747-1a6fce01-85d6-46ff-bd13-e41d33544c78.mp4">
</video>

<!--comment-->

#software #automation #configuration