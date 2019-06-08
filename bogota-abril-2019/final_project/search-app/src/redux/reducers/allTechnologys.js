import { type as updateAllTechnologys } from '../actions/updateAllTechnologys';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case updateAllTechnologys: {
            return payload;
        }

        default:
            return state;
    }
}

export default reducer;