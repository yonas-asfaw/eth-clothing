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

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


