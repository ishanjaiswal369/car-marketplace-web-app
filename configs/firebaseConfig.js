// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-5e521.firebaseapp.com",
  projectId: "car-marketplace-5e521",
  storageBucket: "car-marketplace-5e521.appspot.com",
  messagingSenderId: "750216615085",
  appId: "1:750216615085:web:9498719cae863bf3f56224",
  measurementId: "G-EVP3WTWMRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);