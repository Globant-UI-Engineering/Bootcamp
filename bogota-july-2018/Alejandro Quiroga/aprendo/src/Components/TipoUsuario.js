import React, { Component } from 'react'
import './TipoUsuario.css'
import { Link} from 'react-router-dom';

class TipoUsuario extends Component{
render()
{
    return(
        <div className="g-form-container">
        <div className="g-form-tip">
        <Link to="/loginprofesor">
        <div class="target-green" >
            <div class="card-header"><strong>PROFESOR</strong></div>
        <img src="http://localhost/aprendo/fotos/profesora.png"/>
        </div>
        </Link>
        <Link to="/loginalumno">
        <div class="target-yellow">
        <div class="card-header"><strong>ALUMNO</strong></div>
        <img src="http://localhost/aprendo/fotos/alumno.png"/>
        </div>
        </Link>
        </div>
        </div>
  




    )
}
}
export default TipoUsuario 