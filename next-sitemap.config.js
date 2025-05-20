module.exports = {
  siteUrl: 'https://javierherreraai.com',
  generateRobotsTxt: true,
  exclude: ['/404*', '/500*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404', '/500'],
      },
    ],
    additionalSitemaps: [
      'https://javierherreraai.com/sitemap.xml',
    ],
  },
}; 