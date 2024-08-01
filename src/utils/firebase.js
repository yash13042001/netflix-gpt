// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMaDKFzDWUfJC32BUzShJp4FPTgSrxszA",
  authDomain: "netflixgpt-f6b7c.firebaseapp.com",
  projectId: "netflixgpt-f6b7c",
  storageBucket: "netflixgpt-f6b7c.appspot.com",
  messagingSenderId: "460622793535",
  appId: "1:460622793535:web:6f9adfce8062b9c194a18a",
  measurementId: "G-0R8SQ9JSLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();