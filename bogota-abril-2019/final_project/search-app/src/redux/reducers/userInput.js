import { type as updateUserInput } from '../actions/updateUserInput';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case updateUserInput: {
            return payload;
        }

        default:
            return state;
    }
}

export default reducer;