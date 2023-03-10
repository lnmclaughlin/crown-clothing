import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmmWda-16SwBEYTZG_ZMJq6ml87pWKpJc",
  authDomain: "crwn-db-77e5d.firebaseapp.com",
  projectId: "crwn-db-77e5d",
  storageBucket: "crwn-db-77e5d.appspot.com",
  messagingSenderId: "549526311063",
  appId: "1:549526311063:web:55a7e06b846a92866199d2",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
