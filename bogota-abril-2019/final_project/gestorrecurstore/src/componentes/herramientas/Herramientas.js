import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Herramientas = ({ herramientas,firestore }) => {
    if (!herramientas) return <Spinner />;
    const toolsIcon = <FontAwesomeIcon icon={faTools} />;
    const plusIcon = <FontAwesomeIcon icon={faPlus} />;
    const infoIcon = <FontAwesomeIcon icon={faInfo} />;
    const trashIcon = <FontAwesomeIcon icon={faTrash} />;
    const checkIcon = <FontAwesomeIcon icon={faCheck} color="green"/>;
    const timesIcon = <FontAwesomeIcon icon={faTimes} color="red" />;

    const eliminarHerramienta = (id) => {
        firestore.delete({
            collection:'herramientas',
            doc:id
        });
    }

    return (
        <article>
            <section className="buttonSection">
                <Link to="/herramientas/nueva">
                    <button>{plusIcon} Nueva</button>
                </Link>
            </section>
            <section className="tableContainer">
                <h1>{toolsIcon} Herramientas</h1>
                <table className="blueTable">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Descripción</th>
                            <th>Marca</th>
                            <th>Disponible</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {herramientas.map(herramienta => (
                            <tr key={herramienta.id}>
                                <td>{herramienta.serial}</td>
                                <td>{herramienta.descripcion}</td>
                                <td>{herramienta.marca}</td>
                                <td>{herramienta.disponible ? checkIcon : timesIcon} </td>
                                <td>
                                    <Link to={`/herramientas/mostrar/${herramienta.id}`}>
                                        <button>{infoIcon} Detalle</button>
                                    </Link>
                                    <button className="deleteButton" onClick={() => eliminarHerramienta(herramienta.id)}>{trashIcon} Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </article>
    );
}

export default compose(
    firestoreConnect([{ collection: 'herramientas' }]),
    connect((state, props) => ({
        herramientas: state.firestore.ordered.herramientas
    }))
)(Herramientas);