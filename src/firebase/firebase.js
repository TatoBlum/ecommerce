import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authoDomain,
    databaseURL: process.env.databaseUrl,
    projectId: "e-commer-coder",
    storageBucket: process.env.storageBucket,
    messagingSenderId:process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}

