// import firebasedb from "./firebasedb";
// import app from "./firebase";
import { getFirestore } from "firebase/firestore";
import { app } from "./firebase";

const fireStore = getFirestore(app);
export default fireStore;
