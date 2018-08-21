import React from 'react';
import Movies from '../movies/Movies';
import MainMovies from '../layout/MainMovie';
//import SideBar from '../layout/Sidebar';

import './Dashboard.css';

export default () => {
  return (
    <div>
      <MainMovies />
      <h2 className="popular-title">Popular on Netflix</h2>
      <div className="movie-container">
        <Movies />
      </div>
    </div>
  )
}
