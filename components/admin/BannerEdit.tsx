import { MenuDTO } from "../../dto/menu-create.dto";
import { useState } from "react";
import Image from "next/image";
//이미지
import EditIcon from "../../public/Edit.png";
import BasicModal from "../BasicModal";

import CreateBanner from "../BannerModal/CreateBanner";
import ModifyAndDeleteBanner from "../BannerModal/ModifyAndDeleteBanner";
import { BannerDTO } from "../../dto/banner-create.dto";
import S from "./AdminPage.style";
interface Props {
  initialItems: BannerDTO[];
}

export const BannerEdit = ({ initialItems }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState<string>("");

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
          <ModifyAndDeleteBanner initialItems={initialItems} />
        ) : modalName == "create" ? (
          <CreateBanner />
        ) : null}
      </BasicModal>
    </>
  );
};

export default BannerEdit;
