import React, { Component } from 'react';

import './MainMovie.css';

class MainMovie extends Component {
  render() {
    return (
      <div className="main-movie">
        <div className="main-movie-content">
          <img className="main-movie-logo" src={require('../Death_Note_Logo.png')} alt="Narcos Logo"/>
          <div className="main-movie-buttons-container buttons-container">
            <a className="btn btn-play"><i className="fas fa-play"></i>Play</a>
            <a className="btn btn-play"><i className="fas fa-plus"></i>My List</a>
          </div>
          <div className="main-movie-synopsis">
            <h2>Watch Now</h2>
            <p>Brilliant but bored high school student Light Yagami suddenly finds himself holding the power of life and death in his hands.</p>
          </div> 
        </div>
      </div>
    )
  }
}


export default MainMovie;
