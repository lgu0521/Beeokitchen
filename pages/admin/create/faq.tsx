import { FaqCreateDTO } from "../../../dto/faq-create.dto";
import { PageLayout } from "../../../components/GlobalComponents";
import { Form, InputForm } from "../../../components/Form";

const AdminCreateFaq = () => {
    const onSubmit = async (data: FaqCreateDTO) => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/faq/create', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    return (
        <PageLayout>
            <Form onSubmit={onSubmit}>
                <InputForm label="순번" placeholder="매장이름을 입력해주세요" name="order"/>
                <InputForm label="제목" placeholder="매장이름을 입력해주세요" name="title"/>
                <InputForm label="내용" placeholder="매장 위치" name="content" />
                <button type="submit">제출</button>
            </Form>
        </PageLayout>
    );
};

export default AdminCreateFaq;