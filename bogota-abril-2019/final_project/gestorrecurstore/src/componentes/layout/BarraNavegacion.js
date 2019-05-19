import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './BarraNavegacion.css';

const closeIcon = <FontAwesomeIcon icon={faSignOutAlt} size="1x" />;

class BarraNavegacion extends Component {
    state = {
        estaAutenticado: false
    }

    static getDerivedStateFromProps(props, state) {
        const { auth } = props;
        if (auth.uid) {
            return { estaAutenticado: true };
        } else {
            return { estaAutenticado: false };
        }
    }

    cerrarSesion = () => {
        const { firebase } = this.props;
        firebase.logout();
    }

    render() {
        const { estaAutenticado } = this.state;
        const { auth } = this.props;
        return (
            <nav>
                {estaAutenticado ? (
                    <ul>
                        <li>
                            <Link to={'/'}>Herramientas</Link>
                        </li>
                        <li>
                            <Link to={'/Usuarios'}>Usuarios</Link>
                        </li>
                        <section>
                            <button className="cerrarSesion" onClick={this.cerrarSesion}>{closeIcon}Cerrar Sesión</button>
                            <p>{auth.email}</p>
                        </section>
                    </ul>
                ) : <ul>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ul>
                }
            </nav>
        );
    }
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth
    }))
)(BarraNavegacion);