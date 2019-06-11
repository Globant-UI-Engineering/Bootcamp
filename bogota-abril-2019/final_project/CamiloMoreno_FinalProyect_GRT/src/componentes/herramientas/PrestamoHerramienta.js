import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner.js';
import Alerta from '../layout/Alerta';
import { Link } from 'react-router-dom';

import { faHandHolding, faUndo } from '@fortawesome/free-solid-svg-icons';

import FichaPersona from '../persona/FichaPersona';

import { buscarUsuario } from '../../acciones/buscarUsuarioAction';

const holdingIcon = <FontAwesomeIcon icon={faHandHolding} />;
const undoIcon = <FontAwesomeIcon icon={faUndo} />;

class PrestamoHerramienta extends Component {
    state = {
        codigoUsuario: '',
        conResultados: true,
        mostrarUsuario: false
    }

    leerCodigo = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getUsuario = (e) => {
        e.preventDefault();

        const { codigoUsuario } = this.state;
        const { firestore, buscarUsuario } = this.props;
        const colection = firestore.collection('personas');
        const consulta = colection.where("codigoUniversitario", "==", codigoUsuario).get();

        consulta.then(resultado => {
            if (resultado.empty) {
                buscarUsuario(-1,{});
                this.setState({
                    conResultados: false,
                    mostrarUsuario: false
                })
            } else {
                const datos = resultado.docs[0];
                buscarUsuario(datos.id, datos.data());
                this.setState({
                    conResultados: true,
                    mostrarUsuario: true
                })
            }
        })
    }

    solicitarPrestamo = (e) => {
        let { usuario } = this.props;
        usuario.fecha_solicitud = new Date().toLocaleDateString();

        let prestado = [];
        prestado = [...this.props.herramienta.prestado, usuario]
        const herramientaActualizada = { ...this.props.herramienta };
        herramientaActualizada.prestado = prestado;
        herramientaActualizada.disponible = false;

        let usuarioActualizado = { ...usuario };
        usuarioActualizado.herramientasSolicitadas = usuarioActualizado.herramientasSolicitadas ? usuarioActualizado.herramientasSolicitadas : [];
        usuarioActualizado.herramientasSolicitadas.push(this.props.herramienta);

        const { firestore, history } = this.props;

        firestore.update({
            collection: 'personas',
            doc: usuario.id
        }, usuarioActualizado);

        firestore.update({
            collection: 'herramientas',
            doc: herramientaActualizada.id
        }, herramientaActualizada).then(this.usuario = undefined, history.push('/'));
    }


    render() {
        const { herramienta } = this.props;

        if (!herramienta) return <Spinner />;

        const { conResultados,mostrarUsuario } = this.state;
        const { usuario } = this.props;
        let fichaUsuario, botonPrestamo, alerta;

        if (mostrarUsuario) {
            fichaUsuario = <FichaPersona usuario={usuario} />
            botonPrestamo = <button className="solicitudPrestamoButton" onClick={this.solicitarPrestamo}> Solicitar Prestamo</button>
        } else {
            fichaUsuario = null;
            botonPrestamo = null;
        }

        if (conResultados) {
            alerta = null;
        } else {
            alerta = <Alerta mensaje="No se ha encontrado ningún usuario!" />;

        }

        return (
            <article>
                <section className="undoButton">
                    <Link to="/">
                        <button>{undoIcon} Volver al Listado</button>
                    </Link>
                </section>
                <section className="container">
                    <h1>{holdingIcon} Prestamo de {herramienta.descripcion} </h1>
                    <form onSubmit={this.getUsuario}>
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
                    {alerta}
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
    connect(({ firestore: { ordered }, usuario }, props) => ({
        herramienta: ordered.herramienta && ordered.herramienta[0],
        usuario: usuario
    }), { buscarUsuario })
)(PrestamoHerramienta);