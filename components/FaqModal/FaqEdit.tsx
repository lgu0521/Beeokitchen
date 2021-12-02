//Basic
import { useState } from "react";
import Image from "next/image";
//Style
import EditIcon from "../../public/Edit.png";
import S from "../../styles/AdminPage.style";
//Component
import BasicModal from "../BasicModal";
import ModifyAndDeleteFaq from "./ModifyAndDeleteFaq";
import ChangeFaqOrder from "./ChangeFaqOrder";
import CreateFaq from "./CreateFaq";
//DTO
import { FaqDTO } from "../../dto/faq-create.dto";

interface Props {
  initialItem: FaqDTO;
  initialItems: FaqDTO[];
}

export const FaqEdit = ({ initialItem, initialItems }: Props) => {
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
          <ModifyAndDeleteFaq initialItem={initialItem} />
        ) : modalName == "order_modify" ? (
          <ChangeFaqOrder initialItems={initialItems} />
        ) : modalName == "create" ? (
          <CreateFaq />
        ) : null}
      </BasicModal>
    </>
  );
};

export default FaqEdit;
