//이미지
import { useForm } from "react-hook-form";
import { FaqCreateDTO } from "../../dto/faq-create.dto";
import S from "../../styles/AdminPage.style";

const CreateFaq = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FaqCreateDTO) => {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/faq/create", {
        method: "POST",
        body: JSON.stringify(data),
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
          <S.Label>FAQ 제목</S.Label>
          <S.Input
            placeholder="FAQ 제목을 입력해주세요"
            {...register("title", { required: true, maxLength: 20 })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>FAQ 내용</S.Label>
          <textarea
            placeholder="FAQ 내용 입력해주세요"
            {...register("content", { required: true, maxLength: 200 })}
          />
        </S.InputWrap>
        <S.Button>저장</S.Button>
      </S.Form>
    </>
  );
};

export default CreateFaq;
