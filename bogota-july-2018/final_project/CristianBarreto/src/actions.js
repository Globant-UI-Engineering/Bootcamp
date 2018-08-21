// Posible actions to reducers
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants';

// Posible actions to change state in redux store

// Fetch data
export function getData() {
    return {
        type: FETCHING_DATA
    }
};
// Data succes
export function getDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        data,
    }
};
// Data failure
export function getDataFailure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
};
