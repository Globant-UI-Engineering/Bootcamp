import { createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

//Reducers
import notifyReducer from './reducers/notifyReducer';

const firebaseConfig = {
    apiKey: "AIzaSyD4V2qAkLrkKhHzLJaLUavJx2NLFhobvlc",
    authDomain: "react-netflix-713d2.firebaseapp.com",
    databaseURL: "https://react-netflix-713d2.firebaseio.com",
    projectId: "react-netflix-713d2",
    storageBucket: "react-netflix-713d2.appspot.com",
    messagingSenderId: "439481666572"
};

//react-redux-firebase-config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//Init firebase instance
firebase.initializeApp(firebaseConfig);

 const firestore = firebase.firestore();
 const setting = {timestampsInSnapshots: true};
    firestore.settings(setting);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer, // <- needed if using firestore
    notify: notifyReducer
});

//Create initial state
const initialState = {};

//Create Store

const store = createStoreWithFirebase(rootReducer,initialState,compose(
    reactReduxFirebase(firebase)
    //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;