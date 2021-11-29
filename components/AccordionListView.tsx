import styled from "styled-components";
import { useState } from "react";
import { Title2, Title3, Title4 } from "./GlobalComponents";
import { FaqDTO } from "../dto/faq-create.dto";

const AccordionListView = ({ title, content }: FaqDTO) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AccordionListBox>
        <Button onClick={() => setIsOpen(!isOpen)}>
          <Title2 style={{ color: "#15AA5A", marginRight: "15px" }}>Q</Title2>
          <Title3 style={{ fontWeight: 600 }}>{title}</Title3>
          <DropIcon isOpen={isOpen} />
        </Button>
        <AccordionTextBox isOpen={isOpen}>
          <Title2
            style={{
              color: "#15AA5A",
              marginRight: "15px",
              borderRadius: "50%",
              backgroundColor: "white",
              padding: "10px",
            }}
          >
            A
          </Title2>
          <Title4 style={{ fontWeight: 500 }}>
            <pre>{content}</pre>
          </Title4>
        </AccordionTextBox>
      </AccordionListBox>
    </>
  );
};
const AccordionListBox = styled.div`
  border-bottom: 2px solid #15aa5a;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 20px;
  border-radius: 0; //button basic style remove
  border: 0; //button basic style remove
  background: none; //button basic style remove
  appearance: none; //button basic style remove
`;
const DropIcon = styled.span<{ isOpen: boolean }>`
  position: absolute;
  height: 100%;
  object-fit: contain;
  background: url("https://eggdrop.co.kr/assets/images/common/icon_select.svg")
    no-repeat center center;
  background-size: contain;
  transform: rotate(${(props) => (props.isOpen ? "-180deg" : "0deg")});
  transition: transform 0.3s ease;
  top: 0px;
  @media only screen and (max-width: 600px) {
    right: 5px;
    width: 10px;
  }
  @media only screen and (min-width: 600px) {
    right: 5px;
    width: 10px;
  }
  @media only screen and (min-width: 768px) {
    right: 20px;
    width: 15px;
  }
`;

const AccordionTextBox = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  line-height: 200%;
  overflow: hidden;
  height: ${(props) => (props.isOpen ? "auto" : "0px")};
  transition: padding 0.15s ease;
  background-color: #f9f0ec;
  @media only screen and (max-width: 600px) {
    padding: ${(props) => (props.isOpen ? "20px" : "0px")};
  }
  @media only screen and (min-width: 600px) {
    padding: ${(props) => (props.isOpen ? "30px" : "0px")};
  }
  @media only screen and (min-width: 768px) {
    padding: ${(props) => (props.isOpen ? "40px" : "0px")};
  }
`;

export default AccordionListView;
