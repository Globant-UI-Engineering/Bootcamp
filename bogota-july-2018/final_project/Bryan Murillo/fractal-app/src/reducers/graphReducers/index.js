import { GRAPH_KOCH } from '../../actions/constants/actionTypes';

const initialState = {
  pointsKoch: ['400,150 100,150', '100,150 250,409.8', '250,409.8 400,150']
};

export const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case GRAPH_KOCH:
      return Object.assign({}, state, {
        pointsKoch: action.pointsKoch
      });
    default:
      return state;
  }
}
