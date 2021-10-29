import type { GetStaticProps, NextPage } from 'next'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from 'styled-components';
import { BannerListDTO } from "../dto/banner-create.dto";
import { PageFullWidthLayout } from '../components/GlobalComponents';
import IsUserWithLogin from '../components/Auth';
import { useState } from 'react';
import AdminMainBannerComponent from '../components/admin/main';
import Layout from '../components/Layout';
interface Props {
  BannerList: BannerListDTO[]
}

const Home: NextPage<Props> = ({ BannerList }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  IsUserWithLogin().then(
    () => {
      setIsAdmin(true);
    }
  );

  return (
    <Layout>
      <PageFullWidthLayout>
        <Carousel showThumbs={false} swipeable={true}>
          {
            BannerList.map((item, key) => (
              <div key={key}>
                <Img src={item.url} alt="" />
              </div>
            ))
          }
        </Carousel>
        {
          isAdmin ? <AdminMainBannerComponent /> : null
        }
      </PageFullWidthLayout>
    </Layout>
  )
}

const Img = styled.img`
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
  const BannerList: BannerListDTO[] = await res.json();

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
