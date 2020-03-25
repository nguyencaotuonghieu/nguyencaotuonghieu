const config = {
  // Site info
  siteTitle: "Learning English with Ms. Hieu", // Site title.
  siteTitleShort: "English w/ Ms. Hieu", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Learning English with Ms. Hieu", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://nguyencaotuonghieu.netlify.com/", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Learning English with Ms. Hieu.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "en",
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "gb-template", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", // 
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent: "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "008548374781244864787:9ybvtnkbt7o",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    {
      label: "Nguyen Cao Tuong Hieu",
      url: "https://www.facebook.com/pengoc.dona"
    },
  ],
  // Use for user info
  userName: "Nguyen Cao Tuong Hieu", // Username to display in the author segment.
  userEmail: "tuonghieu9592@gmail.com", // Email used for RSS feed"s author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Danang, Vietnam", // User location to display in the author segment.
  userAvatar: "https://www.gravatar.com/avatar/42fd3d526fde1ef76d5002e4ebd303e9.jpg?s=300", // User avatar to display in the author segment.
  userDescription:
    "Learning English with Ms. Hieu.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mailto:tuonghieu9592@gmail.com",
      iconClassName: "far envelope"
    },
    {
      label: "Website",
      url: "https://nguyencaotuonghieu.netlify.com/",
      iconClassName: "fas globe"
    },
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/pengoc.dona", 
      iconClassName: "fab facebook-f" 
    }
  ],
  // Use for navigation
  navTitle: "Nguyen Cao Tuong Hieu",
  navLinks: [
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/pengoc.dona", 
      iconClassName: "fab facebook-f"
    },
    {
      label: "RSS",
      url: "https://nguyencaotuonghieu.netlify.com/rss.xml",
      iconClassName: "fas rss"
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Terms of Use", url: "/terms" },
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Sitemap", url: "https://nguyencaotuonghieu.netlify.com/sitemap.xml" },
  ],
  copyright: "Copyright © 2020-2021 Ms. Hieu. Unless otherwise noted, all code MIT license.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
