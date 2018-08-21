import React, { Component } from "react"
import {isRespuesta} from  "../Validaciones/Validaciones.js"
import {Link} from "react-router-dom";

class RetoDetalle extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            usuario:localStorage.getItem("usuario"),
            area:this.props.match.params.id,
            pregunta:"",
            preguntas:[],
            primer_respuestas:[],
            segunda_respuestas:[],
            tercer_respuestas:[],
            cuarta_respuestas:[],
            quinta_respuestas:[],
            primer_pregunta:"",
            segunda_pregunta:"",
            tercer_pregunta:"",
            cuarta_pregunta:"",
            quinta_pregunta:"",
            primer_verdadera:"",
            segunda_verdadera:"",
            tercer_verdadera:"",
            cuarta_verdadera:"",
            ver_pregunta:1,
            classPregunta1:"show", 
            classPregunta2:"hide", 
            classPregunta3:"hide", 
            classPregunta4:"hide", 
            classPregunta5:"hide", 
            classPuntaje:"hide", 
            radios1:"",
            radios2:"",
            radios3:"",
            radios4:"",
            radios5:"",
            puntaje:0

        }
        this.guardar=this.guardar.bind(this)
        this.mostrar=this.mostrar.bind(this)
        this.agrupar=this.agrupar.bind(this)        
        this.siguiente=this.siguiente.bind(this)
        this.verdaderas=this.verdaderas.bind(this)
       this.handleChange=this.handleChange.bind(this)
       this.mostrar()
    }

    mostrar()
    {
        fetch('http://localhost/aprendo/verpreguntas.php',
        {          
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(this.state.area)
         } ) 
         .then(response=>{     
            return response.json();
            }) 
            .then(responsejson=>{
                this.setState({
                    preguntas:responsejson                
                },()=>{
                    this.agrupar()
                    }

               )                                     
                             
            })
    }

    enviarApi()
    {
        fetch('http://localhost/aprendo/actpuntaje.php',
        {          
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(this.state)
         } ) 
         .then(response=>{     
            return response.json();
            }) 
            .then(responsejson=>{
                this.setState({
                    preguntas:responsejson                
                },()=>{
                    console.log(this.state.puntaje)
                    }

               )                                     
                             
            })

    }
    agrupar()
    {
       
       let primer_respuestas=this.state.preguntas.slice(0,5)
       let segunda_respuestas=this.state.preguntas.slice(5,10)
       let tercer_respuestas=this.state.preguntas.slice(10,15)
       let cuarta_respuestas=this.state.preguntas.slice(15,20)
       let quinta_respuestas=this.state.preguntas.slice(20,25)
       this.setState(
            {
            primer_respuestas:primer_respuestas,
            segunda_respuestas:segunda_respuestas,
            tercer_respuestas:tercer_respuestas,
            cuarta_respuestas:cuarta_respuestas,
            quinta_respuestas:quinta_respuestas,
            primer_pregunta:primer_respuestas[0].des_pregunta,
            segunda_pregunta:segunda_respuestas[0].des_pregunta,
            tercer_pregunta:tercer_respuestas[0].des_pregunta,
            cuarta_pregunta:cuarta_respuestas[0].des_pregunta,
            quinta_pregunta:quinta_respuestas[0].des_pregunta             
               
            },()=>{
                console.log(this.state.primer_verdadera)            
            }
       )        
    }

   verdaderas()
   {
    this.state.primer_respuestas.map(response=>{
      
        if(response.estado==="1")
        {
            this.setState({
                primer_verdadera:response.id_respuesta
            })
        }
    })

    this.state.segunda_respuestas.map(response=>{
        if(response.estado==="1")
        {
            this.setState({
                segunda_verdadera:response.id_respuesta
            })
        }
    })

    this.state.tercer_respuestas.map(response=>{
        if(response.estado==="1")
        {
            this.setState({
               tercer_verdadera:response.id_respuesta
            })
        }
    })

    this.state.cuarta_respuestas.map(response=>{
        if(response.estado==="1")
        {
            this.setState({
                cuarta_verdadera:response.id_respuesta
            })
        }
    })

    this.state.quinta_respuestas.map(response=>{
        if(response.estado==="1")
        {
            this.setState({
               quinta_verdadera:response.id_respuesta
            })
        }
    })

   }

    

   siguiente()
    {
        this.verdaderas()
       

       let i=this.state.ver_pregunta+1
       switch (i)
       {
           case 2:
           if(!isRespuesta(this.state.radios1))
           {
           this.setState(
               {
               classPregunta1:"hide",
               classPregunta2:"show",
               ver_pregunta:i,
               
               })
               break
            }
            else
            {
                alert("Selecciona un Respuesta")
                break
            }
            case 3:
            if(!isRespuesta(this.state.radios2))
            {
            this.setState(
                {
                classPregunta2:"hide",
                classPregunta3:"show",
                ver_pregunta:i
                })
                break
             }
             else
             {
                alert("Selecciona un Respuesta")
                 break
             }

             case 4:
            if(!isRespuesta(this.state.radios3))
            {
            this.setState(
                {
                classPregunta3:"hide",
                classPregunta4:"show",
                ver_pregunta:i

                })
                break
             }
             else
             {
                alert("Selecciona un Respuesta")
                 break
             }

             case 5:
            if(!isRespuesta(this.state.radios4))
            {
            this.setState(
                {
                classPregunta4:"hide",
                classPregunta5:"show",
                ver_pregunta:i
                })
                break
             }
             else
             {
                alert("Selecciona un Respuesta")
                 break
             }

             
             case 6:
            if(!isRespuesta(this.state.radios5))
            {
            this.setState(
                {
                classPregunta5:"hide",
                classPuntaje:"show",
                ver_pregunta:i
                })
                break
             }
             else
             {
                alert("Selecciona un Respuesta")
                 break
             }
            }
       
    }

    handleChange(e)
    {
    let value=e.target.value    
    let name=e.target.name
   
    this.setState({
        [name]:value
    })    
    }

    guardar()
    {
        let puntaje=0
        this.state.primer_verdadera===this.state.radios1 ? puntaje=puntaje+10 : puntaje=puntaje+0
        this.state.segunda_verdadera===this.state.radios2 ? puntaje=puntaje+10 : puntaje=puntaje+0
        this.state.tercer_verdadera===this.state.radios3 ? puntaje=puntaje+10 : puntaje=puntaje+0
        this.state.cuarta_verdadera===this.state.radios4 ? puntaje=puntaje+10 : puntaje=puntaje+0
        this.state.quinta_verdadera===this.state.radios5 ? puntaje=puntaje+10 : puntaje=puntaje+0
        this.setState(
            {
                puntaje:puntaje,
                classPuntaje:"show", 
                classPregunta5:"hide"
            },()=>this.enviarApi()
        )
            
       
        
    }

   
