//Basic
import { useState } from "react";

//이미지
import EditIcon from "../../public/Edit.png";
import BasicModal from "../BasicModal";

//Component
import Image from "next/image";
import ModifyAndDeleteBanner from "./ModifyAndDeleteBanner";
import { BannerDTO } from "../../dto/banner-create.dto";
import S from "../../styles/AdminPage.style";

interface Props {
  initialItems: BannerDTO[];
}

export const BannerEdit = ({ initialItems }: Props) => {
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
        {modalName ? (
          <ModifyAndDeleteBanner initialItems={initialItems} />
        ) : null}
      </BasicModal>
    </>
  );
};

export default BannerEdit;
