import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAR6VEVkxgqtNF4OIFI-0pgsiALrnIHVDc",
  authDomain: "resume-me-3bcdd.firebaseapp.com",
  projectId: "resume-me-3bcdd",
  storageBucket: "resume-me-3bcdd.appspot.com",
  messagingSenderId: "459335224212",
  appId: "1:459335224212:web:bc393660b351cefd79dd81",
  measurementId: "G-Y5YYRBS9PN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);


