import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
// component
import { Form, ButtonForm } from "./Form";
import BasicModal from "./BasicModal";
//이미지
import EditIcon from "../public/Edit.png";
import styled from "styled-components";
import S from "../styles/AdminPage.style";
import { PageTitleDTO } from "../dto/page-title.dto";
import { useForm } from "react-hook-form";

const PageTitleModefiyModal = (props: PageTitleDTO) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (data: PageTitleDTO) => {
    const sendData: PageTitleDTO = {
      id: props.id,
      title: data.title,
      content_1: data.content_1,
      content_2: data.content_2,
    };
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/page-title/modify", {
        method: "POST",
        body: JSON.stringify(sendData),
      });
      setIsModalOpen(false);
      router.replace(router.asPath);
    } catch (e) {
      alert("다시 시도해주세요");
    }
  };

  return (
    <>
      <Wrap>
        <Icon>
          <Image
            src={EditIcon}
            width="20px"
            height="20px"
            onClick={() => setIsModalOpen(true)}
          />
        </Icon>
      </Wrap>
      <BasicModal
        onClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      >
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputWrap>
            <S.Label>페이지 제목</S.Label>
            <S.Input
              defaultValue={props.title}
              {...register("title", { required: true })}
            />
          </S.InputWrap>
          <S.InputWrap>
            <S.Label>페이지 설명1</S.Label>
            <S.Input
              defaultValue={props.content_1}
              {...register("content_1", { required: true })}
            />
          </S.InputWrap>
          <S.InputWrap>
            <S.Label>페이지 설명2</S.Label>
            <S.Input
              defaultValue={props.content_2}
              {...register("content_2", { required: true })}
            />
          </S.InputWrap>
          <S.Button>제출</S.Button>
        </S.Form>
      </BasicModal>
    </>
  );
};

const Icon = styled.button`
  display: table-cell;
  padding: 5px;
  cursor: pointer;
  background-color: white;
  border-radius: 100%;
  margin-left: 5px;
  border: 1px solid #175436;
`;

const Wrap = styled.div`
  display: table;
  position: absolute;
  float: right;
  right: 0;
  padding: 30px;
  z-index: 1;
`;
export default PageTitleModefiyModal;
