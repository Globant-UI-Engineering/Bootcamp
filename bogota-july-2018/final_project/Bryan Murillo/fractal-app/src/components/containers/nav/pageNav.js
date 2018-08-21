import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav } from 'reactstrap';
import PageLink from '../../presentational/nav/nav-Link';
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
          <PageLink onClick={(e) => this.handleClick('HOME')} active={page === 'HOME'} page={page}>home</PageLink>
          <PageLink onClick={(e) => this.handleClick('KOCH')} active={page === 'KOCH'} page={page}>koch snowflake</PageLink>
        </Nav>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { page: state.navReducer.page };
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
