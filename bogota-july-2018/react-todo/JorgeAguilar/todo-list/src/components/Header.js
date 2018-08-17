import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/Header.css';

class Header extends Component {
  render() {
    return (
        <header className="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO List with React</h1>
        </header>
    );
  }
}

export default Header;
