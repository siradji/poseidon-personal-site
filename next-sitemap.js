module.exports = {
  siteUrl: process.env.SITE_URL || 'https://surajauwal.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{
      userAgent: '*',
      allow: '/',
    }]
  }
}
