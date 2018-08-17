import {
    POST_LIST_FETCH_SUCCESS, ADD_TODO, DELETE_TODO
  } from '../../actions/actionTypes';

const PostInitialState = {
    postList: []
};

function PostReducers (state = PostInitialState, action){
    switch (action.type){
        case POST_LIST_FETCH_SUCCESS:
            return Object.assign({}, state, {
                postList: state.postList.concat(
                        action.postList
                )
        });
        case ADD_TODO: 
            return Object.assign({}, state, {
                postList: state.postList.concat(
                    action.item
                )
        });
        case DELETE_TODO: {
            const filteredItems = state.postList.filter( function (item) {
                return item.id !== action.id.id;
            });  
            return {...state, postList: filteredItems};
        }
        default:
            return state;
    }
}

export default PostReducers;
