module.exports = {
	defaultBrowser: "Firefox Developer Edition",
	options: {
	  hideIcon: false,
	},
	handlers: [
		{
			match: [ /zoom.us\/j\//, /weaveworks.zoom.us\/j\//],
			browser: "us.zoom.xos"
		},
		{
			match: finicky.matchDomains([
			  "twitter.com",
			  "linkedin.com"
			]),
			browser: "Firefox Developer Edition"
		},
		{
			match: [/weaveworks/, /open-component-model/, finicky.matchHostnames([
				'zenhub.com',
				'notion.so',
				'*.notion.so',
				'weaveworks.slack.com',
				'docs.google.com',
				'meet.google.com'
			])],
			browser: "Google Chrome",
		},
		{
			match: finicky.matchDomains("open.spotify.com"),
			browser: "Spotify"
		},
		{
			match: () => finicky.getKeys().option,
			browser: "Google Chrome",
		}
	]
}
