import React from 'react';
import AppLogo from '../images/flightrack-logo.png';
import { Link } from 'react-router-dom';
import store from './../store';
import './styles/Navbar.css';
import { HOME_PATH } from './../constants/routes';

const Navbar = () => (
    <nav>
        <Link to={HOME_PATH}>
            <button className="home" type="button" aria-label="home">Home</button>
        </Link>
        <img src={AppLogo} alt="Flightrack Logo"/>
        <button className="link" type="button" aria-label="logout" onClick={logoutHandler}>Logout</button>
    </nav>
);

const logoutHandler = () => {
    store.dispatch({type: 'LOG_OUT'});
}

export default Navbar;
