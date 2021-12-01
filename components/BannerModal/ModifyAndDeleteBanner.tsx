import { useState } from "react";
//이미지
import { useForm } from "react-hook-form";
import { BannerDTO } from "../../dto/banner-create.dto";
import { ImageBlocks } from "../../dto/image-create.dto";
import S from "../../styles/AdminPage.style";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DroppableIcon from "../../public/admin/droppable.png";
import Image from "next/image";

interface Props {
  initialItems: BannerDTO[];
}

const ModifyAndDeleteBanner = ({ initialItems }: Props) => {
  const { register, handleSubmit } = useForm();
  const [itemList, setItemList] = useState<BannerDTO[]>(initialItems);

  const ItemOrderSetting = (currentItemList: any[]) => {
    currentItemList.map((item, index) => {
      item.order = index as number;
    });

    setItemList(currentItemList);
  };

  const onSubmit = async (data: any) => {
    try {
      itemList.map(async (item, index) => {
        if (item.id && item.downloadUrl) {
          const res = await fetch(
            process.env.NEXT_PUBLIC_API_URL + "/api/banner/modify",
            {
              mode: "cors",
              method: "POST",
              body: JSON.stringify({
                ...item,
                fileName: item.downloadUrl.split("/").pop(),
                storageRef: "/silder",
              } as BannerDTO),
            }
          );
          if (res) {
            if (typeof window != null) {
              window.location.reload();
            }
          }
        } else {
          if (item.downloadUrl) {
            const res = await fetch(
              process.env.NEXT_PUBLIC_API_URL + "/api/banner/create",
              {
                mode: "cors",
                method: "POST",
                body: JSON.stringify({
                  ...item,
                  fileName: item.downloadUrl.split("/").pop(),
                  storageRef: "/silder",
                } as BannerDTO),
              }
            );
            if (res) {
              if (typeof window != null) {
                window.location.reload();
              }
            }
          }
        }
      });
    } catch (e) {
      alert("다시 시도해주세요");
    }
  };

  const toDeleteItem = async (deleteItemIndex: number) => {
    try {
      const delteItem = itemList[deleteItemIndex];
      if (delteItem.id) {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/banner/delete",
          {
            mode: "cors",
            method: "POST",
            body: JSON.stringify({ id: delteItem.id }),
          }
        );
        if (res) {
          if (typeof window != null) {
            window.location.reload();
          }
        }
      }

      const items = [...itemList];
      items.splice(deleteItemIndex, 1);
      ItemOrderSetting(items);

      setItemList(items);
    } catch (e) {
      alert("다시 시도해주세요");
    }
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = [...itemList];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    ItemOrderSetting(items);
  };

  const AddItem = () => {
    const items = [...itemList];
    items.push({} as BannerDTO);
    ItemOrderSetting(items);
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="itemList">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {itemList.map((item: BannerDTO, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <S.DroppableLi
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <li>
                          <Image src={DroppableIcon} width={24} height={24} />
                        </li>
                        <li>
                          <S.InputWrap>
                            <S.Label>이미지 링크</S.Label>
                            <S.Description>
                              권장: 1920px X 800px (비율 2:1) / 포맷 jpg, png
                              (최대 10MB)
                            </S.Description>
                            <S.Input
                              defaultValue={item.downloadUrl}
                              onChange={(e) => {
                                item.downloadUrl = e.target.value;
                              }}
                              required
                            />
                            {index == 0 ? null : (
                              <S.DeleteButton
                                onClick={() => {
                                  toDeleteItem(index);
                                }}
                              >
                                삭제
                              </S.DeleteButton>
                            )}
                          </S.InputWrap>
                        </li>
                      </S.DroppableLi>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <S.AddButton onClick={AddItem} type="button">
            추가하기
          </S.AddButton>
        </DragDropContext>
        <S.Button type="submit">저장</S.Button>
      </S.Form>
    </>
  );
};

export default ModifyAndDeleteBanner;
