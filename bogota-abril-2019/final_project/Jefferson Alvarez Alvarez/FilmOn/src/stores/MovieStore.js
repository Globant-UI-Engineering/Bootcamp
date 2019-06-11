import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";

let _movies = [];
const CHANGE_EVENT = "CHANGE";

class MovieEventEmitter extends EventEmitter {
    getAll() {
        return _movies;
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
};

let MovieStore = new MovieEventEmitter();

AppDispatcher.register(action => {
    switch(action.actionType) {
        case ActionTypes.RECEIVED_MOVIES:
            _movies = action.rawMovies;
            MovieStore.emitChange();
            break;
        case ActionTypes.RECEIVED_MOVIE:
            _movies.unshift(action.rawMovie);
            MovieStore.emitChange();
            break;
        default:
            // Nothing to do
    }
});

export default MovieStore;