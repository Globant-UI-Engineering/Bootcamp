import {SET_DATA} from '../actionTypes/ActionTypes.js';
import {DATA_FILLED_SUCCESS} from '../actionTypes/ActionTypes.js';
import {DATA_FILLED_ERROR} from '../actionTypes/ActionTypes.js';

const initialState = {
    data: [],
    isCharged: false,
    error: null
}

const dataReducer =  function(state=initialState, action){
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
                isCharged: true
            }
        case DATA_FILLED_SUCCESS:
            return{
                ...state,
                error: null
            }

        case DATA_FILLED_ERROR:
            return {
                ...state,
                error: action.payload,
                isCharged: false
            }

        default:
            return {
                ...state
            }
    }
}

export default dataReducer;
