import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <NavLink to={'/agregadas'} activeClassName="active">Agregadas</NavLink>
            <NavLink to={'/eliminadas'} activeClassName="active">Eliminadas</NavLink>
        </nav>
    );
};

export default Navbar;