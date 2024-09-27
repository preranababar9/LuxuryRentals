import { storage } from "../config/firebase";




export const addFile = async (file, folderPath, fileName) => {
        const storageRef = storage.ref(); //This creates a reference to the root of Firebase Storage. From here, you can navigate to specific folders or files.

        const fileRef = storageRef.child(`${folderPath}/${fileName} `); //storageRef.child() creates a reference to a specific file inside the given folderPath, with the name fileName.
        try {
          const snapshot = await fileRef.put(file); //fileRef.put(file) uploads the file to Firebase Storage at the specified path.
          const downloadURL = await snapshot.ref.getDownloadURL();
          //After the file is uploaded, snapshot.ref.getDownloadURL() retrieves the public URL that can be used to access or download the file from Firebase Storage.

          return downloadURL;
        } catch (error) {
          return error;
        }
      };
