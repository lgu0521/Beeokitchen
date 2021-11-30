import styled from "styled-components";

const InputWrap = styled.div`
  text-align: left;
  display: grid;
  margin-top: 10px;
`;

const Label = styled.label`
  color: rgb(139, 152, 167);
  font-weight: 600;
  font-size: 17px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #d2d4de;
  padding: 0px 20px;
  background-color: rgba(99, 114, 131, 0.02);
  margin: 5px 0px;
  font-size: 13px;
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #d2d4de;
  padding: 0px 20px;
  background-color: rgba(99, 114, 131, 0.02);
  margin: 10px 0px;
  font-size: 13px;
`;

const Form = styled.form``;

const ImageInput = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #d2d4de;
  padding: 0px 20px;
  background-color: rgba(99, 114, 131, 0.02);
  margin: 10px 0px;
  font-size: 13px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const Content = styled.p`
  color: #8e9ba7;
  font-size: 13px;
  margin-top: 3px;
`;

const Icon = styled.button`
  display: table-cell;
  padding: 5px;
  cursor: pointer;
  background-color: white;
  border-radius: 100%;
  margin-left: 5px;
  border: 1px solid #175436;
`;

const Button = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  height: 40px;
  padding: 0px 20px;
  border-radius: 10px;
  border: 0px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  background-color: rgb(12, 36, 59);
  &:hover {
    background-color: rgb(12, 50, 59);
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s;
  }
  margin: 40px auto 0px auto;
  cursor: pointer;
`;

const AddButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  height: 40px;
  padding: 0px 20px;
  border-radius: 10px;
  border: 0px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  background-color: #d15b56;
  &:hover {
    background-color: #cc3d3d;
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s;
  }
  margin: 40px auto 0px auto;
  cursor: pointer;
`;

const DroppableLi = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  overflow: auto;
  margin: 15px 0px;
  li:nth-child(1) {
    width: 40px;
    overflow: auto;
    padding: 0px 10px;
  }
  li:nth-child(2) {
    width: 100%;
    overflow: auto;
  }
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 40px;
  padding: 0px 20px;
  border-radius: 10px;
  border: 0px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  background-color: rgb(12, 36, 59);
  &:hover {
    background-color: rgb(12, 50, 59);
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s;
  }
  cursor: pointer;
`;

const Style = {
  InputWrap,
  Label,
  Input,
  Select,
  Form,
  Icon,
  Content,
  ImageInput,
  Button,
  DroppableLi,
  DeleteButton,
  AddButton,
};

export default Style;
