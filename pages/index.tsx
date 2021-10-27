import type { GetServerSideProps, NextPage } from 'next'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from 'styled-components';
import { BannerListDTO } from "../dto/banner-create.dto";
import { PageFullWidthLayout } from '../components/GlobalComponents';

interface Props {
  BannerList: BannerListDTO[]
}

const Home: NextPage<Props> = ({ BannerList }) => {
  const images = BannerList.map(item => {
    return { url: item.url }
  });

  return (
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
    </PageFullWidthLayout>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(process.env.API_URL + "/api/banner");
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
