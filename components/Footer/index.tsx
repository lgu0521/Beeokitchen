import Link from "next/link";
import styled from 'styled-components';
import { Content } from "../GlobalComponents";


const Wrap = styled.div`
background: #222222;
    width: 100%;
    height:80px;
    border-bottom: 1px black solid;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

const Footer = () => {
    return (
        <nav>
            <Wrap>
                <Content style={{color:"white"}}>회사명 비오키친 사업자등록번호 856-35-00894 COPYRIGHT(C) 2021 비오키친. CO.LTD ALL RIGHT RESERVED</Content>
            </Wrap>
        </nav>
    );
};

export default Footer;