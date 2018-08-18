import React, {Component} from "react";
import "./RegistroProfe.css"
import {ValidaRegistroProfesor,isMail,isSelect,confirmPassword} from  "../Validaciones/Validaciones.js"

class RegistroProfe extends Component
{
constructor(props)
{
    
super(props);
this.state={
    profesor:{
        nombre:"",
        apellido:"",
        email:"",
        pass:"",
        confirmar:"",
        nick:"",
        colegio:"",
        area:"0"

    },
    areas:[],
    insertado:"",
    error:"",
    classError:"alert hidden"
}
this.handleChange1=this.handleChange.bind(this);
this.enviar=this.enviar.bind(this);
}
handleChange(e)
{
    if(localStorage.getItem("colegio"))
    {
        this.setState(prevState=>({
            profesor:{
                ...prevState.profesor,colegio:localStorage.getItem("colegio")
            }
    }))       
    }
            let nombre=e.target.name
            let value=e.target.value.toUpperCase();
            nombre=="email" ? value=e.target.value : value=e.target.value.toUpperCase()
            this.setState(prevState=>({
                    profesor:{
                        ...prevState.profesor,[nombre]:value
                    }
            })) 
           
                 
 } 
 validar()
 {     
   let error=ValidaRegistroProfesor(this.state.profesor)
   let validmail=isMail(this.state.profesor.email)
   let isSelected=isSelect(this.state.profesor.area)
   let confirm=confirmPassword(this.state.profesor.pass,this.state.profesor.confirmar)
   if(error!=="")
        {
            this.setState({error:error ,  classError:"alert-danger show"})
            return false
        }
    else
         {
            if(!validmail)
            {
           this.setState({error:"Digita un mail valido",  classError:"alert-danger show" })
           return false
            }
            else
             {
                if(isSelected)
                {
               this.setState({error:"Selecciona un Area",  classError:"alert-danger show" })
               return false
                }
                else
                 {
                    if(!confirm)
                    {
                   this.setState({error:"Las Contraseñas no Coinciden",  classError:"alert-danger show" })
                   return false
                    }
                    else
                     {
                    this.setState({error:"" ,  classError:"alert-danger hidden"})
                    return true
                    }
                }
            }
        
        }   

 }
 enviar()
 {
   if(this.validar())
   {
    fetch('http://localhost/aprendo/insertproweb.php',
    {          
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body:JSON.stringify(this.state.profesor)
     } ) 
     .then(response=>{     
        return response.json();
        }) 
        .then(responsejson=>{
            this.setState({
                insertado:responsejson                
            }) 
            switch(this.state.insertado.profesor)
            {
                case 0:
                this.setState({error:"Registro Satisfactorio", classError:"alert-info show"})
                break

                case 1:
                this.setState({error:"Correo ya Existe" ,  classError:"alert-danger show"})
                break

                case 2:
                this.setState({error:"Usuario ya Existe" ,  classError:"alert-danger show"})
                alert("dfdsfdsf")
                break
            }                           
                         
        })
   }
   
    

 }

render()
    {
        return(
            <div>
            <div className="g-form-container">            
            <div className="g-form-reg1">
            <div className="g-form-titulo">
            <p>Registrar Profesor</p>
             </div> 
             
             <div className={this.state.error==="" ? this.state.classError : this.state.classError}>
           <div className="alert ">
          
          <p> <strong>{this.state.error==="" ? <p>no hay error</p> : <p>{this.state.error}</p>}</strong></p>
           </div>          
           </div>     
             
             <div className="form-group-reg">
             <input type="text" required  onChange={this.handleChange.bind(this)} placeholder="Nombre" id="nombre" name="nombre" aria-label="Nombre" /> 
             </div>
             <div className="form-group-reg">
             <input type="text" required  onChange={this.handleChange.bind(this)} placeholder="Apellido" id="apellido" name="apellido" aria-label="Apellido" />        
            </div>
            <div className="form-group-reg">
             <input type="text" required  onChange={this.handleChange.bind(this)} placeholder="Apodo" id="nick" name="nick" aria-label="Apodo" />        
            </div>
            <div className="form-group-reg">
            <input type="email" required  onChange={this.handleChange.bind(this)} placeholder="Correo Electronico" id="email" name="email" aria-label="Usuario" />
            </div>
            <div className="form-group-reg">
             <input type="password" required required onChange={this.handleChange.bind(this)} placeholder="Contraseña" id="pass" name="pass" aria-label="Password" />
             </div>
             <div className="form-group-reg">
             <input type="password" required onChange={this.handleChange.bind(this)} placeholder="Confirmar Contraseña" id="confirmar" name="confirmar" aria-label="Confirmar Password" />
             </div>
             <div className="form-group-reg">
            <select onChange={this.handleChange.bind(this)} name="area" id="area">
                <option value="0" selected>Selecciona el Area</option>
                    {this.props.areas.map(response=>{
                    return(<option value={response.id_area}>{response.des_area}</option>)
                }
                )}
                       
            </select>
             </div>
            
             <button onClick={this.enviar}>Enviar</button>
                                                
            </div>
            </div>  
            </div>
        )
    }   
}

export default RegistroProfe;