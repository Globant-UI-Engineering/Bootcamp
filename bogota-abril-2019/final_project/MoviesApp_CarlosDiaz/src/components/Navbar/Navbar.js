import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {setFilteredMovies} from '../../actions/moviesActions';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import {getUserName} from '../../actions/moviesActions';

class Navbar extends Component {

    componentDidMount(){
        this.props.getUserName();
    }
    
    state={
        userLoggedIn:false,
        displayName:''
    }

   static getDerivedStateFromProps(props) {
    const { auth } = props;
        if(auth.uid){
           let displayName = auth.displayName?auth.displayName:null;
            return {
                userLoggedIn:true,
                displayName
            }
        } else{
            return {
                userLoggedIn:false,
                displayName:'',
            }
        }
    }

    logOut = () =>{
        const { firebase } = this.props;
        this.props.setFilteredMovies([]);
        firebase.logout();
    }

    render(){
        const { userLoggedIn, displayName } = this.state;
        const username = displayName? displayName : this.props.username;
        return (
                <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
                    {userLoggedIn   ?
                    <div className="uk-navbar-left" role="navigation" aria-label="Movies Navigation">
                        <ul className="uk-navbar-nav uk-light">
                           <li>
                                <NavLink to="/home" activeClassName="uk-active">home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/movies" activeClassName="uk-active">movies</NavLink>
                            </li>
                        </ul>
                    </div> : null}
                    {userLoggedIn ? 
                    <div className="uk-navbar-right" role="navigation" aria-label="Profile Navigation">
                        <ul className="uk-navbar-nav uk-light">
                            <li>
                                <i className="fas fa-user"></i>{' '}
                                {username}
                                <div className="uk-navbar-subtitle">
                                   <small>
                                       <NavLink className="uk-button uk-button-link uk-text-capítalize" activeClassName="uk-active" to ="/favorites" >Favorites</NavLink> 
                                        {'  /  '}
                                       <button onClick={this.logOut} className="uk-button uk-button-link uk-text-uppercase">log out</button>
                                    </small>
                                </div>
                            </li>
                    </ul>
                    </div> : null}
                </nav>
                
        );
    }
};

Navbar.propTypes={
    setFilteredMovies: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    username: state.movies.username,
    auth: state.firebase.auth,
})

export default compose( 
    connect(mapStateToProps,{setFilteredMovies, getUserName}),
    firebaseConnect())(Navbar);
