import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { BannerListDTO } from '../../../dto/banner-create.dto';



const GetBannerList = async (req: NextApiRequest, res: NextApiResponse<Array<BannerListDTO>>) => {
    const firestore = getFirestore(firebase);
    var resJsonArray = [] as BannerListDTO[];
    try {
        const querySnapshot = await getDocs(collection(firestore, "Banner"));
        querySnapshot.forEach((item) => {
            const docData: BannerListDTO = {
                id: item.id,
                order: item.data().order,
                url: item.data().url,
            }
            resJsonArray.push(docData);
        });
        res.status(200).json(resJsonArray);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export default GetBannerList;
