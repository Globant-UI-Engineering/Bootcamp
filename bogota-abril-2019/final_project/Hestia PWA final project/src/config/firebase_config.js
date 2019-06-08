import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCAELG55wLADgtT6JZWVHMHp5g1p5sbt60",
    authDomain: "hestia-f0acd.firebaseapp.com",
    databaseURL: "https://hestia-f0acd.firebaseio.com",
    projectId: "hestia-f0acd",
    storageBucket: "hestia-f0acd.appspot.com",
    messagingSenderId: "113317074936",
    appId: "1:113317074936:web:516e7ea23969e711"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;