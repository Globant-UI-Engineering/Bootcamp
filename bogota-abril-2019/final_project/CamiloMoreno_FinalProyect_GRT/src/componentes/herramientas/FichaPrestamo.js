import React from 'react';

const FichaPrestamo = ({ usuario }) => {
    return (
        <article>
            <section className="fichaPersonaContainer">
                <h1>Datos Usuario</h1>
                <p>Nombre: <span>{usuario.primerNombre} {usuario.segundoNombre} {usuario.primerApellido} {usuario.segundoApellido} </span></p>
                <p>Telefono: <span>{usuario.telefono}</span></p>
                <p>Correo Electronico: <span>{usuario.correoElectronico}</span></p>
                <p>Fecha de Prestamo:<span>{usuario.fecha_solicitud}</span></p>
                <p><span> {usuario.tipo} de la facultad de {usuario.facultad}</span></p>
            </section>
        </article>
    );
}

export default FichaPrestamo;