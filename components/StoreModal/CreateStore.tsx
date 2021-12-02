//이미지
import { useForm } from "react-hook-form";
import { StoreCreateDTO } from "../../dto/store-create.dto";
import S from "../../styles/AdminPage.style";

const CreateStore = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/store/create", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          image: {
            downloadUrl: data.downloadUrl,
            storageRef: "/Menu",
            fileName: data.downloadUrl.split("/").pop(),
          },
        } as StoreCreateDTO),
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
            placeholder="매장명을 입력해주세요"
            {...register("title", { required: true })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>매장 정보</S.Label>
          <S.TextArea
            placeholder="매장 정보를 입력해주세요"
            {...register("operation", { required: true })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>매장 전화번호</S.Label>
          <S.Input
            placeholder="매장 전화번호을 입력해주세요"
            {...register("phonenumber", { required: true })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>메뉴 이미지 링크</S.Label>
          <S.Description>
            권장: 1920px X 800px (비율 2:1) / 포맷 jpg, png (최대 10MB)
          </S.Description>
          <S.Input {...register("downloadUrl", { required: true })} />
        </S.InputWrap>
        <S.Button>저장</S.Button>
      </S.Form>
    </>
  );
};

export default CreateStore;
