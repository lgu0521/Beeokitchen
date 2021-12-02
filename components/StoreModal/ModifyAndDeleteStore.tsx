//Basic
import { useForm } from "react-hook-form";
import Image from "next/image";
// component
//Style
import S from "../../styles/AdminPage.style";
import DeleteIcon from "../../public/Delete.png";
import styled from "styled-components";
//DTO
import { StoreDTO } from "../../dto/store-create.dto";

interface Props {
  initialItem: StoreDTO;
}

const ModifyAndDeleteStore = ({ initialItem }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/store/modify", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          id: initialItem.id,
          order: initialItem.order,
          image: {
            downloadUrl: data.downloadUrl,
            storageRef: "/Menu",
            fileName: data.downloadUrl.split("/").pop(),
          },
        } as StoreDTO),
      });
      if (typeof window != null) {
        window.location.reload();
      }
    } catch (e) {
      alert("다시 시도해주세요");
    }
  };

  const DeleteMenu = async () => {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/store/delete", {
        method: "POST",
        body: JSON.stringify({ id: initialItem.id }),
      });

      if (typeof window != null) {
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
          <S.Label>매장명</S.Label>
          <S.Input
            defaultValue={initialItem.title}
            {...register("title", { required: true })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>매장 정보</S.Label>
          <S.Input
            defaultValue={initialItem.operation}
            {...register("operation", { required: true })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>매장 전화번호</S.Label>
          <S.Input
            defaultValue={initialItem.phonenumber}
            {...register("phonenumber", { required: true })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>메뉴 이미지 링크</S.Label>
          <S.Description>
            권장: 1920px X 800px (비율 2:1) / 포맷 jpg, png (최대 10MB)
          </S.Description>
          <S.Input
            defaultValue={initialItem.image.downloadUrl}
            {...register("downloadUrl", { required: true })}
          />
        </S.InputWrap>
        <S.Button>저장</S.Button>
      </S.Form>
      <Icon>
        <Image
          src={DeleteIcon}
          width="25px"
          height="25px"
          onClick={DeleteMenu}
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

export default ModifyAndDeleteStore;
