import React, {Component} from "react";
import "./RegistroProfe.css"
import {ValidaRegistroTema} from  "../Validaciones/Validaciones.js"

class RegistroTema extends Component
{
constructor(props)
{
    
super(props);
this.state={
    tema:{
        tema:"",
        profesor:localStorage.getItem("usuario") ,
        area:localStorage.getItem("area")      

    },
   
    insertado:"",
    error:"",
    classError:"alert hidden"
}
this.handleChange1=this.handleChange.bind(this);
this.enviar=this.enviar.bind(this);
}
handleChange(e)
{
    if(localStorage.getItem("usuario"))
    {
        this.setState(prevState=>({
            tema:{
                ...prevState.tema,tema:localStorage.getItem("usuario")
            }
    }))       
    }
            let nombre=e.target.name
            let value=e.target.value.toUpperCase();
          
            this.setState(prevState=>({
                    tema:{
                        ...prevState.tema,[nombre]:value
                    }
            })) 
           
                 
 } 
 validar()
 {     
   let error=ValidaRegistroTema(this.state.tema)
   if(error!=="")
        {
          this.setState({error:error ,  classError:"alert-danger show"})
          return false
        }
    else
        {
          this.setState({error:"" ,  classError:"alert-danger hidden"})
          return true
        }
                   

 }
 enviar()
 {
     console.log(this.state)
   if(this.validar())
   {
    fetch('http://localhost/aprendo/inserttemaweb.php',
    {          
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body:JSON.stringify(this.state.tema)
     } ) 
     .then(response=>{     
        return response.json();
        }) 
        .then(responsejson=>{
            this.setState({
                insertado:responsejson

            },()=>responsejson.tema!==""? alert("exito"):alert("error")) 
                                      
                         
        })
   }
   
    

 }

render()
    {
        return(
            <div>
            <div className="g-form-container">            
            <div className="g-form-reg">
            <div className="g-form-titulo">
            <p>Insertar Tema</p>
             </div> 
             
             <div className={this.state.error==="" ? this.state.classError : this.state.classError}>
           <div className="alert ">
          
          <p> <strong>{this.state.error==="" ? <p>no hay error</p> : <p>{this.state.error}</p>}</strong></p>
           </div>          
           </div>     
             
             <div className="form-group-reg-all">
             <input type="text" required  onChange={this.handleChange.bind(this)} placeholder="Tema" id="tema" name="tema" aria-label="TEma" /> 
             </div>
             
             <div className="form-group-reg-all">
             <button onClick={this.enviar}>Enviar</button>
             </div>
                                                
            </div>
            </div>  
            </div>
        )
    }   
}

export default RegistroTema;