import React, { Component } from 'react';
import icon from '../../assets/img/video-camera-icon.png';
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <Link to={"/"} className="navbar-brand">
                        <img src={icon} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Movies
                </Link>
                </nav>
            </header>
        );
    }
}

export default NavBar;