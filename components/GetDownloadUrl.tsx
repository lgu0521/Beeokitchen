import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebase from '../service/firebase';

const GetMultiDownloadUrl = async (FileList: File[]): Promise<string[]> => {
    var downloadUrls = [] as string[];
    try {
        const firestorage: FirebaseStorage = getStorage(firebase, "gs://beeokitchen-env.appspot.com");
        const downloadUrlPromise = Array.from(FileList).map(async (file, index) => {
            var refStorage = ref(firestorage, '/store/' + file.name);
            var uploadTask = await uploadBytes(refStorage, file);
            return await getDownloadURL(refStorage);
        });

        downloadUrls = await Promise.all(downloadUrlPromise.map(async (item) => {
            const itemUrl = await item;
            return itemUrl;
        }));
    } catch (e) {
        console.log(e);
    }

    return downloadUrls;
};

const GetSingleDownloadUrl = async (File: File): Promise<string> => {
    var downloadUrl: string = "";
    try {
        const firestorage: FirebaseStorage = getStorage(firebase, "gs://beeokitchen-env.appspot.com");
        var refStorage = ref(firestorage, '/store/' + File.name);
        var uploadTask = await uploadBytes(refStorage, File);
        const downloadUrlPromise = await getDownloadURL(refStorage);
        downloadUrl = await downloadUrlPromise;
    } catch (e) {
        console.log(e);
    }

    return downloadUrl;
};

export { GetMultiDownloadUrl, GetSingleDownloadUrl };