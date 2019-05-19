import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner.js';
import './MostrarPersona.css';

const MostrarPersona = ({ usuario }) => {
    if (!usuario) return <Spinner />;
    const undoIcon = <FontAwesomeIcon icon={faUndo} />;
    const editIcon = <FontAwesomeIcon icon={faPencilAlt} />;


    return (
        <article>
            <section className="undoButton">
                <Link to="/Usuarios">
                    <button>{undoIcon} Atras</button>
                </Link>
                <Link to={`/personas/editar/${usuario.id}`}>
                    <button className="editarButtonStyle">{editIcon} Editar</button>
                </Link>
            </section>
            <section className="mostrarPersonaContainer">
                <h1>{usuario.primerNombre} {usuario.segundoNombre} {usuario.primerApellido} {usuario.segundoApellido} </h1>
                <h2>{usuario.codigoUniversitario} - {usuario.tipo}</h2>
                <p>Telefono: <span> {usuario.telefono}</span></p>
                <p>Correo Electronico: <span>{usuario.correoElectronico}</span></p>
                <p>Facultad: <span>{usuario.facultad} </span></p>
            </section>
        </article>
    );
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'personas',
            storeAs: 'usuario',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered } }, props) => ({
        usuario: ordered.usuario && ordered.usuario[0]
    }))
)(MostrarPersona);