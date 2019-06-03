import { tokenActTypes } from './actionTypes';
export const setToken = (authToken, refreshtoken) => {
    return {
        type: tokenActTypes.setToken,
        authToken,
        refreshtoken
    }
}