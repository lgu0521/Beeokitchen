import Link from "next/link";
import styled from 'styled-components';
import Logo from '../../public/logo.png'
import headerLogo from '../../public/headerLogo.png'
import Image from 'next/image';
import { Title3 } from '../GlobalComponents';

const Header = () => {
    return (
        <>
            <head>
                <PcNav>
                    <Link href="/">
                        <a>
                            <Image height={40} width={130} src={headerLogo} alt="" objectFit="contain" />
                        </a>
                    </Link>
                    <Ul>
                        <Li>
                            <Link href="/brand">
                                <a><Title3>회사소개</Title3></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/menu">
                                <a><Title3>키친메뉴</Title3></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/store">
                                <a><Title3>매장위치</Title3></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/startup">
                                <a><Title3>프랜차이즈</Title3></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/board">
                                <a><Title3>게시판</Title3></a>
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
                                <a><Title3>소개</Title3></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/menu">
                                <a><Title3>메뉴</Title3></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/store">
                                <a><Title3>매장</Title3></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/startup">
                                <a><Title3>창업</Title3></a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/board">
                                <a><Title3>게시판</Title3></a>
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
    height: 11vh;
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