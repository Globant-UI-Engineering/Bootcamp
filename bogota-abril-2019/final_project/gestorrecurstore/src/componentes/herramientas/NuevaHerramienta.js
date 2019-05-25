import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faTools, faToolbox, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firestoreConnect } from 'react-redux-firebase';


const toolIcon = <FontAwesomeIcon icon={faTools} />;
const undoIcon = <FontAwesomeIcon icon={faUndo} />;
const toolBoxIcon = <FontAwesomeIcon icon={faToolbox} />;

class NuevaHerramienta extends Component {
    state = {
        serial: '',
        descripcion: '',
        marca: '',
        modelo: '',
        tipo: ''
    }

    agregarHerramienta = (e) => {
        e.preventDefault();
        const nuevaHerramienta = { ...this.state };
        nuevaHerramienta.prestado = [];
        nuevaHerramienta.disponible = true;
        const { firestore, history } = this.props;
        firestore.add({ collection: 'herramientas' }, nuevaHerramienta).then(() => history.push('/'))
    }

    changeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <article>
                <section className="undoButton">
                    <Link to="/">
                        <button>{undoIcon} Atras</button>
                    </Link>
                </section>
                <section className="container">
                    <h1>{toolIcon} Nueva Herramienta</h1>
                    <form onSubmit={this.agregarHerramienta}>
                        <fieldset>
                            <legend>{toolBoxIcon} Descripción </legend>
                            <div>
                                <label htmlFor="serial">Serial:</label>
                                <input type="text" placeholder="Serial" name="serial" id="serial" onChange={this.changeData} value={this.state.serial} required />
                            </div>
                            <div>
                                <label htmlFor="descripcion">Descripción:</label>
                                <input type="text" placeholder="Descripción" name="descripcion" id="descripcion" onChange={this.changeData} value={this.state.descripcion} required />
                            </div>
                            <div>
                                <label htmlFor="marca" >Marca:</label>
                                <input type="text" placeholder="Marca" name="marca" id="marca" onChange={this.changeData} value={this.state.marca} />
                            </div>
                            <div>
                                <label htmlFor="modelo">Modelo:</label>
                                <input type="text" placeholder="Modelo" name="modelo" id="modelo" onChange={this.changeData} value={this.state.modelo} required />
                            </div>
                            <div>
                                <label htmlFor="tipo">Tipo:</label>
                                <select id="tipo" name="tipo" onChange={this.changeData} value={this.state.tipo} required>
                                    <option value="Computador">Computador</option>
                                    <option value="Escaner">Escaner</option>
                                    <option value="Impresora">Impresora</option>
                                    <option value="Monitor">Monitor</option>
                                </select>
                            </div>
                        </fieldset>

                        <input type="submit" value="Agregar Herramienta" />
                    </form>
                </section>
            </article>
        );
    }
}
export default firestoreConnect()(NuevaHerramienta);