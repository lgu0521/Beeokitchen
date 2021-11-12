import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebase from '../../../service/FirebaseConfig';
import { MenuDTO } from '../../../dto/menu-create.dto';
const GetMenuList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { menuName } } = req;
  const firestore = getFirestore(firebase);
  var resJsonArray = [] as MenuDTO[];

  try {
    const querySnapshot = await getDocs(collection(firestore, menuName as string));
    querySnapshot.forEach((item) => {
      const docData: MenuDTO = {
        id: item.id,
        catagory: item.data().catagory,
        title: item.data().title,
        content: item.data().content,
        orderList: item.data().orderList,
        image: {
          order: item.data().image.order,
          storageRef: item.data().image.storageRef,
          downloadUrl: item.data().image.downloadUrl
        }
      }
      resJsonArray.push(docData);
    });
    resJsonArray.sort((a,b) => a.orderList - b.orderList);
    res.status(200).json(resJsonArray);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default GetMenuList;
