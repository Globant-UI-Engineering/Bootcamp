import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner.js';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Persona.css';

const Persona = ({personas,firestore}) => {

    if (!personas) return <Spinner />;
    const usersIcon = <FontAwesomeIcon icon={faUsers} />;
    const plusIcon = <FontAwesomeIcon icon={faPlus} />;
    const infoIcon = <FontAwesomeIcon icon={faInfo} />;
    const trashIcon = <FontAwesomeIcon icon={faTrash} />;
    
    const eliminarUsuario = (id) => {
        firestore.delete({
            collection:'personas',
            doc:id
        });
    }

    return (
        <article>
            <section className="buttonSection">
                <Link to="/personas/nueva">
                    <button>{plusIcon} Nuevo</button>
                </Link>
            </section>
            <section className="tableContainer">
                <h1>{usersIcon} Usuarios</h1>
                <table className="blueTable">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Facultad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map(persona => (
                            <tr key={persona.id}>
                                <td>{persona.codigoUniversitario}</td>
                                <td>{persona.nombre} {persona.apellido}</td>
                                <td>{persona.facultad} </td>
                                <td>
                                    <Link to={`/personas/mostrar/${persona.id}`}>
                                        <button>{infoIcon} Detalle</button>
                                    </Link>
                                    <button className="deleteButton" onClick={() => eliminarUsuario(persona.id)}>{trashIcon} Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </article>
    );
}

/*personas.propTypes ={
    firestore: PropTypes.object.isRequired,
    personas:PropTypes.array
}*/

export default compose(
    firestoreConnect([{ collection: 'personas' }]),
    connect((state, props) => ({
        personas: state.firestore.ordered.personas
    }))
)(Persona);