import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React from "react";
import { useForm } from "react-hook-form";
import { StoreCreateDTO } from "../../../dto/store-create.dto";
import { GetMultiDownloadUrl } from "../../../components/GetDownloadUrl";

const AdminCreateStore = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<StoreCreateDTO>();
    const onSubmit = async (data: StoreCreateDTO) => {
        const downloadUrls: string[] = await GetMultiDownloadUrl(data.tmpUrl);
        data.url = downloadUrls;
        const res = await fetch(process.env.API_URL + "/api/store/create", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>매장 이름</label>
                <input placeholder="매장이름을 입력해주세요" {...register("name", { required: true, maxLength: 30 })} />
                {errors.name && errors.name.type === "required" && <span>필수항목 입니다</span>}
                {errors.name && errors.name.type === "maxLength" && <span>최대 30글자까지 입력할 수 있습니다</span>}
                <label>매장 위치</label>
                <input placeholder="매장 위치" {...register("location", { required: true, maxLength: 30 })} />
                {errors.location && errors.location.type === "required" && <span>필수항목 입니다</span>}
                {errors.location && errors.location.type === "maxLength" && <span>최대 30글자까지 입력할 수 있습니다</span>}
                <label>매장 전화번호</label>
                <input type="number" placeholder="전화번호를 입력해주세요" {...register("phonenumber", { required: true, maxLength: 30 })} />
                {errors.phonenumber && errors.phonenumber.type === "required" && <span>필수항목 입니다</span>}
                {errors.phonenumber && errors.phonenumber.type === "maxLength" && <span>최대 30글자까지 입력할 수 있습니다</span>}
                <label>매장 운영시간</label>
                <input placeholder="매장 운영시간정보를 입력해주세요" {...register("operation", { required: true, maxLength: 30 })} />
                {errors.operation && errors.operation.type === "required" && <span>필수항목 입니다</span>}
                {errors.operation && errors.operation.type === "maxLength" && <span>최대 30글자까지 입력할 수 있습니다</span>}
                <label>이미지</label>
                <input type="file" {...register("tmpUrl", { required: true })} multiple />
                {errors.url && <span>1개 이상의 이미지를 올려주세요!</span>}
                <button type="submit">제출</button>
            </form>
        </div>
    );
};

export default AdminCreateStore;