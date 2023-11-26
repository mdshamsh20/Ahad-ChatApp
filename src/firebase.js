import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZl8i666TjogN09KKT2JBaTIbWqpaiDdE",
  authDomain: "ahad-edcb0.firebaseapp.com",
  projectId: "ahad-edcb0",
  storageBucket: "ahad-edcb0.appspot.com",
  messagingSenderId: "87232791797",
  appId: "1:87232791797:web:cde8b867f2f50eb21df1bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

