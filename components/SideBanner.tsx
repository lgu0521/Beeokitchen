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
                process.env.NEXT_PUBLIC_API_URL + "/api/simple-signup",
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
                        color: 'white'
                    }}>창업 간편상담</Title3>
                    <Title3 style={{
                        color: '#E3B59F', fontWeight: 700
                    }}>031.704.0337</Title3>
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
  z-index: 1;
  top: 30%;
  right: 0px;
  display: flex;
  flex-direction: row;
`

const BoxContainer = styled.div<{ layout: boolean }>`
    position: relative;
    width: ${(props) => props.layout ? '0px' : '200px'};
    height: 330px;
    background-color: #202020;
    border-radius: 15px 0px 0px 15px;
    transition: width 0.1s;
    overflow: hidden;
`
const BoxHeader = styled.div`
    margin-bottom: 15px;
    padding-top: 40px;
    padding-left: 18px;
    padding-right: 18px;
`
const BoxContent = styled.div`
    color: white;
    padding: 0px 18px;
    input{
        color: black;
        width: 150px;
        height: 40px;
        border-radius: 6px;
        font-size: 20px;
        outline: none;
        border: 0px;
        padding: 10px;
        margin: 5px 0px;
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
   transform:  ${(props) => props.isClick ? 'rotate(0turn)' : 'rotate(0.5turn)'};
`
const Button = styled.button`
    background-color: #E3B59F;
    width: 60px;
    height: 45px;
    border: 0px;
    outline: none;
    border-radius: 15px;
    margin: 20px 0px;
    cursor: pointer;
`
export default SideBanner;