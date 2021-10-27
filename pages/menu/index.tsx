import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import seasonal from '../../public/menu/seasonal_bot_img.jpeg';
import { Title1, Title2, Title3, Content, PageLayout } from '../../components/GlobalComponents';
import React from 'react';
import PageMainTitle from '../../components/PageMainTitle';
import { MenuListDTO } from '../../dto/menu-create.dto';

//import Grid from '@mui/material/Grid';

const WarmImg = [
    {
        imgNum: 1,
        title: '바질 파스타 BASIL PASTA',
        description: '바질페스토, 파스타, 모짜렐라 펄, 견과류, 올리브 *오리엔탈',
    },
    {
        imgNum: 2,
        title: '바질 치킨 BASIL CHICKEN',
        description: '바질페스토, 치킨, 크랜베리 *시저',
    },
    {
        imgNum: 1,
        title: '바질 파스타 BASIL PASTA',
        description: '바질페스토, 파스타, 모짜렐라 펄, 견과류, 올리브 *오리엔탈',
    },
    {
        imgNum: 2,
        title: '바질 치킨 BASIL CHICKEN',
        description: '바질페스토, 치킨, 크랜베리 *시저',
    },
];
const Topping = [
    {
        Kname: '치킨',
        Ename: 'CHICKEN',
    },
    {
        Kname: '연어',
        Ename: 'SALMON',
    },
    {
        Kname: '에그',
        Ename: 'EGG',
    },
    {
        Kname: '치킨소시지',
        Ename: 'CHICKEN SAUSAGE',
    },
    {
        Kname: "치킨",
        Ename: 'CHICKEN',
    },
    {
        Kname: '연어',
        Ename: 'SALMON',
    },
    {
        Kname: '에그',
        Ename: 'EGG',
    },
    {
        Kname: '치킨소시지',
        Ename: 'CHICKEN SAUSAGE',
    },
];

interface Props {
    GimbabList: MenuListDTO[]
};

const Meau: NextPage<Props> = ({ GimbabList }) => {
    console.log(GimbabList);
    return (
        <>
            <PageMainTitle title="메뉴" description="비오키친과 함께 하실 점주님을 모집합니다. 세계적인 브랜드의 성공 철학을 공유합니다." />
            <PageLayout style={{ padding: "50px 0px" }}>
                <Title1>시즈널 메뉴<strong><br />Seasonal Menu</strong></Title1>
                <Content>*시즈널 메뉴는 계절 한정으로 판매됩니다.</Content>
                {GimbabList.map((item, key) => (
                    <ImageItem key={key}>
                        <Image src={item.url} alt="" height={340} width={380} layout="intrinsic" />
                        <Content style={{ fontWeight: 700 }}>{item.title}</Content>
                        <Content>{item.content}</Content>
                    </ImageItem>
                ))}
            </PageLayout>
            <Image src={seasonal} alt="" />
            <PageLayout>
                <Title1>Make Your Own Salady</Title1>
                <Content>*기본 베이스인 '채소볼' 또는 '곡물볼'을 선택하여 기호에 맞게 커스터마이징(customizing) 해서 즐기세요!</Content>
                {Topping.map((item, key) => (
                    <TextItem key={key}>
                        <Content style={{ fontWeight: 700 }}>{item.Kname}</Content>
                        <Content>{item.Ename}</Content>
                    </TextItem>
                ))}
            </PageLayout>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(process.env.API_URL + "/api/menu/Gimbab");
    const GimbabList: MenuListDTO[] = await res.json();

    if (!GimbabList) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            GimbabList
        }
    }
}

const ImageItem = styled.div`
    width:50%;
    display: inline-block;
`

const TextItem = styled.span`
    align-items: center;
    text-align: center;
    display:inline-block;
    text-align: left;
    margin: 10px;
    padding: 10px 30px;
    box-sizing: border-box;
    background: #f7f7f7;
    @media only screen and (max-width: 600px) {
        width: calc(100%/2 - 23px);
    }
    @media only screen and (min-width: 600px) {
        width: calc(100%/2 - 23px);
    }
    @media only screen and (min-width: 768px) {
        width: calc(100%/3 - 23px);
    }
    @media only screen and (min-width: 1200px) {
        width: calc(100%/4 - 23px);
    }
`

export default Meau;