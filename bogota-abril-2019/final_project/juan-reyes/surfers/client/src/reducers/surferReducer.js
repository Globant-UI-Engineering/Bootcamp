import {
  FETCH_SURFERS,
  FETCH_SURFER,
  CREATE_SURFER,
  EDIT_SURFER,
  DELETE_SURFER,
} from '../actions/types';
import _ from 'lodash';


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SURFERS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_SURFER:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SURFER:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SURFER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SURFER:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};