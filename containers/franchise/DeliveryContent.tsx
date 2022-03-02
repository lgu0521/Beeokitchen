import styled from "styled-components";
import { Title2, Title3, Title4 } from "../../components/GlobalComponents";

const DeliveryContent = () => {
    return (
        <Content>
            <TextWrapper>
                <h3 style={{ fontWeight: 600 }}>비오키친 딜리버리</h3>
                <h4>창업관련 별도문의</h4>
            </TextWrapper>
            <Title2 style={{ fontWeight: 600 }}>031.704.0337</Title2>
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
    padding: 20px 30px;
`
const TextWrapper = styled.div`
    text-align: right;
    margin-right: 20px;
    line-height: 1.3;
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

export default DeliveryContent;