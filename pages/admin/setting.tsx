import { GetStaticProps } from 'next';
import React from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { ButtonForm, Form, InputForm } from '../../components/Form';
import { GetSingleDownloadUrl } from '../../components/GetDownloadUrl';
import { PageLayout, Title1 } from '../../components/GlobalComponents';
import PageMainTitle from '../../components/PageMainTitle';
import { BannerCreateDTO, BannerListDTO } from '../../dto/banner-create.dto';

interface Props {
    Banner: BannerListDTO[]
}
const AdminSetting = ({ Banner }: Props) => {
    console.log(Banner);
    const ChangeLogin = async (data: BannerCreateDTO) => {
        const url = await GetSingleDownloadUrl(data.tmpUrl);
        data.url = url; //tmpUrl을 string으로 변환
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/banner/create", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    const ChangeSilder = async (data: BannerCreateDTO) => {
        const url = await GetSingleDownloadUrl(data.tmpUrl);
        data.url = url; //tmpUrl을 string으로 변환
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/banner/create", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    return (
        <>
            <PageLayout>
                <PageMainTitle title="로고 수정" />
                {/* <Image src={Logo} width="100px" height="100px" /> */}
                <Form onSubmit={ChangeLogin}>
                    <InputForm label="이미지 파일 올리기" type="file" name="tmpUrl" />
                    <ButtonForm name="저장" />
                </Form>
                <PageMainTitle title="메인 슬라이더 수정" />
                {
                    Banner.map((item, key) => (
                        <Image src={item.url} width="100px" height="100px" />
                        ))
                }
                <Form onSubmit={ChangeSilder}>
                    <InputForm label="이미지 순서" type="number" name="order" />
                    <InputForm label="이미지 파일 올리기" type="file" name="tmpUrl" />
                    <ButtonForm name="저장" />
                </Form>
            </PageLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    // const resLogo = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/logo");
    // const Logo = await resLogo.json();
    const resBanner = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/banner");
    const Banner:BannerListDTO[] = await resBanner.json();

    return {
        props: {
            Banner
        }
    }
}
export default AdminSetting;