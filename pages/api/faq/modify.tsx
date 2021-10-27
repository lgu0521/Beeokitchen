import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, updateDoc, collection } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { FaqModifyDTO, FaqDTO } from "../../../dto/faq-create.dto";



const ModifyBanner = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody:FaqModifyDTO = JSON.parse(req.body);
            const newDocRef = doc(firestore, "Faq", reqBody.id);
            const docUpdate = await updateDoc(newDocRef, {
                order: reqBody.order,
                title: reqBody.title,
                content: reqBody.content,
            });
            
            res.status(200).json({ message: "success" });
        } catch (e) {
            console.log("실패: " + e);
        }
      } else {
        // Handle any other HTTP method
      }
}

export default ModifyBanner;
