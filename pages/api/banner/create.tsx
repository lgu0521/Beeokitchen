import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, Timestamp, collection } from "firebase/firestore";
import firebase from '../../../service/FirebaseConfig';
import { BannerDTO } from "../../../dto/banner-create.dto";



const CreateBanner = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody:BannerDTO = JSON.parse(req.body);
            const newDocRef = doc(collection(firestore, "Banner"));

            const docData:BannerDTO = {
                order: reqBody.order,
                storageRef: reqBody.storageRef,
                downloadUrl: reqBody.downloadUrl
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

export default CreateBanner;
