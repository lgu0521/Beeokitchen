import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { NoticeListDTO } from '../../../dto/notice-create.dto';

const NoticeList = async (req: NextApiRequest, res: NextApiResponse<Array<NoticeListDTO>>) => {
  const firestore = getFirestore(firebase);
  var resJsonArray = [] as NoticeListDTO[];

  try {
    const querySnapshot = await getDocs(collection(firestore, 'Notice'));
    querySnapshot.forEach((item) => {
      const docData: NoticeListDTO = {
        id: item.id,
        title: item.data().title,
        content: item.data().content,
        datetime: item.data().datetime,
      }
      resJsonArray.push(docData);
    });

    res.status(200).json(resJsonArray);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export default NoticeList;
