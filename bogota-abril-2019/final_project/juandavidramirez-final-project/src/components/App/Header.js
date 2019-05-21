import { React } from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/champions">Champions</Link>
          <Link to="/tierList">Tier List</Link>
          <Link to="/search">Search</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
