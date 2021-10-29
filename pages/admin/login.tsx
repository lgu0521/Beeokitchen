import { Form, InputForm, ButtonForm } from '../../components/BasicForm'
import firebase from '../../service/firebase';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth'
import AdminLayout from '../../components/AdminLayout';
import { PageLayout } from '../../components/GlobalComponents';
import { useRouter } from 'next/dist/client/router';

type LoginData = {
    email: string,
    password: string
}

const AdminLoginPage = () => {
    const firebaseAuth = getAuth(firebase);
    const router = useRouter();

    const Submit = async ({ email, password }: LoginData) => {
        console.log(email, password);
        try {
            setPersistence(firebaseAuth, browserLocalPersistence).then(
                () => {
                    return signInWithEmailAndPassword(firebaseAuth, email, password);
                }
            );
            router.push('/');

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <AdminLayout>
            <PageLayout>
                <Form onSubmit={Submit}>
                    <InputForm label="이메일" type="email" name="email" placeholder="이메일을 입력해주세요" />
                    <InputForm label="비밀번호" type="password" name="password" placeholder="비밀번호를 입력해주세요" />
                    <ButtonForm name="로그인" />
                </Form>
            </PageLayout>
        </AdminLayout>
    );
};

export default AdminLoginPage;