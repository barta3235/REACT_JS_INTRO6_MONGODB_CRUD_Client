// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUuYAMMicLs3mPG_0fc7GAPHHzYw3d0A4",
  authDomain: "coffee-crud-mongodb.firebaseapp.com",
  projectId: "coffee-crud-mongodb",
  storageBucket: "coffee-crud-mongodb.appspot.com",
  messagingSenderId: "443771900293",
  appId: "1:443771900293:web:b745095fbc2c7b4f0234ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;