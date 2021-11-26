import styled from 'styled-components';

export const Table = styled.table`
    width:100%;
    line-height: 22px;
    text-align: left;
    border-top: 4px solid #009223;
    tr{
        vertical-align: middle;
        border-bottom: 1px solid #dddddd;
        @media only screen and (max-width: 600px) {
            height: 50px;
        }
        @media only screen and (min-width: 600px) {
            height: 69px;
        }
    }
    th, td{
        padding: 0 15px;
        vertical-align: middle;
    }
    th{
        font-weight: 600;
    }
    td:nth-child(2){
        font-weight: 300;
    }
    td:nth-child(3){
        font-weight: 500;
    }
    th:nth-child(2),td:nth-child(2){
        @media only screen and (max-width: 600px) {
            display: none;
        }
    }
`;

export const Tbody = styled.tbody`

`;

export const Thead= styled.thead`
    tr > th {
    font-weight: 800;
    }
`;

export const Tfoot = styled.tfoot`
    background-color: #F9F0EC;
    color: #CC3D3D;
    tr > th{
        font-weight: 600;
    }
    tr > td{
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