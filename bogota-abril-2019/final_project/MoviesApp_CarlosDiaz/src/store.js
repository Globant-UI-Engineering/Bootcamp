import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import rootReducer from './reducers';

const initialState={};
const middleware = [thunk];

const  firebaseConfig = {
    apiKey: "AIzaSyBehZI2d8UA4gtWLTbPuKzI-aK1RBbr5vA",
    authDomain: "moviesapp-ce002.firebaseapp.com",
    databaseURL: "https://moviesapp-ce002.firebaseio.com",
    projectId: "moviesapp-ce002",
    storageBucket: "moviesapp-ce002.appspot.com",
    messagingSenderId: "598775380876",
    appId: "1:598775380876:web:3dbf7fad9fb7dc04"
  };

firebase.initializeApp(firebaseConfig);


const rrfConfig = {
    userProfile:'users',
    useFirestoreForProfile:true
}

const store = createStore(rootReducer, initialState, compose(
    reactReduxFirebase(firebase,rrfConfig),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase),
    applyMiddleware(...middleware),
/* Need React Dev Tools Extension
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
));

export default store;
