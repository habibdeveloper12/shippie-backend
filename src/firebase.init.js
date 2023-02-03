// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJrwWF6e2a7Otb1OPYTZmzCDRf8foH3G4",
  authDomain: "shipping-29268.firebaseapp.com",
  projectId: "shipping-29268",
  storageBucket: "shipping-29268.appspot.com",
  messagingSenderId: "958802498566",
  appId: "1:958802498566:web:3fc283ca73c85962145f87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;