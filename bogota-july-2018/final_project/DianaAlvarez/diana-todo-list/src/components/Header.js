import React, { Component } from 'react';
import '../css/header.css'

export default class Header extends Component {
    render() {
        let hoy = new Date();
        let dd = hoy.getDate();
        let mm = hoy.getMonth()+1;
        let yyyy = hoy.getFullYear();
        let fecha = dd+'/'+mm+'/'+yyyy; 
        return (
            <header className = 'title'>
                <h1>My ToDo <span className="fecha">{fecha}</span></h1>
                <hr />
            </header>
        );
    }
}
