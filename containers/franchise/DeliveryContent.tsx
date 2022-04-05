import styled from "styled-components";
import { Title2, Title3, Title4 } from "../../components/GlobalComponents";

const DeliveryContent = () => {
    return (
        <Content>
            <TextWrapper>
                <h3 style={{ fontWeight: 600 }}>비오키친 배달&테이크아웃</h3>
                <h4>전용매장 창업 별도문의</h4>
            </TextWrapper>
            <RightTextWrapper>
                <Title2 color="#fff"><strong>7평~10평</strong></Title2>
                <Title4 color="#fff"><strong>소형평수 창업가능</strong></Title4>
            </RightTextWrapper>
        </Content>
    )
}



const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #F7E9E2;
    border-radius: 25px;
`
const TextWrapper = styled.div`
    text-align: right;
    line-height: 1.3;
    padding: 15px 20px;
    h3{
        @media only screen and (max-width: 600px) {
            font-size: 12px;
        }
        @media only screen and (min-width: 600px) {
            font-size: 15px;
        }
        @media only screen and (min-width: 768px) {
            font-size: 20px;
        }
    }

    h4{
        @media only screen and (max-width: 600px) {
            font-size: 10px;
        }
        @media only screen and (min-width: 600px) {
            font-size: 13px;
        }
        @media only screen and (min-width: 768px) {
            font-size: 18px;
        }
    }
`

const RightTextWrapper = styled.div`
    border-radius: 0px 25px 25px 0px;
    text-align: right;
    padding: 15px 25px;
    background-color: #15AA5A;
`

export default DeliveryContent;