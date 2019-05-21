import React from "react";
import { Link } from "@reach/router";
import "../Header/Header.css";

const Header = () => (
  <header>
    <h1> LoL Master</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/champions">Champions</Link>
      <Link to="/tierList">Tier List</Link>
      <Link to="/search">Search</Link>
    </nav>
  </header>
);

export default Header;
