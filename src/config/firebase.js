import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCpgKprDFwTWloNfzto18NnZWv-nk2XBls",
    authDomain: "cupid-login.firebaseapp.com",
    projectId: "cupid-login",
    storageBucket: "cupid-login.appspot.com",
    messagingSenderId: "910450064131",
    appId: "1:910450064131:web:d6c70dd4c599805c624736",
    measurementId: "G-B6Z54M1S5M"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);