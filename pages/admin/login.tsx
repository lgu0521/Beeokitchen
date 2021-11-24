import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import { Form, InputForm, ButtonForm } from '../../components/AdminForm'
import { PageMaxNoCSSLayout } from '../../components/GlobalComponents';
import { AuthProvider, useAuth } from '../../hook/AuthProvider';

type LoginData = {
    email: string,
    password: string
}

const AdminLoginPage = () => {
    const { user, error, SignInWithEmailAndPassword, LoginOut } = useAuth();
    const router = useRouter();
    const Submit = async ({ email, password }: LoginData) => {
        const res = await SignInWithEmailAndPassword(email, password);
        if (res) {
            router.push('/');
        }
    }

    return (
        <>
            <PageMaxNoCSSLayout>
                <Wrap>
                    {user ?
                        <button onClick={LoginOut}>로그아웃</button>
                        : <Form onSubmit={Submit}>
                            <InputForm label="이메일" type="email" name="email" placeholder="이메일을 입력해주세요" />
                            <InputForm label="비밀번호" type="password" name="password" placeholder="비밀번호를 입력해주세요" />
                            <ButtonForm name="로그인" />
                        </Form>
                    }
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
`

export default AdminLoginPage;