import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { StoreAllListDTO } from '../../../dto/store-create.dto';

const GetStoreList = async (req: NextApiRequest, res: NextApiResponse<Array<StoreAllListDTO>>) => {
  const firestore = getFirestore(firebase);
  var resJsonArray = [] as StoreAllListDTO[];
  try {
    const querySnapshot = await getDocs(collection(firestore, 'Store'));
    querySnapshot.forEach((item) => {
      const docData: StoreAllListDTO = {
        id: item.id,
        name: item.data().name,
        location: item.data().location,
        operation: item.data().operation,
        phonenumber: item.data().phonenumber,
        url: item.data().url[0]
      }
      resJsonArray.push(docData);
    });

    res.status(200).json(resJsonArray);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export default GetStoreList;
