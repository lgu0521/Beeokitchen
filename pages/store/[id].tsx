import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { Params } from 'next/dist/server/router';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import { StoreDTO } from '../../dto/store-create.dto';
import { PageLayout, Title2, Title3, Title4 } from '../../components/GlobalComponents';
import Image from 'next/image'

interface Props {
    store: StoreDTO
}
const StoreDetailPage: NextPage<Props> = ({ store }) => {

    return (
        <PageLayout>
            <BoxWrap>
                <Wrap>
                    <Carousel showThumbs={false} swipeable={true}>
                        {
                            store.url.map((item, key) => (
                                <div key={key}>
                                    <Image src={item} alt="" />
                                </div>
                            ))
                        }
                    </Carousel>
                </Wrap>
                <Wrap style={{ padding: "50px 35px" }}>
                    <Title2 style={{ color: "#494949", marginBottom: "15px" }}>{store.name}</Title2>
                    <Title3 style={{ color: "#7e7e7e", marginBottom: "5px" }}>{store.location}</Title3>
                    <Title4 style={{ color: "#a68537", marginBottom: "15px" }}>{store.operation}</Title4>
                    <Title2 style={{ color: "#666" }}>{store.phonenumber}</Title2>
                </Wrap>
            </BoxWrap>
        </PageLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }: Params) => {
    const { id } = params;
    const res = await fetch(process.env.API_URL + `/api/store/${id}`);
    const store = await res.json();

    if (!store) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            store
        }
    }
}

const BoxWrap = styled.div`
    display: block;
    width: 100%;
    border: 1px solid #ddd;

`

const Wrap = styled.div`
    text-align: left;
    vertical-align: top;
    display: inline-block;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    @media only screen and (min-width: 600px) {
        width: 100%;
    }
    @media only screen and (min-width: 768px) {
        width: 50%;
    }
`

export default StoreDetailPage;