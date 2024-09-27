import { db } from "../config/firebase";


export const addLocation = async (data) => 
{
try {
        const response = await db.collection("region").doc(data.id).set(data);
        return response;
} catch (error) {
        console.log(error);
        return error;
}
};


export const getAllLocation = async () => {
        try {
                const response = await db.collection("region").get();
                const data = response.docs.map((doc) => doc.data());
                return data;
        } catch (error) {
                console.log(error);
                return error;
        }
}