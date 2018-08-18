const initialState = {
    moviesList: [],
    searchMovie: [],
    movieInfo: { genres: [{ id: null, name: "" }] },
    inProgressMovies: true,
    inProgressMovieInfo: false

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_MOVIES_NEW_RELEASES_IN_PROGRESS":
            return state = { ...state, inProgressMovies: true };
        case "GET_MOVIES_INFO_NEW_RELEASES":
            return state = { ...state, moviesList: action.moviesList, searchMovie: [], inProgressMovies: false };
        case "GET_MOVIES_NEW_RELEASES_FAILURE":
            return state = { ...state, error: action.error, inProgressMovies: false };

        case "GET_MOVIE_INFO_IN_PROGRESS":
            return state = { ...state, movieInfo: initialState.movieInfo, inProgressMovieInfo: true };
        case "GET_MOVIE_INFO_SUCCESS":
            return state = { ...state, movieInfo: action.info, inProgressMovieInfo: false };
        case "GET_MOVIE_INFO_FAILURE":
            return state = { ...state, error: action.error, inProgressMovieInfo: false };

        case "GET_SEARCH_MOVIE_INFO":
            return state = { ...state, searchMovie: action.searchMovie };
        case "GET_SEARCH_MOVIE_INFO_FAILURE":
            return state = { ...state, searchMovie: [] };

        default:
            return state;
    }
}

