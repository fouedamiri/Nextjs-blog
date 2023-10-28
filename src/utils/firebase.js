// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-558b5.firebaseapp.com",
  projectId: "blog-558b5",
  storageBucket: "blog-558b5.appspot.com",
  messagingSenderId: "1064011163521",
  appId: "1:1064011163521:web:260fbb8fced00a7a37ea80",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
