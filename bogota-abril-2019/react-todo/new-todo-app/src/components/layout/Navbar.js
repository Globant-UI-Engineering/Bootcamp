import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper indigo darken-4">
            <NavLink to="/" className="brand-logo">To-Do List</NavLink>
            <NavLink className="right" to="/create">New To-Do</NavLink> 
        </nav>
    )
}
export default Navbar;
