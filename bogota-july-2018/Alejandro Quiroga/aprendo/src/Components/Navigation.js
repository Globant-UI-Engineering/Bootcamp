import React, { Component } from 'react';
import './Navigation.css';
import { Link} from 'react-router-dom';
import store from '../store'
class Navigation extends Component
{
constructor(props)
{
super(props)
    this.state={
        usuario:
        {
        email:"",
        nick:"", 
        foto:"logo.jpg",
        role:""           
        } ,
        logo:"image/logo.jpg",
        user:[]
        }
        
    store.subscribe(()=>{
        
        this.setState({
            user:store.getState().user
        },()=>this.cargar())
    })
    this.cargar=this.cargar.bind(this);
   
   
}
cargar()
{
    console.log(this.state.user)
    this.setState({
        usuario:{
            nick:this.state.user[0]["nick"],
            foto:this.state.user[0]["foto"],
            role:this.state.user[0]["role"]
        }
    },()=>console.log(this.state.usuario))
    
}
toogle()
{
  document.getElementById("sidebar").classList.toggle('active');
}
    
    render(){  
         
        return(           
            <div id="sidebar">
                <div className="toogle-btn" onClick={this.toogle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="head-sidebar">
                <p>{this.foto}</p>
                    <img src={'http://localhost/aprendo/fotos/'+this.state.usuario.foto } />
                    <span>APRENDO</span>
                    { localStorage.getItem("usuario") ? <span></span> : <span>Inicia Sesion</span>  }
                    <span>{this.state.usuario.nick}</span>                           
                </div>     
                    
                <div className="menu">
                <ul>
                <li><Link to="/login">Login</Link>                
                </li>           
                
                <li><Link to="/home/home"> Inicio</Link></li>              

               {this.state.usuario.role=== "2" ? <li><Link to="/registroalumno">Registrar Alumno </Link></li> : localStorage.getItem("role") === "1" ? <li><Link to="/registroprofe">Registrar Profesor </Link></li>: <span></span>  }
                {this.state.usuario.role=== "2" ? <li><Link to="/registrotema">Insertar Tema </Link></li> : localStorage.getItem("role") === "1" ? <li><Link to="/registroarea">Insertar Area </Link></li>: <span></span>  }               
                {this.state.usuario.role=== "2" ? <li><Link to="/registropregunta">Insertar Pregunta </Link></li> : <span></span>}
                {this.state.usuario.role=== "2" ? <li><Link to="/registrofoto">Foto de Perfil </Link></li> : <span></span>}
                {this.state.usuario.role=== "3" ? <li><Link to="/retos">Retos </Link></li> : <span></span>}    
                {this.state.usuario.role=== "3" ? <li><Link to="/registrofotoalu">Foto de Perfil </Link></li> : <span></span>}            
                <li><Link to="/salir">Salir</Link></li>
                </ul>
                </div >
            </div>
        );
    }
}
export default Navigation;
