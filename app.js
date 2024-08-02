// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8dJ9Ks90GE2BuTRdbgqqAVqtyG-zzHjU",
  authDomain: "angularfire-98e6b.firebaseapp.com",
  projectId: "angularfire-98e6b",
  storageBucket: "angularfire-98e6b.appspot.com",
  messagingSenderId: "320595377851",
  appId: "1:320595377851:web:32fe4393a9520bd88cf39e",
  measurementId: "G-YM52F5VBR6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
