// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEyGwq5ep0zy9j-cKEkxabPNkrQya5b8",
  authDomain: "recipe-app-cb403.firebaseapp.com",
  databaseURL: "https://recipe-app-cb403-default-rtdb.firebaseio.com",
  projectId: "recipe-app-cb403",
  storageBucket: "recipe-app-cb403.firebasestorage.app",
  messagingSenderId: "1035889537846",
  appId: "1:1035889537846:web:5d79570843c37b238e3997",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
