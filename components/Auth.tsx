import firebase from '../service/firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth'

const IsUserWithLogin = async () => {
    const firebaseAuth = getAuth(firebase);
    var resData: boolean = false;

    await onAuthStateChanged(firebaseAuth, user => {
        if (user) {
            console.log(user.uid);
            resData = true;
        } else {
            resData = false
        }
    });
    return resData;
};

export default IsUserWithLogin;