import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Globbers & Suffers
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Surfers
        </Link>
      </div>
    </div>
  )
};

export default Header;