render()
{
    return(
        <div>
            <div className="g-form-container">
            
            <div className="g-form-reg">
             
         { /*  <p>{this.props.match.params.id}</p>*/}
         <div class={this.state.classPregunta1}>
         <div className="g-form-titulo">
            <p>Selecciona la Respuesta Correcta</p>
             </div>
          <h2>{this.state.primer_pregunta}</h2>
            {
             this.state.primer_respuestas.map(response=>{
               
                
             return(
                <div className="custom-control custom-radio">
             <input type="radio" onChange={this.handleChange.bind(this)}   value= {response.id_respuesta} className="custom-control-input" id="radios1" name="radios1"></input>
             <label className="custom-control-label" for="defaultGroupExample1">{response.des_respuesta}</label></div>
             )
                }
            )
            }
             <button onClick={this.siguiente}>Siguiente</button>
        </div>

        <div class={this.state.classPregunta2}>
        <div className="g-form-titulo">
            <p>Selecciona la Respuesta Correcta</p>
             </div>
          <h2>{this.state.segunda_pregunta}</h2>
            {
             this.state.segunda_respuestas.map(response=>{
             return(
                <div className="custom-control custom-radio">
             <input type="radio" onChange={this.handleChange.bind(this)}   value= {response.id_respuesta} className="custom-control-input" id="radios2" name="radios2"></input>
             <label className="custom-control-label" for="defaultGroupExample1">{response.des_respuesta}</label></div>
             )
                }
            )
            }
            
             <button onClick={this.siguiente}>Siguiente</button>
        </div>

         <div class={this.state.classPregunta3}>
         <div className="g-form-titulo">
            <p>Selecciona la Respuesta Correcta</p>
             </div>
          <h2>{this.state.tercer_pregunta}</h2>
            {
             this.state.tercer_respuestas.map(response=>{
             return(
                <div className="custom-control custom-radio">
             <input type="radio" onChange={this.handleChange.bind(this)}   value= {response.id_respuesta} className="custom-control-input" id="radios3" name="radios3"></input>
             <label className="custom-control-label" for="defaultGroupExample1">{response.des_respuesta}</label></div>
             )
                }
            )
        }
        <button onClick={this.siguiente}>Siguiente</button>
            
        </div>

        <div class={this.state.classPregunta4}>
        <div className="g-form-titulo">
            <p>Selecciona la Respuesta Correcta</p>
             </div>
          <h2>{this.state.cuarta_pregunta}</h2>
            {
             this.state.cuarta_respuestas.map(response=>{
             return(
                <div className="custom-control custom-radio">
             <input type="radio" onChange={this.handleChange.bind(this)}   value= {response.id_respuesta} className="custom-control-input" id="radios4" name="radios4"></input>
             <label className="custom-control-label" for="defaultGroupExample1">{response.des_respuesta}</label></div>
             )
                }
            )
            }
            
             <button onClick={this.siguiente}>Siguiente</button>
        </div>

        <div class={this.state.classPregunta5}>
        <div className="g-form-titulo">
            <p>Selecciona la Respuesta Correcta</p>
             </div>
          <h2>{this.state.quinta_pregunta}</h2>
            {
             this.state.quinta_respuestas.map(response=>{
             return(
                <div className="custom-control custom-radio">
             <input type="radio" onChange={this.handleChange.bind(this)}   value= {response.id_respuesta} className="custom-control-input" id="radios5" name="radios5"></input>
             <label className="custom-control-label" for="defaultGroupExample1">{response.des_respuesta}</label></div>
             )
                }
            )
            }
             <button onClick={this.guardar}>Guardar</button>
             
        </div>

         <div class={this.state.classPuntaje}>
         <div className="g-form-titulo">
            <p>Haz obtenido el Siguiente Puntaje </p>
             </div>
          <h2>{this.state.puntaje}</h2>
            
             <Link to ="/retos"><button>Mas Retos</button></Link>
        </div>
       
             
              </div>
              </div>
        </div>




    )
}
}

export default RetoDetalle