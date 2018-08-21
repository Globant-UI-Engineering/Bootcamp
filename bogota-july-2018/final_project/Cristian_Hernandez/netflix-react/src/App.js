import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated,UserIsNotAuthenticated} from './helpers/auth'

import { Provider } from 'react-redux';
import store from './store';


import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import AddMovie from './components/movies/AddMovie';
import EditMovie from './components/movies/EditMovie';
import MovieDetails from './components/movies/MovieDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <Router>
          <div>
            <AppNavbar />
            <Switch>
              <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
              <Route exact path="/movie/add" component={UserIsAuthenticated(AddMovie)} />
              <Route exact path="/movie/:id" component={UserIsAuthenticated(MovieDetails)} />
              <Route exact path="/movie/edit/:id" component={UserIsAuthenticated(EditMovie)} />
              <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
              <Route exact path="/register" component={UserIsNotAuthenticated(Register)} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
