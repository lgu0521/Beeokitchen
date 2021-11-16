import React, { ChangeEvent, useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ImageBlock } from '../dto/image-create.dto';
import Image from 'next/image';
import styled from 'styled-components';
import { GetSingleDownloadUrl } from './GetDownloadUrl';
const DefaultImage = "https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/meau1.png?alt=media&token=742645d6-d01a-4cac-8f10-d3e70e817f0c";

interface DragAndDropInitializeProps {
    InitialItem?: ImageBlock,
    GetItem: (item: any) => void
}

interface InputFileProps {
    name: string,
    index?: number,
    id?: string,
    onChangeInput: (event: ChangeEvent<HTMLInputElement>, index?: any) => Promise<void>
}

const ImageUploadAndChange = ({ InitialItem, GetItem }: DragAndDropInitializeProps) => {
    const [imageItem, setImageItem] = useState(InitialItem);

    useEffect(() => {
        GetItem(imageItem);
    }, [imageItem]);

    const deleteImageItem = async () => {
        if (imageItem) {
            try {
                await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/image-delete", {
                    method: 'POST',
                    body: imageItem.storageRef
                });


            } catch (e) {
                alert('다시 시도해주세요');
            }
        } else {
            alert("이미지를 올려주세요");
        }
    }

    const ChangeImage = async (e: any, index: number) => {
        const file: File[] = e.target.files;
        if (file.length > 0) {
            const getSingleDownloadUrl = await GetSingleDownloadUrl(file);
            const item = {
                order: 0,
                storageRef: getSingleDownloadUrl.storageRef,
                downloadUrl: getSingleDownloadUrl.downloadUrl
            };
            setImageItem(item);
        } else {
            //업로드한 파일이 없을때
        }
    }

    return (
        <>
            <Image src={imageItem ? imageItem.downloadUrl : DefaultImage} width={80} height={80} objectFit="cover" />
            <InputFile onChangeInput={ChangeImage} name="이미지 바꾸기" />
        </>
    );
};

const InputFile = ({ onChangeInput, name, id, index }: InputFileProps) => {
    return (
        <>
            <Label htmlFor={id ? id : "addImage"}>{name}</Label>
            <input style={{ display: "none" }} onChange={(e) => onChangeInput(e, index != undefined ? index : null)} type="file" id={id ? id : "addImage"} />
        </>
    )
}


const Label = styled.label`
    display: flex;
    align-items: center;
    padding: 0px 11px;
    height: 33px;
    background-color:#FF6600;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
`

export default ImageUploadAndChange;