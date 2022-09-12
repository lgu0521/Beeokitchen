import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/2022/mini_logo_full_white.svg";
import { Title6 } from "../GlobalComponents";

const Footer = () => {
  return (
    <div>
      <PcNav>
        <footer
          style={{
            backgroundColor: "#008B48",
            display: "flex",
            justifyContent: "flex-end",
            padding: "30px 30px 120px 30px",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              alignItems: "center",
              padding: "0px 10px",
              textAlign: "right",
              lineHeight: "20px",
              fontWeight: 100,
            }}
          >
            <li>
              <Title6 style={{ color: "white" }}>
                <strong>회사명</strong> 헬키푸키 <strong>사업자등록번호</strong>{" "}
                856-35-00894
              </Title6>
            </li>
            <li>
              <Title6 style={{ color: "white" }}>
                <strong>COPYRIGHT(C)</strong> 2022 헬키푸키.CO.LTD ALL RIGHT RESERVED
              </Title6>
            </li>
            {/* <li>
              <Title6 style={{ color: "white" }}>
                <strong>창업문의</strong> 031.704.0337
              </Title6>
            </li> */}
          </ul>
          <Image width={60} height={60} src={Logo} objectFit="cover" alt="" />
        </footer>
      </PcNav>
      <MobileNav>
        <footer
          style={{
            backgroundColor: "#008B48",
            display: "flex",
            justifyContent: "flex-end",
            padding: "30px 10px 100px 10px",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              alignItems: "center",
              padding: "0px 10px",
              textAlign: "right",
              lineHeight: "20px",
              fontWeight: 100,
            }}
          >
            <li>
              <Title6 style={{ color: "white" }}>
                <strong>회사명</strong> 헬키푸키
              </Title6>
            </li>
            <li>
              <Title6 style={{ color: "white" }}>
                <strong>사업자등록번호</strong> 856-35-00894
              </Title6>
            </li>
            <li>
              <Title6 style={{ color: "white" }}>
                <strong>COPYRIGHT(C)</strong> 2021 헬키푸키.CO.LTD ALL RIGHT
                RESERVED
              </Title6>
            </li>
            <li>
              <Title6 style={{ color: "white" }}>
                <strong>창업문의</strong> 031.704.0337
              </Title6>
            </li>
          </ul>
          <ImageWrap>
            <Image layout="responsive" src={Logo} objectFit="cover" alt="" />
          </ImageWrap>
        </footer>
      </MobileNav>
    </div>
  );
};

const PcNav = styled.nav`
  display: none;
  @media only screen and (min-width: 991px) {
    display: block !important;
  }
`;
const MobileNav = styled.nav`
  display: none;
  @media only screen and (max-width: 991px) {
    display: block !important;
  }
`;
const ImageWrap = styled.div`
  @media only screen and (max-width: 600px) {
    min-width: 60px;
    min-height: 60px;
  }
  @media only screen and (min-width: 600px) {
    width: 70px;
    height: 70px;
  }
  @media only screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;
export default Footer;
