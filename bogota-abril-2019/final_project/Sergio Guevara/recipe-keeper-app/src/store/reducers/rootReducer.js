import recipeReducer from "./recipeReducer";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
    recipe: recipeReducer,
    firestore: firestoreReducer
});

export default rootReducer;
