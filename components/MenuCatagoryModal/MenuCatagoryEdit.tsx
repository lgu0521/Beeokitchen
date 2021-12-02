import { MenuCatagoryDTO, MenuDTO } from "../../dto/menu-create.dto";
import { useState } from "react";
import Image from "next/image";
//이미지
import EditIcon from "../../public/Edit.png";
import S from "../../styles/AdminPage.style";
import BasicModal from "../BasicModal";

import ModifyAndDeleteMenuCatagory from "./ModifyAndDeleteMenuCatagory";
import ChangeMenuCatagoryOrder from "./ChangeMenuCatagoryOrder";
import CreateMenuCatagory from "./CreateMenuCatagory";
interface Props {
  MenuCatagory: MenuCatagoryDTO;
  MenuCatagorys: MenuCatagoryDTO[];
}

const MenuCatagoryEdit = ({ MenuCatagory, MenuCatagorys }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState<string>("");

  return (
    <>
      <S.EditWrap>
        <S.EditButton>
          <Image
            src={EditIcon}
            width={30}
            height={30}
            objectFit="none"
            alt=""
          />
        </S.EditButton>
        <S.EditUl>
          <S.EditLi>
            <span
              onClick={() => {
                setIsModalOpen(true);
                setModalName("content_modify");
              }}
            >
              수정하기
            </span>
          </S.EditLi>
          <S.EditLi>
            <span
              onClick={() => {
                setIsModalOpen(true);
                setModalName("order_modify");
              }}
            >
              순서변경
            </span>
          </S.EditLi>
          <S.EditLi>
            <span
              onClick={() => {
                setIsModalOpen(true);
                setModalName("create");
              }}
            >
              추가하기
            </span>
          </S.EditLi>
        </S.EditUl>
      </S.EditWrap>
      <BasicModal
        onClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      >
        {modalName == "content_modify" ? (
          <ModifyAndDeleteMenuCatagory initialMenuCatagory={MenuCatagory} />
        ) : modalName == "order_modify" ? (
          <ChangeMenuCatagoryOrder initialMenus={MenuCatagorys} />
        ) : modalName == "create" ? (
          <CreateMenuCatagory />
        ) : null}
      </BasicModal>
    </>
  );
};

export default MenuCatagoryEdit;
