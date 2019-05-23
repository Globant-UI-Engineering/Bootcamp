import { createStore } from 'redux';

const userLocalStorage = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: {
        isAuthenticated: userLocalStorage ? userLocalStorage.isAuthenticated : false,
		username: userLocalStorage ? userLocalStorage.username : null,
		_id: userLocalStorage ? userLocalStorage._id : null
    },
    response: {
        description: null,
        success: null
    }
}

const reducer = (state = initialState, action) => {
    const newState = {...state};
    
    switch(action.type) {
        case "LOG_IN":
            newState.user.isAuthenticated = true;
            newState.user._id = action.response.user._id;
            newState.user.username = action.response.user.mail;
            newState.response.description = action.response.desc;
            newState.response.success = true;
            localStorage.setItem("user", JSON.stringify(newState.user));
            break;

        case "SIGN_UP":
            newState.response.description = action.response.desc;
            newState.response.success = true;
            break;

        case "SHOW_ERROR":
            newState.response.description = action.response.desc;
            newState.response.success = false;
            break;

        case "LOG_OUT":
            newState.user.isAuthenticated = false;
            newState.user._id = '';
            newState.user.username = '';
            localStorage.removeItem("user");
            break;

        default: 
            return newState; 
    }
    return newState;
}

export default createStore(reducer);
