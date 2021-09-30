// import { initializeApp } from "firebase/app";
// import 'firebase/storage'
// import 'firebase/firestore'
// import * as firebase from 'firebase/app'

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKgeN51NZTIR7BGsUCFWJc0ed2zAE_LlQ",
  authDomain: "instagram-lite-8c4f5.firebaseapp.com",
  projectId: "instagram-lite-8c4f5",
  storageBucket: "instagram-lite-8c4f5.appspot.com",
  messagingSenderId: "41176918996",
  appId: "1:41176918996:web:623e50b61156130aba8441"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const projectStorage = firebase.storage()
// const projectFirestore  = firebase.firestore()

// export default {projectFirestore, projectStorage}

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };