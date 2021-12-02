//Basic
import { useState } from "react";
//이미지
import EditIcon from "../../public/Edit.png";
import BasicModal from "../BasicModal";
//Component
import Image from "next/image";
import PageTitleModify from "./PageTitleModify";
import { PageTitleDTO } from "../../dto/page-title.dto";
import S from "../../styles/AdminPage.style";

interface Props {
  initialItem: PageTitleDTO;
}

export const PageTitleEdit = ({ initialItem }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState<boolean>(false);

  return (
    <>
      <S.EditWrap>
        <S.EditButton>
          <Image src={EditIcon} width={30} height={30} objectFit="none" />
        </S.EditButton>
        <S.EditUl>
          <S.EditLi>
            <span
              onClick={() => {
                setIsModalOpen(true);
                setModalName(true);
              }}
            >
              수정하기
            </span>
          </S.EditLi>
        </S.EditUl>
      </S.EditWrap>
      <BasicModal
        onClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      >
        {modalName ? <PageTitleModify initialItem={initialItem} /> : null}
      </BasicModal>
    </>
  );
};

export default PageTitleEdit;
