import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner.js';
import { Link } from 'react-router-dom';

import { faUserPlus, faUndo, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const userIcon = <FontAwesomeIcon icon={faUserPlus} />;
const undoIcon = <FontAwesomeIcon icon={faUndo} />;
const informationIcon = <FontAwesomeIcon icon={faAddressCard} />;

class EditarHerramienta extends Component {

    serialInput = React.createRef();
    descripcionInput = React.createRef();
    marcaInput = React.createRef();
    modeloInput = React.createRef();
    tipoInput = React.createRef();

    render() {
        const { herramienta } = this.props;
        if (!herramienta) return <Spinner />;

        return (
            <article>
                <section className="undoButton">
                    <Link to="/">
                        <button>{undoIcon} Volver al Listado</button>
                    </Link>
                </section>
                <section className="container">
                    <h1>{userIcon} Editar Herramienta</h1>
                    <form onSubmit={this.editarHerramienta}>
                        <fieldset>
                            <legend>{informationIcon} Descripción </legend>
                            <div>
                                <label htmlFor="serial">Serial:</label>
                                <input type="text" placeholder="Serial" name="serial" id="serial" ref={this.serialInput} defaultValue={herramienta.serial} required />
                            </div>
                            <div>
                                <label htmlFor="descripcion">Descripción:</label>
                                <input type="text" placeholder="Descripción" name="descripcion" id="descripcion" ref={this.descripcionInput} defaultValue={herramienta.descripcion} required />
                            </div>
                            <div>
                                <label htmlFor="marca" >Marca:</label>
                                <input type="text" placeholder="Marca" name="marca" id="marca" ref={this.marcaInput} defaultValue={herramienta.marca} />
                            </div>
                            <div>
                                <label htmlFor="modelo">Modelo:</label>
                                <input type="text" placeholder="Modelo" name="modelo" id="modelo" ref={this.modeloInput} defaultValue={herramienta.modelo} required />
                            </div>
                            <div>
                                <label htmlFor="tipo">Tipo:</label>
                                <select id="tipo" name="tipo" ref={this.tipoInput} defaultValue={herramienta.tipo} required>
                                    <option value="Computador">Computador</option>
                                    <option value="Escaner">Escaner</option>
                                    <option value="Impresora">Impresora</option>
                                    <option value="Monitor">Monitor</option>
                                </select>
                            </div>
                        </fieldset>

                        <input type="submit" value="Editar Herramienta" />
                    </form>
                </section>
            </article>
        )
    }

    editarHerramienta = (e) => {
        e.preventDefault();
        const herramientaActualizada = {
            serial: this.serialInput.current.value,
            descripcion: this.descripcionInput.current.value,
            marca: this.marcaInput.current.value,
            modelo: this.modeloInput.current.value,
            tipo: this.tipoInput.current.value,
        }

        const { herramienta, firestore, history } = this.props;

        firestore.update({
            collection: 'herramientas',
            doc: herramienta.id
        }, herramientaActualizada).then(history.push('/'))
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
)(EditarHerramienta);