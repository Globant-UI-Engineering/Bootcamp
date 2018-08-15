import {
  POST_LIST_FETCH_SUCCESS
} from 'actions/actionTypes';
import { fetchPostsFromAPI } from 'API';


export function postListFetchSuccess(postList) {
  return {
    type: POST_LIST_FETCH_SUCCESS,
    postList: postList
  };
}

export function getPostList() {
  return (dispatch) => {

    const onSuccess = (response) => dispatch(postListFetchSuccess(response.data));

    return fetchPostsFromAPI()
      .then(onSuccess)
  };
}