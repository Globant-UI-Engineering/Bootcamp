import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { connect } from 'react-redux';
import {addTask} from '../actions/taskActions';
import {validateForm} from '../actions/formAction';
class Formulario extends Component {

    
    tareaRef = createRef();

    showInvalidFeedback = () =>{
        if(this.props.error){
           return( 
            <div className="invalid-feedback text-white">
                Campo obligatorio.
            </div>
            )
        } else{
            return null;
        }
    }

    validateFormSubmit = (e) =>{
        e.preventDefault();
        if(this.tareaRef.current.value===''){
            this.props.validateForm(true);
        }else{
            this.props.validateForm(false);
            const tarea = {
                id: uuid(),
                tarea: this.tareaRef.current.value,
            }
            this.props.addTask(tarea);
            e.currentTarget.reset();
        }
    }

    render() {
        return (
            <form  onSubmit={this.validateFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="task"><strong>Tarea/Actividad</strong></label>
                    <textarea ref={this.tareaRef} className={this.props.error? "form-control is-invalid":"form-control"} id="task" placeholder="Escribe una actividad/tarea"></textarea>
                    {this.showInvalidFeedback()}
                    <button className="btn btn-success mt-2" type="submit">Add</button>
                </div>
            </form>
        );
    }
}

Formulario.propTypes = {
    addTask: PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    tareas: state.tareas.tareas,
    error: state.error.error
})

export default connect(mapStateToProps, {addTask, validateForm})(Formulario);