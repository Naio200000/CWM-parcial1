// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsFUobq4669r59jH9pYw8LLG5P45OR4Yk",
  authDomain: "dv-cwm-alsinet.firebaseapp.com",
  projectId: "dv-cwm-alsinet",
  storageBucket: "dv-cwm-alsinet.appspot.com",
  messagingSenderId: "115401855389",
  appId: "1:115401855389:web:8e2e4a938c4a7088301f74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);