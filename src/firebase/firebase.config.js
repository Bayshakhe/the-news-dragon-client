// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJKCc-Snae0_8BMkW3AkldJ82hnoS45A8",
  authDomain: "the-news-dragon-client-6d290.firebaseapp.com",
  projectId: "the-news-dragon-client-6d290",
  storageBucket: "the-news-dragon-client-6d290.appspot.com",
  messagingSenderId: "1068871034537",
  appId: "1:1068871034537:web:1849f4e84aa8b647e82bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;