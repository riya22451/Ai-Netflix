// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDQVnad1cYO1aswhZDTb8PTMWwviQBCHo",
  authDomain: "netflix-12d67.firebaseapp.com",
  projectId: "netflix-12d67",
  storageBucket: "netflix-12d67.firebasestorage.app",
  messagingSenderId: "336654759707",
  appId: "1:336654759707:web:8ec66061950045fe9905be",
  measurementId: "G-588HZ52LTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();