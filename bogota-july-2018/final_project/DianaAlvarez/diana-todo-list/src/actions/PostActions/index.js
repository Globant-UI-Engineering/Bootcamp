import {
    POST_LIST_FETCH_SUCCESS,
    ADD_TODO,
    DELETE_TODO
} from '../actionTypes';

import { fetchPostsFromAPI } from '../../API';


export function postListFetchSuccess(postList) {
    return {
      type: POST_LIST_FETCH_SUCCESS,
      postList: postList
    };
  }

export function getPostList() {
    return (dispatch) => {
      const onSuccess = (response) => dispatch(postListFetchSuccess(response.data));
      return fetchPostsFromAPI().then(onSuccess)
    };
}
export function addItemToList(item) {
  return {
    type: ADD_TODO,
    item: item
  };
}
export function deleteItemToList(id) {
  console.log("Actions: "+id);
  return {
    type: DELETE_TODO,
    id: id
  };
}


