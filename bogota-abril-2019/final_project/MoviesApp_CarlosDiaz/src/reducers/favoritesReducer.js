import { IS_IN_FAVORITES } from '../actions/type';

//cada reducer tiene su propio state
const initialState = {
    alreadyInFavorites:false
}

export default function (state=initialState, action){
    switch (action.type){
        case IS_IN_FAVORITES:
        return{
            alreadyInFavorites:action.payload
        }
        default:
        return state
    }
}