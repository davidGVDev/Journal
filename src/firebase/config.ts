// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlCrpm8mB_G0rOaY88q5gk1dW5-EuDlU4",
  authDomain: "journal-app-4d1d2.firebaseapp.com",
  projectId: "journal-app-4d1d2",
  storageBucket: "journal-app-4d1d2.firebasestorage.app",
  messagingSenderId: "132965646456",
  appId: "1:132965646456:web:696de13301f0c4374fed8d"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp)
