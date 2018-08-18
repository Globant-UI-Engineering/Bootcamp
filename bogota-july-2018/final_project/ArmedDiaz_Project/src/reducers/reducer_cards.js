import _ from 'lodash';
import {FETCH_CARDS, FETCH_CARD} from '../actions';

export default function(state ={}, action){
    switch (action.type){
        case  FETCH_CARDS :
        return _.mapKeys(action.payload.data, 'idName');

        case  FETCH_CARD :
        const card = action.payload.data;
        const newState = {state};
        newState[card.idName] = card;
        return newState;

        default: 
            return state;
    }
}