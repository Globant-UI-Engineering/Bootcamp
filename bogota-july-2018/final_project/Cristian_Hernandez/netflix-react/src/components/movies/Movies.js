import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

import './Movies.css';

class Movies extends Component {
  render() {
      const { movies } = this.props;

      if(movies){
        return (
            movies.map(movie =>(
            <div key={movie.id} className="item-wrapper">
                <img src={require(`../${movie.name}.PNG`)} alt={movie.name}/>
                <div className="item-content">
                    <div className="right-content">
                        <a className="btn-movie" href="/"><i className="fas fa-thumbs-up"></i></a>
                        <a className="btn-movie" href="/"><i className="fas fa-thumbs-down"></i></a>
                        <a className="btn-movie" href="/"><i className="fas fa-plus"></i></a>
                    </div>
                    <h4>{movie.name}</h4>
                    <h5 className="inline main-info">{movie.releaseDate}</              h5>
                    <div className="age-box inline main-info"> <h5>{movie.ageRating}</h5> </div>
                    <h5 className="inline main-info">{movie.runningTime}</h5>
                    <div className="description-container main-info">
                        <p className="description">{movie.description}</p>
                    </div>
                    
                    <Link to={`/movie/${movie.id}`}> <i className="fas fa-chevron-down main-info"></i> </Link>
                </div>
            </div>
            ))
        )
      } else {
          return <Spinner />
      }
    
  }
}

Movies.propTypes = {
    firestore:PropTypes.object.isRequired,
    movies: PropTypes.array
}

export default compose(
    firestoreConnect([{ collection: 'movies' }]),
    connect((state,props) => ({
        movies: state.firestore.ordered.movies
    })
))(Movies);
