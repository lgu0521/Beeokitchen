import { MenuDTO } from "../../dto/menu-create.dto";
import { useState } from "react";
import Image from "next/image";
//이미지
import EditIcon from "../../public/Edit.png";
import styled from "styled-components";
import BasicModal from "../BasicModal";

import ModifyAndDeleteMenuValue from "./ModifyAndDeleteMenuValue";
import ChangeMenuOrder from "./ChangeMenuOrder";
import CreateMenu from "./CreateMenu";
import S from "../../styles/AdminPage.style";

interface Props {
  MenuIndex: number;
  Menus: MenuDTO[];
}

export const MenuEdit = ({ MenuIndex, Menus }: Props) => {
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
              메뉴 수정하기
            </span>
          </S.EditLi>
          <S.EditLi>
            <span
              onClick={() => {
                setIsModalOpen(true);
                setModalName("order_modify");
              }}
            >
              메뉴 순서변경
            </span>
          </S.EditLi>
          <S.EditLi>
            <span
              onClick={() => {
                setIsModalOpen(true);
                setModalName("create");
              }}
            >
              메뉴 추가하기
            </span>
          </S.EditLi>
        </S.EditUl>
      </S.EditWrap>
      <BasicModal
        onClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      >
        {modalName == "content_modify" ? (
          <ModifyAndDeleteMenuValue initialMenu={Menus[MenuIndex]} />
        ) : modalName == "order_modify" ? (
          <ChangeMenuOrder initialMenus={Menus} />
        ) : modalName == "create" ? (
          <CreateMenu />
        ) : null}
      </BasicModal>
    </>
  );
};

export const MenuDefaulEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              }}
            >
              메뉴 추가하기
            </span>
          </S.EditLi>
        </S.EditUl>
      </S.EditWrap>
      <BasicModal
        onClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      >
        <CreateMenu />
      </BasicModal>
    </>
  );
};

export default { MenuEdit, MenuDefaulEdit };
