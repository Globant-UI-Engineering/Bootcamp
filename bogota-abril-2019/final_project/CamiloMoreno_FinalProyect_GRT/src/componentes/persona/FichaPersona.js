import React from 'react';
import './FichaPersona.css';

const FichaPersona = ({ usuario }) => {
    return (
        <article>
            <section className="fichaPersonaContainer">
                <h1>Datos Usuario</h1>
                <p>Nombre: <span> {usuario.primerNombre} {usuario.segundoNombre} {usuario.primerApellido} {usuario.segundoApellido} </span> </p>
                <p>Telefono: <span> {usuario.telefono} </span></p>
                <p>Correo Electronico: <span> {usuario.correoElectronico}</span></p>
                <p>{usuario.tipo} de la facultad de {usuario.facultad}</p>
            </section>
        </article>
    );
}

export default FichaPersona;