import Link from "next/link";
import styled from 'styled-components';
import Logo from '../../public/logo.png';
import headerLogo from '../../public/headerLogo.png';
import Image from 'next/image';
import { Title4 } from '../GlobalComponents';

const Header = () => {
    return (
        <>
            <head style={{backgroundColor:"white"}}>
                <PcNav>
                    <Link href="/">
                        <a>
                            <Image height={40} width={130} src={headerLogo} alt="" objectFit="contain" />
                        </a>
                    </Link>
                    <Ul>
                        <Li>
                            <Link href="/brand">
                                <a><Title4>스토리</Title4></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/menu">
                                <a><Title4>메뉴</Title4></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/store">
                                <a><Title4>매장위치</Title4></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/franchise">
                                <a><Title4>프랜차이즈</Title4></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/board">
                                <a><Title4>게시판</Title4></a>
                            </Link>
                        </Li>
                    </Ul>
                </PcNav>
                <MobileNav>
                    <ImageWrap>
                        <Link href="/">
                            <a>
                                <Image height={30} width={110} src={headerLogo} alt="" objectFit="contain" />
                            </a>
                        </Link>
                    </ImageWrap>
                    <Ul>
                        <Li>
                            <Link href="/brand">
                                <a><Title4>브랜드스토리</Title4></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/menu">
                                <a><Title4>메뉴</Title4></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/store">
                                <a><Title4>매장</Title4></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/franchise">
                                <a><Title4>창업</Title4></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/board">
                                <a><Title4>게시판</Title4></a>
                            </Link>
                        </Li>
                    </Ul>
                </MobileNav>
            </head>
        </>
    )
};

const Ul = styled.ul`
    display: flex;
    justify-content: flex-start;
    @media only screen and (max-width:991px){
        padding: 15px 0px;;
    }
`

const Li = styled.li`
    font-weight:500;
    color: #333333;
    text-decoration: none;
    padding: 0px 30px;
    @media only screen and (max-width:991px){
        padding: 0px 15px !important;
    }
`

const ImageWrap = styled.div`
    display: inline-block;
    width:100%;
    text-align: center;
    vertical-align: middle;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 4px 4px 4px rgb(0 0 0 / 5%);
`

const PcNav = styled.nav`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    height: 110px;
    padding: 30px;
    box-shadow: 0 3px 3px rgb(0 0 0 / 20%) !important;
    @media only screen and (max-width:991px){
        display: none !important;
    }
`
const MobileNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 3px 3px rgb(0 0 0 / 20%) !important;
    @media only screen and (min-width: 991px){
        display: none !important;
    }
`
export default Header;