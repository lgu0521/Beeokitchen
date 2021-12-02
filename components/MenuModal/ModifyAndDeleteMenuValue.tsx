import { MenuCatagoryDTO, MenuDTO } from "../../dto/menu-create.dto";
import { useForm } from "react-hook-form";
import S from "../../styles/AdminPage.style";
import DeleteIcon from "../../public/Delete.png";
import Image from "next/image";

interface Props {
  initialMenu: MenuDTO;
  initalMenuCatagorys: MenuCatagoryDTO[];
}

const ModifyAndDeleteMenuValue = ({
  initialMenu,
  initalMenuCatagorys,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    if (initialMenu.catagory != data.catagory) {
      initialMenu.order = 0;
    }

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/menu/modify",
        {
          method: "POST",
          body: JSON.stringify({
            ...data,
            id: initialMenu.id,
            order: initialMenu.order,
            image: {
              downloadUrl: data.downloadUrl,
              storageRef: "/Menu",
              fileName: data.downloadUrl.split("/").pop(),
            },
          } as MenuDTO),
        }
      );
      if (res && typeof window != null) {
        window.location.reload();
      }
    } catch (e) {
      alert("다시 시도해주세요");
    }
  };

  const DeleteMenu = async () => {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/delete", {
        method: "POST",
        body: JSON.stringify({ id: initialMenu.id }),
      });

      if (typeof window != null) {
        window.location.reload();
      }
    } catch (e) {
      alert("다시 시도해주세요");
    }
  };

  //이미지 권장설명 수정 필요
  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrap>
          <S.Label>메뉴 카테고리</S.Label>
          <S.Description>
            메뉴 카테고리를 생성하고 싶으시면 메인에서 추가하세요
          </S.Description>
          <S.Select
            defaultValue={initialMenu.catagory}
            {...register("catagory", { required: true })}
          >
            {initalMenuCatagorys.map((item, i) => (
              <option value="item.title" key={i}>
                {item.title}
              </option>
            ))}
          </S.Select>
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>메뉴 이름</S.Label>
          <S.Input
            defaultValue={initialMenu.title}
            {...register("title", { required: true, maxLength: 20 })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>메뉴 설명1</S.Label>
          <S.Input
            defaultValue={initialMenu.content1}
            {...register("content1", { required: true })}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>메뉴 설명2</S.Label>
          <S.Input
            defaultValue={initialMenu.content2}
            {...register("content2")}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label>메뉴 이미지 링크</S.Label>
          <S.Description>
            권장: 1920px X 800px (비율 2:1) / 포맷 jpg, png (최대 10MB)
          </S.Description>
          <S.Input
            {...register("downloadUrl", { required: true })}
            defaultValue={initialMenu.image.downloadUrl}
          />
        </S.InputWrap>
        <S.Button>저장</S.Button>
      </S.Form>
      <S.Icon>
        <Image
          src={DeleteIcon}
          width="25px"
          height="25px"
          onClick={DeleteMenu}
          alt=""
        />
      </S.Icon>
    </>
  );
};

export default ModifyAndDeleteMenuValue;
