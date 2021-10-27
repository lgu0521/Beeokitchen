import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, Timestamp, collection } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { MenuCreateDTO, MenuDTO } from "../../../dto/menu-create.dto";


const CreateMenu = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody:MenuCreateDTO = JSON.parse(req.body);
            const newDocRef = doc(collection(firestore, reqBody.catagory));
            const docData:MenuDTO = {
                catagory: reqBody.catagory,
                title: reqBody.title,
                content: reqBody.content,
                url: reqBody.url
            }
            const docRef = await setDoc(newDocRef, docData);
            
            res.status(200).json({ message: "success" });
        } catch (e) {
            console.log("실패: " + e);
        }
      } else {
        // Handle any other HTTP method
      }
}

export default CreateMenu;
