const { SITE_URL } = require("./env-config");

module.exports = {
  sourceDir: "build",
  outDir: "public",
  siteUrl: SITE_URL || "https://starsofboston.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: ["/admin"],
      },
    ],
    additionalSitemaps: ["https://example.com/server-sitemap.xml"],
  },
};
