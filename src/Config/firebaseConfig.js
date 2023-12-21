
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBweMfKiRnhoRuZkev46jw6EcJrjNxEA6Q",
  authDomain: "strains-68efc.firebaseapp.com",
  projectId: "strains-68efc",
  storageBucket: "strains-68efc.appspot.com",
  messagingSenderId: "512505926799",
  appId: "1:512505926799:web:20dd7a30058199cb000cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);