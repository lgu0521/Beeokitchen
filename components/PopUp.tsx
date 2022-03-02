import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import styled from "styled-components";
import { BannerDTO } from "../dto/banner.dto";
import { Title6 } from "./GlobalComponents";

type Props = {
    image: BannerDTO;
};

const PopUp: React.FC<Props> = ({ image }) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);

    const setCookie = (id: string) => {
        const cookies = new Cookies();
        cookies.set("popup" + id, false, {
            path: '/',
            expires: expires
        });
        setIsShow(false);
    }

    const getCookie = (id: string): boolean => {
        const cookies = new Cookies();
        if (cookies.get("popup" + id) == undefined) return true;

        return cookies.get("popup" + id);
    }

    useEffect(() => {
        setIsShow(getCookie(image.id));
    }, [image.id]);

    return (
        isShow == true ?
            <Container>
                <Image src={image.downloadUrl} width={431} height={512} alt="팝업 이미지" />
                <ContentFooter>
                    <Button>
                        <Title6 onClick={() => setCookie(image.id)}>오늘하루 열지않기</Title6>
                    </Button>
                    <Button>
                        <Title6 onClick={() => setIsShow(false)}>닫기</Title6>
                    </Button>
                </ContentFooter>
            </Container> : null
    )
}


const Container = styled.div`
    display: inline-block;
    background-color: #008B48;
    margin-right: 10px;
    @media only screen and (max-width: 600px) {
        position: absolute;
        width: 320px;
    }
`

const ContentFooter = styled.div`
    width: 100%;
    button:nth-child(1){
        border-right: 3px solid black;
    }
`
const Button = styled.button`
    width: 50%;
    padding: 20px 0px;
    text-align: center;
    border: 0px;
    color: black;
    font-weight: ${(props) => props.theme.fontWeight.SemiBold};
    background-color: #008B48;
    &:hover {
        background-color: #007A40;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    }
    cursor: pointer;
`

export default PopUp;