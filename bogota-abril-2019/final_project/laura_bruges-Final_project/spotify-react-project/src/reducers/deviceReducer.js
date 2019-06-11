import { deviceActionTypes } from '../actions/actionTypes';

const initialState = {
    devices: []
}
const deviceReducer = (state = initialState, action) => {
    switch(action.type) {
        case deviceActionTypes.fetchDeviceListSuccess:
            return {
                ...state,
                devices: action.payload
            };
        default:
            return state;
    }
}

export default deviceReducer;