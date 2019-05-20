import React from 'react';
import AppLogo from '../images/flightrack-logo.png';
import { Link } from 'react-router-dom';
import store from './../store';
import './styles/Navbar.css';

const Navbar = () => (
    <nav>
        <Link to="/">
            <button className="home" type="button">Home</button>
        </Link>
        <img src={AppLogo} alt="Flightrack Logo"/>
        <button className="link" type="button" aria-label="logout" onClick={logoutHandler}>Logout</button>
    </nav>
);

const logoutHandler = () => {
    store.dispatch({type: 'LOG_OUT'});
}

export default Navbar;
