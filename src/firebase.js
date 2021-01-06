import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAUqqxJmmyq7fIzvF5HWMmvQGayy4sqUZc",
        authDomain: "fb-messenger-clone-ea335.firebaseapp.com",
        databaseURL: "https://fb-messenger-clone-ea335-default-rtdb.firebaseio.com",
        projectId: "fb-messenger-clone-ea335",
        storageBucket: "fb-messenger-clone-ea335.appspot.com",
        messagingSenderId: "748959551309",
        appId: "1:748959551309:web:ec0d42252f5ea67a2d7104"
});

const db = firebaseApp.firestore();

export default db;