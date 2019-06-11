import { tokenActTypes } from '../actions/actionTypes'
export const tokenReducer = (state = {}, action) => {
    switch(action.type) {
        case tokenActTypes.setToken:
            return {
                ...state,
                authToken: action.authToken,
                refreshToken: action.refreshToken
            };
        default:
            return state;
    }
}

export default tokenReducer;