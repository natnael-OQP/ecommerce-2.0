import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlR-sSzFsPMBwQX7ovV0LnvyUERJzGSnA",
    authDomain: "ecommerce-2-cb758.firebaseapp.com",
    projectId: "ecommerce-2-cb758",
    storageBucket: "ecommerce-2-cb758.appspot.com",
    messagingSenderId: "1065008691486",
    appId: "1:1065008691486:web:a61de2eb35733ea37a310f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider()