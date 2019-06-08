import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './NuevaPersona.css';
import { firestoreConnect } from 'react-redux-firebase'


const newUserIcon = <FontAwesomeIcon icon={faUserPlus} />;
const undoIcon = <FontAwesomeIcon icon={faUndo} />;
const universityIcon = <FontAwesomeIcon icon={faUniversity} />;
const informationIcon = <FontAwesomeIcon icon={faAddressCard} />;

class NuevaPersona extends Component {
    state = {
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        correoElectronico: '',
        telefono: '',
        codigoUniversitario: '',
        facultad: '',
        tipo: 'Estudiante de Pregrado'
    }

    changeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    agregarUsuario = (e) => {
        e.preventDefault();
        const nuevoUsuario = { ...this.state };
        const { firestore, history } = this.props;
        firestore.add({collection:'personas'},nuevoUsuario).then(()=>history.push('/Usuarios'))
    }

    render() {
        return (
            <article>
                <section className="undoButton">
                    <Link to="/Usuarios">
                        <button>{undoIcon} Atras</button>
                    </Link>
                </section>
                <section className="container">
                    <h1>{newUserIcon} Nuevo Usuario</h1>
                    <form onSubmit={this.agregarUsuario}>
                        <fieldset>
                            <legend>{informationIcon} Datos Básicos</legend>
                            <div className="nombreStyle">
                                <label htmlFor="primerNombre">*Primer Nombre:</label>
                                <input type="text" placeholder="Primer Nombre" name="primerNombre" id="primerNombre" onChange={this.changeData} value={this.state.primerNombre} required />
                            </div>
                            <div className="nombreStyle">
                                <label htmlFor="segundoNombre" >Segundo Nombre:</label>
                                <input type="text" placeholder="Segundo Nombre" name="segundoNombre" id="segundoNombre" onChange={this.changeData} value={this.state.segundoNombre} />
                            </div>
                            <div className="nombreStyle">
                                <label htmlFor="primerApellido">*Primer Apellido:</label>
                                <input type="text" placeholder="Primer Apellido" name="primerApellido" id="primerApellido" onChange={this.changeData} value={this.state.primerApellido} required />
                            </div>
                            <div className="nombreStyle">
                                <label htmlFor="segundoApellido">Segundo Apellido:</label>
                                <input type="text" placeholder="Segundo Apellido" name="segundoApellido" id="segundoApellido" onChange={this.changeData} value={this.state.segundoApellido} />
                            </div>
                            <div>
                                <label htmlFor="email">*Correo Electrónico:</label>
                                <input type="email" placeholder="Correo Electronico" name="correoElectronico" id="correoElectronico" onChange={this.changeData} value={this.state.correoElectronico} required />
                            </div>
                            <div>
                                <label htmlFor="telefono">*Télefono:</label>
                                <input type="text" placeholder="Telefono" name="telefono" id="telefono" onChange={this.changeData} value={this.state.telefono} required />
                            </div>

                        </fieldset>

                        <fieldset>
                            <legend>{universityIcon} Datos de la Universidad</legend>
                            <div>
                                <label htmlFor="codigo">*Codigo:</label>
                                <input type="text" placeholder="Codigo" name="codigoUniversitario" id="codigoUniversitario" onChange={this.changeData} value={this.state.codigoUniversitario} required />
                            </div>
                            <div>
                                <label htmlFor="facultad">*Facultad:</label>
                                <select id="facultad" name="facultad" onChange={this.changeData} value={this.state.facultad} required>
                                    <option value="Ingeniería">Ingeniería</option>
                                    <option value="Administración">Administración</option>
                                    <option value="Medicina">Medicina</option>
                                    <option value="Ciencias">Ciencias</option>
                                    <option value="Artes">Artes</option>
                                    <option value="Arquitectura">Arquitectura</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="tipo">*Tipo de Usuario:</label>
                                <select id="tipo" name="tipo" onChange={this.changeData} value={this.state.tipo} required>
                                    <option value="Estudiante de Pregrado">Estudiante de Pregrado</option>
                                    <option value="Estudiante de Posgrado">Estudiante de Posgrado</option>
                                    <option value="Profesor">Profesor</option>
                                </select>
                            </div>
                        </fieldset>
                        <input type="submit" value={`Agregar Usuario`} />
                    </form>
                </section>
            </article>
        );
    }
}

export default firestoreConnect()(NuevaPersona);