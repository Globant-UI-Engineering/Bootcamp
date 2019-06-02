import { userActionTypes } from './actionTypes';

export const fetchUser = (user) => {
    return {
        type: userActionTypes.fetchUserInfo,
        payload:  user
    }
}

export const setUserInfo = (accessToken) => {
    return {
        type: userActionTypes.fetchUserInfo,
        payload:  accessToken
    }
}

