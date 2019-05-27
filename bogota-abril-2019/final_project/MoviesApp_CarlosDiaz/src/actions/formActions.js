import { VALIDATE_FORM, NO_RESULTS, ERROR_MESSAGE } from './type';

export const validateForm = (error) =>{
    return {
        type: VALIDATE_FORM,
        payload: error
    }
}

export const noResults = (noresults) =>{
    return {
        type: NO_RESULTS,
        payload: noresults
    }
}

export const setErrorMsg = (errorMsg)=>{
    return {
        type: ERROR_MESSAGE,
        payload: errorMsg
    }
}