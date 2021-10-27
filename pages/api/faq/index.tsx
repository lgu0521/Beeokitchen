import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { FaqListDTO } from '../../../dto/faq-create.dto';

const GetFaqList = async (req: NextApiRequest, res: NextApiResponse<Array<FaqListDTO>>) => {
    const firestore = getFirestore(firebase);
    var resJsonArray = [] as FaqListDTO[];
    try {
        const querySnapshot = await getDocs(collection(firestore, "Banner"));
        querySnapshot.forEach((item) => {
            const docData: FaqListDTO = {
                id: item.id,
                order: item.data().order,
                title: item.data().title,
                content: item.data().content,
            }
            resJsonArray.push(docData);
        });
        res.status(200).json(resJsonArray);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default GetFaqList;