import React, { Component, Fragment } from 'react';
import Task from './Task';

class Tasklist extends Component {

    showTaskList = () =>{
        if(Object.keys(this.props.tareas).length!==0){
            return(
           <div className="pt-2">
                {Object.keys(this.props.tareas).map( tareaKey =>(
                    <Task key={tareaKey} borrarTarea={this.props.borrarTarea} agregarEliminados={this.props.agregarEliminados} tarea={this.props.tareas[tareaKey]} />
                ))}
            </div>
        )
        } else{
            return null;
        }
    }

    render() {
        return (
            <Fragment>
                {this.showTaskList()}
            </Fragment>
        );
    }
}

export default Tasklist;