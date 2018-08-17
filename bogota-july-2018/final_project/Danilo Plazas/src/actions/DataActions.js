import {SET_DATA} from '../actionTypes/ActionTypes';

export function setData(data = []){
    return {
        type: SET_DATA,
        payload: data
    };
}
