import { userActionTypes } from '../actions/actionTypes';

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case userActionTypes.fetchUserInfo:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}

export default userReducer;