const fs = require("fs");

const generatedSitemap = `
User-agent: *
Disallow: /admin*/
Sitemap: https://www.xn--9w3b27lmmhzmc.kr/sitemap.xml
`

fs.writeFileSync('../public/robots.txt', generatedSitemap, 'utf8')
