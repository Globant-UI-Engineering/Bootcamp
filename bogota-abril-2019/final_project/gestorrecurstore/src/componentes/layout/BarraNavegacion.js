import React from 'react';
import { Link } from 'react-router-dom';
import './BarraNavegacion.css';

const BarraNavegacion = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/Usuarios'}>Usuarios</Link>
                </li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default BarraNavegacion;