// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATe322ThXgAU-jTRl6nJzkhX1XkIBj7rU",
  authDomain: "setanta-5fc1f.firebaseapp.com",
  projectId: "setanta-5fc1f",
  storageBucket: "setanta-5fc1f.appspot.com",
  messagingSenderId: "865581803444",
  appId: "1:865581803444:web:40f9bfd27b056a8383f4e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
