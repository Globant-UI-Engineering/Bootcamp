import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRealUser } from './store/actions/actionDataUser';

import appFirebase from './firebase/Firebase';
import Header from './components/header/Header';
import Main from './containers/main/Main';
import Profile from './containers/profile/Profile';
import LogIn from './containers/login/LogIn';
import SignUp from './containers/signup/SignUp';
import NotFound from './components/notfound/NotFound';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    appFirebase.auth().onAuthStateChanged((user) => {
      const { getRealUserFunction } = this.props;
      if (user) {
        getRealUserFunction(user, true);
      } else {
        getRealUserFunction(null, false);
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/profile" component={Profile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRealUserFunction: (user, isAuthenticated) =>
    dispatch(getRealUser(user, isAuthenticated)),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
