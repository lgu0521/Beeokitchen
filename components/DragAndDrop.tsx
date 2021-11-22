import React, { ChangeEvent, useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ImageBlock } from '../dto/image-create.dto';
import Image from 'next/image';
import styled from 'styled-components';
import { GetSingleDownloadUrl } from './GetDownloadUrl';

interface DragAndDropInitializeProps {
    InitialItemList: ImageBlock[],
    DeleteItem: (item: any) => Promise<void>,
    GetItem: (item: any) => void
}

interface InputFileProps {
    name: string,
    index?: number,
    id?: string,
    onChangeInput: (event: ChangeEvent<HTMLInputElement>, index?: any) => Promise<void>
}

const DragAndDrop = ({ InitialItemList, DeleteItem, GetItem }: DragAndDropInitializeProps) => {
    const [itemList, setItemList] = useState(InitialItemList);

    useEffect(() => {
        GetItem(itemList);
    }, [itemList, InitialItemList]);

    const deleteAndSetItemList = (deleteItem: number) => {
        DeleteItem(itemList[deleteItem]);
        const items = [...itemList];
        items.splice(deleteItem, 1);
        items.map((item, index) => {
            item.order = index as number
        });

        setItemList(items);
    }

    const handleOnDragEnd = (result: any) => {
        if (!result.destination) return;
        const items = [...itemList];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        items.map((item, index) => {
            item.order = index as number
        });

        setItemList(items);
    }

    const addImage = async (e: any) => {
        const file: File[] = e.target.files;

        if (file.length > 0) {
            const getSingleDownloadUrl = await GetSingleDownloadUrl(file);
            const items = [...itemList];
            items.push({
                order: items.length,
                storageRef: getSingleDownloadUrl.storageRef,
                downloadUrl: getSingleDownloadUrl.downloadUrl
            });
            setItemList(items);
        } else {
            //업로드한 파일이 없을때
        }
    }

    const ChangeImage = async (e: any, index: number) => {
        const file: File[] = e.target.files;
        console.log(e);
        if (file.length > 0) {
            const getSingleDownloadUrl = await GetSingleDownloadUrl(file);
            const items = [...itemList];
            console.log(index);
            console.log(items[index]);
            items[index] = {
                order: itemList[index].order,
                storageRef: getSingleDownloadUrl.storageRef,
                downloadUrl: getSingleDownloadUrl.downloadUrl
            };
            setItemList(items);
        } else {
            //업로드한 파일이 없을때
        }
    }

    return (
        <>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="itemList">
                    {(provided) => (
                        <ul {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {itemList.map((item, index) => (
                                <Draggable key={index} draggableId={item.order.toString()} index={index}>
                                    {(provided) => (
                                        <li ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}>
                                            <ImageBox>
                                                <Image src={item.downloadUrl} width={100} height={100} objectFit="cover"/>
                                                <InputFile onChangeInput={ChangeImage} name="이미지 바꾸기" id={`tmpUrl"+${index}`} index={index} />
                                                <button onClick={() => { deleteAndSetItemList(index) }}>삭제</button>
                                            </ImageBox>
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <InputFile onChangeInput={addImage} name="이미지 추가하기" />
        </>
    );
};

export const InputFile = ({ onChangeInput, name, id, index }: InputFileProps) => {
    return (
        <>
            <Label htmlFor={id ? id : "addImage"}>{name}</Label>
            <input style={{display:"none"}} onChange={(e) => onChangeInput(e, index != undefined ? index : null)} type="file" id={id ? id : "addImage"} />
        </>
    )
}

const Label = styled.label`
padding: 6px 25px;
  background-color:#FF6600;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`

const ImageBox = styled.div`
    border: 1px solid #D2D4DE;
    border-radius: 20px;
    width: 100%;
    background-color: white;
    padding: 10px 20px;
`

const Line = styled.div`
width: 40%;
border: 1px solid black;
`

export default DragAndDrop;