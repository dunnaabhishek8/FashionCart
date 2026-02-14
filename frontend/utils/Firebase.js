import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-225ad.firebaseapp.com",
  projectId: "loginonecart-225ad",
  storageBucket: "loginonecart-225ad.firebasestorage.app",
  messagingSenderId: "86320510183",
  appId: "1:86320510183:web:49cb17aa94e8de8fb45e42"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

