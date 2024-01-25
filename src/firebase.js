// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; // Corrected import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2cjIVmsAJWRv0TEgeDJQ1NRIIFc6waZ8",
  authDomain: "chatapp-9013a.firebaseapp.com",
  projectId: "chatapp-9013a",
  storageBucket: "chatapp-9013a.appspot.com",
  messagingSenderId: "78667673870",
  appId: "1:78667673870:web:fa6f23a69a3659d7ce675f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Corrected export