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
import Story1 from "../public/story-sub1.png";
import Story2 from "../public/story-sub2.png";
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
              <NEW_Title3 color="#fff" style={{marginBottom: "10px"}}>
                건강을 키우는 다이어트 푸드키친
              </NEW_Title3>
              <Title1>
                <strong>Healthy Food Kitchen 헬키푸키</strong>
              </Title1>
              <ul>
                <PCversion>
                  <li>
                    <Title4 color="#fff">
                      신선한 재료와 건강한 메뉴들로 식단을 균형있게 만들기 위해 노력합니다.
                    </Title4>
                  </li>
                  <li>
                    <Title4 color="#fff">
                      현대인들의 라이프스타일에 맞게 다양한 방식의 다이어트푸드를 선보입니다.</Title4>
                  </li>
                  <li>
                    <Title4 color="#fff">맛있는 다이어트푸드를 추구합니다.</Title4>
                  </li>
                </PCversion>
                <MBversion>
                  <li>
                    <Title4 color="#fff">
                      신선한 재료와 건강한 메뉴들로 식단을 균형있게 만들기 위해 노력합니다.
                      현대인들의 라이프스타일에 맞게 다양한 방식의 다이어트푸드를 선보입니다.
                      맛있는 다이어트푸드를 추구합니다.
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
                    1960년대부터 유행한 원푸드 다이어트, 디톡스 다이어트부터 현재 유행하는 간헐적 단식까지
                    무수히 많은 다이어트 식단이 개발되고 퍼져 왔습니다.
                  </li>
                  <li>
                    그러나 중요한 것은 다이어트에 관한 나만의 신념을 가지는 것입니다.
                  </li>
                  <li>

                    헬키푸키는 변화가 심한 다이어트 트렌드 속 에서도 건강을 위하는 다이어트의 본질을 지킵니다.
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
                    1960년대부터 유행한 원푸드 다이어트, 디톡스 다이어트부터 현재 유행하는 간헐적 단식까지
                    무수히 많은 다이어트 식단이 개발되고 퍼져 왔습니다.
                    그러나 중요한 것은 다이어트에 관한 나만의 신념을 가지는 것입니다.
                    헬키푸키는 변화가 심한 다이어트 트렌드 속 에서도 건강을 위하는 다이어트의 본질을 지킵니다.
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
                          src={storyIcon1}
                          alt=""
                        />
                      </div>
                      <Title3>기본과 트렌드를 동시에</Title3>
                    </li>
                    <li>
                      <Title2>
                        건강하고 맛있는 다이어트푸드를 지속적으로 선보입니다 {" "}
                      </Title2>
                    </li>
                    <li>
                      <Title5>
                        헬키푸키에는 전통적인 다이어트 도시락과 새롭게 떠오르는 다이어트 메뉴들이 공존합니다.
                        다이어터들의 필요와 즐거움을 충족시킬 수 있는 다양한 메뉴들을 지속적으로 선보입니다.{" "}
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
                          src={storyIcon2}
                          alt=""
                        />
                      </div>
                      <Title3>청결하고 꼼꼼하게</Title3>
                    </li>
                    <li>
                      <Title2>
                        헬키푸키가 선별하는 산지직송의
                        신선한 식자재{" "}
                      </Title2>
                    </li>
                    <li>
                      <Title5>
                        현미는 철원산지에서, 호박고구마는 당진에서, 사과는 청송에서! 산지직송 식자재를 직접 관리합니다. 내 가족이 먹는다는 마음으로 청결하고 꼼꼼하게, 정직하게.
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
