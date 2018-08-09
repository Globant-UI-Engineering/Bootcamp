import {
  POST_LIST_FETCH_SUCCESS
} from 'actions/actionTypes';
import { fetchPostsFromAPI } from 'API';


export function postListFetchSuccess(posts) {
  console.log('fetchPostsFromAPI', posts);
  return {
    type: POST_LIST_FETCH_SUCCESS,
    posts: posts
  };
}

export function getPosts() {
  return (dispatch) => {

    const onSuccess = (response) => dispatch(postListFetchSuccess(response.data));

    return fetchPostsFromAPI()
      .then(onSuccess)
  };
}