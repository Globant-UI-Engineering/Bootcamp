import React, {Component} from "react";
import "./RegistroProfe.css"
import "./RegistroPregunta.css"
import {ValidaRegistroPregunta,isSelect,isRespuesta} from  "../Validaciones/Validaciones.js"

class RegistroPregunta extends Component
{
constructor(props)
{    
super(props);
this.state={
    pregunta:{
        pregunta:"",
        profesor:localStorage.getItem("usuario") ,
        area:localStorage.getItem("area"),
        tema:"0",
        grado:"0",
        respuestas:[],
        radios:""       
    },   
    respuesta:[],
    insertado:"",
    error:"",
    classSuccess:"alert alert-success hidden",
    classError:"alert alert-danger hidden",
    classFormPre:"g-form-reg showit",
    classFormRes:"g-form-reg hide",
    estado:"",
    contresp:0
}
this.handleChange1=this.handleChange.bind(this);
this.enviar=this.enviar.bind(this);
this.ansChange=this.ansChange.bind(this);
this.agregar=this.agregar.bind(this);
this.toogle=this.toogle.bind(this);
this.back=this.back.bind(this);
}
toogle()
{
  this.setState(
      {
        classFormPre:"g-form-reg hide",
        classFormRes:"g-form-reg showit"  
      }

  )
}

back()
{
  this.setState(
      {
        classFormPre:"g-form-reg showit",
        classFormRes: "g-form-reg hide"
      }

  )
}
handleChange(e)
{
    if(localStorage.getItem("usuario"))
    {
        this.setState(prevState=>({
            pregunta:{
                ...prevState.pregunta,profesor:localStorage.getItem("usuario")
            }
    }))       
    }
            let nombre=e.target.name
            let value=e.target.value.toUpperCase();
          
            this.setState(prevState=>({
                    pregunta:{
                        ...prevState.pregunta,[nombre]:value
                    }
            })) 
           
                 
 } 
 agregar()
 {    
   console.log(this.state.pregunta)
 if(this.state.contresp<5)
 {
     
    
    this.setState(prevState=>({
        pregunta:{
            ...prevState.pregunta, respuestas:[...this.state.pregunta.respuestas,JSON.stringify(this.state.respuesta)]
                 }
             }),()=>{ let numresp=this.state.pregunta.respuestas.length
                     this.setState({contresp:numresp})
                    
                    }
        ) 
    }
else{
    console.log("Debe Insertar 5 Posibles Respuestas")
}  
}


