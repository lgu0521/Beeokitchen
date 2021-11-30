import styled from "styled-components";

export const Table = styled.table`
  border-spacing: 0;
  border-top: 4px solid #009223;
  min-width: 1200px;

  tr {
    height: 69px;
  }
  th {
    text-align: left;
    padding: 0 30px;
    color: #292929;
    line-height: 22px;
    font-weight: normal;
    border-bottom: 1px solid #dddddd;
  }
  td {
    padding: 0 30px;
    text-align: left;
    color: #666;
    line-height: 22px;
    letter-spacing: -0.05em;
    border-bottom: 1px solid #dddddd;
  }
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead`
  tr > th {
    font-weight: bold;
  }
`;

export const Tfoot = styled.tfoot`
  background-color: #f6f6f6;
  tr > th {
    font-weight: bold;
  }
  tr > td {
    font-weight: bold;
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 5% auto;
  border: 1px solid #888;
  height: 70%;
  border-radius: 20px;
  border: 0px;
  display: table;

  @media only screen and (max-width: 600px) {
    padding: 10px;
    width: 90%;
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    padding: 20px;
    width: 70%;
  }
  @media only screen and (min-width: 992px) {
    padding: 20px;
    width: 60%;
  }
  @media only screen and (min-width: 1200px) {
    padding: 20px;
    width: 50%;
  }
`;

const EditLi = styled.li`
  padding: 15px 15px;
  z-index: 1;
  cursor: pointer;
  border-radius: 10px;
  :hover {
    background-color: #eff6f5;
  }
  span {
    font-size: ${(props) => props.theme.fontSizes.title5};
  }
`;

const EditUl = styled.ul`
  display: none;
  position: absolute;
  z-index: 1;
  right: 10px;
  text-align: left;
  white-space: nowrap;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0px 0px 5px 0.1px #dddddd;
  border-radius: 20px;
  padding: 10px 0px;
  min-width: 120px;
`;

const EditWrap = styled.div`
  z-index: 1;
  position: absolute;
  top: 10px;
  right: 0px;
  &:hover ${EditUl} {
    display: block;
  }
`;

const EditButton = styled.button`
  display: block;
  position: relative;
  padding: 5px;
  cursor: pointer;
  right: 10px;
  background-color: white;
  border-radius: 100%;
  border: 1px solid #175436;
  &:hover {
    box-shadow: 0px 0px 5px 0.1px #dddddd;
  }
`;

const Li = styled.li`
  display: block;
`;
const Style = {
  Table,
  Thead,
  Tbody,
  Tfoot,
  ModalContent,
  Modal,
  EditUl,
  EditLi,
  EditWrap,
  EditButton,
  Li,
};

export default Style;
