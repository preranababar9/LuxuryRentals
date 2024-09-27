import { db } from "../config/firebase";
import { Firestore, collection } from "firebase/firestore";

export const addVilla = async (data) => {
        try {
                const response = await db.collection("AllVillas").doc(data.id).set(data);
                return response;
        } catch (error) {
                console.log(error);
                return error;
                
        }
};

export const getAllVilla = async () => {
        try {
                const response = await db.collection("AllVillas").get();
                const data = response.docs.map((doc) => doc.data());
                return data;
        } catch (error) {
             console.log(error);
                return error;
        }
};

export const getVillaById = async (id) => {
        try {
              const response =  await db.collection("AllVillas").doc(id).get();
              const data = response.data();
              return data; 
        } catch (error) {
                console.log(error);
                return error;
        }
};