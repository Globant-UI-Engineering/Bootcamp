import { combineReducers } from 'redux';
import moviesReducer from '../reducers/moviesReducer';
import formReducer from '../reducers/formReducer';
import loadingReducer from '../reducers/loadingReducer';
import favoritesReducer from '../reducers/favoritesReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';


export default combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    movies: moviesReducer,
    error: formReducer,
    loading: loadingReducer,
    inFavorites: favoritesReducer
});