import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SignIn from './Auth/SignIn';
import SignOut from './Auth/SignOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-s-alert/dist/s-alert-default.css';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
import './Const.js';
import ReduxNavigationContainer from './Redux/ReduxNavigationContainer';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.showSignIn_signOut = this.showSignIn_signOut.bind(this);
    }

    state = {
        signIn: false
    }

    showSignIn_signOut(){
        this.setState({
            signIn: !this.state.signIn
        })
        this.forceUpdate();
    }

    render () {
        if(this.state.signIn){
            return (
                <header className = "App-header" role="presentation">
                    <h1>NomadsNearU</h1>
                    <img src = { logo } className = "App-logo" alt = "logo"></img>
                    <div onClick={() => this.showSignIn_signOut()}><SignOut/></div>
                </header>
            );
        } else {
            return (
                <header className = "App-header" role="presentation">
                    <h1>NomadsNearU</h1>
                    <img src = { logo } className = "App-logo" alt = "logo"></img>
                    <div onClick={() => this.showSignIn_signOut()}><SignIn/></div>
                </header>
            );
        }
    }
}

class Footer extends React.Component {
    render () {
        return (
            <div className = "App">
                <footer className = "App-footer" role="presentation">
                    Made by: Alvaro Ponguta. Globant - Bootcamp
                </footer>
            </div>
        );
    }
}

class NomadsNearU extends React.Component {
    render () {
        return (
            <div> 
                <Header/>
                <ReduxNavigationContainer/>
                <Footer/>
                <Alert stack={{limit: 3}}/>
            </div>
        );
    }
}

export default NomadsNearU;