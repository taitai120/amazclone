import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6iaRtb4lHh0M56i45VsDh9095edwttUs",
  authDomain: "taitai-amaz-clone.firebaseapp.com",
  projectId: "taitai-amaz-clone",
  storageBucket: "taitai-amaz-clone.appspot.com",
  messagingSenderId: "763854726699",
  appId: "1:763854726699:web:e09181d642e207edcf6c6e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
