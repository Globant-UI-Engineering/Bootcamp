import React, { Component } from 'react';
import Movie from '../views/movie'
import Loading from '../views/loading'
import { Row, Alert } from 'reactstrap';
import { connect } from "react-redux";
import actions from "../../actions/action"

const mapStateToProps = state => {
    return {
        moviesState: state.moviesReducer,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNewReleasesListAPI: () => dispatch(actions.getNewReleasesListAPI())
    }
}

class Movies extends Component {

    componentDidMount() {
        this.props.getNewReleasesListAPI();
    }

    render() {
        const { moviesList, inProgressMovies } = this.props.moviesState;
        const { searchMovie, searchInputValue } = this.props;

        if (searchMovie.length === 0 && searchInputValue !== "") {
            return (
                <Alert color="warning">
                    NO MATCHES FOUND
                </Alert>
            );
        }
        const movieListToRender = searchMovie.length > 0 ? searchMovie : moviesList;
        if (inProgressMovies) {
            return (
                <Loading />
            );
        }

        return (
            <section >
                <h1>{searchInputValue ? `SEARCHING...  ${searchInputValue}` : "LAST RELEASES"}</h1>
                <Row>
                    {movieListToRender.map(data =>
                        <Movie key={data.id} title={data.title} id={data.id} image={data.poster_path} overview={data.overview} release={data.release_date} />
                    )}
                </Row>
            </section>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies);