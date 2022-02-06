import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" href="https://www.xn--9w3b27lmmhzmc.kr/favicon.ico"/>
                    <link rel="icon" href="https://www.xn--9w3b27lmmhzmc.kr/favicon.png"/>
                    <meta name="naver-site-verification" content="318a146517bed2f8a2764ebd615cba64c31a5b60" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="비오키친" />
                    <meta property="og:site_name" content="다이어트푸드 전문키친" />
                    <meta property="og:url" content="https://www.xn--9w3b27lmmhzmc.kr/brand" />
                    <meta property="og:image" content="/image/ThumnailImage.jpeg" />
                    <meta property="og:image:width" content="800" />
                    <meta property="og:image:height" content="400" />
                    <meta property="og:description" content="건강한 식습관, 비오키친" key="description" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default MyDocument