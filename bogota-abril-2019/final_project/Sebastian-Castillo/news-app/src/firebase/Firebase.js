import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBvxkPHLa0POY9GgmuIcxYKM8E3IrBBZZY',
  authDomain: 'news-poject.firebaseapp.com',
  databaseURL: 'https://news-poject.firebaseio.com',
  projectId: 'news-poject',
  storageBucket: 'news-poject.appspot.com',
  messagingSenderId: '221080820783',
  appId: '1:221080820783:web:dfd17022efedb390',
};

const appFirebase = firebase.initializeApp(firebaseConfig);

export default appFirebase;
