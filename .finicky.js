module.exports = {
	defaultBrowser: "Firefox Developer Edition",
	handlers: [
		{
			match: [ /zoom.us\/j\//, /snyk.zoom.us\/j\//],
			browser: "us.zoom.xos"
		},
		{
			match: finicky.matchDomains("twitter.com"),
			browser: "Firefox Developer Edition"
		},
		{
			match: [/snyk/, finicky.matchHostnames([
				'snyksec.atlassian.net',
				'notion.so',
				'*.notion.so',
				'*.snyk-internal.net',
				'snyk.slack.com',
				'my.pingdom.com',
				'zoom.us',
				'app.logz.io',
				'docs.google.com'
			])],
			browser: "Firefox",
		},
		{
			match: finicky.matchDomains("open.spotify.com"),
			browser: "Spotify"
		},
		{
			match: ({ keys }) => keys.option,
			browser: "Firefox",
		}
	]
}
