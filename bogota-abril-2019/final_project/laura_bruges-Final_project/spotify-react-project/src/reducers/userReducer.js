import { userActionTypes } from '../actions/actionTypes';

const initialState = {
    user: {
        country: '',
        display_name: '',
        external_urls: {
            spotify: ''
        },
        product: ''
    }
}
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case userActionTypes.fetchUserInfoSuccess:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;