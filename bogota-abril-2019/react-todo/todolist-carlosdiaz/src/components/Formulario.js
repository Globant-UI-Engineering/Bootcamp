import React, { Component, createRef } from 'react';
import uuid from 'uuid';

class Formulario extends Component {

    state= {
        empty:false
    }
    
    tareaRef = createRef();

    showInvalidFeedback = () =>{
        if(this.state.empty){
           return( 
            <div className="invalid-feedback text-white">
                Campo obligatorio.
            </div>
            )
        } else{
            return null;
        }
    }

    validateForm = (e) =>{
        e.preventDefault();
        if(this.tareaRef.current.value===''){
            this.setState({
                empty:true
            })
        }else{
            this.setState({
                empty:false
            })
            const tarea = {
                id: uuid(),
                tarea: this.tareaRef.current.value,
            }
            this.props.agregarTarea(tarea);
            e.currentTarget.reset();
        }
    }

    render() {
        return (
            <form  onSubmit={this.validateForm}>
                <div className="mb-3">
                    <label htmlFor="task"><strong>Tarea/Actividad</strong></label>
                    <textarea ref={this.tareaRef} className={this.state.empty? "form-control is-invalid":"form-control"} id="task" placeholder="Escribe una actividad/tarea"></textarea>
                    {this.showInvalidFeedback()}
                    <button className="btn btn-success mt-2" type="submit">Agregar</button>
                </div>
            </form>
        );
    }
}

export default Formulario;