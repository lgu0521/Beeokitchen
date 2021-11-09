import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { Title1, Title2, Title3, Content, PageLayout } from '../../components/GlobalComponents';
import React, { useEffect, useState } from 'react';
import PageMainTitle from '../../components/PageMainTitle';
import { MenuListDTO, MenuModifyDTO } from '../../dto/menu-create.dto';
import MenuModifyAndDeleteModal from '../../components/admin/MenuModifyAndDeleteModal';
import { useAuth } from '../../hook/AuthProvider';

interface Props {
    GimbabList: MenuListDTO[],
    LunchBoxList: MenuListDTO[],
    SaladList: MenuListDTO[],
    BeverageList:MenuListDTO[]
};

const Meau: NextPage<Props> = ({ GimbabList, LunchBoxList, SaladList, BeverageList }) => {
    const { user } = useAuth();
    return (
        <>
            <PageMainTitle title="메뉴" description1="내몸을 위한 건강하고 맛있는 한 끼" description2="" />
            <div style={{ background: " rgba(244, 234, 211, 0.3)" }}>
                <PageLayout>
                    <Title1 style={{ fontWeight: 600, color: "#15AA5A" }}>키토 김밥</Title1>
                    <Content style={{ marginTop: "5px" }}>계란만 5알! 밥대신 계란폭탄</Content>
                    {GimbabList.map((item: MenuModifyDTO, key) => (
                        <ImageItem key={key}>
                            {
                                user ? <MenuModifyAndDeleteModal {...item} /> : null
                            }
                            <StyledImage src={item.downloadUrl} alt="" height={320} width={320} layout="intrinsic" />
                            <Title3 style={{ fontWeight: 600 }}>{item.title}</Title3>
                            <Content style={{ marginTop: "5px", color: "#666" }}>{item.content}</Content>
                        </ImageItem>
                    ))}
                    <Line />
                </PageLayout>
                <PageLayout>
                    <Title1 style={{ fontWeight: 600, color: "#15AA5A" }}>도시락</Title1>
                    <Content style={{ marginTop: "5px" }}>고단백 저칼로리  다이어트식단의 기본</Content>
                    {LunchBoxList.map((item: MenuModifyDTO, key) => (
                        <ImageItem key={key}>
                            {
                                user ? <MenuModifyAndDeleteModal {...item} /> : null
                            }
                            <StyledImage src={item.downloadUrl} alt="" height={320} width={320} layout="intrinsic" />
                            <Title3 style={{ fontWeight: 600 }}>{item.title}</Title3>
                            <Content style={{ marginTop: "5px", color: "#666" }}>{item.content}</Content>
                        </ImageItem>
                    ))}
                    <Line />
                </PageLayout>
                <PageLayout>
                    <Title1 style={{ fontWeight: 600, color: "#15AA5A" }}>샐러드</Title1>
                    <Content style={{ marginTop: "5px" }}>당일 눈으로 보고 구매하는 신선한 채소로 만든 샐러드볼</Content>
                    {SaladList.map((item: MenuModifyDTO, key) => (
                        <ImageItem key={key}>
                            {
                                user ? <MenuModifyAndDeleteModal {...item} /> : null
                            }
                            <StyledImage src={item.downloadUrl} alt="" height={320} width={320} layout="intrinsic" />
                            <Title3 style={{ fontWeight: 600 }}>{item.title}</Title3>
                            <Content style={{ marginTop: "5px", color: "#666" }}>{item.content}</Content>
                        </ImageItem>
                    ))}
                    <Line />
                </PageLayout>
                <PageLayout>
                    <Title1 style={{ fontWeight: 600, color: "#15AA5A" }}>음료</Title1>
                    <Content style={{ marginTop: "5px" }}>비오키친이 선별한 제품들로 구성됩니다</Content>
                    {BeverageList.map((item: MenuModifyDTO, key) => (
                        <Row3Item key={key}>
                            {
                                user ? <MenuModifyAndDeleteModal {...item} /> : null
                            }
                            <StyledImage src={item.downloadUrl} alt="" height={320} width={320} layout="intrinsic" />
                            <Title3 style={{ fontWeight: 600 }}>{item.title}</Title3>
                            <Content style={{ marginTop: "5px", color: "#666" }}>{item.content}</Content>
                        </Row3Item>
                    ))}
                </PageLayout>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const resGimbab = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/Gimbab");
    const resLunchBox = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/LunchBox");
    const resSalad = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/Salad");
    const resBeverage = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/Beverage");
    const GimbabList: MenuListDTO[] = await resGimbab.json();
    const LunchBoxList: MenuListDTO[] = await resLunchBox.json();
    const SaladList: MenuListDTO[] = await resSalad.json();
    const BeverageList: MenuListDTO[] = await resBeverage.json();

    if (!GimbabList) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            GimbabList,
            LunchBoxList,
            SaladList,
            BeverageList
        }
    }
}

const Line = styled.div`
    width: 100%;
    border: 1px solid #15AA5A;
`

const StyledImage = styled(Image)`
border-radius: 100%;
padding: 15px !important;
`

const ImageItem = styled.div`
    width:50%;
    display: inline-block;
    position: relative;
    margin: 30px 0;
`

const Row3Item = styled.div`
    width:calc(100%/3);
    display: inline-block;
    position: relative;
    margin: 30px 0;
`

const TextItem = styled.div`
    display: inline-block;
    position: relative;
    margin: 30px 0;

    @media only screen and (max-width: 600px) {
        width: calc(100%/2 - 23px);
    }
    @media only screen and (min-width: 600px) {
        width: calc(100%/2 - 23px);
    }
    @media only screen and (min-width: 768px) {
        width: calc(100%/3 - 23px);
    }
    border: 1px solid;
`

export default Meau;