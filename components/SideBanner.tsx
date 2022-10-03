import { useState } from "react";
import styled, { keyframes } from "styled-components"
import Image from 'next/image';
import SideBannerIcon from '../public/sidebanner-arrow.svg';
import Link from "next/link";
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
                    <Title3 style={{
                        color: '#E3B59F'
                    }}>창업 간편상담</Title3>
                    <Title2 style={{
                        color: 'white', fontWeight: 700
                    }}>031.704.0337</Title2>
                </BoxHeader>
                <BoxContent>
                    <Link href="http://localhost:3000/franchise#startUpform">
                        <Button>
                        <Title4 color={"white"} style={{ fontWeight: 700 }}>온라인 창업문의</Title4>
                        </Button>
                    </Link>
                    {/* <form onSubmit={handlerOnSubmit}>
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
                            <span><Typograpy>개인정보 수집 및 이용동의</Typograpy></span>
                        </CheckBox>
                    </form> */}
                </BoxContent>
            </BoxContainer>
        </BoxWrapper>
    )
}
const Title2 = styled.h2`
    font-size: 2.7rem;
    letter-spacing: -1px;
`

const Title3 = styled.h3`
    font-size: 2rem;
    letter-spacing: -1px;
    line-height: 1.6;
`

const Title4 = styled.h4`
    font-size: 1.5rem;
    letter-spacing: -1px;
    line-height: 1.6;
`

const BoxWrapper = styled.div`
  position: fixed;
  z-index: 9998;
  top: 15%;
  right: 0px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    top: 20% !important;
}
`

const BoxContainer = styled.div<{ layout: boolean }>`
    position: relative;
    background-color: #202020;
    border-radius: 15px 0px 0px 15px;
    transition: width 0.1s;
    overflow: hidden;
    width:${(props) => props.layout ? '0px' : 'fit-content'};
    padding: ${(props) => props.layout ? '0px' : '2rem'};
    /* @media only screen and (max-width: 600px) {
        
        padding: ${(props) => props.layout ? '0px' : '20px 10px'};
    }
    @media only screen and (min-width: 600px) {
        
        padding: ${(props) => props.layout ? '0px' : '30px 18px'};
    }
    @media only screen and (min-width: 992px) {
        
        padding: ${(props) => props.layout ? '0px' : '40px 18px'};
    } */
`

const BoxHeader = styled.div`
    @media only screen and (max-width: 600px) {
        margin-bottom: 10px;
        h3{
            font-size: 12px !important;
        }
    }
    @media only screen and (min-width: 600px) {
        margin-bottom: 13px;
    }
    @media only screen and (min-width: 992px) {
        margin-bottom: 15px;
    }
`

const BoxContent = styled.div`
    color: white;
    input{
        color: black;
        border-radius: 6px;
        outline: none;
        border: 0px;
        padding: 10px;
        letter-spacing: 0px;
        line-height: 1.28;
        width: 100%;
        @media only screen and (max-width: 310px) {
            letter-spacing: 0px !important;
            font-size: 0.8rem;
            height: 20px;
            margin: 3px 0px;
        }
        @media only screen and (min-width: 310px) {
            font-size: 12px;
            height: 20px;
            margin: 3px 0px;
        }
        @media only screen and (min-width: 600px) {
            font-size: ${(props) => props.theme.fontSizes.title6};
            height: 30px;
            margin: 5px 0px;
        }
        @media only screen and (min-width: 992px) {
            font-size: ${(props) => props.theme.fontSizes.title6};
            height: 40px;
            margin: 5px 0px;
        }
    }
`

const ArrowImage = styled(Image) <{ isClick: boolean }>`
    position: relative;
    left: auto !important;
    transform:  ${(props) => props.isClick ? 'rotate(0turn)' : 'rotate(0.5turn)'};
    @media only screen and (max-width: 600px) {
        min-width: 22px !important;
        min-height: 22px !important;
        max-width: 22px !important;
        max-height: 22px !important;
    }
    @media only screen and (min-width: 600px) {
        min-width: 30px !important;
        min-height: 30px !important;
        max-width: 30px !important;
        max-height: 30px !important;
    }
    @media only screen and (min-width: 992px) {
        min-width: 48px !important;
        min-height: 48px !important;
        max-width: 48px !important;
        max-height: 48px !important;
    }
`
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 1.5rem;
    background-color: #008B48;
    border: 0px;
    outline: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    color: white;
    padding: 1rem 0;
    &:hover {
        background-color: #CC3D3D;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    }
    /* @media only screen and (max-width: 600px) {
        width: 40px;
        height: 25px;
        margin-top: 10px;
        border-radius: 7px;
    }
    @media only screen and (min-width: 600px) {
        margin-top: 15px;
        width: 60px;
        height: 38px;
        border-radius: 10px;
    }
    @media only screen and (min-width: 992px) {
        margin-top: 20px;
        width: 60px;
        height: 45px;
        border-radius: 15px;
    } */
`
export default SideBanner;