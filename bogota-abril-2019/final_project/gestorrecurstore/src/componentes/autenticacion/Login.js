import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

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
        e.preventDefault();
        const { firebase } = this.props;
        const { email, password } = this.state;
        firebase.login({ email, password })
            .then(resultado => console.log('Exito'))
            .catch(erro => console.log('error'))
    }

    render() {

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