import {
  Title1,
  Title4,
  Title5,
  PageFullWidthLayout,
  Title2,
  Title3,
  PageMaxNoCSSLayout,
  NEW_Title3,
} from "../components/GlobalComponents";
import styled from "styled-components";
import Image from "next/image";
import PageMainTitle from "../components/PageMainTitle";
import { GetServerSideProps } from "next";
import { PageTitleDTO } from "../dto/page-title.dto";
import Story1 from "../public/banner1.jpeg";
import Story2 from "../public/banner2.jpeg";
import storyIcon1 from "../public/story-icon2.svg";
import storyIcon2 from "../public/story-icon1.svg";
import StoryWeb from "../public/2022/branstory_pc.svg";
import StoryMobile from "../public/2022/branstory_mobile.svg";
import Head from 'next/head';
interface Props {
  PageTitle: PageTitleDTO;
}
const Brand = ({ PageTitle }: Props) => {

  const schemaData =
  {

    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "헬키푸키",
    "url": "https://헬키푸키.kr",
    "sameAs": [
      "https://www.instagram.com/beeokitchen"
    ]
  }


  return (
    <>
      <Head>
        <title>헬키푸키 브랜드스토리</title>
        <meta name="description" content="식단관리가 괴로운 것이 아니라 나를 위한 선물이 될 수 있도록. 헬키푸키은 나쁜 것들을 비워낸다는 의미입니다.
몸속에 나쁜 영향을 주는 지방, 노폐물, 독소 등을 건강하게 비우려면 균형 잡힌 식단이 중요합니다.
헬키푸키은 신선한 재료와 건강한 메뉴들로 식단을 균형 있게 만들기 위해 노력합니다.
" />
        <link rel="canonical" href="https://www.xn--9w3b27lmmhzmc.kr/brand" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="헬키푸키 브랜드스토리" />
        <meta property="og:site_name" content="헬키푸키 브랜드스토리" />
        <meta property="og:url" content="https://www.xn--9w3b27lmmhzmc.kr/brand" />
        <meta property="og:image" content="/story-sub1.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:description" content="식단관리가 괴로운 것이 아니라 나를 위한 선물이 될 수 있도록. 헬키푸키은 나쁜 것들을 비워낸다는 의미입니다.
몸속에 나쁜 영향을 주는 지방, 노폐물, 독소 등을 건강하게 비우려면 균형 잡힌 식단이 중요합니다.
헬키푸키은 신선한 재료와 건강한 메뉴들로 식단을 균형 있게 만들기 위해 노력합니다." key="description" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageMainTitle {...PageTitle} />
      <PageFullWidthLayout>
        <BackgroundWrap>
          <PageMaxNoCSSLayout>
            <Section1>
              <Title1 color="#fff">
                건강을 키우는 다이어트 푸드키친
              </Title1>
              <Title1>
                <strong>Healthy Food Kitchen : 헬키푸키</strong>
              </Title1>
              <ul>
                <PCversion>
                  <li>
                    <Title4 color="#fff">
                      대충 때우는 한끼부터 조금 더 신경쓰면 어떨까? 라는 생각에서 시작했습니다.
                    </Title4>
                  </li>
                  <li>
                    <Title4 color="#fff">
                      바쁜 일상 속에서도 건강하고 즐거운 한끼를 위해 요리하는 건강을 키우는 키친, 헬키푸키 입니다.
                    </Title4>
                  </li>
                </PCversion>
                <MBversion>
                  <li>
                    <Title4 color="#fff">
                      대충 때우는 한끼부터 조금 더 신경쓰면 어떨까? 라는 생각에서 시작했습니다.
                      바쁜 일상 속에서도 건강하고 즐거운 한끼를 위해 요리하는 건강을 키우는 키친, 헬키푸키 입니다.
                    </Title4>
                  </li>
                </MBversion>
              </ul>
            </Section1>
          </PageMaxNoCSSLayout>
        </BackgroundWrap>
      </PageFullWidthLayout>
      <PageFullWidthLayout>
        <PageMaxNoCSSLayout>
          <Section3>
            <ul>
              <PCversion>
                <Title1>
                  <li style={{ lineHeight: "2" }}>
                    다이어트는 예나, 지금이나
                  </li>
                </Title1>
                <Title5>
                  <li>
                    1960년대부터 원푸드 다이어트, 디톡스, 간헐적단식, 현재 유행하는 키토식단, 지중해식단까지. 건강을 위해 무수히 많은 스타일의 식단이 개발되고 퍼져 왔습니다.
                  </li>
                  <li>
                    그러나 중요한 것은 매일먹는 식사의 건강함입니다. 헬키푸키는 변화가 심한 건강식 트렌드 속 에서도 건강을 위하는 본질을 지킵니다.
                  </li>
                </Title5>
                <ImageWrap>
                  <Image
                    width={1000}
                    height={326}
                    objectFit='contain'
                    src={StoryWeb}
                    alt=""
                  />
                </ImageWrap>
              </PCversion>
              <MBversion>
                <Title1><li style={{ marginBottom: "20px" }}>다이어트는 예나, 지금이나</li></Title1>
                <Title5>
                  <li>
                    1960년대부터 원푸드 다이어트, 디톡스, 간헐적단식, 현재 유행하는 키토식단, 지중해식단까지. 건강을 위해 무수히 많은 스타일의 식단이 개발되고 퍼져 왔습니다.
                    그러나 중요한 것은 매일먹는 식사의 건강함입니다. 헬키푸키는 변화가 심한 건강식 트렌드 속 에서도 건강을 위하는 본질을 지킵니다.
                  </li>
                </Title5>
                <ImageWrap>
                  <Image
                    width={180}
                    height={600}
                    objectFit='contain'
                    src={StoryMobile}
                    alt=""
                  />
                </ImageWrap>
              </MBversion>
            </ul>
          </Section3>
        </PageMaxNoCSSLayout>
      </PageFullWidthLayout>
      <PageFullWidthLayout>
        <BackgroundColor>
          <PageMaxNoCSSLayout>
            <Section2>
              <Typography>
                <Title2>건강을 키우는 푸드키친, 헬키푸키</Title2>
                <Title3>Healthy food kitchen, helkipooki</Title3>
              </Typography>
              <Section2_Wrap1>
                <ul style={{ backgroundColor: "white" }}>
                  <li>
                    <li>
                      <div>
                        <Image
                          objectFit="cover"
                          layout="responsive"
                          src={storyIcon2}
                          alt=""
                        />
                      </div>
                      <Title3>매일먹는 한끼부터 건강하게</Title3>
                    </li>
                    <li>
                      <Title2>
                        항상 먹는 메뉴부터<br />
                        조금 더 건강하게, 그렇지만 맛있게!
                      </Title2>
                    </li>
                    <li>
                      <Title5>
                        한국인들의 패스트푸드- 김밥 & 떡볶이 & 덮밥부터 건강하게 만들어봤습니다.
                        밥없이 계란으로 만들어진 키토김밥으로 탄수화물 관리중이신 분들께 많은 호응을 받았어요. 건강김밥에는 현미강황밥을 사용하고, 소스는 자체개발한 저당소스를 사용합니다.{" "}
                      </Title5>
                    </li>
                  </li>
                  <li>
                    <Image
                      src={Story1}
                      objectFit="cover"
                      layout="responsive"
                      alt=""
                    />
                  </li>
                </ul>
                <ul style={{ backgroundColor: "white" }}>
                  <li>
                    <li>
                      <div>
                        <Image
                          objectFit="cover"
                          layout="responsive"
                          src={storyIcon1}
                          alt=""
                        />
                      </div>
                      <Title3>신선하게 & 새롭게</Title3>
                    </li>
                    <li>
                      <Title2>
                        주6일(월~토) 물류공급 & 자체 개발시설 완비
                      </Title2>
                    </li>
                    <li>
                      <Title5>
                        헬키푸키는 새로운 메뉴개발과 신선한 식자재 공급에 진심입니다.
                        자체개발시설을 완비해 지속적으로 건강메뉴를 개발 중이며 삼성웰스토리와 주5일 물류계약으로 신선한 식자재를 매일매일 공수합니다.
                      </Title5>
                    </li>
                  </li>
                  <li>
                    <Image
                      objectFit="cover"
                      layout="responsive"
                      src={Story2}
                      alt=""
                    />
                  </li>
                </ul>
              </Section2_Wrap1>
            </Section2>
          </PageMaxNoCSSLayout>
        </BackgroundColor>
      </PageFullWidthLayout>
    </>
  );
};
// 이미지 스크롤시, position: pixed 수정해야함
const BackgroundWrap = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("/brandMain.png");
  @media only screen and (max-width: 600px) {
    background-attachment: initial !important;
  }
