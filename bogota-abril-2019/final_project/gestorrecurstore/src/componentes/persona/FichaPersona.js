import React from 'react';

const FichaPersona = ({ usuario }) => {
    return (
        <article>
            <section className="mostrarPersonaContainer">
                <h1>Datos Usuario</h1>
                <p>Nombre: {usuario.primerNombre} {usuario.segundoNombre} {usuario.primerApellido} {usuario.segundoApellido} </p>
                <p>{usuario.tipo} de la facultad de {usuario.facultad}</p>
                <p>Telefono: {usuario.telefono}</p>
                <p>Correo Electronico: {usuario.correoElectronico}</p>
            </section>
        </article>
    );
}

export default FichaPersona;