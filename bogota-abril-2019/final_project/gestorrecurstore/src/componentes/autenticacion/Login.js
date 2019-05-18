import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    cambia = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        const { firebase } = this.props;
        const {email,password}=this.state;
        firebase.login({email,password})
        .then(resultado=>console.log('Exito'))
        .catch(erro=>console.log('error'))
    }

    render() {

        return (
            <article>
                <section className="loginSection">
                    <form onSubmit={this.login}>
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.cambia} required />

                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.cambia} required />

                        <button className="login" type="submit">Login</button>
                    </form>
                </section>
            </article>
        )
    }


}

export default firebaseConnect()(Login);