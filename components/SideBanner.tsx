import { useState } from "react";
import styled, { keyframes } from "styled-components"
import { Title3, Title4, Title6 } from "./GlobalComponents"
import Image from 'next/image';
import SideBannerIcon from '../public/sidebanner-arrow.svg';
type Values = {
    name: string,
    phonenumber: string,
    isChecked: string
}
const SideBanner = () => {
    const initialValues: Values = { name: "", phonenumber: "", isChecked: 'N' };
    const [formValues, setFormValues] = useState(initialValues);
    const [disable, setDisable] = useState(false);

    const handlerOnSubmit = async () => {
        try {
            await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/api/simple-signup/create",
                {
                    method: "POST",
                    body: JSON.stringify(formValues),
                }
            );
            alert("문의가 접수되었습니다. 담당자가 빠른 확인 후 연락드리도록 하겠습니다");
            if (typeof window != null) {
                window.location.reload();
            }
        } catch (e) {
            alert("다시 시도해주세요");
        }
    }

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handlerOnArrowClick = () => {
        setDisable(!disable);
    }

    return (
        <BoxWrapper>
            <ArrowImage isClick={disable} src={SideBannerIcon} alt="사이드배너 화살표" onClick={handlerOnArrowClick} />
            <BoxContainer layout={disable}>
                <BoxHeader>
                    <Typograpy style={{
                        color: 'white'
                    }}>창업 간편상담</Typograpy>
                    <Typograpy style={{
                        color: '#E3B59F', fontWeight: 700
                    }}>031.704.0337</Typograpy>
                </BoxHeader>
                <BoxContent>
                    <form onSubmit={handlerOnSubmit}>
                        <input placeholder="이름"
                            name="name"
                            value={formValues.name}
                            onChange={handlerOnChange} />
                        <input placeholder="연락처"
                            name="phonenumber"
                            value={formValues.phonenumber}
                            onChange={handlerOnChange} />
                        <CheckBox>
                            <input
                                type="checkbox"
                                value={formValues.isChecked}
                                onChange={handlerOnChange}
                            />
                            <Title6>
                                <span>개인정보 수집 및 이용동의</span>
                            </Title6>
                        </CheckBox>
                        <Button>
                            <Title4 style={{ fontWeight: 700 }}>제출</Title4>
                        </Button>
                    </form>
                </BoxContent>
            </BoxContainer>
        </BoxWrapper>
    )
}

const BoxWrapper = styled.div`
  position: fixed;
  z-index: 9998;
  top: 15%;
  right: 0px;
  display: flex;
  flex-direction: row;
`

const BoxContainer = styled.div<{ layout: boolean }>`
    position: relative;
    background-color: #202020;
    border-radius: 15px 0px 0px 15px;
    transition: width 0.1s;
    overflow: hidden;
    @media only screen and (max-width: 600px) {
        width: ${(props) => props.layout ? '0px' : '160px'};
        padding: ${(props) => props.layout ? '0px' : '25px 18px'};
    }
    @media only screen and (min-width: 600px) {
        width: ${(props) => props.layout ? '0px' : '180px'};
        padding: ${(props) => props.layout ? '0px' : '30px 18px'};
    }
    @media only screen and (min-width: 992px) {
        width: ${(props) => props.layout ? '0px' : '200px'};
        padding: ${(props) => props.layout ? '0px' : '40px 18px'};
    }
`

const BoxHeader = styled.div`
    margin-bottom: 15px;
`

const Typograpy = styled.h3`
    letter-spacing: 0px;
    line-height: 1.28;
    @media only screen and (max-width: 600px) {
        font-size: ${(props) => props.theme.fontSizes.title5};
        width: 130px;
    }
    @media only screen and (min-width: 600px) {
        font-size: ${(props) => props.theme.fontSizes.title4};
        width: 130px;
    }
    @media only screen and (min-width: 992px) {
        font-size: ${(props) => props.theme.fontSizes.title3};
    }
`
const BoxContent = styled.div`
    color: white;
    input{
        color: black;
        height: 40px;
        border-radius: 6px;
        outline: none;
        border: 0px;
        padding: 10px;
        margin: 5px 0px;
        letter-spacing: 0px;
        line-height: 1.28;
        @media only screen and (max-width: 310px) {
            letter-spacing: 0px !important;
            font-size: 0.8rem;
            width: 130px;
        }
        @media only screen and (min-width: 310px) {
            font-size: ${(props) => props.theme.fontSizes.title8};
            width: 130px;
        }
        @media only screen and (min-width: 600px) {
            font-size: ${(props) => props.theme.fontSizes.title6};
            width: 130px;
        }
        @media only screen and (min-width: 768px) {
            font-size: ${(props) => props.theme.fontSizes.title5};
            width: 140px;
        }
        @media only screen and (min-width: 992px) {
            font-size: ${(props) => props.theme.fontSizes.title5};
            width: 150px;
        }
        @media only screen and (min-width: 1200px) {
            font-size: ${(props) => props.theme.fontSizes.title3};
            width: 150px;
        }
    }
`

const CheckBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  input[type="checkbox"] {
    margin-right: 8px !important;
    border: 2px solid black;
    background-color: white;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    margin: 0px;
    cursor: pointer;
  }
  input[type="checkbox"]:checked {
    appearance: none;
    background-size: cover;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/checkBox.png?alt=media&token=5544bbd8-f4b2-49fb-8f9a-0beb0145b040");
  }
`;

const ArrowImage = styled(Image) <{ isClick: boolean }>`
    position: relative;
    left: auto !important;
    transform:  ${(props) => props.isClick ? 'rotate(0turn)' : 'rotate(0.5turn)'};
    @media only screen and (max-width: 600px) {
        min-width: 38px !important;
        min-height: 38px !important;
        max-width: 38px !important;
        max-height: 38px !important;
    }
    @media only screen and (min-width: 600px) {
        min-width: 43px !important;
        min-height: 43px !important;
        max-width: 43px !important;
        max-height: 43px !important;
    }
    @media only screen and (min-width: 992px) {
        min-width: 48px !important;
        min-height: 48px !important;
        max-width: 48px !important;
        max-height: 48px !important;
    }
`
const Button = styled.button`
    background-color: #E3B59F;
    border: 0px;
    outline: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    color: black;
    @media only screen and (max-width: 600px) {
        width: 50px;
        height: 35px;
        margin-top: 10px;
    }
    @media only screen and (min-width: 600px) {
        margin-top: 15px;
        width: 50px;
        height: 38px;
    }
    @media only screen and (min-width: 992px) {
        margin-top: 20px;
        width: 60px;
        height: 45px;
    }
`
export default SideBanner;