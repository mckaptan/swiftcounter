import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config bilgileri (Firebase Console'dan aldık)
const firebaseConfig = {
  apiKey: "",
  authDomain: "swiftcounter-1dff8.firebaseapp.com",
  projectId: "swiftcounter-1dff8",
  storageBucket: "swiftcounter-1dff8.appspot.com",  // Düzeltildi
  messagingSenderId: "448095948424",
  appId: "1:448095948424:web:f8261add4ef92b1230193d",
};

// Firebase başlat
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new FacebookAuthProvider();
