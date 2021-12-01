//Basic
import { useState } from "react";
import Image from "next/image";
//Style
import EditIcon from "../../public/Edit.png";
import styled from "styled-components";
//Component
import BasicModal from "../BasicModal";
import ModifyAndDeleteStore from "./ModifyAndDeleteStore";
import ChangeStoreOrder from "./ChangeStoreOrder";
import CreateStore from "./CreateStore";
//DTO
import { StoreDTO } from "../../dto/store-create.dto";

interface Props {
  initialItem: StoreDTO;
  initialItems: StoreDTO[];
}

export const FaqEdit = ({ initialItem, initialItems }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState<string>("");

  return (
    <>
      <EditWrap>
        <EditButton>
          <Image src={EditIcon} width={30} height={30} objectFit="none" />
        </EditButton>
        <EditUl>
          <EditLi>
            <span
              onClick={() => {
                setIsModalOpen(true);
                setModalName("content_modify");
              }}
            >
              수정하기
            </span>
          </EditLi>
          <EditLi>
            <span
              onClick={() => {
                setIsModalOpen(true);
                setModalName("order_modify");
              }}
            >
              순서변경
            </span>
          </EditLi>
          <EditLi>
            <span
              onClick={() => {
                setIsModalOpen(true);
                setModalName("create");
              }}
            >
              추가하기
            </span>
          </EditLi>
        </EditUl>
      </EditWrap>
      <BasicModal
        onClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      >
        {modalName == "content_modify" ? (
          <ModifyAndDeleteStore initialItem={initialItem} />
        ) : modalName == "order_modify" ? (
          <ChangeStoreOrder initialItems={initialItems} />
        ) : modalName == "create" ? (
          <CreateStore />
        ) : null}
      </BasicModal>
    </>
  );
};

const EditLi = styled.li`
  padding: 10px 0px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.md};
  :hover {
    background-color: #eff6f5;
  }
`;
const EditUl = styled.ul`
  display: none;
  position: absolute;
  right: 0;
  background-color: white;
  min-width: 120px;
  box-shadow: 0px 0px 5px 0.1px #dddddd;
  z-index: 1;
  border-radius: 20px;
  padding: 10px 0px;
`;
const EditWrap = styled.div`
  position: relative;
  float: right;
  z-index: 1;
  &:hover ${EditUl} {
    display: block;
  }
`;

const EditButton = styled.button`
  display: table-cell;
  padding: 5px;
  cursor: pointer;
  background-color: white;
  border-radius: 100%;
  margin-left: 5px;
  border: 1px solid #175436;
  &:hover {
    box-shadow: 0px 0px 5px 0.1px #dddddd;
  }
`;
export default FaqEdit;
