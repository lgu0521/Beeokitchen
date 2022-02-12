import type { GetServerSideProps, NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { BannerDTO } from "../dto/banner.dto";
import { PageFullWidthLayout } from "../components/GlobalComponents";
import "react-loading-skeleton/dist/skeleton.css";
import Head from 'next/head';
import { useRouter } from "next/router";
import { useEffect, useCallback, useState } from "react";
interface Props {
  banners: BannerDTO[];
}

const Home: NextPage<Props> = ({ banners }) => {
  const PcBanner: BannerDTO[] = banners.filter((item) => item.type == 'PC');
  const MbBanner: BannerDTO[] = banners.filter((item) => item.type == 'MB');
  return (
    <>
      <Head>
        <title>비오키친</title>
        <meta name="description" content="건강한 식습관, 비오키친" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.xn--9w3b27lmmhzmc.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="비오키친" />
        <meta property="og:site_name" content="다이어트푸드 전문키친" />
        <meta property="og:url" content="https://www.xn--9w3b27lmmhzmc.kr" />
        <meta property="og:image" content="/story-sub1.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:description" content="아무리 바빠도, 나를 위한 건강하고 맛있는 한끼 건강한 식습관 비오키친" key="description" />
      </Head>
      <PageFullWidthLayout>
        <PCversion>
          <Carousel
            showThumbs={false}
            swipeable={true}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
            stopOnHover={false}
          >
            {PcBanner.map((item, key) => (
              <div key={key}>
                <Img src={item.downloadUrl} alt="" />
              </div>)
            )}
          </Carousel>
        </PCversion>
        <MBversion>
          <Carousel
            showThumbs={false}
            swipeable={true}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
            stopOnHover={false}
          >
            {MbBanner.map((item, key) => (
              <div key={key}>
                <Img src={item.downloadUrl} alt="" />
              </div>)
            )}
          </Carousel>
        </MBversion>
      </PageFullWidthLayout>
    </>
  );
};

const Img = styled.img`
  height: 69vh;
  object-fit: cover;
`;

const PCversion = styled.div`
  display: none;
  @media only screen and (min-width: 600px) {
    display: block !important;
  }
`;

const MBversion = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block !important;
  }
`;

export const getStaticProps: GetServerSideProps = async (context) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/banner");
  const banners: BannerDTO[] = await res.json();
  if (!banners) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      banners
    },
  };
};

export default Home;
