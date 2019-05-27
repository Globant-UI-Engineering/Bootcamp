import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import {UserIsAuthenticated, UserIsNotAuthenticated} from '../../authHandler';
import Navbar from '../Navbar/Navbar';
import MoviesPage from '../MoviesPage/MoviesPage';
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp';
import MovieDetails from '../MovieDetails/MovieDetails';
import Favorites from '../Favorites/Favorites';


class Router extends Component {

    
    render() {
        const { auth } = this.props;
        return (
            <BrowserRouter>
            <div className="uk-container uk-container-small">
                <Navbar/>
            </div>
                <Switch>
                    <Route exact path="/" component={UserIsAuthenticated(StartPage)}></Route>
                    <Route exact path="/home" component={UserIsAuthenticated(StartPage)}></Route>
                    <Route exact path ="/movies" component= {UserIsAuthenticated(MoviesPage)}></Route>
                    <Route exact path ="/favorites" component= {UserIsAuthenticated(Favorites)}></Route>
                    <Route exact path="/movies/:movieId" render={(props) => (
                          auth.uid ?
                          <MovieDetails movieId={props.location.pathname.replace('/movies/','')}/> 
                          :
                          <Redirect to='/login'/>
                        )}></Route>
                    <Route exact path="/login" component={UserIsNotAuthenticated(Login)}></Route>
                    <Route exact path="/signup" component={UserIsNotAuthenticated(SignUp)}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

 

export default compose(
    firebaseConnect(),
    connect((state, props) =>({
        auth: state.firebase.auth
    }))
)(Router)