// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fluentflow-71c80.firebaseapp.com",
  projectId: "fluentflow-71c80",
  storageBucket: "fluentflow-71c80.appspot.com",
  messagingSenderId: "101512628501",
  appId: "1:101512628501:web:ff0bbe4a75c46472b6411c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
