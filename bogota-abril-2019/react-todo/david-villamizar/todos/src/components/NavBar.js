import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <NavLink to="/all" exact activeClassName={styles.activeLink}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/done" activeClassName={styles.activeLink}>
            Done
          </NavLink>
        </li>
        <li>
          <NavLink to="/pending" activeClassName={styles.activeLink}>
            Pending
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
