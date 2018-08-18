import {combineReducers} from 'redux';
import CardsReducer from './reducer_cards';

const rootReducer = combineReducers({
    cards: CardsReducer
});

export default rootReducer;


