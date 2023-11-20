// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5lmgmpZKPru2dKejRlp7fdnjkobLNB18",
  authDomain: "db-shop-all.firebaseapp.com",
  projectId: "db-shop-all",
  storageBucket: "db-shop-all.appspot.com",
  messagingSenderId: "537176576606",
  appId: "1:537176576606:web:cb7451a1a0461cd5509acf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app;