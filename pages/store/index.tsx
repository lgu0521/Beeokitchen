import { GetServerSideProps, NextPage } from "next";
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import PageMainTitle from "../../components/PageMainTitle";
import { StoreAllListDTO } from '../../dto/store-create.dto';
import { PageLayout, Title2, Title3, Title4 } from '../../components/GlobalComponents';
interface Props {
    storeList: StoreAllListDTO[]
}
const Brand: NextPage<Props> = ({ storeList }) => {
    console.log(storeList);
    return (
        <>
            <PageMainTitle title="매장" description="비오키친과 함께 하실 점주님을 모집합니다. 세계적인 브랜드의 성공 철학을 공유합니다." />
            <PageLayout>
                {
                    storeList.map((item, key) => (
                        <BoxWrap key={key}>
                            <Box>
                                <Link href={`/store/${item.id}`}>
                                    <a>
                                        <Image src={item.url} alt="" width="100%" height="100%" layout="responsive" objectFit="cover" />
                                        <Wrap>
                                            <Title2 style={{ color: "#494949", marginBottom: "15px" }}>{item.name}</Title2>
                                            <Title3 style={{ color: "#7e7e7e", marginBottom: "5px" }}>{item.location}</Title3>
                                            <Title4 style={{ color: "#a68537", marginBottom: "15px" }}>{item.operation}</Title4>
                                            <Title2 style={{ color: "#666" }}>{item.phonenumber}</Title2>
                                        </Wrap>
                                    </a>
                                </Link>
                            </Box>

                        </BoxWrap>
                    ))
                }
            </PageLayout>
        </>
    );
};


const BoxWrap = styled.div`
    display: inline-block;
    vertical-align: top;
    padding: 12px;
    text-align: left;
    @media only screen and (max-width: 600px) {
        width: 90%;
    }
    @media only screen and (min-width: 600px) {
        width: 50%;
    }
    @media only screen and (min-width: 992px) {
        width: 33%;
    }
`

const Box = styled.div`
    border: 1px solid #ddd;
`

const Wrap = styled.div`
    @media only screen and (max-width: 600px) {
        padding: 10px 10px;
        height: 150px;
    }
    @media only screen and (min-width: 600px) {
        padding: 20px 20px;
        height: 150px;
    }
    @media only screen and (min-width: 768px) {
        padding: 25px 25px;
        height: 190px;
    }
`

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(process.env.API_URL + '/api/store');
    const storeList: StoreAllListDTO[] = await res.json();

    if (!storeList) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            storeList
        }

    }

}
export default Brand;