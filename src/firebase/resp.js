import { app } from "./index.js";
import { collection, query, getDocs, getFirestore, addDoc, onSnapshot } from "firebase/firestore";
import respTOcomments from '../store/respTOcomments.js'

//creo una base de datos para mi app
const db = getFirestore(app);

//agrego un comentario a la coleccion comments y le paso el comentario
const addResp = (resp) => {
    addDoc(collection(db,"resp"), resp)
}

//devuelve en tiempo real lo que tenga guardada la base de datos en el campo comments
onSnapshot(collection(db,"resp"), (snapshot) =>{
    respTOcomments.value = []
    snapshot.forEach(doc => {
        const resp = {
            name: doc.data().name,
            photo: doc.data().photo,
            id: doc.data().id,
            text: doc.data().text
        }
        respTOcomments.value.unshift(resp)
    })
    // respTOcomments.value.sort((a,b) => b.date - a.date)
})

export { addResp }