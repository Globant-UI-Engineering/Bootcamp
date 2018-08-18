import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import LoginProfesor from './Components/LoginProfesor';
import LoginAlumno from './Components/LoginAlumno';
import TipoUsuario from './Components/TipoUsuario';
import RegistroProfe from './Components/RegistroProfe';
import RegistroAlumno from './Components/RegistroAlumno';
import RegistroArea from './Components/RegistroArea';
import RegistroTema from './Components/RegistroTema';
import RegistroFoto from './Components/RegistroFoto';
import RegistroFotoAlu from './Components/RegistroFotoAlu';
import RegistroPregunta from './Components/RegistroPregunta';
import Retos from './Components/Retos';
import RetoDetalle from './Components/RetoDetalle';
import {BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import store from './store'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      usuario:
        {
        email:"",
        nick:"", 
        foto:"",
        role:""           
        } ,
        user:[],
      areas:[] ,
      grados:[] ,
      temas:[],
      areaprofe:{
      area:localStorage.getItem("area")
      }
    }
      
      store.subscribe(()=>{
        this.setState({
            user:store.getState().user
        },()=>this.cargar())
    })
    this.cargar=this.cargar.bind(this);

  
   this.verareas(); 
   this.vergrados();
   this.vertemas();    
  }
  cargar()
{
    this.setState({
        usuario:{
            nick:this.state.user[0]["nick"],
            foto:this.state.user[0]["foto"],
            role:this.state.user[0]["role"]
        }
    },()=>console.log("sadfsfd"))
    
}
  verareas()
  {
       fetch('http://localhost/aprendo/verareas.php')
      .then((response)=>response.json())
      .then(responsejson=>
          {      
                     this.setState({
                       areas:responsejson
                     })
                 
              
          }
      )
  }

  vergrados()
  {
       fetch('http://localhost/aprendo/vergrados.php')
      .then((response)=>response.json())
      .then(responsejson=>
          {      
                     this.setState({
                       grados:responsejson
                     })
                 
              
          }
      )
  }

  vertemas()
  {
    
       fetch('http://localhost/aprendo/vertemas.php',
       {          
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body:JSON.stringify(this.state.areaprofe)
     } )

      .then((response)=>response.json())
      .then(responsejson=>
          {      
                     this.setState({
                       temas:responsejson
                     })
                 
             console.log(this.temas)
          }
      )
  }
  
  render() {
    return (
      <Router>     
      <div className="App">       
      <Navigation user={this.state.user} />
      <div className="container">
      <p>{this.props.prueba}</p>
        <Route path="/" exact strict render={
          ()=>{
            return (  
              <div className="g-form-container">
            
              <div className="g-form">
              <div className="fondo">
                    <img src="http://localhost/aprendo/fotos/fondo.jpg"/>
              </div>

              </div>
              </div>
            
            
            
            
            
            );
            
          }
        }/>

        <Route path="/admin" exact strict render={
          ()=>{
            return (<Login/> );
          }
        }/>

        <Route path="/login" exact strict render={
          ()=>{
            return (<TipoUsuario/> );
          }
        }/>

         <Route path="/loginprofesor" exact strict render={
          ()=>{
            return (<LoginProfesor/> );
          }
        }/>

         <Route path="/loginalumno" exact strict render={
          ()=>{
            return (<LoginAlumno/> );
          }
        }/>


        <Route path="/home/:id" exact strict render={
          ()=>{
            return (<div className="g-form-container">
            
            <div className="g-form">
            <div className="fondo">
                  <img src="http://localhost/aprendo/fotos/fondo.jpg"/>
            </div>

            </div>
            </div> );
            
          }
        }/>   

          <Route path="/retodetalle/:id" exact strict component={RetoDetalle}/>
            
      {localStorage.getItem("role")==="1" ? <Route path="/registroprofe" exact strict render={
      ()=>{
      return (<RegistroProfe areas={this.state.areas}/> );    
        }
      }/> : 
      <Route path="/registroprofe" exact strict render={
      ()=>{
      return (<h1>Registro errado</h1>  );    
        }
        }/>} 

         {localStorage.getItem("role")==="1" ? <Route path="/registroarea" exact strict render={
      ()=>{
      return (<RegistroArea /> );    
        }
      }/> : 
      <Route path="/registroarea" exact strict render={
      ()=>{
      return (<h1>Registro errado</h1>  );    
        }
        }/>}

        {localStorage.getItem("role")==="2" ? <Route path="/registrotema" exact strict render={
      ()=>{
      return (<RegistroTema /> );    
        }
      }/> : 
      <Route path="/registrotema" exact strict render={
      ()=>{
      return (<h1>Registro errado</h1>  );    
        }
        }/>}  

        

         {localStorage.getItem("role")==="2" ? <Route path="/registroalumno" exact strict render={
      ()=>{
      return (<RegistroAlumno grados={this.state.grados}/> );    
        }
      }/> : 
      <Route path="/registroalumno" exact strict render={
      ()=>{
      return (<h1>Registro errado</h1>  );    
        }
        }/>}  

      {localStorage.getItem("role")==="2" ? <Route path="/registropregunta" exact strict render={
      ()=>{
      return (<RegistroPregunta temas={this.state.temas}  grados={this.state.grados}/> );    
        }
      }/> : 
      <Route path="/registropregunta" exact strict render={
      ()=>{
      return (<h1>Registro errado</h1>  );    
        }
        }/>} 

         {localStorage.getItem("role")==="2" ? <Route path="/registrofoto" exact strict render={
      ()=>{
      return (<RegistroFoto/> );    
        }
      }/> : 
      <Route path="/registrofoto" exact strict render={
      ()=>{
      return (<h1>Registro errado</h1>  );    
        }
        }/>} 

         {localStorage.getItem("role")==="3" ? <Route path="/retos" exact strict render={
      ()=>{
      return (<Retos areas={this.state.areas}/> );    
        }
      }/> : 
      <Route path="/retos" exact strict render={
      ()=>{
      return (<h1>Registro errado</h1>  );    
        }
        }/>} 

         {localStorage.getItem("role")==="3" ? <Route path="/registrofotoalu" exact strict render={
      ()=>{
      return (<RegistroFotoAlu/> );    
        }
      }/> : 
      <Route path="/registrofotoalu" exact strict render={
      ()=>{
      return (<h1>Registro errado</h1>  );    
        }
        }/>}        
        
        </div>
      
              
      </div>
      </Router>
    );
  }
}

export default App;
