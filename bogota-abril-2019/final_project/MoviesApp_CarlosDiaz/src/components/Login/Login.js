import React, { Component, createRef } from 'react';
import {Link} from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class Login extends Component {

    emailInput = createRef();
    pwdInput = createRef();

    
    //iniciar sesion en firebase
    logIn = e =>{
        e.preventDefault();
        let email = this.emailInput.current.value;
        let password = this.pwdInput.current.value;
        
        const { firebase } = this.props;
        firebase.login({
            email,
            password
        }).then(resultado =>{ 
           console.log('successful');
        })
        .catch( error=> {
           window.alert(error.message);
        });
        
    }


    render() {
    
        return (
            <div className="uk-container uk-container-small uk-margin">
                <div className="uk-card  uk-card-default uk-align-center uk-width-1-2@m uk-width-1-2@s">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom uk-text-center uk-text-uppercase">moviesapp</h3>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.logIn}>
                        <div className="uk-card-body">
                            <div className="uk-margin">
                                <label id="email_label">Email:</label>
                                <input type="email" placeholder="Your email address" aria-labelledby="email_label" className="uk-input" name="email"  ref={this.emailInput} required/>
                            </div>
                            <div className="uk-margin">
                                <label id="password_label">Password:</label>
                                <input type="password" placeholder="Your password" className="uk-input"  aria-labelledby="password_label" name="password" ref={this.pwdInput} required/>
                            </div>
                        </div>
                        <div className="uk-card-footer uk-child-width-1-1@s uk-child-width-2-1@m" uk-margin="true">
                            <input 
                                type="submit"
                                className="uk-button uk-button-secondary"
                                value="Log In"/>
                            <Link to="/signup" className="uk-button uk-button-secondary uk-align-right">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
           
        );
    }
}

Login.propTypes = {
    firebase: PropTypes.object.isRequired,
}


export default  firebaseConnect()(Login);
