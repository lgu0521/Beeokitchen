import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, Timestamp, collection } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { StoreCreateDTO,StoreDTO } from "../../../dto/store-create.dto";

const CreateStore = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody:StoreCreateDTO = JSON.parse(req.body);
            const newDocRef = doc(collection(firestore, "Store"));
            const docData :StoreDTO= {
                name: reqBody.name,
                phonenumber: reqBody.phonenumber,
                location: reqBody.location,
                operation: reqBody.operation,
                url: reqBody.url,
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

export default CreateStore;
