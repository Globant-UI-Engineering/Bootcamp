import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyChdrEsOqvOPO4D3QcM_BzAJ1sIv96AFwA",
  authDomain: "to-do-notes-d8d9f.firebaseapp.com",
  databaseURL: "https://to-do-notes-d8d9f.firebaseio.com",
  projectId: "to-do-notes-d8d9f",
  storageBucket: "to-do-notes-d8d9f.appspot.com",
  messagingSenderId: "1028794643316"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
