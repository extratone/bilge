# Developer Display Requirements | Twitter Terms of Service
The power of Twitter is in the network of people using it, and its ability to bring users closer to what’s most meaningful to them. When we first launched, Tweets were a simple 140 character update. However, as Twitter evolved, so too has the way that users view and interact with Tweets. Today’s Tweets are rich living conversations: a user can give feedback to the author, participate in the conversation, and spread the word. For that to happen, Tweets must be shown in a way that meets the user’s expectation - whether on a mobile phone, on a web site, in a desktop application, or anywhere else. Developing the following set of Display Requirements allows Tweets to remain connected to every user on Twitter. For example, if Tweet actions aren’t enabled, a Tweet can’t be replied to or reach more users with Retweets. If @usernames and avatars aren’t linked to profiles, users can’t learn more about or easily follow that interesting Twitter account. It’s also worth noting that we have embeddable Tweets and embeddable timelines available, which will take care of these Display Requirements for you. Lastly, we’re committed to bringing the power and interactivity of the Twitter network to all platforms, and we will continue to evolve the user experience within Tweets and timelines. This is a living document, so please check back from time to time for updates. Last update date: November 20th, 2012

![](Developer%20Display%20Requirements%20%7C%20Twitter%20Terms%20of%20Service/tweet_embed_0.png)

![](Developer%20Display%20Requirements%20%7C%20Twitter%20Terms%20of%20Service/mobile_tweet.png)

Above: Examples for rendering details of Individual Tweets on websites and mobile apps.

1. **Tweet Author**

	1. The Tweet author’s avatar must always be displayed, unless your application is displaying Tweets on a mobile platform that has clear physical or technical limitations (e.g., low-end feature phones).
	2. The @username must always be displayed with the “@” symbol.
	3. The author’s name and @username must be displayed to the right of the avatar either on one line horizontally or stacked one above the other vertically, with the name first.
	4. The avatar, name, and @username must all link to the user’s Twitter profile.

2. **Tweet Text**

	1. Tweet text must be displayed on a line below the author’s name and @username, and may not be altered or modified in any way except as outlined in these requirements.
	2. [Tweet Entities](https://web.archive.org/web/20130116074649/https://dev.twitter.com/docs/tweet-entities) within the Tweet text must be properly linked to their appropriate home on Twitter. For example:

		1. User_mentions must link to the mentioned user’s profile.
		2. Hashtags must link to a twitter.com search with the hashtag as the query.
		3. Links in Tweet text must be displayed using the display_url field in the URL entities API response, and link to the original t.co url field.

3. **Tweet Actions**

	1. Reply, Retweet, and Favorite action icons must always be visible for the user to interact with the Tweet. These actions must be implemented using [Web Intents](https://web.archive.org/web/20130116074649/https://dev.twitter.com/docs/intents) or with the authenticated Twitter API.
	2. No other social or 3rd party actions similar to Follow, Reply, Retweet and Favorite may be attached to a Tweet.

4. **Tweet Timestamp**

	1. The Tweet timestamp must always be visible and include the time and date. e.g., “3:00 PM - 31 May 12”.

5. **Tweet Permalink**

	1. The Tweet timestamp must always be linked to the Tweet permalink.

6. **Branding**

	1. It must always be clear to the viewing user that they are looking at a Tweet, and that the content is from Twitter.
	2. [The Twitter logo](https://web.archive.org/web/20130116074649/https://twitter.com/about/logos) or [Follow button](https://web.archive.org/web/20130116074649/https://dev.twitter.com/docs/follow-button) for the Tweet author must always be displayed.
	3. The Twitter logo must link to Twitter.

In addition to the above Individual Tweet Display Requirements, a few modifications to the Tweet anatomy are required when displaying as part of a timeline:
![](Developer%20Display%20Requirements%20%7C%20Twitter%20Terms%20of%20Service/in_timeline_tweet_0.png)

![](Developer%20Display%20Requirements%20%7C%20Twitter%20Terms%20of%20Service/in_timeline_tweet_mobile.png)

Above: Examples for rendering a timeline of Individual Tweets on websites and mobile apps.

1. **Tweet Author**

	1. The author’s name and @username should be displayed on one line horizontally or stacked one above the other vertically, with the name first.
	2. The @username must always be displayed with the “@” symbol.
	3. The avatar must be positioned to the left of the name, @username, and Tweet text.

2. **Tweet Actions**

	1. Reply, Retweet and Favorite Tweet actions must always be available to the user when interacting with the Tweet on the timeline. e.g., select, hover, touch, swipe.
	2. For applications on mobile platforms, you may choose to link the entire Tweet area to the Individual Tweet within your app or on Twitter to provide users access to Tweet actions.

3. **Tweet Timestamps**

	1. Tweet timestamp should be displayed in the top right corner.
	2. For Tweets that have been sent in the last 24 hours, use the short form timestamp relative to the current time, for example “20s” for a Tweet sent 20 seconds ago, “3m” for 3 minutes ago, “5h” for 5 hours ago.
	3. Tweets older than 24 hours should show a short form date including the day and month, e.g., “6 Jun”.

4. **Tweet Permalink**

	1. The Tweet timestamp must always be linked to the Tweet permalink.
	2. For applications on mobile platforms, you may choose to link the entire Tweet area to the Tweet permalink.

5. **Retweet Indicator**

	1. If the Tweet being displayed is a Retweet, the name of the user who Retweeted it and the Retweet icon must be displayed above or under the Tweet text. e.g., “Retweeted by Josh Brewer”. The name should link to the the Retweeting user’s profile, unless your application is displaying Tweets on a mobile platform that has clear physical or technical limitations.

6. **Timeline Integrity**

	1. Tweets that are grouped together into a timeline must not be rendered with non-Twitter content. e.g., comments, updates from other networks.

7. **Branding**

	1. It must always be clear to the viewing user that they are looking at a Twitter timeline, and that the content is from Twitter.
	2. [The Twitter logo](https://web.archive.org/web/20130116074649/https://twitter.com/about/logos) must always be displayed directly adjacent to the timeline (e.g., top of the timeline).

All timelines must allow users to view details of an Individual Tweet with the requirements above. However, if displaying Individual Tweets on a mobile platform has clear physical or technical limitations that prevents meeting these requirements, you must direct users to twitter.com or a official Twitter mobile client to display the details of an Individual Tweet.

For linking to Tweet actions (2b), Tweet permalinks (4a, 4b) and Retweet user (5a), please see “Linking to Twitter” below for additional guidance.

When linking from an avatar, name, @username, Tweet entity, Tweet action, Tweet permalink or the Twitter logo, you must use one of the methods below when linking:

However, for linking an avatar, name, and @username, hashtag, you may also choose to link to an internal representation within your application. However, this internal representation must have a link back to the core experience on twitter.com or an official Twitter client in some manner.

Applications that cannot implement these guidelines due to the technical limitations of their platform should make a best effort to satisfy as many rules as possible. Exceptions will be made on a case by case basis by email approval. Please contact [trademarks@twitter.com](https://web.archive.org/web/20130116074649/mailto:trademarks@twitter.com) if you feel that an exception is necessary.

[Developer Display Requirements](https://web.archive.org/web/20130116074649/https://dev.twitter.com/terms/display-requirements) 

#archive #documentation #tb6