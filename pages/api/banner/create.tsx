import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, Timestamp, collection } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { BannerCreateDTO, BannerDTO } from "../../../dto/banner-create.dto";



const CreateBanner = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody:BannerCreateDTO = JSON.parse(req.body);
            const newDocRef = doc(collection(firestore, "Banner"));

            const docData:BannerDTO = {
                order: reqBody.order,
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

export default CreateBanner;