`;

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h1, h4 {
    font-weight: 400;
  }
  @media only screen and (max-width: 600px) {
    height: 350px;
    h1 {
      margin-bottom: 25px;
    }
  }
  @media only screen and (min-width: 600px) {
    height: 490px;
    h1 {
      margin-bottom: 25px;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 590px;
    h1 {
      margin-bottom: 35px;
    }
  }
  @media only screen and (min-width: 992px) {
    height: 690px;
    h1 {
      margin-bottom: 40px;
    }
  }
  @media only screen and (min-width: 1200px) {
    height: 690px;
    h1 {
      margin-bottom: 45px;
    }
  }
`;

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px;
`;

const Section2_Wrap1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    ul {
      width: 100% !important;
      margin-bottom: 20px !important;
    }
  }
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 60px !important;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48.7%;
    border: 3px solid #15aa5a;
    @media only screen and (max-width: 600px) {
      height: 550px;
    }
    @media only screen and (min-width: 600px) {
      height: 700px;
    }
    @media only screen and (min-width: 768px) {
      height: 800px;
    }
    @media only screen and (min-width: 992px) {
      height: 800px;
    }
    @media only screen and (min-width: 1200px) {
      height: 1000px;
    }
  }
  ul > li:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 45%;
    margin: 30px 0px;
    @media only screen and (max-width: 280px) {
      height: 55% !important;
      padding: 0px 10px;
    }
    @media only screen and (max-width: 600px) {
      padding: 0px 10px;
    }
    @media only screen and (min-width: 600px) {
      padding: 0px 20px;
    }
    @media only screen and (min-width: 768px) {
      padding: 0px 20px;
    }
    @media only screen and (min-width: 992px) {
      padding: 0px 30px;
    }
    @media only screen and (min-width: 1200px) {
      padding: 30px 30px;
    }
  }
  ul > li:nth-child(2) {
    width: 100%;
    height: 55%;
    overflow: hidden;
    div {
      height: 100%;
    }
    @media only screen and (max-width: 280px) {
      height: 45% !important;
    }
  }
  ul > li:nth-child(1) > li:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    div {
      margin: 10px;
      @media only screen and (max-width: 600px) {
        width: 70px;
        height: 70px;
      }
      @media only screen and (min-width: 600px) {
        width: 70px;
        height: 70px;
      }
      @media only screen and (min-width: 768px) {
        width: 80px;
        height: 80px;
      }
      @media only screen and (min-width: 992px) {
        width: 85px;
        height: 85px;
      }
    }
  }
  ul > li:nth-child(1) > li:nth-child(2) {
    font-weight: 400;
  }
  ul > li:nth-child(1) > li:nth-child(3) {
    font-weight: 400;
  }
`;

const Section3 = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 0px;
  }
`;

const BackgroundColor = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(227, 181, 159, 0.4);
`;

const PCversion = styled.li`
  display: none;
  @media only screen and (min-width: 600px) {
    display: block !important;
  }
`;
const MBversion = styled.li`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block !important;
  }
`;

const Typography = styled.div`
  @media only screen and (max-width: 600px) {
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 600px) {
    margin-bottom: 60px;
  }
`

const ImageWrap = styled.div`
 @media only screen and (max-width: 600px) {
    margin-top: 30px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 50px;
  }
  
`
export const getServerSideProps: GetServerSideProps = async (context) => {
  const resPageTitle = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/page-title/Brand"
  );
  const PageTitle: PageTitleDTO = await resPageTitle.json();

  if (!PageTitle) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      PageTitle,
    },
  };
};

export default Brand;
