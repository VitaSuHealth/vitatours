const siteUrl = "https://www.vitatours.sr"

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`, `${siteUrl}/sitemap-0.xml`, `${siteUrl}/sitemap.xml`],
}