import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "aaaaaaaaaaaaaaaaaaaa",
  authDomain: "bbbbbbbbbbbbb",
  projectId: "ccccccccccccccc",
  storageBucket: "ddddddddddddd",
  messagingSenderId: "eeeeeeeeeeeeee",
  appId: "ffffffffffffffff",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
