import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

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
    const response = await db.collection("user").doc(data.id).set(data);
    return response;
  } catch (error) {
    console.log(error);
    return true;
  }
};
