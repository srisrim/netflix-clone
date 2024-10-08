// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4h3MdjQLXWoFngWkVN7bMnrle4y-aACM",
  authDomain: "shows-now.firebaseapp.com",
  projectId: "shows-now",
  storageBucket: "shows-now.appspot.com",
  messagingSenderId: "54133175550",
  appId: "1:54133175550:web:324efc1e9d1574746221af",
  measurementId: "G-4BX42MNFXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();