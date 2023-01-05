import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./index.js";

const auth = getAuth(app);
const signUser = () =>{
    const user = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        console.log(userCredential);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

}   

export { signUser }

