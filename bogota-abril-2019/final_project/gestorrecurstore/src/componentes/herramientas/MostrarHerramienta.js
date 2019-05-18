import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner.js';
import ComputadorImage from '../../images/computador.png';
import EscanerImage from '../../images/escaner.png';
import MonitorImage from '../../images/monitor.png';
import ImpresoraImage from '../../images/impresora.png';
import './MostrarHerramientas.css';
import FichaPrestamo from './FichaPrestamo.js';

class MostrarHerramienta extends Component {
    devolucion = (id) => {
        const { firestore } = this.props;
        const herramientaActualizada = { ...this.props.herramienta };
        herramientaActualizada.prestado = [];
        herramientaActualizada.disponible = true;
        firestore.update({
            collection: 'herramientas',
            doc: herramientaActualizada.id
        }, herramientaActualizada);
    }
    render() {
        const { herramienta } = this.props

        if (!herramienta) return <Spinner />;

        const undoIcon = <FontAwesomeIcon icon={faUndo} />;
        const editIcon = <FontAwesomeIcon icon={faPencilAlt} />;
        const image = this.getImageHerramienta(herramienta);
        const buttonPrestamo = this.getButtonPrestamo(herramienta);
        const usuarioPrestamo = this.getUsuarioPrestamo(herramienta);
        const buttonDevolucion = this.getButtonDevolucion(herramienta);

        return (
            <article>
                <section className="undoButton">
                    <Link to="/">
                        <button>{undoIcon} Atras</button>
                    </Link>
                    <Link to={`/herramientas/editar/${herramienta.id}`}>
                        <button className="editarButtonStyle">{editIcon} Editar</button>
                    </Link>
                </section>
                <section className="mostrarHerramientaContainer">
                    <h1>{herramienta.descripcion} - {herramienta.marca}</h1>
                    {image}
                    <p>Tipo: {herramienta.tipo}</p>
                    <p>Serial: {herramienta.serial}</p>
                    <p>Modelo: {herramienta.modelo}</p>
                    {buttonPrestamo}
                </section>
                <section className="mostrarPrestamoContainer">
                    {usuarioPrestamo}
                    {buttonDevolucion}
                </section>
            </article>
        )
    }

    getImageHerramienta(herramienta) {
        if (herramienta.descripcion === 'Computador') {
            return <img src={ComputadorImage} alt="Computador" />;
        }
        else if (herramienta.descripcion === 'Impresora') {
            return <img src={ImpresoraImage} alt="Impresora" />;
        }
        else if (herramienta.descripcion === 'Monitor') {
            return <img src={MonitorImage} alt="Monitor" />;
        }
        else {
            return <img src={EscanerImage} alt="Escaner" />;
        }
    }

    getButtonPrestamo(herramienta) {
        const calendarIcon = <FontAwesomeIcon icon={faCalendar} />;

        if (herramienta.disponible) {
            return (<Link to={`/herramientas/prestamo/${herramienta.id}`}>
                <button className="prestamoButton">{calendarIcon} Prestamo</button>
            </Link>);
        }
        return (<p>La herramienta no esta disponible!</p>);
    }

    getButtonDevolucion(herramienta) {
        if (!herramienta.disponible) {
            return (<button className="prestamoButton" onClick={this.devolucion}> Devolucion</button>);
        }
        return null;
    }

    getUsuarioPrestamo(herramienta) {
        const usuario = herramienta.prestado[0];
        if (!herramienta.disponible) {
            return (
                <FichaPrestamo usuario={usuario} />
            );
        }
        return null;
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
)(MostrarHerramienta);