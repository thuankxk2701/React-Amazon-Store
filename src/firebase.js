import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCSdEYkcWLxXAISrwrQHZaGDuCPMmM23h4",
  authDomain: "challenge-6f867.firebaseapp.com",
  projectId: "challenge-6f867",
  storageBucket: "challenge-6f867.appspot.com",
  messagingSenderId: "1060135125980",
  appId: "1:1060135125980:web:4ac4cc52fc9f5f26dd0519",
  measurementId: "G-GM3VJE8EYP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
