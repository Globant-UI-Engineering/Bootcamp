import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar({ links }) {
  return (
    <nav className={styles.navBar}>
      <ul>{links.map(Link)}</ul>
    </nav>
  );
}

function Link({ href, name }, i) {
  return (
    <li key={href + name}>
      <NavLink to={href} activeClassName={styles.active}>
        {name}
      </NavLink>
    </li>
  );
}
