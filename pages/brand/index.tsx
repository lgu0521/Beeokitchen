import { Title1, Title4, Title5, PageFullWidthLayout, Title2, Title3, PageMaxNoCSSLayout } from '../../components/GlobalComponents';
import styled from 'styled-components';
import Image from 'next/image';
import PageMainTitle from '../../components/PageMainTitle';
import { GetStaticProps } from 'next';
import { PageTitleDTO } from '../../dto/page-title.dto';
import Story1 from '../../public/story1.png';
import Story2 from '../../public/story2.png';
import storyIcon1 from '../../public/storyIcon1.png';
import storyIcon2 from '../../public/storyIcon2.png';
import Step1 from '../../public/step1.png';
import Step2 from '../../public/step2.png';
import Step3 from '../../public/step3.png';
import AfterIcon from '../../public/after.png';

interface RoundProp {
    value: string
}
interface Props {
    PageTitle: PageTitleDTO
}
const Brand = ({ PageTitle }: Props) => {
    return (
        <>
            <PageMainTitle {...PageTitle} />
            <PageFullWidthLayout>
                <BackgroundWrap>
                        <PageMaxNoCSSLayout>
                            <Section1>
                                <Title1>비오키친은<br />다이어트푸드 전문키친입니다.</Title1>
                                    <ul>
                                        <li><Title4>현대인들에게 다이어트와 건강관리는 이제 일상이 되었습니다.</Title4></li>
                                        <li><Title4>다이어트와 건강관리에 도움이 되면서도 맛있는 한끼를 먹을 순 없을까?</Title4></li>
                                        <li><Title4>라는 생각이 비오키친의 시작입니다.</Title4></li>
                                    </ul>
                            </Section1>
                        </PageMaxNoCSSLayout>
                </BackgroundWrap>
            </PageFullWidthLayout>
            <PageFullWidthLayout style={{ background: "linear-gradient(180deg, #ffffff 50%, rgb(227, 181, 159, 0.4) 50%)" }}>
                <PageMaxNoCSSLayout>
                    <Section2>
                        <Section2_Wrap1>
                            <ul>
                                <li>
                                    <li>
                                        <div>
                                            <Image objectFit="cover" layout="responsive" src={storyIcon1} alt=""/>
                                        </div>
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
                                    <Image src={Story1} objectFit="cover" layout="responsive" />
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <li>
                                        <div>
                                            <Image objectFit="cover" layout="responsive" src={storyIcon2} />
                                        </div>
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
                                    <Image objectFit="cover" layout="responsive" src={Story2} />
                                </li>
                            </ul>
                        </Section2_Wrap1>
                        <Title1>다이어트가 지속되는 한 비오키친은 지속됩니다.</Title1>
                    </Section2>
                </PageMaxNoCSSLayout>
            </PageFullWidthLayout>
            <PageFullWidthLayout>
                <PageMaxNoCSSLayout>
                    <Section3>
                        <ul>
                            <li>
                                <Title5>
                                    <li>1960년대부터 유행한 원푸드다이어트, 디톡스다이어트부터 현재 유행하는 간헐적단식까지</li>
                                    <li>무수히 많은 다이어트 식단이 개발되고 퍼져 왔습니다. 그러나 중요한 것은 다이어트에 관한 나만의 신념을 가지는 것입니다.</li>
                                    <li>비오키친은 변화가 심한 다이어트 트렌드 속 에서도 건강을 위하는 다이어트의 본질을 지킵니다.</li>
                                </Title5>
                            </li>
                            <li>
                                <li>
                                    <ImageWrap width={290} height={290} objectFit="fill" src={Step1} />
                                    <Title4>다이어트는 지속됩니다</Title4>
                                </li>
                                <li>

                                    <Image width={39} height={85} objectFit="cover" src={AfterIcon} />

                                </li>
                                <li>
                                    <ImageWrap width={290} height={290} objectFit="fill" src={Step2} />
                                    <Title4>다이어트는 지속됩니다</Title4>
                                </li>
                                <li>
                                    <Image width={39} height={85} objectFit="cover" src={AfterIcon} />

                                </li>
                                <li>
                                    <ImageWrap width={290} height={290} objectFit="fill" src={Step3} />

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
// 이미지 스크롤시, position: pixed 수정해야함
const BackgroundWrap = styled.div`
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-size:  cover;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/brandMain.png?alt=media&token=c1a96bb8-8d4c-419e-8300-74b3e69cc446');
    @media only screen and (max-width: 600px) {
        background-attachment: initial !important;
    }
`

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    h1{
        font-weight: 400;
    }
    h4{
        font-weight: 500;
    }
    @media only screen and (max-width: 600px) {
        height: 350px;
        h1{ margin-bottom: 20px; }
    }
    @media only screen and (min-width: 600px) {
        height: 490px;
        h1{ margin-bottom: 20px; }
    }
    @media only screen and (min-width: 768px) {
        height: 590px;
        h1{ margin-bottom: 35px; }
    }
    @media only screen and (min-width: 992px) {
        height: 690px;
        h1{ margin-bottom: 35px; }
    }
    @media only screen and (min-width: 1200px) {
        height: 690px;
        h1{ margin-bottom: 35px; }
    }
`

const Section2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 600px) {
        padding: 35px 0px;
    }
    @media only screen and (min-width: 600px) {
        padding: 55px 0px;
    }
    @media only screen and (min-width: 768px) {
        padding: 85px 0px;
    }

`
const Section2_Wrap1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        ul { 
            width: 90% !important;
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
        border: 3px solid #15AA5A;
        @media only screen and (max-width: 600px) {height: 600px;}
        @media only screen and (min-width: 600px) {height: 700px;}
        @media only screen and (min-width: 768px) {height: 900px;}
        @media only screen and (min-width: 992px) {height: 800px;}
        @media only screen and (min-width: 1200px){height: 1000px;}
    }
    ul > li:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        align-content: center;
        width: 100%;
        height: 45%;
        @media only screen and (max-width: 280px) {height: 55%; padding: 0px 10px;}
        @media only screen and (max-width: 600px) {padding: 0px 10px;}
        @media only screen and (min-width: 600px) {padding: 0px 20px;}
        @media only screen and (min-width: 768px) {padding: 0px 20px;}
        @media only screen and (min-width: 992px) {padding: 0px 30px;}
        @media only screen and (min-width: 1200px) {padding: 30px 30px;}
    }
    ul > li:nth-child(2){
        width:100%;
        height: 55%;
        div{
            height: 100%;
        }
        @media only screen and (max-width: 280px) {height: 45% !important;}
    }
    ul > li:nth-child(1) > li:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        div{
            @media only screen and (max-width: 600px) {width: 70px;height:70px;}
            @media only screen and (min-width: 600px) {width: 70px;height:70px;}
            @media only screen and (min-width: 768px) {width: 80px;height:80px;}
            @media only screen and (min-width: 992px) {width: 100px;height:100px;}
        }
    }
    ul > li:nth-child(1) > li:nth-child(2) {
        font-weight: 300;
    }
    ul > li:nth-child(1) > li:nth-child(3) {
        font-weight: 300;
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
        font-weight: 300;
    }
    ul > li:nth-child(2){
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width:100%;
        height: 100%;
        border-bottom: 2px solid #15AA5A;
        font-weight: 600;
        @media only screen and (max-width: 600px) {
            flex-direction: column !important;
            padding: 10px 0px 40px 0px;
            li{
                display: flex;
                justify-items: center;
                align-items: center;
                flex-direction: row;
            }
            li:nth-child(2n-1) {
                height: 120px;
                h4{
                    width:100%;
                    text-align: left;
                }
            }
            li:nth-child(2n){
                display: none;
            }
        }
        @media only screen and (min-width: 600px) {padding: 10px 0px 30px 0px;}
        @media only screen and (min-width: 768px) {padding: 30px 0px 60px 0px;}
        @media only screen and (min-width: 992px) {padding: 50px 0px 60px 0px;}
    }
    ul > li:nth-child(3){
        margin-top: 60px;
        h3{
            font-weight: 800;
        }
        h4{
            margin-top: 5px;
            font-weight: 500;
        }
    }
`

const ImageWrap = styled(Image)`
    @media only screen and (max-width: 600px) {padding: 30px !important; }
    padding: 20px !important; 
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