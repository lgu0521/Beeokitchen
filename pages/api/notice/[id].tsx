import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, doc, getDoc, where, getDocs } from "firebase/firestore";
import firebase from '../../../service/firebase';
import { NoticeDTO } from '../../../dto/notice-create.dto';

const NoticeList = async (req: NextApiRequest, res: NextApiResponse<NoticeDTO>) => {
    const { query: { id } } = req;
    const firestore = getFirestore(firebase);
    var resJsonData = {} as NoticeDTO;

    try {
        const querySnapshot = await doc(firestore, 'Notice', id as string);
        const getDocQeury = await getDoc(querySnapshot);
        const noticeData = getDocQeury.data();
        if (noticeData) {
            resJsonData.title = noticeData.title;
            resJsonData.content = noticeData.content;
            resJsonData.datetime = noticeData.datetime;
            res.status(200).json(resJsonData);
        }

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export default NoticeList;
