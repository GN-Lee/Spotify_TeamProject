// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDSOYCZNGYsBPe23zcD0wPbuKVoNdur2mY",
//   authDomain: "verdant-cable-380008.firebaseapp.com",
//   databaseURL:
//     "https://verdant-cable-380008-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "verdant-cable-380008",
//   storageBucket: "verdant-cable-380008.firebasestorage.app",
//   messagingSenderId: "453026078558",
//   appId: "1:453026078558:web:bcccd1f1d721127602b9cf",
//   measurementId: "G-PY5N67ZTD3",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);
// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }

// export { app, analytics, firestore };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqnKya_6FuoWWfuYKzo_ovcMlviE3PftY",
  authDomain: "test-a0749.firebaseapp.com",
  projectId: "test-a0749",
  storageBucket: "test-a0749.firebasestorage.app",
  messagingSenderId: "414252485231",
  appId: "1:414252485231:web:74095b4386f6f0d5229b9a",
  measurementId: "G-HQM5TLX896",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics, firestore };
