const defaultState = {
    fetched: false,
    furnidata: {}
};

const furni = (state = defaultState, action) => {
    switch (action.type) {
        case 'FURNIDATA_SET':
            return {
                fetched: true,
                furnidata: action.furnidata,
            };
        default:
            return state;
    }
};

export default furni;