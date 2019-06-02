import { tokenActTypes } from './actionTypes';
export const setToken = (authToken, refreshtoken) => {
    console.log('AUTH*******', authToken)
    console.log('REF*******', refreshtoken)
    return {
        type: tokenActTypes.setToken,
        authToken,
        refreshtoken
    }
}