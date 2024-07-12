// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXFVefuvz7RlC3bFE0IpPzsm6ioPj0vq4",
  authDomain: "ai-travel-planner-ff3ef.firebaseapp.com",
  projectId: "ai-travel-planner-ff3ef",
  storageBucket: "ai-travel-planner-ff3ef.appspot.com",
  messagingSenderId: "564028147758",
  appId: "1:564028147758:web:ed9d380aace670ed55b7bf",
  measurementId: "G-2JFC6T256C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

