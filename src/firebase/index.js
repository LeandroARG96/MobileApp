// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf5hFJU37IxuD_C4ZP_kMiXahTGmx_Lho",
  authDomain: "mobileapp-25.firebaseapp.com",
  projectId: "mobileapp-25",
  storageBucket: "mobileapp-25.appspot.com",
  messagingSenderId: "321009512328",
  appId: "1:321009512328:web:46a1ef0002b93e5688d43d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };