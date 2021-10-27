import { useForm } from "react-hook-form";
import { GetSingleDownloadUrl } from '../../../components/GetDownloadUrl';
import { BannerCreateDTO } from '../../../dto/banner-create.dto';

const AdminCreateBanner = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<BannerCreateDTO>();
    const onSubmit = async (data: BannerCreateDTO) => {
        const url = await GetSingleDownloadUrl(data.tmpUrl);
        data.url = url; //tmpUrl을 string으로 변환
        const res = await fetch(process.env.API_URL + "/api/banner/create", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>이미지 순서</label>
                <input type="number" {...register("order", { required: true })} />
                <label>이미지 파일 올리기</label>
                <input type="file" {...register("tmpUrl", { required: true })} />
                <button type="submit">저장</button>
            </form>
        </div>
    );
};

export default AdminCreateBanner;