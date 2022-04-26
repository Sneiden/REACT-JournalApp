import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD4VytzRfMUAWogcKBeRFqjC9tO9z5oVyM",
    authDomain: "react-app-curso-25010.firebaseapp.com",
    projectId: "react-app-curso-25010",
    storageBucket: "react-app-curso-25010.appspot.com",
    messagingSenderId: "700256853870",
    appId: "1:700256853870:web:25694481929df729d1eb7f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}