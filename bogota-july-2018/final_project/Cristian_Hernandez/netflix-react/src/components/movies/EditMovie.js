import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class EditMovie extends Component {
    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.descriptionInput = React.createRef();
        this.runningTimeInput = React.createRef();
        this.releaseDateInput = React.createRef();
        this.starringInput = React.createRef();
        this.genresInput = React.createRef();
        this.ageRatingInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { movie,firestore,history } = this.props;

        const updMovie = {
            name: this.nameInput.current.value,
            description: this.descriptionInput.current.value,
            runningTime: this.runningTimeInput.current.value,
            releaseDate: this.releaseDateInput.current.value,
            starring: this.starringInput.current.value,
            genres: this.genresInput.current.value,
            ageRating: this.ageRatingInput.current.value,
        }

        firestore.update({ collection: 'movies', doc:movie.id},updMovie)
        .then(history.push('/'));
    }

  render() {
      const { movie } = this.props;

      if(movie){
        return (
            <div>
                <div className="form-container">
                    <div className="back-arrow">
                        <Link to="/"><i className="arrow-back far fa-arrow-alt-circle-left"></i><span className="arrow-back">Back to Browse</span></Link>
                    </div>
                    <div className="form-content-container">
                        <div>                        
                            <h2>Editing {movie.name}</h2>
                        </div>
                        <div className="form-group">
                            <form onSubmit={this.onSubmit} className="form">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Title</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="e.g. Batman v Superman: Dawn of Justice"
                                        required aria-required="true" 
                                        ref={this.nameInput}                                       
                                        defaultValue={movie.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="description">Description</label>
                                    <textarea 
                                        type="text"
                                        name="description" 
                                        placeholder="e.g. Eighteen months after the battle betwe..."
                                        required aria-required="true" 
                                        ref={this.descriptionInput}                                    
                                        defaultValue={movie.description}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="runningTime">Running time</label>
                                    <input 
                                        type="text" 
                                        name="runningTime" 
                                        pattern="[0-9]{1,2}[h]{1} [0-9]{1,2}[m]{1}" 
                                        required aria-required="true"
                                        placeholder="e.g. 2h 10m"  
                                        ref={this.runningTimeInput}                                      
                                        defaultValue={movie.runningTime}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="releaseDate">Release date(Year)</label>
                                    <input 
                                        type="text" 
                                        name="releaseDate" 
                                        pattern="[0-9]{4}" 
                                        placeholder="e.g. 2015"
                                        required aria-required="true"
                                        ref={this.releaseDateInput}                                        
                                        defaultValue={movie.releaseDate}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="starring">Cast</label>
                                    <input 
                                        type="text"
                                        name="starring" 
                                        placeholder="e.g. Henry Cavill, Amy Adams"
                                        required aria-required="true"
                                        ref={this.starringInput}                                         
                                        defaultValue={movie.starring}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="genres">Genres</label>
                                    <input 
                                        type="text"
                                        name="genres" 
                                        placeholder="e.g. Science fiction, Drama"
                                        required aria-required="true"
                                        ref={this.genresInput}                                        
                                        defaultValue={movie.genres}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="ageRating">Age Rating</label>
                                    <input 
                                        type="text" 
                                        name="ageRating"  
                                        pattern="\+\d{1,2}" 
                                        placeholder="e.g. +16"
                                        required aria-required="true" 
                                        ref={this.ageRatingInput}                                       
                                        defaultValue={movie.ageRating}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" value="submit" className="btn btn-movie">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          )
      } else {
          return <Spinner />
      }
    
  }
}


EditMovie.propTypes = {
    firestore: PropTypes.object.isRequired
};


export default compose(
    firestoreConnect(props => [
        { collection : 'movies', storeAs: 'movie', doc: props.match.params.id }
    ]),
    connect(({firestore:{ ordered }},props) => ({
        movie: ordered.movie && ordered.movie[0]
    })
))(EditMovie);
