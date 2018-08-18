import {SET_DEFAULT_SELECTED_DATA} from '../actionTypes/ActionTypes.js';
import {SET_FACT_SELECTED} from '../actionTypes/ActionTypes.js';
import {SET_MARKET_SELECTED} from '../actionTypes/ActionTypes.js';
import {SET_CATEGORY_SELECTED} from '../actionTypes/ActionTypes.js';
import {SET_LAST_PERIOD} from '../actionTypes/ActionTypes.js';
import {SELECTED_DATA_SUCCESS} from '../actionTypes/ActionTypes.js';
import {SELECTED_DATA_ERROR} from '../actionTypes/ActionTypes.js';


export function setDefaultSelectedData(){
    return{
        type: SET_DEFAULT_SELECTED_DATA,
        payload: {
            factSelected: '',
            marketSelected: '',
            lastPeriod: '',
            categorySelected: ''
        }
    }
}

export function setFactSelected(fact){
    return {
        type: SET_FACT_SELECTED,
        payload: fact
    };
}

export function setMarketSelected(market){
    return {
        type: SET_MARKET_SELECTED,
        payload: market
    };
}

export function setLastPeriod(lastPeriod){
    return {
        type: SET_LAST_PERIOD,
        payload: lastPeriod
    };
}

export function setCategorySelected(category){
    return {
        type: SET_CATEGORY_SELECTED,
        payload: category
    };
}
