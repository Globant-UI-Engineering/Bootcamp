import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <NavLink to="/login" exact activeClassName={styles.activeLink}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/artists" activeClassName={styles.activeLink}>
            Artists
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
