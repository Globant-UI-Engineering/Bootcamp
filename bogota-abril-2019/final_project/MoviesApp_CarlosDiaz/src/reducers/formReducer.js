import { VALIDATE_FORM, NO_RESULTS, ERROR_MESSAGE } from '../actions/type';

//cada reducer tiene su propio state
const initialState = {
    error:false,
    noresults:false,
    errorMsg:''
}

export default function (state=initialState, action){
    switch (action.type){
        case VALIDATE_FORM:
        return{
            error:action.payload
        }
        case NO_RESULTS:
            return{
                noresults:action.payload
            }
        case ERROR_MESSAGE:
            return{
                errorMsg: action.payload
            }
        default:
        return state
    }
}