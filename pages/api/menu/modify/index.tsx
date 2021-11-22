import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, setDoc, updateDoc, collection, getDoc } from "firebase/firestore";
import firebase from '../../../../service/FirebaseConfig';
import { MenuDTO } from "../../../../dto/menu-create.dto";

const ModifyMenu = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const firestore = getFirestore(firebase);
            const reqBody: MenuDTO = JSON.parse(req.body);
            const newDocRef = doc(firestore, "Menu", reqBody.id);
            const docUpdate = await updateDoc(newDocRef, reqBody);
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/image-metadata-update", {
                method: 'POST',
                body: JSON.stringify({ storageRef: reqBody.image.storageRef })
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
