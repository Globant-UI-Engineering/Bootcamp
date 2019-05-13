import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/done">Done</Link>
        </li>
        <li>
          <Link to="/pending">Pending</Link>
        </li>
      </ul>
    </nav>
  );
}
