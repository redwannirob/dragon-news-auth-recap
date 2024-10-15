// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEIU7ur_mffqUvf8uTW-FrSclOJqRqypc",
  authDomain: "react-dragon-news-auth-9becb.firebaseapp.com",
  projectId: "react-dragon-news-auth-9becb",
  storageBucket: "react-dragon-news-auth-9becb.appspot.com",
  messagingSenderId: "853649213633",
  appId: "1:853649213633:web:475d96b81758d021d3ec40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;