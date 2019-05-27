import AppDispatcher from "../../dispatcher"
import ActionTypes from "../../constants"

export default {
    receivedMovies(rawMovies) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_MOVIES,
            rawMovies
        })
    },
    receivedMovie(rawMovie) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_MOVIE,
            rawMovie
        })
    }
}
