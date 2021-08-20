// const firebaseConfig = {
//   apiKey: "AIzaSyCHT2O4Bx6mqh3t4eHmJ301Vezz0-lFQH4",
//   authDomain: "todo-app-238e4.firebaseapp.com",
//   projectId: "todo-app-238e4",
//   storageBucket: "todo-app-238e4.appspot.com",
//   messagingSenderId: "615468677386",
//   appId: "1:615468677386:web:25d931af3dba7456d262f3",
//   measurementId: "G-23BL8P8FW2",
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCHT2O4Bx6mqh3t4eHmJ301Vezz0-lFQH4",
  authDomain: "todo-app-238e4.firebaseapp.com",
  projectId: "todo-app-238e4",
  storageBucket: "todo-app-238e4.appspot.com",
  messagingSenderId: "615468677386",
  appId: "1:615468677386:web:25d931af3dba7456d262f3",
  measurementId: "G-23BL8P8FW2",
});

const db = firebaseApp.firestore();

export default db;
