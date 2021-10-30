import firebase from '../service/firebase';
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth'

const IsUserWithLogin = async () => {
    const firebaseAuth = getAuth(firebase);
    var resData: boolean = false;

    await onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
            console.log(user.uid);
            resData = true;
        } else {
            console.log('why..');
            resData = false
        }
    });
    return resData;
};

export default IsUserWithLogin;