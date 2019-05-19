import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="Todo__header">
        <h1>To Do </h1>
        <nav>
          <ul className="Todo__links">
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/form">Add To Do</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
