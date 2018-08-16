import React, { Component } from 'react';
import './pageNav.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class PageNav extends Component {
  render(){
    return (
      <nav>
        <p class='navMessage'>what would you like to see?</p>
        <Nav vertical tabs>
          <NavItem>
            <NavLink>
              <Link to='/'>home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to='/koch'>koch snowflake</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">dragon curve</NavLink>
          </NavItem>
        </Nav>
      </nav>
    );
  }
}

export default PageNav;
