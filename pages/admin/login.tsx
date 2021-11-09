import { Form, InputForm, ButtonForm } from '../../components/BasicForm'
import { PageLayout } from '../../components/GlobalComponents';
import { AuthProvider, useAuth } from '../../hook/AuthProvider';

type LoginData = {
    email: string,
    password: string
}

const AdminLoginPage = () => {
    const { user, error, SignInWithEmailAndPassword, LoginOut } = useAuth();

    const Submit = async ({ email, password }: LoginData) => {
        await SignInWithEmailAndPassword(email, password);
        console.log(user);
    }

    return (
        <>
            <PageLayout>
                <Form onSubmit={Submit}>
                    <InputForm label="이메일" type="email" name="email" placeholder="이메일을 입력해주세요" />
                    <InputForm label="비밀번호" type="password" name="password" placeholder="비밀번호를 입력해주세요" />
                    <ButtonForm name="로그인" />
                </Form>
            </PageLayout>
            {user ? user.uid : "정보 없음"}
            <button onClick={LoginOut}>로그아웃</button>
        </>
    );
};

export default AdminLoginPage;