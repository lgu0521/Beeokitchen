import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";
import PageMainTitle from "../../components/PageMainTitle";
import { StoreAllListDTO, StoreModifyDTO } from '../../dto/store-create.dto';
import { PageLayout, Title2, Title3, Title4 } from '../../components/GlobalComponents';
import StoreModifyAndDeleteModal from '../../components/admin/StoreModifyAndDeleteModal'
import { useAuth } from "../../hook/AuthProvider";
import { PageTitleDTO } from "../../dto/page-title.dto";

interface Props {
    storeList: StoreAllListDTO[],
    PageTitle: PageTitleDTO
}
const Brand: NextPage<Props> = ({ storeList,PageTitle }) => {
    const { user } = useAuth();
    return (
        <>
           <PageMainTitle {...PageTitle} />
            <PageLayout>
                {
                    storeList.map((item: StoreModifyDTO, key) => (
                        <BoxWrap key={key}>
                            {user ? <StoreModifyAndDeleteModal {...item} /> : null}
                            <Box>
                                <Link href={`/store/${item.id}`}>
                                    <a>
                                        <Image src={item.url[0]} alt="" width="100%" height="100%" layout="responsive" objectFit="cover" />
                                    </a>
                                </Link>
                                <Wrap>
                                    <Title2 style={{ color: "#494949", marginBottom: "15px" }}>{item.name}</Title2>
                                    <Title3 style={{ color: "#7e7e7e", marginBottom: "5px" }}>{item.location}</Title3>
                                    <Title4 style={{ color: "#a68537", marginBottom: "15px" }}>{item.operation}</Title4>
                                    <Title2 style={{ color: "#666" }}>{item.phonenumber}</Title2>
                                </Wrap>
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
    position: relative;
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

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/store');
    const storeList: StoreAllListDTO[] = await res.json();
    const resPageTitle = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/page-title/Store');
    const PageTitle:PageTitleDTO = await resPageTitle.json();

    if (!storeList) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            storeList,
            PageTitle
        }

    }
}

export default Brand;