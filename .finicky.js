module.exports = {
  defaultBrowser: "Firefox Developer Edition",
  options: {
    hideIcon: false,
  },
  handlers: [
    {
      match: [/zoom.us\/j\//, /dataminr.zoom.us\/j\//],
      browser: "us.zoom.xos",
    },
    {
      match: finicky.matchDomains(["twitter.com", "linkedin.com"]),
      browser: "Firefox Developer Edition",
    },
    {
      match: [
        /dataminr/,
        /amazonaws.com/,
        /dmnr.io/,
        /http:\/\/127\.0\.0\.1:[456][0-9]*\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
        finicky.matchHostnames([
          "dataminr.atlassian.net",
          "notion.so",
          "*.notion.so",
          "dataminr.slack.com",
          "docs.google.com",
          "meet.google.com",
          "app.scaleft.com",
          "dmcorp.okta.com",
          "spacelift.io",
        ]),
      ],
      browser: "Google Chrome",
    },
    {
      match: finicky.matchDomains("open.spotify.com"),
      browser: "Spotify",
    },
    {
      match: () => finicky.getKeys().option,
      browser: "Google Chrome",
    },
  ],
};
