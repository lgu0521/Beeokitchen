import Link from "next/link";
import styled from 'styled-components';


const Wrap = styled.div`
background: #222222;
    width: 100%;
    height:100px;
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
                <p>
                회사명 : ㈜샐러디
                </p>
                <p>
                사업자등록번호 : 681-86-00031
                </p>
                <p>
                COPYRIGHT(C) 2021 ㈜샐러디. CO.LTD ALL RIGHT RESERVED.
                </p>
            </Wrap>
        </nav>
    );
};

export default Footer;