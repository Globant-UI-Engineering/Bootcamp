const defaultState = {
    loggedIn: false,
    token: '',
};

const login = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                loggedIn: true,
                token: action.token,
            };
        case "LOG_OUT":
            return Object.assign({}, defaultState);
        default:
            return state;

    }
};

export default login;