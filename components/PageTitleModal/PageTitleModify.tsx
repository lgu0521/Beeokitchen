import Image from "next/image";
//이미지
import DeleteIcon from "../../public/Delete.png";
import styled from "styled-components";
import S from "../../styles/AdminPage.style";
import { PageTitleDTO } from "../../dto/page-title.dto";
import { useForm } from "react-hook-form";

interface Props {
  initialItem: PageTitleDTO;
}

const PageTitleModify = ({ initialItem }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: PageTitleDTO) => {
    const sendData: PageTitleDTO = {
      ...data,
      id: initialItem.id,
    };
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/page-title/modify",
        {
          method: "POST",
          body: JSON.stringify(sendData),
        }
      );
      if (res && typeof window != undefined) {
        window.location.reload();
      }
    } catch (e) {
      alert("다시 시도해주세요");
    }
  };

  const DeleteDoc = async () => {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/page-title/delete", {
        method: "POST",
        body: JSON.stringify({ id: initialItem.id }),
      });
      if (typeof window != undefined) {
        window.location.reload();
      }
    } catch (e) {
      alert("다시 시도해주세요");
    }
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrap>
          <S.Label>페이지 제목</S.Label>
          <S.Input
            defaultValue={initialItem.title}
            {...register("title", { required: true })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>페이지 설명1</S.Label>
          <S.Input
            defaultValue={initialItem.content_1}
            {...register("content_1", { required: true })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>페이지 설명2</S.Label>
          <S.Input
            defaultValue={initialItem.content_2}
            {...register("content_2", { required: true })}
          />
        </S.InputWrap>
        <S.Button>저장</S.Button>
      </S.Form>
      <Icon>
        <Image
          src={DeleteIcon}
          width="25px"
          height="25px"
          onClick={DeleteDoc}
          alt=""
        />
      </Icon>
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

export default PageTitleModify;
