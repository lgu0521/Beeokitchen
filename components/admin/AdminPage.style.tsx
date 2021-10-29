import styled from 'styled-components';

export const Table = styled.table`
    border-spacing: 0;
    border-top: 4px solid #009223;
    min-width:1200px;

    tr{
        height: 69px;
    }
    th{
        text-align: left;
        padding: 0 30px;
        color: #292929;
        line-height: 22px;
        font-weight: normal;
        border-bottom: 1px solid #dddddd;
    }
    td{
        padding: 0 30px;
        text-align: left;
        color: #666;
        line-height: 22px;
        letter-spacing: -0.05em;
        border-bottom: 1px solid #dddddd;
    }
`;

export const Tbody = styled.tbody`

`;

export const Thead= styled.thead`
    tr > th {
    font-weight: bold;
    }
`;

export const Tfoot = styled.tfoot`
    background-color: #f6f6f6;
    tr > th{
        font-weight: bold;
    }
    tr > td{
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
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 5% auto;
    border: 1px solid #888;
    height:70%;
    border-radius: 20px;
    border: 0px;
    display: table;

    @media only screen and (max-width: 600px) {
        padding: 10px;
        width: 90%;
    }
    @media only screen and (min-width: 600px) {
        padding: 10px;
        width:80%;
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

const Style = {
    Table,
    Thead,
    Tbody,
    Tfoot,
    ModalContent,
    Modal
};

export default Style;