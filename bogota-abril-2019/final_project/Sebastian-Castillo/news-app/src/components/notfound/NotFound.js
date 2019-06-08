import React from 'react';
import { Link } from 'react-router-dom';

import PageNotFound from '../../assets/404Error.jpg';
import './NotFound.css';

const NotFound = () => (
  <section className="NotFound">
    <img className="NotFound__image" src={PageNotFound} alt="NotFound" />
    <center>
      <Link to="/">Return to Home Page</Link>
    </center>
  </section>
);
export default NotFound;
