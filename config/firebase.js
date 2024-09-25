// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore";   //  the Firestore database service
import "firebase/compat/storage";     //  Firebase's storage service for file uploads
import { getAuth } from "firebase/auth";     //  Firebase's authentication service 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdf7l5oorevTHgCKg7vSOZrGBTl9h5vCc",
  authDomain: "rental-villas.firebaseapp.com",
  projectId: "rental-villas",
  storageBucket: "rental-villas.appspot.com",
  messagingSenderId: "720225717298",
  appId: "1:720225717298:web:52949ce3e55547575c002b"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

 export const db = firebase.firestore();
 export const storage = firebase.storage();
 export const auth = getAuth();








