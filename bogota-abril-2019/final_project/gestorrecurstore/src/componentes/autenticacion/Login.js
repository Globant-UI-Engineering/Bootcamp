import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../layout/Spinner.js';

import './Login.css';

const passIcon = <FontAwesomeIcon icon={faLock} size="2x" />;
const mailIcon = <FontAwesomeIcon icon={faUserAlt} size="2x" />;
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
        this.loading = true;
        console.log(this.loading)
        e.preventDefault();
        const { firebase } = this.props;
        const { email, password } = this.state;
        firebase.login({ email, password })
            .then(resultado => this.loading = false)
            .catch(error => {alert('El usuario o la contraseña son incorrectos');this.loading = false})
    }

    render() {
        if (this.loading) return <Spinner />;
        return (
            <article>
                <section className="loginSection">
                    <form onSubmit={this.login}>
                        <h1>Iniciar Sesión</h1>
                        <label htmlFor="email"><b>{mailIcon}</b></label>
                        <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.cambia} required />

                        <label htmlFor="password"><b>{passIcon}</b></label>
                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.cambia} required />

                        <button className="login" type="submit">Iniciar Sesión</button>
                    </form>
                </section>
            </article>
        )
    }


}

export default firebaseConnect()(Login);