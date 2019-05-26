import React from "react";
import { Link } from "@reach/router";
import { AppBar, Typography, Toolbar, CssBaseline } from "@material-ui/core";

class Header extends React.Component {
  render() {
    return (
      <nav className="navigation-header-bar">
        <Link to="/">
          <h1>lol master</h1>
        </Link>
        <div className="section-links-container">
          <Link to="/champions">champions</Link>
          <Link to="/tierList">tier list</Link>
          <Link to="/search">search</Link>
        </div>
      </nav>
    );
  }
}

export default Header;
