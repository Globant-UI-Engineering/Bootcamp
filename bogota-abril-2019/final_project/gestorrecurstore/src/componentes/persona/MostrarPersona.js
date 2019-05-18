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
                <h2>{usuario.tipo}</h2>
                <p>telefono: {usuario.telefono}</p>
                <p>telefono: {usuario.correoElectronico}</p>
                <p>telefono: {usuario.facultad}</p>
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