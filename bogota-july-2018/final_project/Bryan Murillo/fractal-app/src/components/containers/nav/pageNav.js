import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './pageNav.css';
import { changePage } from '../../../actions/index';

class PageNav extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (newPage) => {
    this.props.changePage(newPage);
  }

  render(){
    const { page } = this.props;

    return (
      <nav>
        <p className='navMessage'>what would you like to see?</p>
        <Nav vertical tabs>
          <NavItem>
            <NavLink active={page === ''} className={'nav-link'} onClick={(e) => this.handleClick('')} tag={Link} to='/'>
              home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={page === 'KOCH'} className={'nav-link'} onClick={(e) => this.handleClick('KOCH')} tag={Link} to='/koch'>
              koch snowflake
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={page === 'DRAGON'} className={'nav-link'}>
              dragon curve
            </NavLink>
          </NavItem>
        </Nav>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { page: state.actualPage };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: page => dispatch(changePage(page))
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PageNav);
