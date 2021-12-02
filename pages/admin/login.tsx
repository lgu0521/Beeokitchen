import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { PageMaxNoCSSLayout } from "../../components/GlobalComponents";
import { AuthProvider, useAuth } from "../../hook/AuthProvider";
import S from "../../styles/AdminPage.style";
type LoginData = {
  email: string;
  password: string;
};

const AdminLoginPage = () => {
  const { user, error, SignInWithEmailAndPassword, LoginOut } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const res = await SignInWithEmailAndPassword(data.email, data.password);
    if (res) {
      router.push("/");
    }
  };

  return (
    <>
      <PageMaxNoCSSLayout>
        <Wrap>
          {user ? (
            <S.Button onClick={LoginOut}>로그아웃</S.Button>
          ) : (
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.InputWrap>
                <S.Label>이메일</S.Label>
                <S.Input
                  {...register("email", { required: true, maxLength: 20 })}
                  placeholder="이메일을 입력해주세요"
                />
              </S.InputWrap>
              <S.InputWrap>
                <S.Label>비밀번호</S.Label>
                <S.Input
                  type="password"
                  {...register("password", { required: true, maxLength: 20 })}
                  placeholder="비밀번호를 입력해주세요"
                />
              </S.InputWrap>
              <S.Button>로그인</S.Button>
            </S.Form>
          )}
        </Wrap>
      </PageMaxNoCSSLayout>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 120px 0px;
`;

export default AdminLoginPage;
