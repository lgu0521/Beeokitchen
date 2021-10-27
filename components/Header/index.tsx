import Link from "next/link";
import styled from 'styled-components';
import Logo from '../../public/logo.jpeg'
import Image from 'next/image';

const Header = () => {
    return (
        <div>
            <PcHeade>
                <Nav height="100px">
                    <Wrap width="20%" height="100%">
                        <Image height={70} width={78} src={Logo} alt=""/>
                    </Wrap>
                    <Wrap width="60%" height="100%">
                        <Ul>
                            <Li>
                                <Link href="/brand">
                                    <a>브랜드</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="/menu">
                                    <a>메뉴</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="/store">
                                    <a>매장</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="/startup">
                                    <a>창업안내</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="/board">
                                    <a>게시판</a>
                                </Link>
                            </Li>
                        </Ul>
                    </Wrap>
                    <Wrap width="20%" height="100%" />
                </Nav>
            </PcHeade>
            <MobileHeade>
                <Nav height="75px">
                    <Wrap width="100%" height="75px">
                        <Image height={60} width={68} src={Logo} alt="" />
                    </Wrap>
                    <LineWrap width="100%" height="50px">
                        <Ul>
                            <Li>
                                <Link href="/brand">
                                    <a>브랜드</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="/menu">
                                    <a>메뉴</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="/store">
                                    <a>매장</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="/startup">
                                    <a>창업안내</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="/board">
                                    <a>게시판</a>
                                </Link>
                            </Li>
                        </Ul>
                    </LineWrap>
                </Nav>
            </MobileHeade>
        </div>

    )
};

const Ul = styled.div`
    display: flex;
    list-style: none;
`
const Li = styled.li`
    font-weight:500;
    color: #333333;
    text-decoration: none;
    @media only screen and (max-width: 600px) {
        font-size:${props => props.theme.fontSizes.xl};
        padding: 0 10px 0 10px;
    }
    @media only screen and (min-width: 600px) {
        font-size:${props => props.theme.fontSizes.xl};
        padding: 0 15px 0 15px;
    }
    @media only screen and (min-width: 768px) {
        font-size:${props => props.theme.fontSizes.xxl};
        padding: 0 30px 0 30px;
    }
    @media only screen and (min-width: 992px) {
        font-size:${props => props.theme.fontSizes.xxl};
        padding: 0 30px 0 30px;
    }
    @media only screen and (min-width: 1200px) {
        font-size:${props => props.theme.fontSizes.xxl};
        padding: 0 30px 0 30px;
    }
`

type WrapProps = {
    width: string,
    height: string
}

type NavProps = {
    height: string
}


const Wrap = styled.div`
    display: flex;
    float: left;
    justify-content: center;
    align-items: center;
    height: ${(props: NavProps) => props.height ? props.height : ""};
    width: ${(props: WrapProps) => props.width ? props.width : ""};
`
const LineWrap = styled.div`
    display: flex;
    float: left;
    justify-content: center;
    align-items: center;
    height: ${(props: NavProps) => props.height ? props.height : ""};
    width: ${(props: WrapProps) => props.width ? props.width : ""};
    box-shadow: 4px 4px 4px rgb(0 0 0 / 5%);
    @media only screen and (min-width: 768px){
        height: 60px !important;
    }
`

const Nav = styled.div`
    width: 100%;
    height: ${(props: NavProps) => props.height ? props.height : ""};
`
const PcHeade = styled.div`
    box-sizing: border-box;
    box-shadow: 0 3px 3px rgb(0 0 0 / 20%) !important;
    @media only screen and (max-width:991px){
        display: none !important;
    }
`
const MobileHeade = styled.div`
    box-sizing: border-box;
    box-shadow: 0 3px 3px rgb(0 0 0 / 20%) !important;
    @media only screen and (min-width: 991px){
        display: none !important;
    }
`
export default Header;