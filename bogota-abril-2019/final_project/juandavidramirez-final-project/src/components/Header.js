import React from "react";
import { Link } from "@reach/router";
import { AppBar, Typography, Toolbar, CssBaseline } from "@material-ui/core";
import animate from "@jam3/gsap-promise";

class Header extends React.Component {
  componentDidMount() {
    animate.from(this.h1, 0.8, { x: -200, delay: 0.2 });
    animate.from(this.links, 0.4, { x: 1000, delay: 0.2 });
  }
  render() {
    return (
      <nav className="navigation-header-bar">
        <Link to="/">
          <h1 ref={h1 => (this.h1 = h1)}>lol master</h1>
        </Link>
        <div
          ref={div => {
            this.links = div;
          }}
        >
          <Link to="/champions">champions</Link>
          <Link to="/tierList">tier list</Link>
          <Link to="/search">search</Link>
        </div>
      </nav>
    );
  }
}

export default Header;
