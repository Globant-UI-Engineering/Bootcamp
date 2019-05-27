import API from "../../apis/Movie"

export default {
    getAllMovies(page) {
        API.getAllMovies(page);
    },
    getMovie(id) {
        API.getMovie(id);
    }
}
