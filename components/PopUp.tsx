import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Cookies } from "react-cookie";
import styled from "styled-components";
import { PopupDto } from "../dto/popup.dto";
import { Title6 } from "./GlobalComponents";
import Link from 'next/link';

type Props = {
    image: PopupDto[];
};

const PopUp: React.FC<Props> = ({ image }) => {
    const [showImage, setShowImage] = useState<PopupDto[]>(image);
    const [isShow, setIsShow] = useState<boolean>(false);
    const expires = useMemo(() => new Date(), []);
    expires.setDate(expires.getDate() + 1);

    const setCookie = useCallback((id: string) => {
        const cookies = new Cookies();
        cookies.set("popup" + id, false, {
            path: '/',
            expires: expires
        });
        setIsShow(false);
    },[expires]);

    const getCookie = (id: string): boolean => {
        const cookies = new Cookies();
        if (cookies.get("popup" + id) == undefined) return true;

        return false;
    }

    const close = useCallback((id: string) => {
        // showImage 에서 id 가 일치하는 것을 제외한 배열을 만들어서 다시 showImage 에 넣어준다.
        const newShowImage = showImage.filter((item) => item.id != id);
        setShowImage(newShowImage);
    }, [showImage]);


    const todayClose = useCallback((id: string) => {
        // showImage 에서 id 가 일치하는 것을 제외한 배열을 만들어서 다시 showImage 에 넣어준다.
        const newShowImage = showImage.filter((item) => item.id != id);
        setShowImage(newShowImage);
        setCookie(id)
    }, [showImage, setCookie]);

    useEffect(() => {
        // image 의 배열로 id 를 받아서 쿠키에 저장된 값이 true 인 것만 필터링해서 다시 showImage 에 넣어준다.
        const newShowImage = image.filter((item) => getCookie(item.id));
        setShowImage(newShowImage);

    }, [image]);

    return (
        showImage.length > 0 ?
            <Wrap>
                {
                    showImage.map((item, key) => (
                        <Container key={key}>
                            <Link href={item.link}>
                                <a>
                                    <Image src={item.downloadUrl} width={431} height={512} alt="팝업 이미지" />
                                </a>
                            </Link>
                            <ContentFooter>
                                <Button onClick={() => todayClose(item.id)}>
                                    <Title6 >오늘하루 열지않기</Title6>
                                </Button>
                                <Button onClick={() => close(item.id)}>
                                    <Title6>닫기</Title6>
                                </Button>
                            </ContentFooter>
                        </Container>
                    ))
                }
            </Wrap> : null
    )
}

const Wrap = styled.div`
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
`
const Container = styled.div`
    display: inline-block;
    background-color: #404346;
    border: 2px solid #D8D8D8;
    margin-right: 10px;
    @media only screen and (max-width: 600px) {
        position: absolute;
        width: 320px;
    }
`

const ContentFooter = styled.div`
    width: 100%;
    border-top: 2px solid #D8D8D8;
    button:nth-child(1){
        border-right: 3px solid #D8D8D8;
    }
`
const Button = styled.button`
    width: 50%;
    padding: 20px 0px;
    text-align: center;
    border: 0px;
    color: #fff;
    font-weight: ${(props) => props.theme.fontWeight.SemiBold};
    background-color: #404346;
    margin: 0px;
    height: 100%;
    &:hover {
        background-color: black;
        color: #008B48;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    }
    cursor: pointer;
`

export default PopUp;