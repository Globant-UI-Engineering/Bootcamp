// Posible actions to reducers
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';

// Store initial state
const initialState = {
    data: {},
    isFetching: false,
    error: false
};

// Initial State for the Redux Store
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                data: state.data,
                isFetching: true,
                error: false
            };

        case FETCHING_DATA_SUCCESS:
            return {
                data: action.data,
                isFetching: false,
                error: false

            };

        case FETCHING_DATA_FAILURE:
            return {
                data: state.data,
                isFetching: false,
                error: true
            };

        default:
            return state;
    }
}
