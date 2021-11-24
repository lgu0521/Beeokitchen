import { Title1, Title4, Title5, PageFullWidthLayout, Title2, Title3, PageMaxNoCSSLayout } from '../../components/GlobalComponents';
import styled from 'styled-components';
import Image from 'next/image';
import PageMainTitle from '../../components/PageMainTitle';
import { GetStaticProps } from 'next';
import { PageTitleDTO } from '../../dto/page-title.dto';
import brandMainImage from '../../public/brandMain.png'
import Story1 from '../../public/story1.png';
import Story2 from '../../public/story2.png';
import storyIcon1 from '../../public/storyIcon1.png';
import storyIcon2 from '../../public/storyIcon2.png';
import Step1 from '../../public/step1.png';
import Step2 from '../../public/step2.png';
import Step3 from '../../public/step3.png';

interface RoundProp {
    value: string
}
interface Props {
    PageTitle: PageTitleDTO
}
const Brand = ({ PageTitle }: Props) => {
    const CONTENT_BOX_STYLE = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
    }

    return (
        <>
            <PageMainTitle {...PageTitle} />
            <PageFullWidthLayout style={{ ...CONTENT_BOX_STYLE, backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/brandMain.png?alt=media&token=c1a96bb8-8d4c-419e-8300-74b3e69cc446')" }}>
                <PageMaxNoCSSLayout>
                    <Section1>
                        <Title1>비오키친은<br />다이어트푸드 전문키친입니다.</Title1>
                        <Title4>
                            <ul>
                                <li>
                                    현대인들에게 다이어트와 건강관리는 이제 일상이 되었습니다.
                            </li>
                                <li>
                                    다이어트와 건강관리에 도움이 되면서도 맛있는 한끼를 먹을 순 없을까?
                            </li>
                                <li>
                                    라는 생각이 비오키친의 시작입니다.
                            </li>
                            </ul>
                        </Title4>
                    </Section1>
                </PageMaxNoCSSLayout>
            </PageFullWidthLayout>
            <PageFullWidthLayout style={{ background: "linear-gradient(180deg, #ffffff 50%, rgb(227, 181, 159, 0.4) 50%)" }}>
                <PageMaxNoCSSLayout>
                    <Section2>
                        <Wrap>
                            <ul>
                                <li>
                                    <li>
                                        <Image width={130} height={130} src={storyIcon1} />
                                        <Title3>기본과 트렌드를 동시에</Title3>
                                    </li>
                                    <li>
                                        <Title2>건강하고 맛있는 다이어트푸드를 지속적으로 선보입니다 </Title2>
                                    </li>
                                    <li>
                                        <Title5>비오키친에서는 전통적인 다이어트 도시락과 새롭게 떠오르는 다이어트 메뉴들이 공존합니다.
                                        다이어터들의 필요와 즐거움을 충족시킬 수 있는 다양한 메뉴들을 지속적으로 고민합니다. </Title5>
                                    </li>
                                </li>
                                <li>
                                    <Image width={100} height={100} src={Story1} objectFit="cover" layout="responsive" />
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <li>
                                        <Image width={130} height={130} src={storyIcon2} />
                                        <Title3>청결하고 꼼꼼하게</Title3>
                                    </li>
                                    <li>
                                        <Title2>비오키친이 선별하는 산지직송의 신선한 식자재 </Title2>
                                    </li>
                                    <li>
                                        <Title5>현미는 철원산지에서, 호박고구마는 당진에서, 사과는 청송에서! 산지직송 식자재를 직접 관리합니다.
                                        정확한 개량의 조리법으로 조리됩니다. 내 가족이 먹는다는 마음으로 청결하고 꼼꼼하게 운영합니다.</Title5>
                                    </li>
                                </li>
                                <li>
                                    <Image width={580} height={580} src={Story2} />
                                </li>
                            </ul>
                        </Wrap>
                        <Title1>다이어트가 지속되는 한 비오키친은 지속됩니다.</Title1>
                    </Section2>
                </PageMaxNoCSSLayout>
            </PageFullWidthLayout>
            <PageFullWidthLayout>
                <PageMaxNoCSSLayout>
                    <Section3>
                        <ul>
                            <li><Title5>
                                1960년대부터 유행한 원푸드다이어트, 디톡스다이어트부터 현재 유행하는 간헐적단식까지<br />
                        무수히 많은 다이어트 식단이 개발되고 퍼져 왔습니다. 그러나 중요한 것은 다이어트에 관한 나만의 신념을 가지는 것입니다.<br />
                        비오키친은 변화가 심한 다이어트 트렌드 속 에서도 건강을 위하는 다이어트의 본질을 지킵니다.
                        </Title5>
                            </li>
                            <li>
                                <li>
                                    <div><Image width={100} height={100} layout="responsive" objectFit="cover" src={Step1} /></div>
                                    <Title4>다이어트는 지속됩니다</Title4>
                                </li>
                                <li>
                                    <div><Image width={100} height={100} layout="responsive" objectFit="cover" src={Step2} /></div>
                                    <Title4>다이어트는 지속됩니다</Title4>
                                </li>
                                <li>
                                    <div><Image width={100} height={100} layout="responsive" objectFit="cover" src={Step3} /></div>
                                    <Title4>다이어트는 지속됩니다</Title4>
                                </li>
                            </li>
                            <li>
                                <Title3>건강한 식습관, 비오키친</Title3>
                                <Title4>Diet, Ever and ever</Title4>
                            </li>
                        </ul>
                    </Section3>
                </PageMaxNoCSSLayout>
            </PageFullWidthLayout>
        </>
    );
};

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    li {
        line-height: 130%;
    }
    h1{
       line-height: 130%;
    }
    @media only screen and (max-width: 600px) {
        height: 350px;
        h1{
            margin-bottom: 20px;
        }
    }
    @media only screen and (min-width: 600px) {
        height: 490px;
        h1{
            margin-bottom: 20px;
        }
    }
    @media only screen and (min-width: 768px) {
        height: 590px;
        h1{
            margin-bottom: 35px;
        }
    }
    @media only screen and (min-width: 992px) {
        height: 690px;
        h1{
            margin-bottom: 35px;
        }
    }
`

const Section2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;
    @media only screen and (max-width: 600px) {
        h1 {
            margin: 20px 0px 40px 0px;
        }
    }
    @media only screen and (min-width: 768px) {
        h1 {
            margin: 40px 0px 80px 0px;
        }
    }
`
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
    @media only screen and (min-width: 600px) {
        flex-direction: row;
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        max-width: 580px;
        max-height: 1000px;
        height: 100%;
        border: 3px solid #15AA5A;
        @media only screen and (max-width: 600px) {
            margin: 30px;
        }
        @media only screen and (min-width: 600px) {
            margin: 10px;
        }
        @media only screen and (min-width: 992px) {
            margin: 30px;
        }
    }
    ul > li:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 40%;
        @media only screen and (max-width: 600px) {
            padding: 10px 20px;
        }
        @media only screen and (min-width: 600px) {
            padding: 10px 30px;
        }
        @media only screen and (min-width: 768px) {
            padding: 10px 30px;
        }
    }
    ul > li:nth-child(2){
        overflow: hidden;
        width:100%;
        height: 60%;
    }
    ul > li:nth-child(1) > li:nth-child(1) {
        @media only screen and (max-width: 600px) {
            margin-bottom: 20px;
        }
        @media only screen and (min-width: 600px) {
            margin-bottom: 20px;
        }
        @media only screen and (min-width: 768px) {
            margin-bottom: 40px;
        }
        @media only screen and (min-width: 992px) {
            margin-bottom: 60px;
        }
    }
    ul > li:nth-child(1) > li:nth-child(2) {
        line-height: 350%;
        @media only screen and (max-width: 600px) {
            margin-bottom: 20px;
        }
        @media only screen and (min-width: 600px) {
            margin-bottom: 20px;
        }
        @media only screen and (min-width: 768px) {
            margin-bottom: 30px;
        }
        @media only screen and (min-width: 992px) {
            margin-bottom: 30px;
        }
    }
    ul > li:nth-child(1) > li:nth-child(3) {
        line-height: 200%;
        margin-bottom: 30px
    }
