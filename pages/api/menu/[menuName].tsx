import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { MenuListDTO } from '../../../dto/menu-create.dto';

const GetMenuList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { menuName } } = req;
  const firestore = getFirestore(firebase);
  var resJsonArray = [] as MenuListDTO[];
  try {
    const querySnapshot = await getDocs(collection(firestore, menuName as string));

    querySnapshot.forEach((item) => {
      var docData: MenuListDTO = {
        id: item.id,
        catagory: item.data().catagory,
        title: item.data().title,
        content: item.data().content,
        url: item.data().url
      }

      resJsonArray.push(docData);
    });
    res.status(200).json(resJsonArray);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default GetMenuList;
