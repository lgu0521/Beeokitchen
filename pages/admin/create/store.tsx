import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React from "react";
import { useForm } from "react-hook-form";
import { StoreCreateDTO } from "../../../dto/store-create.dto";
import { GetMultiDownloadUrl } from "../../../components/GetDownloadUrl";
import { PageLayout } from "../../../components/GlobalComponents";
import { ButtonForm, Form, InputForm } from "../../../components/Form";
import PageMainTitle from "../../../components/PageMainTitle";

const AdminCreateStore = () => {
    const onSubmit = async (data: StoreCreateDTO) => {
        const downloadUrls: string[] = await GetMultiDownloadUrl(data.tmpUrl);
        data.url = downloadUrls;
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/store/create', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    return (
        <PageLayout>
            <PageMainTitle title="매장 추가"/>
            <Form onSubmit={onSubmit}>
                <InputForm label="매장 이름" placeholder="매장이름을 입력해주세요" name="name"/>
                <InputForm label="매장 위치" placeholder="매장 위치" name="location"/>
                <InputForm label="매장 전화번호" type="number" placeholder="전화번호를 입력해주세요" name="phonenumber"/>
                <InputForm label="매장 운영시간" placeholder="매장 운영시간정보를 입력해주세요" name="operation"/>
                <InputForm label="매장 상세 이미지" type="file" name="tmpUrl" multiple />
                <ButtonForm name="저장"/>
            </Form>
        </PageLayout>
    );
};

export default AdminCreateStore;