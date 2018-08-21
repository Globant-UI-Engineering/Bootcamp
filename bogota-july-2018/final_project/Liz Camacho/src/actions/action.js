import axios from 'axios';

const getNewReleasesListAPI = () => {
    return dispatch => {
        dispatch(getMoviesNewReleasesInProgress());
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8cbd55c806be3b7f05581408712373f1")
            .then(response => {
                dispatch(getMoviesInfoNewReleases(response.data.results.slice(0, 6)));
            }).catch(err => {
                dispatch(getMoviesNewReleasesFailure(err));
            })
    }
}
const getMoviesNewReleasesInProgress = () => {
    return {
        type: "GET_MOVIES_NEW_RELEASES_IN_PROGRESS",
    };
}

const getMoviesInfoNewReleases = (moviesList) => {

    return {
        type: "GET_MOVIES_INFO_NEW_RELEASES",
        moviesList: moviesList
    };
}
const getMoviesNewReleasesFailure = (err) => {
    return {
        type: "GET_MOVIES_NEW_RELEASES_FAILURE",
        error: err
    }
}
///
const getSearchMoviesListAPI = (text) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8cbd55c806be3b7f05581408712373f1&query=${text}&include_adult=false`)
            .then(response => {
                dispatch(getSearchMovieInfo(response.data.results));
            }).catch(err => {
                dispatch(getSerchMovieInfoFailure(err));
            })
    }
}
const getSearchMovieInfo = (movieList) => {
    return {
        type: "GET_SEARCH_MOVIE_INFO",
        searchMovie: movieList
    };
}
const getSerchMovieInfoFailure = (err) => {
    return {
        type: "GET_SEARCH_MOVIE_INFO_FAILURE",
        error: err
    }
}
////
const getMovieInfo = (id) => {
    return dispatch => {
        dispatch(getMovieInfoInProgress());
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8cbd55c806be3b7f05581408712373f1&append_to_response=credits`)
            .then(response => {
                dispatch(getMovieInfoSuccess(response.data));
            }).catch(err => {
                dispatch(getMovieInfoFailure(err));
            })
    }
}
const getMovieInfoInProgress = () => {
    return {
        type: "GET_MOVIE_INFO_IN_PROGRESS",
    };
}
const getMovieInfoSuccess = (infoList) => {
    return {
        type: "GET_MOVIE_INFO_SUCCESS",
        info: infoList
    };
}
const getMovieInfoFailure = (err) => {
    return {
        type: "GET_MOVIE_INFO_FAILURE",
        error: err
    }
}

export default {
    getNewReleasesListAPI,
    getSearchMoviesListAPI,
    getMovieInfo,
}