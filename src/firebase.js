// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEYGc6G9VEylt4D99IPfyC1o3soclZux8",
  authDomain: "chat-3732c.firebaseapp.com",
  projectId: "chat-3732c",
  storageBucket: "chat-3732c.appspot.com",
  messagingSenderId: "736559324421",
  appId: "1:736559324421:web:c398274386153e75c06b6c",
  measurementId: "G-PMVVFK82N1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
