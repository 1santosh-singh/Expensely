import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyChD_tMvWnsFzU_58tOcTtU8Co5vBMD6U0",
  authDomain: "expensely-621a8.firebaseapp.com",
  projectId: "expensely-621a8",
  storageBucket: "expensely-621a8.firebasestorage.app",
  messagingSenderId: "172076868863",
  appId: "1:172076868863:web:48f01c6e1180fbac1718ca",
  measurementId: "G-3VYJ12K72R" ,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
