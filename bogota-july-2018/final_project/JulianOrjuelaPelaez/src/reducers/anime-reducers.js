import { FETCH_ANIME } from '../actions/types';
import { FETCHING_ANIME } from '../actions/types';
import { FETCH_SINGLE_ANIME } from '../actions/types';
import { FETCHING_SINGLE_ANIME } from '../actions/types';

const initialState = {
    animeList: {},
    animeSingle: {},
    isFetchingList: true,
    isFetchingSingle: true
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_ANIME:
            return {
                ...state,
                animeList: action.payload,
                isFetchingList: action.isFetchingList
            };

        case FETCHING_ANIME:
            return {
                ...state,
                isFetchingList: action.isFetchingList
            };

        case FETCH_SINGLE_ANIME:
            return {
                ...state,
                animeSingle: action.payload,
                isFetchingSingle: action.isFetchingSingle
            }

        case FETCHING_SINGLE_ANIME:
            return {
                ...state,
                isFetchingSingle: action.isFetchingSingle
            }

        default:
        return state;
    }
}