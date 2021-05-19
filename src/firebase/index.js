import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBP8NHjSjmuP5oWNJaO76Lj2Ze0FNq8rXI",
    authDomain: "cyrtech-27a2b.firebaseapp.com",
    projectId: "cyrtech-27a2b",
    storageBucket: "cyrtech-27a2b.appspot.com",
    messagingSenderId: "902210955586",
    appId: "1:902210955586:web:acc2888b9a8aec874940db",
    measurementId: "G-K029DBFZGP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default db;