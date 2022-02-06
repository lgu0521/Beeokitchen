import styled from "styled-components";
import { useState } from "react";
import { Title2, Title3, Title4, Title5 } from "./GlobalComponents";
import { FaqDTO } from "../dto/faq-create.dto";
import { useAuth } from "../hook/AuthProvider";

const AccordionListView = ({ title, content }: FaqDTO) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  return (
    <>
      <AccordionListBox>
        <Button onClick={() => setIsOpen(!isOpen)} isAdmin={user}>
          <Title2
            style={{ color: "#15AA5A", marginRight: "15px", fontWeight: 600 }}
          >
            Q
          </Title2>
          <Title3 style={{ fontWeight: 600, color: "black" }}>{title}</Title3>
          {user ? null : <DropIcon isOpen={isOpen} />}
        </Button>
        <AccordionTextBox isOpen={isOpen}>
          <Circle>
            <Title2 style={{ color: "#15AA5A" }}>A</Title2>
          </Circle>
          <Title5 style={{ fontWeight: 500 }}>
            <pre>{content}</pre>
          </Title5>
        </AccordionTextBox>
      </AccordionListBox>
    </>
  );
};
const AccordionListBox = styled.div`
  border-bottom: 2px solid #15aa5a;
  width: 100%;
`;

const Button = styled.button<{ isAdmin: boolean }>`
  position: ${(props) => (props.isAdmin ? "initial" : "relative")};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 23px;
  border-radius: 0; //button basic style remove
  border: 0; //button basic style remove
  background: none; //button basic style remove
  appearance: none; //button basic style remove
`;

const DropIcon = styled.span<{ isOpen: boolean }>`
  position: absolute;
  height: 100%;
  object-fit: contain;
  background: url("/AccordionIcon.png") no-repeat center center;
  background-size: contain;
  transform: rotate(${(props) => (props.isOpen ? "-180deg" : "0deg")});
  transition: transform 0.3s ease;
  top: 0px;
  @media only screen and (max-width: 600px) {
    right: 5px;
    width: 15px;
  }
  @media only screen and (min-width: 600px) {
    right: 5px;
    width: 20px;
  }
  @media only screen and (min-width: 768px) {
    right: 20px;
    width: 24px;
  }
`;

const AccordionTextBox = styled.div<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  overflow: hidden;
  height: ${(props) => (props.isOpen ? "auto" : "0px")};
  transition: padding 0.15s ease;
  background-color: #f9f0ec;
  @media only screen and (max-width: 600px) {
    padding: ${(props) => (props.isOpen ? "20px 0px 40px 0px" : "0px")};
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  @media only screen and (min-width: 600px) {
    padding: ${(props) => (props.isOpen ? "20px 0px 40px 0px" : "0px")};
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  @media only screen and (min-width: 768px) {
    padding: ${(props) => (props.isOpen ? "20px 0px 50px 0px" : "0px")};
    padding-left: 15px !important;
    padding-right: 10px !important;
  }
`;

const Circle = styled.div`
  h2 {
    padding: 8px 13px;
    border-radius: 50%;
    background-color: white;
    letter-spacing: 0px;
    line-height: inherit;
    margin-right: 15px;
    font-weight: 600;
  }
`;

export default AccordionListView;
