import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner.js';
import { Link } from 'react-router-dom';

import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

import FichaPersona from '../persona/FichaPersona';

const userIcon = <FontAwesomeIcon icon={faUserPlus} />;
const undoIcon = <FontAwesomeIcon icon={faUndo} />;

class PrestamoHerramienta extends Component {
    state = {
        codigoUsuario: '',
        usuario: {},
        conResultados: false
    }

    leerCodigo = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    bucarUsuario = (e) => {
        e.preventDefault();
        const { codigoUsuario } = this.state;
        const { firestore } = this.props;
        const colection = firestore.collection('personas');
        const consulta = colection.where("codigoUniversitario", "==", codigoUsuario).get();

        consulta.then(resultado => {
            if (resultado.empty) {
                this.setState({
                    usuario: {},
                    conResultados: false
                })
            } else {
                const datos = resultado.docs[0];
                this.setState({
                    usuario: datos.data(),
                    conResultados: true
                })
            }
        })
    }
    solicitarPrestamo = (e) => {
        const usuario= this.state.usuario;
        usuario.fecha_solicitud= new Date().toLocaleDateString();
        const herramientaActualizada= this.props.herramienta;
        herramientaActualizada.prestado.push(usuario);
        herramientaActualizada.disponible=false;
        const {firestore, history, herramienta}=this.props;

        firestore.update({
            collection:'herramientas',
            doc: herramienta.id
        },herramientaActualizada).then(history.push('/'));
    }


    render() {
        const { herramienta } = this.props;

        if (!herramienta) return <Spinner />;

        const { conResultados, usuario } = this.state;
        let fichaUsuario, botonPrestamo;
        if (conResultados) {
            fichaUsuario = <FichaPersona usuario={usuario} />
            botonPrestamo = <button className="prestamoButton" onClick={this.solicitarPrestamo}> Solicitar Prestamo</button>
        } else {
            fichaUsuario = null;
            botonPrestamo = null;
        }

        return (
            <article>
                <section className="undoButton">
                    <Link to="/">
                        <button>{undoIcon} Volver al Listado</button>
                    </Link>
                </section>
                <section className="container">
                    <h1>{userIcon} Solicitar Prestamo: {herramienta.descripcion} </h1>
                    <form onSubmit={this.bucarUsuario}>
                        <fieldset>
                            <legend> Busqueda de usuario </legend>
                            <div>
                                <label htmlFor="codigoUsuario">Codigo usuario:</label>
                                <input type="text" name="codigoUsuario" id="codigoUsuario" onChange={this.leerCodigo} required />
                            </div>
                            <input type="submit" value="Buscar Usuario" />
                        </fieldset>
                    </form>
                </section>
                <section>
                    {fichaUsuario}
                    {botonPrestamo}
                </section>
            </article>
        )
    }
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'herramientas',
            storeAs: 'herramienta',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered } }, props) => ({
        herramienta: ordered.herramienta && ordered.herramienta[0]
    }))
)(PrestamoHerramienta);