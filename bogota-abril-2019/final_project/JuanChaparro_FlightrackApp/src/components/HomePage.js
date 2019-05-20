import React, { Component } from 'react';
import AppLogo from '../images/flightrack-logo.png';
import { logIn, signUp }  from '../services/authservice';
import { Redirect } from 'react-router-dom';
import './styles/HomePage.css';
import store from '../store';

class HomePage extends Component {
    constructor() {
        super();
        this._isMounted = false;

        this.state = {
            isAuthenticated: store.getState().user.isAuthenticated,
            action: 'login',
            name: 'Log In',
            desc: 'Member Login',
            inputs: {
                username: '',
                password: '',
            },
            message: {
                description: '',
                success: false,
            },
        };

        store.subscribe(() => {
            if (this._isMounted) {
                this.setState({
                    isAuthenticated: store.getState().user.isAuthenticated,
                    message: store.getState().response,
                });
            }
        })
    }

    render() {
        if (this.state.isAuthenticated) {
            return <Redirect to="/"></Redirect>;
        } else {
            return (   
                <div className="main-container">
                    <img className="main-logo" src={AppLogo} alt="Flightrack Logo"/>
                    <div className="home-btn-container">
                        <button 
                            type="button"
                            aria-label="login"
                            className={this.state.action === "login" ?  "selected" : null}
                            onClick={() => this.showLogin()}>
                            Log In
                        </button>
                        <button 
                            type="button"
                            aria-label="signup"
                            className={this.state.action === "signup" ?  "selected" : null}
                            onClick={() => this.showSignup()}>
                            Sign Up
                        </button>
                    </div>
                    <h1>{this.state.desc}</h1>
                    <div className="input-container">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            aria-label="Username is required"
                            onChange={(event) => this.onChangeHandler(event)}/>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            aria-label="Password is required"
                            onChange={(event) => this.onChangeHandler(event)}/>
                    </div>
                    <button type="submit" aria-label="submit" onClick={() => {this.handleSubmit()}}>{this.state.name}</button>
                    {this.state.message.success ? 
                        <p className="success-message">{this.state.message.description}</p> : 
                        <p className="error-message">{this.state.message.description}</p>}
                </div>
            );
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    showLogin() {
        this.setState({
            name: 'Log In',
            action: 'login',
            desc: 'Member Login',
            message: {
                description: '',
            },
        });
    }

    showSignup() {
        this.setState({
            name: 'Sign Up',
            action: 'signup',
            desc: 'Sign Up Now',
            message: {
                description: '',
            },
        });
    }

    onChangeHandler(event) {
        this.setState({
            inputs: {
                username: 
                    event.target.name === "username" ? event.target.value : this.state.inputs.username,
                password: 
                    event.target.name === "password" ? event.target.value : this.state.inputs.password,
            }
        });
    }

    handleSubmit() {
        if (this.validateInputs()) {
            this.showMessage('Loading...', true);

            if (this.state.action === "login") {
                logIn(this.state.inputs.username, this.state.inputs.password);
            } else if (this.state.action === "signup") {
                signUp(this.state.inputs.username, this.state.inputs.password);
            }
        }
        else {
            this.showMessage('It is not possible to have empty fields', false);
        }
    }

    showMessage(description, success) {
        this.setState({
            message: {
                description,
                success,
            }
        });
    }

    validateInputs() {
        return this.state.inputs.username !== '' && this.state.inputs.password !== '';
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default HomePage;
