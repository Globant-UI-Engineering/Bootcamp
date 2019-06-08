import { VALIDATE_FORM } from './type';

export const validateForm = (error) =>{
    return {
        type: VALIDATE_FORM,
        payload: error
    }
}