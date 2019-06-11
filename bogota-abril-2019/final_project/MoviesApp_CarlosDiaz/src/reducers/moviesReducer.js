import { SET_NOW_IN_THEATERS, GET_NOW_IN_THEATERS, SET_GENRES, GET_GENRES, 
    SET_FILTERED_MOVIES, GET_FILTERED_MOVIES, GET_SINGLE_MOVIE, GET_POPULAR_MOVIES, SET_POPULAR_MOVIES,
SET_USERNAME,GET_USERNAME} from '../actions/type';

const initialState = {
    username:'',
    inteathers : [],
    popular : [],
    genres:[],
    movies: [],
    selectedMovie:{}
};

export default function(state = initialState, action){
    switch (action.type){
        case SET_NOW_IN_THEATERS:
            return{
                ...state,
                inteathers: action.payload
            }
        case GET_NOW_IN_THEATERS:
            return{
                ...state
            }
        case SET_POPULAR_MOVIES:
            return{
                ...state,
                 popular: action.payload
            }
        case GET_POPULAR_MOVIES:
            return{
                ...state
            }
        case SET_GENRES:{
            return{
                ...state,
                genres: action.payload
            }
        }
        case GET_GENRES:{
            return{
                ...state
            }
        }
        case SET_FILTERED_MOVIES: {
            return {
                ...state,
                movies: action.payload
            }
        }
        case GET_FILTERED_MOVIES: {
            return {
                ...state
            }
        }
        case GET_SINGLE_MOVIE:{
            return{
                ...state,
                selectedMovie:action.payload
            }
        }
        case SET_USERNAME:{
            return{
                ...state,
                username:action.payload
            }
        }
        case GET_USERNAME:{
            return{
                ...state
            }
        }
        default:
         return state;
    }

}