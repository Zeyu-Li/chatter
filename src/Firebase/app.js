import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA1GGbvuriyk8-cii3oQJquDEFLpvj5dYU",
  authDomain: "chatter-334a3.firebaseapp.com",
  projectId: "chatter-334a3",
  storageBucket: "chatter-334a3.appspot.com",
  messagingSenderId: "459734418610",
  appId: "1:459734418610:web:72170fc8a40fde017375ab",
  measurementId: "G-V82FMJQT8M",
};

// init firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
