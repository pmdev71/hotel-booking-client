import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// init firebase Authentication
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

