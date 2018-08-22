import React, { Component } from "react";
import { Link } from "react-router-dom";

import './css/Header.css'


class Header extends Component {
  
  render() {    
    const items = this.props.items.map((element, index) => 
    {
      return (
        <li className="nav-item" key={index}>
          <Link className="nav-link" to={element.url}>{element.title}</Link>
        </li>
      )
    }) 
    return (      
      <header> 
        <div className="container">       
          <nav className="navbar navbar-expand-md navbar-dark justify-content-between">
            <span rol="navigation" className="navbar-brand">Michael Jordan</span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                {items}
              </ul>
            </div>
          </nav>
        </div>  
      </header>       
    )
  }
}
export default Header;