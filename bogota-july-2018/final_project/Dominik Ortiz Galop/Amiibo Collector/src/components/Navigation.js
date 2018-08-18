import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <nav className="nav" role="navigation">
      <ul className="nav__link">
        <li>
          <NavLink to="/shelf" activeClassName="active">
            All amiibos
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" activeClassName="active">
            Collection
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" activeClassName="active">
            Wishlist
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