 ansChange(e)
 {
    
    let value=e.target.value.toUpperCase()
    let resp=new Object()
    resp.respuesta=value
    resp.estado="0"   
    this.setState({respuesta:resp})
 }
 validar()
 {     
    console.log(this.state)
   let error=ValidaRegistroPregunta(this.state.pregunta)
   let isSelected=isSelect(this.state.pregunta.tema)
   let isSelectedGrado=isSelect(this.state.pregunta.grado)
   let isRadio=isRespuesta(this.state.pregunta.radios)
   if(error!=="")
        {
          this.setState({error:error ,  classError:"alert-danger show"})
          return false
        }
    else
        {
            if(isSelected)
                {
                this.setState({error:"Selecciona un Tema",  classError:"alert-danger show" })
                return false
                 }
                 else
                 {
                    if(isSelectedGrado)
                     {
                    this.setState({error:"Selecciona un Grado",  classError:"alert-danger show" })
                    return false
                     }
                     else
                     {
                        if(isRadio)
                        {
                       this.setState({error:"Selecciona un Respuesta",  classError:"alert-danger show" })
                       return false
                        }
                        else
                        {
                            if(this.state.contresp!==5)
                            {
                           this.setState({error:"Debes Ingresar 5 Posibles Respuestas",  classError:"alert-danger show" })
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
                   

 }



 enviar()   
 {     
     console.log(this.state.pregunta)
   if(this.validar())
   {
    fetch('http://localhost/aprendo/insertpreweb.php',
    {          
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body:JSON.stringify(this.state.pregunta)
     } ) 
     .then(response=>{     
        return response.json();
        }) 
        .then(responsejson=>{
            this.setState({
                insertado:responsejson.pregunta                
            })           
            console.log(responsejson)
            this.isValidado(responsejson.pregunta)
                                  
                         
        })
   }
 }
 isValidado(param)
 {
     if(param==="error")
     {
         this.setState(
             {
            preguntas:
            {
                respuestas:[]
            },
            classSuccess:"alert-danger show"
             }
             )
     }
    else
    {
        this.setState(
            {
           classSuccess:"alert-success show"
            }
            )
    }
    
 }


render()
    {
       
        return(
            
            <div>
               
            <div className="g-form-container">  
            <div class="container-msj"> 
            <div className={this.state.classSuccess}>
           <div className="alert ">
          
          <p> <strong>{this.state.insertado==="exito" ? <p>Pregunta Realizada Correctamente</p> : <p>Hubo un Error en el Servidor al Realizar la Pregunta</p>}</strong></p>
           </div>          
           </div> 
             
             <div className={this.state.error==="" ? this.state.classError : this.state.classError}>
           <div className="alert ">
          
          <p> <strong>{this.state.error==="" ? <p></p> : <p>{this.state.error}</p>}</strong></p>
           </div>          
           </div> 
           </div>          
            <div className={this.state.classFormPre} id="form_pregunta">
            <div className="g-form-titulo">
            <p>Insertar Pregunta</p>
             </div> 

                 
             
             <div className="form-group-reg-all">
             <input type="text" required  onChange={this.handleChange.bind(this)} placeholder="Escribe la Pregunta" id="pregunta" name="pregunta" aria-label="Pregunta" /> 
             </div>
             <div className="form-group-reg-all">
            <select onChange={this.handleChange.bind(this)} name="tema" id="tema">
                <option value="0" selected>Selecciona el Tema</option>
                    {this.props.temas.map(response=>{
                    return(<option value={response.id_tema}>{response.des_tema}</option>)
                }
                )}
                       
            </select>
             </div>

             <div className="form-group-reg-all">
            <select onChange={this.handleChange.bind(this)} name="grado" id="grado">
                <option value="0" selected>Selecciona el Grado</option>
                    {this.props.grados.map(response=>{
                    return(<option value={response.id_grado}>{response.des_grado}</option>)
                }
                )}
                       
            </select>
             </div>

             
             
             <div className="form-group-reg-all">
             <button onClick={this.toogle}>Siguiente</button>
             </div>


            

            </div>
            <div className={this.state.classFormRes} id="form_respuesta">
            <div className="g-form-titulo1">
            <p>Escribe las Posibles Respuestas y Selecciona la Correcta</p>
             </div>
             <div className="form-group-reg-med">
               <input type="text" name="respuesta" id="respuesta" onChange={this.ansChange.bind(this)} placeholder="Digita una Respuesta"/>               
            </div>
            <div className="form-group-reg-cua">
                <button onClick={this.agregar}>Insertar</button>
            </div>
           
                <div  className="form-group-reg-all margin-bottom">{this.state.pregunta.respuestas.map((response,index)=>{
                    let resjson=JSON.parse(response)
                    return(<div class="custom-control custom-radio">
                    <input type="radio"  onChange={this.handleChange.bind(this)} value= {resjson.respuesta} class="custom-control-input" id="radios" name="radios"></input>
                    <label class="custom-control-label" for="defaultGroupExample1">{resjson.respuesta}</label></div>
                  )
                })}</div>

                 <div className="form-group-reg">
             <button onClick={this.back}>Atras</button>
             </div> 
            <div className="form-group-reg">
             <button onClick={this.enviar}>Guardar</button>
             </div>
            
             </div>
           
            </div>  
            </div>
        )
    }   
}

export default RegistroPregunta;