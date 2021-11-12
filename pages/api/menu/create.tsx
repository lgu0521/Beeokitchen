import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, getDocs, collection } from "firebase/firestore";
import firebase from '../../../service/FirebaseConfig';
import { MenuCreateDTO } from "../../../dto/menu-create.dto";

const CreateMenu = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody: MenuCreateDTO = JSON.parse(req.body);
            const newDocRef = doc(collection(firestore, reqBody.catagory));
            const querySnapshot = await getDocs(collection(firestore, reqBody.catagory));
            const docData: MenuCreateDTO = {
                catagory: reqBody.catagory,
                title: reqBody.title,
                content: reqBody.content,
                orderList: querySnapshot.size + 1,
                image: {
                    order: reqBody.image.order,
                    storageRef: reqBody.image.storageRef,
                    downloadUrl: reqBody.image.downloadUrl
                }
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
