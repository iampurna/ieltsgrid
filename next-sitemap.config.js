/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ieltsgrid.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin", "/private"],
  additionalPaths: async (config) => [
    await config.transform(config, "/reading"),
    await config.transform(config, "/listening"),
    await config.transform(config, "/writing"),
    await config.transform(config, "/speaking"),
  ],
  robotsTxtOptions: {
    additionalSitemaps: ["https://ieltsgrid.com/server-sitemap-index.xml"],
  },
};
