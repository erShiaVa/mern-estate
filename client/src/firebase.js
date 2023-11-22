// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c0b73.firebaseapp.com",
  projectId: "mern-estate-c0b73",
  storageBucket: "mern-estate-c0b73.appspot.com",
  messagingSenderId: "1067115071147",
  appId: "1:1067115071147:web:ee58b7690131465d16d9ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);