import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwPJZpAe9PjTAqXnVTv_vwpYZ1zlv6rKY",
  authDomain: "e-clone-1358d.firebaseapp.com",
  projectId: "e-clone-1358d",
  storageBucket: "e-clone-1358d.appspot.com",
  messagingSenderId: "864819325875",
  appId: "1:864819325875:web:a0ad617a27d42c66b039c6",
  measurementId: "G-R2Z7VLENB9"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db , auth};