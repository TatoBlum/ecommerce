import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCDfTu4fGBy7y_8ZAAvDJxSPg_Grxeq0sU",
    authDomain: "e-commer-coder.firebaseapp.com",
    databaseURL: "https://e-commer-coder.firebaseio.com",
    projectId: "e-commer-coder",
    storageBucket: "e-commer-coder.appspot.com",
    messagingSenderId: "728386645300",
    appId: "1:728386645300:web:c048a95f3e124057f30961",
    measurementId: "G-8FCM9NSSCJ"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}

