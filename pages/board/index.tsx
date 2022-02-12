import { GetStaticProps, NextPage } from "next";
import PageNationListView from "../../components/PageNationListView";
import AccordionListView from "../../components/AccordionListView";
import PageMainTitle from "../../components/PageMainTitle";
import { useEffect, useState } from "react";
import { NoticeListDTO } from "../../dto/notice.dto";
import { FaqDTO } from "../../dto/faq.dto";
import { PageMaxNoCSSLayout, Title2 } from "../../components/GlobalComponents";
import styled from "styled-components";
import { PageTitleDTO } from "../../dto/page-title.dto";
import { useRouter } from "next/dist/client/router";
import Head from 'next/head';
interface Props {
  noticeList: NoticeListDTO[];
  faqList: FaqDTO[];
  PageTitle: PageTitleDTO;
}

const BrandPage: NextPage<Props> = ({ noticeList, faqList, PageTitle }) => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  useEffect(() => {
     refreshData()
  }, []);
  const [isFaq, setIsFaq] = useState(router.query.page ? false : true);
  const [isNotice, setIsNotice] = useState(router.query.page ? true : false);

  return (
    <>
      <Head>
        <title>비오키친 브랜드 게시판</title>
        <meta name="description" content="비오키친의 최신소식과 Q&A를 빠르게 확인하세요" />
        <link rel="canonical" href="https://www.xn--9w3b27lmmhzmc.kr/board" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="비오키친 브랜드 게시판" />
        <meta property="og:site_name" content="비오키친 브랜드 게시판" />
        <meta property="og:url" content="https://www.xn--9w3b27lmmhzmc.kr/board" />
        <meta property="og:image" content="/story-sub1.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:description" content="비오키친의 최신소식과 Q&A를 빠르게 확인하세요" key="description" />
      </Head>
      <PageMainTitle {...PageTitle} />
      <PageMaxNoCSSLayout style={{ display: "flex" }}>
        <Nav>
          <Title2>
            <TabButton
              isOpen={isFaq}
              onClick={() => {
                setIsFaq(true);
                setIsNotice(false);
              }}
            >
              FAQ
            </TabButton>
          </Title2>
          <Title2>
            <TabButton
              isOpen={isNotice}
              onClick={() => {
                setIsFaq(false);
                setIsNotice(true);
              }}
            >
              공지사항
            </TabButton>
          </Title2>
        </Nav>
      </PageMaxNoCSSLayout>
      <PageMaxNoCSSLayout>
        {isFaq ? (
          <ContextBox style={{ borderTop: "5px solid #03502c" }}>
            {faqList.map((item, key) => (
              <div key={key} style={{ position: "relative" }}>
                <AccordionListView {...item} />
              </div>
            ))}
          </ContextBox>
        ) : null}
        {isNotice ? (
          <ContextBox>
            <PageNationListView itemList={noticeList} pageSize={7} />
          </ContextBox>
        ) : null}
      </PageMaxNoCSSLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const resNotice = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/notice/"
  );
  const resFaq = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/faq/");
  const noticeList: NoticeListDTO[] = await resNotice.json();
  const faqList: FaqDTO[] = await resFaq.json();
  const resPageTitle = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/page-title/Board"
  );
  const PageTitle: PageTitleDTO = await resPageTitle.json();

  if (!noticeList && !faqList) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      noticeList,
      faqList,
      PageTitle,
    },
  };
};

const Nav = styled.div`
  display: inline-flex;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 80px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 120px;
  }
`;

const ContextBox = styled.div`
  width: 100%;
  @media only screen and (max-width: 600px) {
    margin: 30px 0px 100px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 60px 0px 150px 0px;
  }
  @media only screen and (min-width: 768px) {
    margin: 80px 0px 250px 0px;
  }
`;

const TabButton = styled.span<{ isOpen: boolean }>`
  margin: 30px;
  font-weight: bold;
  cursor: pointer;
  color: #03502c;
  opacity: ${(props) => (props.isOpen ? " 100%" : "50%")};
  &:hover {
    color: #03502c;
    opacity: 100%;
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s;
  }
`;
export default BrandPage;
