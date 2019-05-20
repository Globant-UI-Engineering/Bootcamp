const defaultState = {
    loggedIn: false,
    username: '',
    motto: '',
    look: '',
    token: '',
};

const login = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                loggedIn: true,
                username: action.username,
                motto: action.motto,
                look: action.look,
                token: action.token,
            };
        case "LOG_OUT":
            return Object.assign({}, defaultState);
        default:
            return state;

    }
};

export default login;