import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAe7tWF6xKiAw25Gg8acyBm-PCjd_K7H-Q",
    authDomain: "crown-db-543cc.firebaseapp.com",
    projectId: "crown-db-543cc",
    storageBucket: "crown-db-543cc.appspot.com",
    messagingSenderId: "372314911595",
    appId: "1:372314911595:web:80a57a506f77559e7b122e"
};

export const creatUserProfileDocument = async (userAuth) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const SnapShot = await userRef.get();
    console.log(SnapShot);
    if (!SnapShot.exists) {
        const { displayName, email
        } = userAuth;
        const createdAt = new Date();

        console.log(userAuth);
        try {
            userRef.set({
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


