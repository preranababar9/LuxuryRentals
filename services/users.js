import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
 
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";

export const signInWithFirebase = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const loginWithFirebase = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addUser = async (data) => {
  try {
    const response = await db.collection("users").doc(data.id).set(data);
    return response;
  } catch (error) {
    console.log(error);
    return true;
  }
};
