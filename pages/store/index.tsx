import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";
import PageMainTitle from "../../components/PageMainTitle";
import { StoreDTO } from '../../dto/store-create.dto';
import { PageFullWidthLayout, PageMaxNoCSSLayout, Title5, Title3, Title4 } from '../../components/GlobalComponents';
import StoreEdit from '../../components/admin/StoreEdit'
import { useAuth } from "../../hook/AuthProvider";
import { PageTitleDTO } from "../../dto/page-title.dto";

interface Props {
    storeList: StoreDTO[],
    PageTitle: PageTitleDTO
}
const StorePage: NextPage<Props> = ({ storeList, PageTitle }) => {
    const { user } = useAuth();
    return (
        <>
            <PageMainTitle {...PageTitle} />
            <PageFullWidthLayout style={{ backgroundColor: "rgba(227, 181, 159, 0.2)" }}>
                <PageMaxNoCSSLayout>
                    <ContentUl>
                    {
                        storeList.map((item: StoreDTO, key) => (
                            <Contentli key={key}>
                                {user ? <StoreEdit initialItem={item} initialItems={storeList} /> : null}
                                <ImageWrap>
                                    <Image src={item.image.downloadUrl} alt="" layout="fill" objectFit="cover" />
                                </ImageWrap>
                                <TextWrap>
                                    <Title3 style={{ color: "#008B48", fontWeight: 700 }}>{item.title}</Title3>
                                    <Title5 style={{ fontWeight: 700 }}>Tel {item.phonenumber}</Title5>
                                </TextWrap>
                                <Title5 style={{ padding: "15px", minHeight:"100px" , lineHeight:"120%"}}>{item.operation}</Title5>
                            </Contentli>
                        ))
                    }
                    </ContentUl>
                </PageMaxNoCSSLayout>
            </PageFullWidthLayout>
        </>
    );
};

const ImageWrap =styled.div`
    position: relative;
    width:100%;
    height: 31vh;
`

const ContentUl =styled.ul`
    display: inline-block;
    padding: 0px 30px;
    @media only screen and (max-width: 600px) {
        margin: 40px 0px;
    }
    @media only screen and (min-width: 600px) {
        margin: 80px 0px;
    }
    @media only screen and (min-width: 992px) {
        margin: 120px 0px;
    }
`
const Contentli = styled.li`
    float:left;
    border: 2.5px solid #15AA5A;
    text-align: left;
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin: 0 0px 20px 0px;
    }
    @media only screen and (min-width: 600px) {
        width: calc(50% - 20px);
        margin: 0 8px 20px 8px;
    }
    @media only screen and (min-width: 992px) {
        width: calc(33% - 34px);
        margin: 0 18px 20px 18px;
    }
`
const TextWrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-content: center;
    position: relative;
    padding: 15px;
    ::after{
        content: '';
        position: absolute;
        width: 96%;
        top: 100%;
        left: 2%;
        border-bottom: 2.5px solid #15AA5A;
    }
`
export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/store');
    const storeList: StoreDTO[] = await res.json();
    const resPageTitle = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/page-title/Store');
    const PageTitle: PageTitleDTO = await resPageTitle.json();

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

export default StorePage;