import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, updateDoc, collection } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { StoreModifyDTO, StoreDTO } from "../../../dto/store-create.dto";

const ModifyStore = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody: StoreModifyDTO = JSON.parse(req.body);
            const newDocRef = doc(firestore, "Store", reqBody.id);
            const docUpdate = await updateDoc(newDocRef, {
                name: reqBody.name,
                location: reqBody.location,
                operation: reqBody.operation,
                phonenumber: reqBody.phonenumber,
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

export default ModifyStore;
