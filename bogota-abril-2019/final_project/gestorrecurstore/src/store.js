import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import buscarUsuarioReducer from './reducers/buscarUsuarioReducer';

const firebaseConfig = {
    apiKey: "AIzaSyBdzy3JUdl7sSf-77HVQzkHynZn_ZuAqEI",
    authDomain: "recursosstore.firebaseapp.com",
    databaseURL: "https://recursosstore.firebaseio.com",
    projectId: "recursosstore",
    storageBucket: "recursosstore.appspot.com",
    messagingSenderId: "617731600721",
    appId: "1:617731600721:web:300f05873a420373"
}

firebase.initializeApp(firebaseConfig);

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    usuario: buscarUsuarioReducer
})


const initialState = {};

const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;