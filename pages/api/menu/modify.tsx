import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, updateDoc, collection } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { MenuModifyDTO, MenuDTO } from "../../../dto/menu-create.dto";

const ModifyMenu = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody:MenuModifyDTO = JSON.parse(req.body);
            const newDocRef = doc(firestore, reqBody.catagory, reqBody.id);
            const docUpdate = await updateDoc(newDocRef, {
                catagory: reqBody.catagory,
                title: reqBody.title,
                content: reqBody.content,
                url: reqBody.url,
            });
            
            res.status(200).json({ message: "success" });
        } catch (e) {
            console.log("실패: " + e);
        }
      } else {
        // Handle any other HTTP method
      }
}

export default ModifyMenu;
