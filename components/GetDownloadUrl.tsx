import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebase from '../service/FirebaseConfig';
import { ImageBlock } from '../dto/image-create.dto'

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

const GetSingleDownloadUrl = async (ImageFile: File[]): Promise<ImageBlock> => {
    var imageData = {} as ImageBlock;
    console.log(ImageFile);
    try {
        const firestorage: FirebaseStorage = getStorage(firebase, process.env.NEXT_PUBLIC_FIREBASE_DATA_BASEURL);
        const refStorage = ref(firestorage, '/store/' + ImageFile[0].name);
        await uploadBytes(refStorage, ImageFile[0]);
        const downloadUrlPromise = await getDownloadURL(refStorage);

        imageData = {
            storageRef: refStorage.fullPath,
            downloadUrl: await downloadUrlPromise
        }

    } catch (e) {
        console.log(e);
    }

    return imageData;
};

export { GetMultiDownloadUrl, GetSingleDownloadUrl };