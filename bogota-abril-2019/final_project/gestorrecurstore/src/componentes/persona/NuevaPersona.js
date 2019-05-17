import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const usersIcon = <FontAwesomeIcon icon={faUsers} />;
const plusIcon = <FontAwesomeIcon icon={faPlus} />;

class NuevaPersona extends Component {
    state = {}
    render() {
        return (
            <article>
                <section className="buttonSection">
                    <Link to="/personas/nueva">
                        <button>{plusIcon} Nuevo</button>
                    </Link>
                </section>
                <section className="container">
                    <h1>{usersIcon} Nuevo Usuarios</h1>
                </section>
            </article>
        );
    }
}

export default NuevaPersona;