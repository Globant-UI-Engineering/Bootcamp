import { userActionTypes } from '../actions/actionTypes';

const initialState = {
    user:{}
}
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case userActionTypes.fetchUserInfo:
            return {
                ...state,
                user: action.user
            };
        case userActionTypes.fetchUserInfoSuccess:
            return Object.assign({},state,{
                ...state,
                user: action.payload
            })
        default:
            return state;
    }
}

export default userReducer;