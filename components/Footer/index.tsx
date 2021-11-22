import Link from "next/link";
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../../public/footer.png'
import { Title5 } from '../GlobalComponents';

const Footer = () => {
    return (
        <>
            <PcNav>
                <footer style={{ backgroundColor: "#008B48", display: "flex", justifyContent: "flex-end", padding: "30px 30px 120px 30px", alignItems: "center" }}>
                    <ul style={{ alignItems: "center", padding: "0px 10px", textAlign: "right", lineHeight: "20px", fontSize: "13px", fontWeight: 100 }}>
                        <li>
                            <Title5 style={{ color: "white" }}><strong>회사명</strong> 비오키친 <strong>사업자등록번호</strong> 856-35-00894</Title5>
                        </li>
                        <li>
                            <Title5 style={{ color: "white" }}><strong>COPYRIGHT(C)</strong> 2021 비오키친.CO.LTD ALL RIGHT RESERVED</Title5>
                        </li>
                    </ul>
                    <Image width={60} height={60} src={Logo} objectFit="cover" />
                </footer>
            </PcNav>
            <MobileNav>
                <footer style={{ backgroundColor: "#008B48", display: "flex", justifyContent: "flex-end", padding: "30px 10px 100px 10px", alignItems: "center" }}>
                    <ul style={{ alignItems: "center", padding: "0px 10px", textAlign: "right", lineHeight: "20px", fontSize: "13px", fontWeight: 100 }}>
                        <li>
                            <Title5 style={{ color: "white" }}><strong>회사명</strong> 비오키친</Title5>
                        </li>
                        <li>
                            <Title5 style={{ color: "white" }}><strong>사업자등록번호</strong> 856-35-00894</Title5>
                        </li>
                        <li>
                            <Title5 style={{ color: "white" }}><strong>COPYRIGHT(C)</strong> 2021 비오키친.CO.LTD ALL RIGHT RESERVED</Title5>
                        </li>
                    </ul>
                    <Image width={60} height={60} src={Logo} objectFit="cover" />
                </footer>
            </MobileNav>
        </>
    );
};


const PcNav = styled.nav`
    display: none;
    @media only screen and (min-width:991px){
        display: block !important;
    }
`
const MobileNav = styled.div`
    display: none;
    @media only screen and (max-width: 991px){
        display: block !important;
    }
`
export default Footer;