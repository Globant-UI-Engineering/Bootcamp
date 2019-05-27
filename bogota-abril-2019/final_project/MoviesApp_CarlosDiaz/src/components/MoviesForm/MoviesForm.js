import React, {Component, createRef} from 'react';
import { connect } from 'react-redux';
import MovieServices from '../../services/MovieServices';
import { validateForm, noResults } from '../../actions/formActions'
import { getGenres, setFilteredMovies} from '../../actions/moviesActions';
import GenreOption from './GenreOption';
import PropTypes from 'prop-types';

class MoviesForm extends Component{

    movieTitle = createRef();
    movieGenre = createRef();
    
    componentWillMount(){
        this.props.getGenres();
        this.props.validateForm(false);
    }

    searchMovies = (e) =>{
        e.preventDefault();
        const title=this.movieTitle.current.value;
        const genre= this.movieGenre.current.value?Number(this.movieGenre.current.value):'';
        if (title){
        this.props.validateForm(false);
        var resultsArray=[];
        var movielookup = new MovieServices().setMoviesByTitle(title);
        movielookup.then(lookup => {
            if(genre){
                resultsArray= lookup.data.results.filter( results =>{
                    return results.genre_ids.includes(genre);
               });
            } else {
                 resultsArray=lookup.data.results;
            }
            if(resultsArray.length===0){
                this.props.noResults(true);
             } else{
                this.props.noResults(false);
             }
            this.props.setFilteredMovies(resultsArray);
        });
        } else{
            this.props.validateForm(true);
        }
    }

    render(){
        return (
            <form className="uk-form-horizontal uk-margin-large" onSubmit={this.searchMovies}>
                <div className="uk-margin uk-text-capitalize">
                    <label className="uk-form-label" id="movieTitle_label" htmlFor="movie-title">movie title</label>
                    <div className="uk-form-controls" id="movie-title-div">
                        <input aria-required ref={this.movieTitle} className="uk-input uk-text-capitalize" id="movie-title" aria-labelledby="movieTitle_label" type="text" placeholder="search movie by title"/>
                        {this.props.error? <small className="uk-light">Mandatory Field</small>:null}
                    </div>
                </div>
                <div className="uk-margin uk-text-capitalize">
                    <label className="uk-form-label" id="genre_label" htmlFor="movie-genre">genre</label>
                    <div className="uk-form-controls">
                        <select ref={this.movieGenre} className="uk-select" id="movie-genre" aria-labelledby="genre_label">
                            <option value="">N/A</option>
                            {Object.keys(this.props.genres).map( genreKey =>(
                            <GenreOption key={genreKey}  genre={this.props.genres[genreKey]} />
                            ))}
                        </select>
                    </div>
                </div>
                <button type="submit" className="uk-button uk-button-default">Search</button>
                {this.props.noresults? <p className="uk-align-center" role="alert" aria-invalid="true">No movies found</p>:null}
            </form>
        );
    }
};

MoviesForm.propTypes = {
    genres: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    noresults:PropTypes.bool,
    setFilteredMovies: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    genres : state.movies.genres,
    error: state.error.error,
    noresults: state.error.noresults
})
 
export default connect(mapStateToProps, {getGenres, setFilteredMovies, validateForm, noResults}) (MoviesForm);