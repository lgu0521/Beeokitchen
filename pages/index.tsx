import type { GetServerSideProps, NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { BannerDTO } from "../dto/banner.dto";
import { PageFullWidthLayout } from "../components/GlobalComponents";
import "react-loading-skeleton/dist/skeleton.css";
import Head from 'next/head';

interface Props {
  PcBanner: BannerDTO[];
}


const MBImage = [
  {
    src: "/banner/mobile1.png"
  },
  {
    src: "/banner/mobile2.png"
  },
  {
    src: "/banner/mobile3.png"
  },
  {
    src: "/banner/mobile4.png"
  },
]

const Home: NextPage<Props> = ({ PcBanner }) => {
  return (
    <>
      <Head>
        <title>비오키친 홈</title>
        <meta name="description" content="건강한 식습관, 비오키친" />
        <link rel="icon" href="/favicon.ico" />
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
              </div>
            ))}
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
            {MBImage.map((item, key) => (
              <div key={key}>
                <Img src={item.src} alt="" />
              </div>
            ))}
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
  const pcBanner = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/banner");
  const PcBanner: BannerDTO[] = await pcBanner.json();

  if (!PcBanner) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      PcBanner
    },
  };
};

export default Home;
