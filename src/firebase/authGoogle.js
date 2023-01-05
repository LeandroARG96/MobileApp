import { app } from "./index.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import profileStore from "../store/profile.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const loginWithGoogle = async () => {
    await signInWithPopup(auth, provider)
        .then(result => {
            profileStore.user = result.user
            console.log(profileStore.user);
        })
        .catch( error => console.warn('error',error));
}

function logOut(){
    signOut(auth)
    .then(() => profileStore.user = null)
    .catch(() => console.warn('error with log out'));
}

export { loginWithGoogle, logOut }