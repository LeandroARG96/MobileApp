import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { app } from '../firebase/index.js'

const db = getFirestore(app);
const addUser1 = (user) => {
    addDoc(collection(db, "usuarios"), user);
}

export { addUser1 }