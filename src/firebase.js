import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAFXwkLQC6BeTM1XE4Rec74ySiwWOKayqc",
    authDomain: "react-connect.firebaseapp.com",
    databaseURL: "https://react-connect.firebaseio.com",
    projectId: "react-connect",
    storageBucket: "react-connect.appspot.com",
    messagingSenderId: "1030729427315",
    appId: "1:1030729427315:web:cbb2fff289be4c004ffd06",
    measurementId: "G-RFJ9XRPW42"
  };

  firebase.initializeApp(firebaseConfig);
  //export const databaseRef = firebase.database().ref();
  export const defaultAuth = firebase.auth();
  export const  firebaseStore = firebase.firestore();
  