import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { notifyUser } from '../../actions/notifyActions';
import Alert from '../layout/Alert';
import { Link } from 'react-router-dom';

import './Login.css';

class Login extends Component {
    state={
        email:'',
        password:''
    }

    onSubmit = e =>{
        e.preventDefault();

        const { firebase,notifyUser } = this.props;
        const { email,password } = this.state;

        firebase.createUser({email,password}).catch(err=> notifyUser('User Already Exists','error'))
        
    }

    onChange= e => this.setState({[e.target.name]: e.target.value});

  render() {
      const { message,messageType } =  this.props.notify;
    return (
        <div className="background-login">
            <div className="login-container">
                <div className="login-content">
                    <h1>Sign up</h1>
                    {message ? (
                        <Alert message={message} messageType={messageType}/>
                    ) : null}
                    <form onSubmit={this.onSubmit}>
                        <div className="login-container-content">
                            <label className="" htmlFor="email">Email</label>
                            <input 
                                className="form-login"
                                type="text" 
                                name="email" 
                                placeholder="e.g. example@example.com"
                                required aria-required="true" 
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="login-container-content">
                            <label className="" htmlFor="password">Password</label>
                            <input 
                                className="form-login"
                                type="password" 
                                name="password" 
                                placeholder="Type your password"
                                required aria-required="true" 
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" value="Register" className="btn btn-login">Sign up</button>
                        </div>

                        <p className="register-text">Already have an account? <Link to="/login"><span>Sign in.</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}

Login.propTypes = {
    firebase: PropTypes.object.isRequired,
    notify: PropTypes.object.isRequired,
    notifyUser : PropTypes.func.isRequired
};

export default compose(
    firebaseConnect(),
    connect((state,props)=> ({
        notify: state.notify
    }),{notifyUser})
)(Login);
