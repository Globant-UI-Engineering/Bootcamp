import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Popover, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import appFirebase from '../../firebase/Firebase';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
    };
  }

  handleClick = (event) => {
    this.setState({
      isSignOut: false,
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      anchorEl: null,
    });
  };

  handleClickSignOut = () => {
    this.setState({
      isSignOut: true,
    });
    appFirebase.auth().signOut();
  };

  render() {
    const { anchorEl, open, isSignOut } = this.state;
    const { authenticated } = this.props;
    return (
      <header className="Header">
        <h1 className="Header__title">The News </h1>
        {authenticated ? (
          <nav>
            <ul className="Header__links">
              <li>
                <Button variant="outlined" aria-describedby="Link to Home">
                  <Link className="Header__anchor" to="/home">
                    HOME
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="outlined" aria-describedby="Link to Profile">
                  <Link className="Header__anchor" to="/profile">
                    PROFILE
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  className="Header__popover"
                  variant="outlined"
                  aria-describedby="open popover"
                  onClick={this.handleClick}
                >
                  Options
                </Button>
                <Popover
                  id={'simple-popover'}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <Button
                    onClick={this.handleClickSignOut}
                    aria-describedby="open popover"
                  >
                    Sign Out
                  </Button>
                </Popover>
              </li>
            </ul>
          </nav>
        ) : null}
        {isSignOut ? <Redirect to="/login" /> : null}
      </header>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    authenticated: state.dataUser.isAuthenticated,
  };
}

export default connect(
  mapStateToProps,
  null
)(Header);
