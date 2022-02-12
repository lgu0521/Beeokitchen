//Basic
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Head from 'next/head';
//Style
import styled from "styled-components";
import {
  Title5,
  Title3,
  PageMaxNoCSSLayout,
  PageFullWidthLayout,
  Title2,
  Title4,
} from "../components/GlobalComponents";
//Component
import PageMainTitle from "../components/PageMainTitle";
//DTO
import { MenuCatagoryDTO, MenusWithCatagoryDTO, } from "../dto/menu.dto";
import { PageTitleDTO } from "../dto/page-title.dto";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface Props {
  menusWithCatagory: MenusWithCatagoryDTO[];
  menuCatagorys: MenuCatagoryDTO[];
  PageTitle: PageTitleDTO;
}

const Meau: NextPage<Props> = ({ menusWithCatagory, PageTitle }) => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
  useEffect(() => {
    refreshData()
  }, [])
  return (
    <>
      <Head>
        <title>비오키친 메뉴</title>
        <meta name="description" content="아무리 바빠도, 나를 위한 건강하고 맛있는 한끼. 키토김밥, 다이어트도시락, 샐러드, 다이어트푸드" />
        <link rel="canonical" href="https://www.xn--9w3b27lmmhzmc.kr/menu" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="비오키친 메뉴" />
        <meta property="og:site_name" content="다이어트푸드 전문키친" />
        <meta property="og:url" content="https://www.xn--9w3b27lmmhzmc.kr/menu" />
        <meta property="og:image" content="/story-sub1.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:description" content="아무리 바빠도, 나를 위한 건강하고 맛있는 한끼. 키토김밥, 다이어트도시락, 샐러드, 다이어트푸드" key="description" />
      </Head>
      <PageMainTitle {...PageTitle} />
      <MenuNutritionSection>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/%EC%98%81%EC%96%91%EC%84%B1%EB%B6%84%ED%91%9C%20%EC%B5%9C%EC%A2%85.xlsx.pdf?alt=media&token=210dfa15-6984-49b7-8680-7123c80ae921"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <Title4>메뉴영양정보</Title4>
          </Button>
        </a>
      </MenuNutritionSection>
      <Ul>
        {menusWithCatagory.map((catagory, i) => (
          <Li key={i}>
            <PageFullWidthLayout>
              <PageMaxNoCSSLayout>
                <>
                  <Header key={i}>
                    <li>
                      <Title2 style={{ fontWeight: 600, color: "#15AA5A" }}>
                        {catagory.title}
                      </Title2>
                    </li>
                    <li>
                      <Title5 style={{ fontWeight: 400, marginTop: "6px" }}>
                        {catagory.content}
                      </Title5>
                    </li>
                  </Header>
                  <Main>
                    {catagory.menus.map((menu, i) => (
                      <>
                        <MainLi>
                          <Image
                            src={menu.image.downloadUrl}
                            alt=""
                            height={350}
                            width={350}
                            placeholder="blur"
                            blurDataURL="/blur.png"
                          />
                          <ResTitle3>{menu.title}</ResTitle3>

                          <MenuContent1>{menu.content1}</MenuContent1>

                          <MenuContent2>{menu.content2}</MenuContent2>
                        </MainLi>
                      </>
                    ))}
                  </Main>
                </>
              </PageMaxNoCSSLayout>
            </PageFullWidthLayout>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const menuCatagorys: MenuCatagoryDTO[] = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/menu/catagory"
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  const menusWithCatagory: MenusWithCatagoryDTO[] = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/menu"
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  const PageTitle = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/page-title/Menu"
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  if (!menusWithCatagory && !PageTitle && !menuCatagorys) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      menusWithCatagory,
      PageTitle,
      menuCatagorys,
    },
  };
};
const Li = styled.li`
  @media only screen and (max-width: 600px) {
    padding: 50px 10px;
  }
  @media only screen and (min-width: 600px) {
    padding: 50px 0px;
  }
  @media only screen and (min-width: 768px) {
    padding: 80px 0px;
  }
  @media only screen and (min-width: 992px) {
    padding: 100px 0px;
  }
`;

const Ul = styled.ul`
  ${Li}:nth-child(2n-1) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MenuContent1 = styled(Title5)`
  font-weight: 600;
  margin-top: 15px;
  color: #50555c;
  @media only screen and (max-width: 600px) {
    margin-top: 3px;
    font-weight: 400;
  }
`;

const MenuContent2 = styled(Title5)`
  color: #50555c;
  font-weight: 400;
  margin-top: 3px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ResTitle3 = styled(Title3)`
  font-weight: 600;
  margin-top: 0px;
  @media only screen and (min-width: 992px) {
    margin-top: 30px !important;
  }
`;


const Header = styled.ul`
  position: relative;
  border-bottom: 2px solid #15aa5a;
  li:nth-child(2) {
    font-weight: 400;
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 20px;
  }
  @media only screen and (min-width: 600px) {
    padding-bottom: 40px;
  }
  @media only screen and (min-width: 768px) {
    padding-bottom: 50px;
  }
`;
const MainLi = styled.li`
  position: relative;
  display: inline-block;
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 50%;
    padding: 0px 5px;
    margin: 30px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 50px 0px;
  }
  @media only screen and (min-width: 768px) {
    margin: 60px 0px;
  }
  @media only screen and (min-width: 992px) {
    margin: 70px 0px;
  }
  @media only screen and (min-width: 1200px) {
    margin: 80px 0px;
  }
`;
const Main = styled.ul`
  position: relative;
  text-align: center;

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1.5px;
    top: 100%;
    left: 0;
    background: #15aa5a;
  }

  :last-child ::after {
    height: 0px;
  }
`;
const MenuNutritionSection = styled.div`
  text-align: center;
  font-weight: 800;
  @media only screen and (max-width: 600px) {
    padding-top: 50px;
  }
  @media only screen and (min-width: 600px) {
    padding-top: 50px;
  }
  @media only screen and (min-width: 768px) {
    padding-top: 80px;
  }
  @media only screen and (min-width: 992px) {
    padding-top: 100px;
  }
`;

const Button = styled.button`
  color: #404346;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
  padding: 20px 40px;
  background-color: #f9f0ec;
  border: 2px solid #cc3d3d;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #cc3d3d;
    color: white;
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s;
  }

  @media only screen and (max-width: 600px) {
    padding: 15px 30px;
    border-radius: 17px;
    margin-top: 10px;
  }
`;

export default Meau;
