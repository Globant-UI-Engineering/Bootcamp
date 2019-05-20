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
            input: {
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
                            className={this.state.action === "login" ?  "selected" : null}
                            onClick={() => this.showLogin()}>
                            Log In
                        </button>
                        <button 
                            type="button"
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
                            onChange={(event) => this.onChangeHandler(event)}/>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(event) => this.onChangeHandler(event)}/>
                    </div>
                    <button type="submit" onClick={() => {this.handleSubmit()}}>{this.state.name}</button>
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
            input: {
                username: 
                    event.target.name === "username" ? event.target.value : this.state.input.username,
                password: 
                    event.target.name === "password" ? event.target.value : this.state.input.password,
            }
        });
    }

    handleSubmit() {
        if (this.validateInputs()) {
            this.setState({
                message: {
                    description: 'Loading...',
                    success: true
                }
            });

            if (this.state.action === "login") {
                logIn(this.state.input.username, this.state.input.password);
            } else if (this.state.action === "signup") {
                signUp(this.state.input.username, this.state.input.password);
            }
        }
        else {
            this.setState({
                message: {
                    description: 'It is not possible to have empty fields',
                    success: false,
                },
            });
        }
    }

    validateInputs() {
        return this.state.input.username !== '' && this.state.input.password !== '';
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default HomePage;
