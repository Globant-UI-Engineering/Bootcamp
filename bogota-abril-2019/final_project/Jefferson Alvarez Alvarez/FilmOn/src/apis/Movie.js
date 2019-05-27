import ServerActions from "../actions/movie/ServerActions"

let api = "https://api.themoviedb.org/3";
let apiKey = "228b86388f5da49f597e7c92a9a05173";

export default {
    getAllMovies(page) {
        fetch(api + '/trending/movie/week?api_key=' + apiKey)
            .then((response) => response.json())
            .then((responseJson) => {
                ServerActions.receivedMovies(responseJson.results); })
            .catch((error) => {
                console.error(error);
            });
    },
    getMovie(id) {
        fetch(api + /movie/ + id + '?api_key=' + apiKey)
            .then((response) => response.json())
            .then((movie) => {
                ServerActions.receivedMovie(movie); })
            .catch((error) => {
                console.error(error);
            });
    }
}
