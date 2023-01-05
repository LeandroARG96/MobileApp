import { app } from "./index.js";
import { collection, query, getDocs, getFirestore, addDoc, onSnapshot } from "firebase/firestore";
import comments from '../store/comments.js'

//creo una base de datos para mi app
const db = getFirestore(app);

//agrego un comentario a la coleccion comments y le paso el comentario
const addComment = (comment) => {
    addDoc(collection(db,"comments"), comment)
}

//devuelve en tiempo real lo que tenga guardada la base de datos en el campo comments
onSnapshot(collection(db,"comments"), (snapshot) =>{
    comments.value = []
    snapshot.forEach(doc => {
        const comment = {
            id: doc.id,
            date: doc.data().date,
            name: doc.data().name,
            photo: doc.data().photo,
            post: doc.data().post
        }
        comments.value.push(comment)
    })
    comments.value.sort((a,b) => b.date - a.date)
})

export { addComment }