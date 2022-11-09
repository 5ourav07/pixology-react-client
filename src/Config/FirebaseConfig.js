// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FirebaseConfig = {
    apiKey: "AIzaSyBt4BnrpSonH1Vaw6fxezCzWzrXqvqzbBE",
    authDomain: "pixology-firebase.firebaseapp.com",
    projectId: "pixology-firebase",
    storageBucket: "pixology-firebase.appspot.com",
    messagingSenderId: "699790958826",
    appId: "1:699790958826:web:30fd928daee3be8e92f793"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
export default app;