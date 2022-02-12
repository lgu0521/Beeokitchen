import React, { useEffect, useCallback } from "react";
import GridBox from "../components/GridBox";
import Head from 'next/head';
import { PageMaxNoCSSLayout, PageFullWidthLayout, Title3, Title2, Title4, Title5, } from "../components/GlobalComponents";
import PageMainTitle from "../components/PageMainTitle";
import StartUpModal from "../components/StartUpModal/StartUpModal";
import styled from "styled-components";
import { PageTitleDTO } from "../dto/page-title.dto";
import { GetServerSideProps } from "next";
import { FranChiseDTO } from "../dto/franchise.dto";
import { useRouter } from "next/router";

interface Props {
  franchises: FranChiseDTO[];
  PageTitle: PageTitleDTO;
}

const StartUpPage = ({ franchises, PageTitle }: Props) => {
  return (
    <>
      <Head>
        <title>비오키친 프랜차이즈</title>
        <meta name="description" content="비오키친과 함께 건강한 식문화를 만들어가실 점주님과의 패밀리십 체결을 희망합니다." />
        <link rel="canonical" href="https://www.xn--9w3b27lmmhzmc.kr/franchise" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="비오키친 프랜차이즈" />
        <meta property="og:site_name" content="비오키친 프랜차이즈" />
        <meta property="og:url" content="https://www.xn--9w3b27lmmhzmc.kr/franchise" />
        <meta property="og:image" content="/story-sub1.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:description" content="비오키친과 함께 건강한 식문화를 만들어가실 점주님과의 패밀리십 체결을 희망합니다." key="description" />
      </Head>
      <PageMainTitle {...PageTitle} />
      <PageFullWidthLayout>
        <BackgroundWrap>
          <PageMaxNoCSSLayout>
            <Wrap>
              <Title2 style={{ fontWeight: 600, color: "#ffffff" }}>
                가맹절차
            </Title2>
            </Wrap>
            <GridBox
              boxItems={franchises}
              col={4}
              mdCol={3}
              smCol={2}
              height="100px"
            />
          </PageMaxNoCSSLayout>
        </BackgroundWrap>
      </PageFullWidthLayout>
      <PageMaxNoCSSLayout
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContentWrap>
          <Title2
            style={{ fontWeight: 600, color: "#03502C", marginBottom: "50px" }}
          >
            예상투자비용
          </Title2>
          <Table>
            <caption
              style={{
                textAlign: "right",
                color: "#03502C",
                fontWeight: 600,
                marginBottom: "5px",
              }}
            >
              <Title4>*단위 : 만원</Title4>
            </caption>
            <Thead>
              <tr>
                <th scope="col">
                  <Title3>항목</Title3>
                </th>
                <th scope="col">
                  <Title3>금액</Title3>
                </th>
                <th scope="col">
                  <Title3>내용</Title3>
                </th>
              </tr>
            </Thead>
            <Tbody>
              <tr>
                <th scope="row">
                  <Title3>가맹비</Title3>
                </th>
                <td>
                  <Title2>300</Title2>
                </td>
                <td>
                  <Title3>부가세별도, 소멸성</Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>교육비</Title3>
                </th>
                <td>
                  <Title2>500</Title2>
                </td>
                <td>
                  <Title3>부가세별도, 소멸성</Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>계약이행보증금</Title3>
                </th>
                <td>
                  <Title2>200</Title2>
                </td>
                <td>
                  <Title3>부가세없음</Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>인테리어(15평 기준)</Title3>
                </th>
                <td>
                  <Title2>3,000</Title2>
                </td>
                <td>
                  <Title3>1평=3.3제곱미터(평 당 200만원), 부가세별도</Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>인테리어 외</Title3>
                </th>
                <td>
                  <Title2>1,530</Title2>
                </td>
                <td>
                  <Title3>간판, 가구, 사인몰, 인쇄물 등, 부가세별도 </Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>주방설비&집기류</Title3>
                </th>
                <td>
                  <Title2>2,600</Title2>
                </td>
                <td>
                  <Title3>부가세별도</Title3>
                </td>
              </tr>
            </Tbody>
            <Tfoot>
              <tr>
                <th scope="row">
                  <Title3>합계</Title3>
                </th>
                <td>
                  <Title2>8,130</Title2>
                </td>
                <td>
                  <Title3 style={{ fontWeight: 700 }}>
                    총 비용은 경우에 따라 변동 될 수 있습니다.
                  </Title3>
                </td>
              </tr>
            </Tfoot>
          </Table>
          <TextUl>
            <li>
              <Title5>
                별도 : 가스 / 소방 / 전기증설 / 냉난방 / 테라스 / 철거 / 화장실 등
              </Title5>
            </li>
            <li>
              <Title5>
                가맹비,교육비,보증금 외 비용은 현장상황에 따라 상이할 수 있습니다.
              </Title5>
            </li>
            <li>
              <Title5>
                매장 상황에 따라 인테리어, 주방설비 등은 변동 될 수 있습니다.
              </Title5>
            </li>
          </TextUl>
        </ContentWrap>
      </PageMaxNoCSSLayout>
      <PageFullWidthLayout style={{ backgroundColor: "#F9F0EC" }}>
        <Wrap>
          <Title2 style={{ fontWeight: 600, color: "#03502C" }}>
            가맹상담 신청서
          </Title2>
        </Wrap>
        <PageMaxNoCSSLayout>
          <StartUpModal />
        </PageMaxNoCSSLayout>
      </PageFullWidthLayout>
    </>
  );
};

