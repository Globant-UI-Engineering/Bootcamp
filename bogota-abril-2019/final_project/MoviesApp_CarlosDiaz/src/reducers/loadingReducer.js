import { IS_LOADING } from '../actions/type';

//cada reducer tiene su propio state
const initialState = {
    loading:false
}

export default function (state=initialState, action){
    switch (action.type){
        case IS_LOADING:
        return{
            loading:action.payload
        }
        default:
        return state
    }
}