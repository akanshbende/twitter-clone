import { initializeApp } from "firebase/app";
//Using getFirestore from lite library will not work with onSnapshot.
// You are importing getFirestore from lite version:
import { getFirestore } from "firebase/firestore";
const NODE_ENV = process.env.NODE_ENV;
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// console.log(process);
const key = process.env.REACT_APP_FIREBASE_KEY;
const firebaseConfig = {
  apiKey: `${key}`,
  authDomain: "twitter-clone-76116.firebaseapp.com",
  projectId: "twitter-clone-76116",
  storageBucket: "twitter-clone-76116.appspot.com",
  messagingSenderId: "1021680684281",
  appId: "1:1021680684281:web:e312e77e200232a1c52628",
  measurementId: "G-WT74S1822X",
};
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export default db;
