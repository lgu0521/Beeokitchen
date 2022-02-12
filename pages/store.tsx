import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import Head from 'next/head';
import React, { useCallback, useEffect, useState } from "react";
import PageMainTitle from "../components/PageMainTitle";
import { StoreDTO } from "../dto/store.dto";
import {
  PageFullWidthLayout,
  PageMaxNoCSSLayout,
  Title5,
  Title3,
  Title4,
} from "../components/GlobalComponents";
import { PageTitleDTO } from "../dto/page-title.dto";
import { useRouter } from "next/router";

interface Props {
  storeList: StoreDTO[];
  PageTitle: PageTitleDTO;
}
const StorePage: NextPage<Props> = ({ storeList, PageTitle }) => {
  const router = useRouter();
  const refreshData = useCallback( () => {
    router.replace(router.asPath);
  }, [router]);

  useEffect(() => {
    refreshData()
  }, [storeList, refreshData]);
  return (
    <>
      <Head>
        <title>비오키친 매장</title>
        <meta name="description" content="여러분의 일상과 가장 가까운 곳에서 비오키친을 만나보세요" />
        <link rel="canonical" href="https://www.xn--9w3b27lmmhzmc.kr/store" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="비오키친 매장" />
        <meta property="og:site_name" content="비오키친 매장" />
        <meta property="og:url" content="https://www.xn--9w3b27lmmhzmc.kr/store" />
        <meta property="og:image" content="/story-sub1.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:description" content="여러분의 일상과 가장 가까운 곳에서 비오키친을 만나보세요." key="description" />
      </Head>
      <PageMainTitle {...PageTitle} />
      <PageFullWidthLayout
        style={{ backgroundColor: "rgba(227, 181, 159, 0.2)" }}
      >
        <PageMaxNoCSSLayout>
          <ContentUl>
            {storeList.map((item: StoreDTO, key) => (
              <Contentli key={key}>
                <ImageWrap>
                  <Image
                    src={item.image.downloadUrl}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </ImageWrap>
                <TextWrap>
                  <Title3 style={{ color: "#008B48", fontWeight: 600 }}>
                    {item.title}
                  </Title3>
                  <Title5 style={{ fontWeight: 600 }}>
                    Tel {item.phonenumber}
                  </Title5>
                </TextWrap>
                <TextBox>
                  <Title5>{item.operation}</Title5>
                </TextBox>
              </Contentli>
            ))}
          </ContentUl>
        </PageMaxNoCSSLayout>
      </PageFullWidthLayout>
    </>
  );
};

const ImageWrap = styled.div`
  position: relative;
  width: 100%;

  div {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 600px) {
    height: 38vh;
  }
  @media only screen and (min-width: 600px) {
    height: 31vh;
  }
`;
const ContentUl = styled.ul`
  display: inline-block;
  padding: 0px 0px;
  @media only screen and (max-width: 600px) {
    margin: 40px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 80px 0px;
  }
  @media only screen and (min-width: 992px) {
    margin: 120px 0px;
  }
`;

const Contentli = styled.li`
  position: relative;
  float: left;
  background-color: white;
  border: 3px solid #15aa5a;
  text-align: left;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0 0px 20px 0px;
  }
  @media only screen and (min-width: 600px) {
    width: calc(50% - 16px);
    margin: 0 8px 20px 8px;
  }
  @media only screen and (min-width: 992px) {
    width: calc(33% - 20px);
    margin: 0 10px 20px 10px;
  }
`;

const TextBox = styled.div`
  h5 {
    padding: 15px;
    word-break: inherit;
    font-weight: 400;
    @media only screen and (max-width: 600px) {
      min-height: 85px;
    }
    @media only screen and (min-width: 600px) {
      min-height: 90px;
    }
    @media only screen and (min-width: 992px) {
      min-height: 130px;
    }
  }
`;
const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: relative;
  padding: 15px;
  ::after {
    content: "";
    position: absolute;
    width: 96%;
    top: 100%;
    left: 2%;
    border-bottom: 1.5px solid #15aa5a;
  }
`;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/store");
  const storeList: StoreDTO[] = await res.json();
  const resPageTitle = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/page-title/Store"
  );
  const PageTitle: PageTitleDTO = await resPageTitle.json();

  if (!storeList) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      storeList,
      PageTitle,
    },
  };
};

export default StorePage;
