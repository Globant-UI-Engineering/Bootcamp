import { CHANGE_PAGE } from './constants/actionTypes';
import { GRAPH_KOCH_LINE_A } from './constants/actionTypes';
import { GRAPH_KOCH_LINE_B } from './constants/actionTypes';
import { GRAPH_KOCH_LINE_C } from './constants/actionTypes';

export const changePage = page => ({
  type: CHANGE_PAGE,
  actualPage: page
});

export const graphKochA = points => ({
  type: GRAPH_KOCH_LINE_A,
  pointsKoch: points
});

export const graphKochB = points => ({
  type: GRAPH_KOCH_LINE_B,
  pointsKoch: points
});

export const graphKochC = points => ({
  type: GRAPH_KOCH_LINE_C,
  pointsKoch: points
});
