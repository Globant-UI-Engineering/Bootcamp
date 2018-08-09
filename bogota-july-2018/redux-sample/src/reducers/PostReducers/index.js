import {
  POST_LIST_FETCH_SUCCESS,
} from 'actions/actionTypes';

const PostInitialState = {
  postList: []
};

export default function PostReducers(state = PostInitialState, action) {

  switch (action.type) {

    case POST_LIST_FETCH_SUCCESS:
      return Object.assign({}, state, {
        postList: action.postList,
      });

    default:
      return state;
  }
}
