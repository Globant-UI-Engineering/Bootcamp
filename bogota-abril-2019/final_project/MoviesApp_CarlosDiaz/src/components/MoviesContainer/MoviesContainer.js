import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilteredMovies, getGenres } from '../../actions/moviesActions';
import MoviesCard from './MoviesCard/MoviesCard';
import PropTypes from 'prop-types';

class MoviesContainer extends Component {
    componentWillMount(){
        this.props.getFilteredMovies();
    }

    render() {
        return (
            <section className="uk-padding uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m" uk-grid="true">
                {Object.keys(this.props.movies).map( movieKey =>(
                        <MoviesCard key={movieKey}  movie={this.props.movies[movieKey]} />
                ))}
            </section>
        );
    }
}

MoviesContainer.propTypes = {
    movies: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    movies : state.movies.movies
})
 
export default connect(mapStateToProps, {getFilteredMovies, getGenres}) (MoviesContainer);