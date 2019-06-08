const defaultState = {
    fetched: false,
    username: '',
    motto: '',
    look: '',
};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_SET_DATA':
            return {
                fetched: true,
                username: action.username,
                motto: action.motto,
                look: action.look,
            };
        case "USER_DISPOSE":
            return Object.assign({}, defaultState);
        default:
            return state;
    }
};

export default user;