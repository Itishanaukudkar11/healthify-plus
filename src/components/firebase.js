// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZO_d6FJpj6UtuZmkm8r30kkKieVua5U8",
  authDomain: "healthify-plus-1f12b.firebaseapp.com",
  projectId: "healthify-plus-1f12b",
  storageBucket: "healthify-plus-1f12b.firebasestorage.app",
  messagingSenderId: "828291073604",
  appId: "1:828291073604:web:09e54bf4e1a0655dc89e11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;