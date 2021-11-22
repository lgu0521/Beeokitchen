//Basic
import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
//DTO
import { ImageBlock } from '../dto/image-create.dto';
//Component
import { GetSingleDownloadUrl } from './GetDownloadUrl';

const DefaultImage = "https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/meau1.png?alt=media&token=742645d6-d01a-4cac-8f10-d3e70e817f0c";

interface DragAndDropInitializeProps {
    InitialItem?: ImageBlock,
    GetItem: (item: any) => void
}

const ImageUploadAndChange = ({ InitialItem, GetItem }: DragAndDropInitializeProps) => {
    const [imageItem, setImageItem] = useState(InitialItem);

    useEffect(() => {
        GetItem(imageItem);
    }, [imageItem]);

    const ChangeImage = async (e: any) => {
        console.log(imageItem);
        if(imageItem != undefined){
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/storage-cache", {
                method: 'POST',
                body: JSON.stringify({ bucket: imageItem.storageRef })
            });
        }

        const file: File[] = e.target.files;
        const getImageItem = await GetSingleDownloadUrl(file);

        setImageItem(getImageItem);
    }

    return (
        <>
        {
            imageItem?
            <Image src={imageItem ? imageItem.downloadUrl : DefaultImage} width={80} height={80} objectFit="cover" />
            : null
        }
            <Label htmlFor="addImage">이미지 바꾸기</Label>
            <input style={{ display: "none" }} onChange={(e) => ChangeImage(e)} type="file" id="addImage" />
        </>
    );
};

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