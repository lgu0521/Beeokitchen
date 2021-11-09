import type { GetStaticProps, NextPage } from 'next'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from 'styled-components';
import { BannerDTO } from "../dto/banner-create.dto";
import { PageFullWidthLayout } from '../components/GlobalComponents';
import IsUserWithLogin from '../hook/AuthStateChanged';
import { useState } from 'react';
import AdminMainBannerComponent from '../components/admin/main';
import { useAuth } from '../hook/AuthProvider';

interface Props {
  BannerList: BannerDTO[]
}

const Home: NextPage<Props> = ({ BannerList }) => {
  const { user } = useAuth();
  return (
    <>
      <PageFullWidthLayout>
        <Carousel showThumbs={false} swipeable={true}>
          {
            BannerList.map((item, key) => (
              <div key={key}>
                <Img src={item.downloadUrl} alt="" />
              </div>
            ))
          }
        </Carousel>
        {
          user ? <AdminMainBannerComponent BannerList={BannerList} /> : null
        }
      </PageFullWidthLayout>
    </>
  )
}

const Img = styled.img`
    max-height: 600px;
    object-fit: scale-down;
    @media only screen and (max-width: 600px) {
      object-fit: fill;
      height: 300px;
    }
    @media only screen and (min-width: 600px) {
      object-fit: fill;
      height: 400px;
    }
    @media only screen and (min-width: 768px) {
      height: auto;
    }
`;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/banner");
  const BannerList: BannerDTO[] = await res.json();

  if (!BannerList) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      BannerList
    }
  }
}

export default Home
