import React from "react";
import { Link } from "@reach/router";

const Header = () => (
  <header>
    <h1> LoL Master</h1>
    <nav>
      <Link to="/">home</Link>
      <Link to="/champions">champions</Link>
      <Link to="/tierList">tier list</Link>
      <Link to="/search">search</Link>
    </nav>
  </header>
);

export default Header;
