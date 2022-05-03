# Integration with Drafts via the Writeas API

- [Writeas Forums](https://discuss.write.as/t/integration-with-drafts-via-the-writeas-api/5396)

I'm a longtime user of agiletortoise's [Drafts](https://apps.apple.com/us/app/drafts/id1435957248) on iOS and macOS but have remained less than a novice in Javascript, which powers its configurables, "[Actions](https://actions.getdrafts.com/drafts_actions?order=recent)." I've been gradually working toward *direct* integration between Drafts and Write.as - you might call [my workflow involving the CLI](https://bilge.world/automating-writeas-posts) a midstep. After much fiddling, I'm pleased to report that I've finally accomplished this integration via [the Writeas API](https://developers.write.as/docs/api).

[Here's a brief video demo on YouTube showing the actions in use](https://youtu.be/eu8R9xG5FNA)

On the Drafts Directory:

* [**Post to Writeas**](https://directory.getdrafts.com/a/1zO)
* [**Post to Writeas Blog**](https://directory.getdrafts.com/a/1zW)

At first run of either action, a [credential identifier](https://docs.getdrafts.com/docs/settings/credentials) called "writeas" is created, which will prompt you for "Collection" and "Access Token."

<img src="https://i.snap.as/pJISXQ04.jpeg" alt="Credential Creation" style="zoom:50%;" />

"Collection" is just the backend term for *blog* (correct me if I'm wrong there,) so you should enter the lowercase slug of your blog. (Ex: `bilge` for `write.as/bilge`.) "Access Token" is referring to a WriteFreely/Writeas/Snapas API token. (See: [the docs](https://developers.write.as/docs/api/#authenticate-a-user).)

**Post to Writeas** will publish the current draft contents as an anonymous/"unclaimed" post. These are accessed in the "Posts" menu at `/me/posts/`. The URL of the result is then inserted at the cursor (in Drafts) as a markdown-formatted hyperlink.

**Post to Writeas Blog** will publish the current draft contents as a new post on the blog you specified at credential creation. The URL of the result is then inserted at the cursor (in Drafts) as a markdown-formatted hyperlink.

Example: 

![Writeas Post Example](https://i.snap.as/eX3955BL.png)

I intend to continue exploring the possibilities of this integration and perhaps eventually publish a dedicated "Action Group." I'd especially love to hear from any Drafts users also using Writeas/WriteFreely. 