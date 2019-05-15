import { VALIDATE_FORM } from '../actions/type';
//cada reducer tiene su propio state
const initialState = {
    error:false
}

export default function (state=initialState, action){
    switch (action.type){
        case VALIDATE_FORM:
        return{
            error:action.payload
        }
        default:
        return state
    }
}