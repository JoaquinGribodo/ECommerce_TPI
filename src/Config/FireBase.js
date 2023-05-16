import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtlLRQfLmntqIdXGHWtC1ELLeknJ1nKoc",
  authDomain: "ecommerce-tpi-firebase.firebaseapp.com",
  projectId: "ecommerce-tpi-firebase",
  storageBucket: "ecommerce-tpi-firebase.appspot.com",
  messagingSenderId: "132082470277",
  appId: "1:132082470277:web:003904dadacc74b9ee08ec",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
