import { SET_NOW_IN_THEATERS, GET_NOW_IN_THEATERS, SET_GENRES, GET_GENRES, SET_FILTERED_MOVIES, 
    GET_FILTERED_MOVIES, GET_SINGLE_MOVIE, GET_POPULAR_MOVIES, SET_POPULAR_MOVIES} from './type';

export const setNowInTheaters = (movies) => {
    return{
        type: SET_NOW_IN_THEATERS,
        payload: movies
    }
}

export const getNowInTheaters = () => {
    return{
        type: GET_NOW_IN_THEATERS
    }
}

export const setPopularMovies = (movies) => {
    return{
        type: SET_POPULAR_MOVIES,
        payload: movies
    }
}

export const getPopularMovies = () => {
    return{
        type: GET_POPULAR_MOVIES
    }
}

export const setGenres = (genres) => {
    return{
        type: SET_GENRES,
        payload: genres
    }
}

export const getGenres = () =>{
    return{
        type: GET_GENRES
    }
}

export const setFilteredMovies = (movies) => {
    return{
        type: SET_FILTERED_MOVIES,
        payload: movies
    }
}

export const getFilteredMovies = () =>{
    return{
        type:GET_FILTERED_MOVIES
    }
}

export const getSingleMovie = (movie) =>{
    return{
        type:GET_SINGLE_MOVIE,
        payload: movie
    }
}

