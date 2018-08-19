import { GRAPH_KOCH_LINE_A } from '../../actions/constants/actionTypes';
import { GRAPH_KOCH_LINE_B } from '../../actions/constants/actionTypes';
import { GRAPH_KOCH_LINE_C } from '../../actions/constants/actionTypes';

const initialState = {
  pointsKoch: {
    a: '400,150 100,150',
    b: '100,150 250,409.8',
    c: '250,409.8 400,150'
  }
};

export const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case GRAPH_KOCH_LINE_A:
      return Object.assign({}, state, {
        pointsKoch: { a: action.pointsKoch}
      });
    case GRAPH_KOCH_LINE_B:
      return Object.assign({}, state, {
        pointsKoch: { b: action.pointsKoch}
      });
    case GRAPH_KOCH_LINE_C:
      return Object.assign({}, state, {
        pointsKoch: { c: action.pointsKoch}
      });
    default:
      return state;
  }
}