export const getStaticProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/franchise"
  );
  const franchises: FranChiseDTO = await res.json();

  const resPageTitle = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/page-title/StartUp"
  );
  const PageTitle: PageTitleDTO = await resPageTitle.json();

  if (!PageTitle && !franchises) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      PageTitle,
      franchises
    },
  };
};

const ContentWrap = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
  @media only screen and (max-width: 600px) {
    margin: 60px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 80px 0px;
  }
  @media only screen and (min-width: 768px) {
    margin: 120px 0px;
  }
`;

const TextUl = styled.ul`
  list-style: disc;
  text-align: left;
  font-weight: 600;
  line-height: 130%;
  padding: 15px 20px;
  li {
    margin-top: 7px;
  }
`;

const Wrap = styled.div`
  display: inline-block;
  @media only screen and (max-width: 600px) {
    margin-top: 60px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 80px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 120px;
  }
`;

export const Table = styled.table`
  width: 100%;
  line-height: 22px;
  text-align: left;
  tr {
    vertical-align: middle;
    border-top: 0.5px solid #008b48;
    @media only screen and (max-width: 600px) {
      height: 50px;
    }
    @media only screen and (min-width: 600px) {
      height: 69px;
    }
  }
  th,
  td {
    padding: 0 15px;
    vertical-align: middle;
  }
  th {
    font-weight: 600;
  }
  td:nth-child(2) {
    font-weight: 300;
  }
  td:nth-child(3) {
    font-weight: 500;
  }
  th:nth-child(3),
  td:nth-child(3) {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead`
  border-top: 5px solid #009223;
  border-bottom: 3px solid #009223;
  tr > th {
    font-weight: 800;
  }
`;

export const Tfoot = styled.tfoot`
  background-color: #f9f0ec;
  color: #cc3d3d;
  tr > th {
    font-weight: 600;
  }
  tr {
    border: 0px;
  }
`;
// 이미지 스크롤시, position: pixed 수정해야함
const BackgroundWrap = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("/startupBackground.png");
  @media only screen and (max-width: 600px) {
    background-attachment: initial !important;
    background-image: url("/franchise_background_moblie.png");
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 5% auto;
  border: 1px solid #888;
  height: 70%;
  border-radius: 20px;
  border: 0px;
  display: table;

  @media only screen and (max-width: 600px) {
    padding: 10px;
    width: 90%;
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    padding: 20px;
    width: 70%;
  }
  @media only screen and (min-width: 992px) {
    padding: 20px;
    width: 60%;
  }
  @media only screen and (min-width: 1200px) {
    padding: 20px;
    width: 50%;
  }
`;
export default StartUpPage;
