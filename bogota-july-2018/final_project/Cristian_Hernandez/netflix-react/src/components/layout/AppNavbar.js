import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import './AppNavbar.css';

class AppNavbar extends Component {
    state={
        isAuthenticated: false
    }

    static getDerivedStateFromProps(props,state){
        const { auth } = props;

        if(auth.uid){
            return { isAuthenticated: true }
        } else {
            return { isAuthenticated: false }
        }
    }

    onLogoutClick = (e) =>{
        e.preventDefault();

        const { firebase } = this.props;
        firebase.logout();
    }

  render() {
    const { isAuthenticated } = this.state;
    const { auth } = this.props;
    return (
    <nav className="navbar">
        <div className="app-logo">
            <img src={logo} className="logo" alt="logo" />
        </div>
        {isAuthenticated ? (
        <ul className="nav">
            <li className="item">
                <Link to="/">
                Home
                </Link>
            </li>
            <li className="item">
                <Link to="/">
                TV Shows
                </Link>
            </li>
            <li className="item">
                <Link to="/">
                Movies
                </Link>
            </li>
            <li className="item">
                <Link to="/">
                Recently Added
                </Link>
            </li>
            <li className="item">
                <Link to="/movie/add">
                Add Movie
                </Link>
            </li>
        </ul>   
            ) : null}  

        {isAuthenticated ? (
        <div className="right-nav">
            <ul className="nav">
                <li className="item">
                    <a href="#!" className="">
                        User: {auth.email}
                    </a>
                </li>
                <li className="item">
                    <a href="#!" className="" onClick={this.onLogoutClick}>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
        ) : null} 
    </nav>
    )
  }
}

AppNavbar.propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

export default compose(
    firebaseConnect(),
    connect((state,props)=>({
        auth: state.firebase.auth
    }))
)(AppNavbar);