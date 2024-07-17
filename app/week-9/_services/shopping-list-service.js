import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const items = [];
    const itemsCollection = collection(db, "users", userId, "items");
    const q = query(itemsCollection);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    throw new Error("Could not retrieve items");
  }
};

export const addItem = async (userId, item) => {
  try {
    const itemsCollection = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    throw new Error("Could not add item");
  }
};
