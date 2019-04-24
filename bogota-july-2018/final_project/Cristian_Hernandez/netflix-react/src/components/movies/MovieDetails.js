import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

import './MovieDetails.css';

class MovieDetails extends Component {

    onDeleteClick = () =>{
        const { movie,firestore,history} = this.props;

        firestore.delete({collection: 'movies',doc: movie.id})
        .then(history.push('/'));
    }
  render() {
      const { movie } = this.props;
      if(movie){
        return (
            <div className="movie-details-container">
                <div className="back-arrow">
                    <Link to="/"><i className="arrow-back far fa-arrow-alt-circle-left"></i><span className="arrow-back">Back to Browse</span></Link>
                </div>
                <div className="editDelete-buttons">
                    <Link to={`/movie/edit/${movie.id}`} className="btn-edit-delete">Edit</Link>
                    <Link to="/" onClick={this.onDeleteClick} className="btn-edit-delete">Delete</Link>
                </div>
                <div className="movie-details">
                    <img className="details-background" src={require(`../${movie.name}1.png`)} alt={movie.name}/>
                    <div className="details-content">
                        <h1>{movie.name}</h1>
                        <div className="yearAgeTime-detail">
                            <h3>{movie.releaseDate}</h3>
                            <h3 className="age-box">{movie.ageRating}</h3>
                            <h3>{movie.runningTime}</h3>
                            <div class="inline rating">
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                            </div>
                            <p>{movie.description}</p>
                            <div className="buttons-container">
                                <a className="btn-detail-play"><i className="fas fa-play"></i>Play</a>
                                <a className="btn-detail-add"><i className="fas fa-plus"></i>My List</a>
                            </div>
                            <div className="secondary-information">
                                <p><span>Starring:</span> {movie.starring}</p>
                                <p><span>Genres:</span> {movie.genres}</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        )
      } else{
          return <Spinner/>
      }
    
  }
}

MovieDetails.propTypes = {
    firestore: PropTypes.object.isRequired
};


export default compose(
    firestoreConnect(props => [
        { collection : 'movies', storeAs: 'movie', doc: props.match.params.id }
    ]),
    connect(({firestore:{ ordered }},props) => ({
        movie: ordered.movie && ordered.movie[0]
    })
))(MovieDetails);