`

const Section3 = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 60px 0px;
    }
    ul > li:nth-child(1) {
        line-height: 230%;
    }
    ul > li:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid #15AA5A;
        padding-bottom: 60px;
        @media only screen and (max-width: 767px) {
            flex-direction: column;
        }
        @media only screen and (min-width: 768px) {
            flex-direction: row;
        }
        div{
            @media only screen and (max-width: 600px) {
                width: 150px;
                height: 150px;
                flex-direction: column;
            }
            @media only screen and (min-width: 600px) {
                width: 200px;
                height: 200px;
                flex-direction: column;
            }
            @media only screen and (min-width: 768px) {
                width: 200px;
                height: 200px;
                flex-direction: row;
            }
            @media only screen and (min-width: 992px) {
                width: 300px;
                height: 300px;
                flex-direction: row;
            }
        }
        h4{
            font-weight: 700;
        }
        width:100%;
        height: 100%;
    }
    ul > li:nth-child(3){
        margin-top: 40px;
        line-height: 300%;
        h3{
            font-weight: 700;
        }
    }
`

export const getStaticProps: GetStaticProps = async (context) => {
    const resPageTitle = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/page-title/Brand');
    const PageTitle: PageTitleDTO = await resPageTitle.json();

    if (!PageTitle) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            PageTitle
        }

    }
}
export default Brand;