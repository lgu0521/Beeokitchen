// sitemap-posts.js

// 필요한 모듈 로드
const fs = require("fs");
const prettier = require('prettier');
const axios = require('axios');

// 오늘 날짜 가져오기 & 도메인 설정
const getDate = new Date().toISOString()
const CODEIT_DOMAIN = 'https://www.xn--9w3b27lmmhzmc.kr'

const formatted = sitemap => prettier.format(sitemap, { parser: 'html' });
(async () => {
    let response = []

    // axios를 이용해 post 리스트 가져오기
    // <API_DOAMIN>, <API_NAME> 등은 실제 값이 아닙니다!
    await axios({
        method: 'get',
        url: 'https://beeokithen-api.vercel.app/api/notice/getList',
    }).then((res) => {
        response = res.data;
    })
        .catch((e) => {
            console.log(e.response.data)
        })

    const postList = []
    // 적절히 파싱
    response.forEach(post => postList.push({ id: post.id, title: post.title }))

    // 요것도 xml 구조에 맞게 파싱하여 재조립
    const postListSitemap = `
  ${postList
            .map(post => {
                return `
        <url>
          <loc>${`${CODEIT_DOMAIN}/community/threads/${post.id}`}</loc>
          <lastmod>${getDate}</lastmod>
        </url>`
            })
            .join('')}
`

    const generatedSitemap = `
	<?xml version="1.0" encoding="UTF-8"?>
  	<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
    ${postListSitemap}
  </urlset>
`

    const formattedSitemap = [formatted(generatedSitemap)]

    fs.writeFileSync('../public/sitemap/sitemap-posts.xml', generatedSitemap, 'utf8')
})()