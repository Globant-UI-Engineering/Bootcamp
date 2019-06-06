 import firebase from "firebase/app"
 import "firebase/firestore"

 var firebaseConfig = {
    apiKey: "AIzaSyA1LJTx9F-P89R2qppE5wyTSJCLPuJF4Rg",
    authDomain: "recipe-app-872b7.firebaseapp.com",
    databaseURL: "https://recipe-app-872b7.firebaseio.com",
    projectId: "recipe-app-872b7",
    storageBucket: "recipe-app-872b7.appspot.com",
    messagingSenderId: "50684011424",
    appId: "1:50684011424:web:8097b774d8825b94"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
  