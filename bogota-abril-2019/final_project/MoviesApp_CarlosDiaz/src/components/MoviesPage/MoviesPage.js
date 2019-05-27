import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setGenres, getFilteredMovies } from '../../actions/moviesActions';
import MovieServices from '../../services/MovieServices';
import MoviesForm from '../MoviesForm/MoviesForm';
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import PropTypes from 'prop-types';

class MoviesPage extends Component {

    componentWillMount(){
        var genres = new MovieServices().getGenres();
        genres.then( genre =>{
            this.props.setGenres(genre.data.genres);
        });
    }
    
    render() {
        let results = this.props.movies.length === 0 ?

                <section className="uk-container uk-container-small uk-light">
                
                </section>
             :
             <div className="uk-background-muted">
                <section className="uk-container uk-container-small uk-light">
                    <MoviesContainer/>    
                </section>
            </div>
        return (
            <Fragment>
                <section className="uk-container uk-container-small uk-padding uk-light">
                    <MoviesForm/>    
                </section>
                {results}
            </Fragment>
        );
    }
}

MoviesPage.propTypes = {
    movies: PropTypes.array.isRequired,
    setGenres: PropTypes.func.isRequired,
    getFilteredMovies: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    movies : state.movies.movies
})

export default connect(mapStateToProps,{setGenres, getFilteredMovies}) (MoviesPage);