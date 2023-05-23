import { initializeApp } from "firebase/app";
//Using getFirestore from lite library will not work with onSnapshot.
// You are importing getFirestore from lite version:
import { getFirestore } from "firebase/firestore";
const NODE_ENV = process.env.NODE_ENV;
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(process);
const key = process.env.REACT_APP_FIREBASE_KEY;
const firebaseConfig = {
  apiKey: `${key}`,
  authDomain: "twitter-clone-1c808.firebaseapp.com",
  projectId: "twitter-clone-1c808",
  storageBucket: "twitter-clone-1c808.appspot.com",
  messagingSenderId: "981614807201",
  appId: "1:981614807201:web:c902fc2f103fb5710708e0",
  measurementId: "G-WFX3H408KG",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
