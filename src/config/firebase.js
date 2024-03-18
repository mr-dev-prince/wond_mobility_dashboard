import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore}  from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD1qTL2TfAFUgf4fGsmW-lV8MN4ksgsXZ8",
  authDomain: "wond-3f902.firebaseapp.com",
  projectId: "wond-3f902",
  storageBucket: "wond-3f902.appspot.com",
  messagingSenderId: "52199076718",
  appId: "1:52199076718:web:02228e239a5d71e685077f",
  measurementId: "G-49ZJWWX3BS"
};
const app = initializeApp(firebaseConfig);
export const getRealtimeDb = getDatabase(app)
export const db = getFirestore(app);