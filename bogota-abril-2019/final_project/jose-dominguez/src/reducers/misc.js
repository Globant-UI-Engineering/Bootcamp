const defaultState = {
    onlineCount: 0,
    fetched: false,
};

const misc = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_ONLINE_COUNT':
            return {
                onlineCount: action.count,
                fetched: true,
            }; 
        default:
            return state;

    }
};

export default misc;