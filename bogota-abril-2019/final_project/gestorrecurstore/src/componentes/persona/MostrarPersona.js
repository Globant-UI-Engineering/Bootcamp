import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { faUndo, faPencilAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner.js';
import './MostrarPersona.css';

class MostrarPersona extends Component {

    render() {
        const { usuario } = this.props

        if (!usuario) return <Spinner />;
        const undoIcon = <FontAwesomeIcon icon={faUndo} />;
        const editIcon = <FontAwesomeIcon icon={faPencilAlt} />;
        const bookIcon = <FontAwesomeIcon icon={faBook} />;
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
                {usuario.herramientasSolicitadas && usuario.herramientasSolicitadas.length ?
                    (<section className="tableContainer">
                        <h1> {bookIcon} Herramientas en Solicitadas</h1>
                        <table className="blueTable">
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Descripción</th>
                                    <th>Marca</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuario.herramientasSolicitadas.map(herramienta => (
                                    <tr key={herramienta.id}>
                                        <td>{herramienta.serial}</td>
                                        <td>{herramienta.descripcion}</td>
                                        <td>{herramienta.marca}</td>
                                        <td>
                                            <button className="deleteButton" onClick={() => this.devolucion(herramienta.id)}> Devolución</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>) : null
                }
            </article>
        )
    }

    devolucion = (id) => {
        debugger
        const { firestore } = this.props;
        const usuarioActualizado = { ...this.props.usuario };

        this.actualizarHerramienta(firestore, id);

        usuarioActualizado.herramientasSolicitadas = usuarioActualizado.herramientasSolicitadas.filter(x => x.id !== id);

        firestore.update({
            collection: 'personas',
            doc: usuarioActualizado.id
        }, usuarioActualizado);
    }

    actualizarHerramienta(firestore, id) {
        const colection = firestore.collection('herramientas');
        const consulta = colection.where("id", "==", id).get();
        consulta.then(resultado => {
            const datos = resultado.docs[0];
            const herramientaActualizada = datos.data();
            herramientaActualizada.prestado = [];
            herramientaActualizada.disponible = true;

            firestore.update({
                collection: 'herramientas',
                doc: herramientaActualizada.id
            }, herramientaActualizada);
        });
    }


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