import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner.js';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const userIcon = <FontAwesomeIcon icon={faUser} />;
const undoIcon = <FontAwesomeIcon icon={faUndo} />;
const universityIcon = <FontAwesomeIcon icon={faUniversity} />;
const informationIcon = <FontAwesomeIcon icon={faAddressCard} />;

class EditarPersona extends Component {

    codigoUniversitarioInput = React.createRef();
    primerNombreInput = React.createRef();
    segundoNombreInput = React.createRef();
    primerApellidoInput = React.createRef();
    segundoApellidoInput = React.createRef();
    tipoInput = React.createRef();
    facultadInput = React.createRef();
    correoElectronicoInput = React.createRef();
    telefonoInput = React.createRef();

    editarUsuario = (e) => {
        e.preventDefault();
        const usuarioActualizado = {
            codigoUniversitario: this.codigoUniversitarioInput.current.value,
            primerNombre: this.primerNombreInput.current.value,
            segundoNombre: this.segundoNombreInput.current.value,
            primerApellido: this.primerApellidoInput.current.value,
            segundoApellido: this.segundoApellidoInput.current.value,
            tipo: this.tipoInput.current.value,
            facultad: this.facultadInput.current.value,
            correoElectronico: this.correoElectronicoInput.current.value,
            telefono: this.telefonoInput.current.value,
        }

        const { usuario, firestore, history } = this.props;

        firestore.update({
            collection: 'personas',
            doc: usuario.id
        }, usuarioActualizado).then(history.push('/Usuarios'))

    }

    render() {
        const { usuario } = this.props;

        if (!usuario) return <Spinner />;

        return (
            <article>
                <section className="undoButton">
                    <Link to="/Usuarios">
                        <button>{undoIcon} Volver al Listado</button>
                    </Link>
                </section>
                <section className="container">
                    <h1>{userIcon} Editar Usuario</h1>
                    <form onSubmit={this.editarUsuario}>
                        <fieldset>
                            <legend>{informationIcon} Datos Básicos</legend>
                            <div className="nombreStyle">
                                <label htmlFor="primerNombre">*Primer Nombre:</label>
                                <input type="text" placeholder="Primer Nombre" name="primerNombre" id="primerNombre" ref={this.primerNombreInput} defaultValue={usuario.primerNombre} required />
                            </div>
                            <div className="nombreStyle">
                                <label htmlFor="segundoNombre" >Segundo Nombre:</label>
                                <input type="text" placeholder="Segundo Nombre" name="segundoNombre" id="segundoNombre" ref={this.segundoNombreInput} defaultValue={usuario.segundoNombre} />
                            </div>
                            <div className="nombreStyle">
                                <label htmlFor="primerApellido">*Primer Apellido:</label>
                                <input type="text" placeholder="Primer Apellido" name="primerApellido" id="primerApellido" ref={this.primerApellidoInput} defaultValue={usuario.primerApellido} required />
                            </div>
                            <div className="nombreStyle">
                                <label htmlFor="segundoApellido">Segundo Apellido:</label>
                                <input type="text" placeholder="Segundo Apellido" name="segundoApellido" id="segundoApellido" ref={this.segundoApellidoInput} defaultValue={usuario.segundoApellido} />
                            </div>
                            <div>
                                <label htmlFor="email">*Correo Electronico:</label>
                                <input type="email" placeholder="Correo Electronico" name="correoElectronico" id="correoElectronico" ref={this.correoElectronicoInput} defaultValue={usuario.correoElectronico} required />
                            </div>
                            <div>
                                <label htmlFor="telefono">*Télefono:</label>
                                <input type="text" placeholder="Telefono" name="telefono" id="telefono" ref={this.telefonoInput} defaultValue={usuario.telefono} required />
                            </div>

                        </fieldset>

                        <fieldset>
                            <legend>{universityIcon} Datos de la Universidad</legend>
                            <div>
                                <label htmlFor="codigo">*Codigo:</label>
                                <input type="text" placeholder="Codigo" name="codigoUniversitario" id="codigoUniversitario" ref={this.codigoUniversitarioInput} defaultValue={usuario.codigoUniversitario} required />
                            </div>
                            <div>
                                <label htmlFor="facultad">Facultad*:</label>
                                <select id="facultad" name="facultad" ref={this.facultadInput} defaultValue={usuario.facultad} required>
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
                                <select id="tipo" name="tipo" ref={this.tipoInput} defaultValue={usuario.tipo} required>
                                    <option value="Estudiante de Pregrado">Estudiante de Pregrado</option>
                                    <option value="Estudiante de Posgrado">Estudiante de Posgrado</option>
                                    <option value="Profesor">Profesor</option>
                                </select>
                            </div>
                        </fieldset>
                        <input type="submit" value="Editar Usuario" />
                    </form>
                </section>
            </article>
        );
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
)(EditarPersona);