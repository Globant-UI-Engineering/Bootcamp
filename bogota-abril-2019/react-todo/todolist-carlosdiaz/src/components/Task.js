import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

    eliminarTarea= () => {
        this.props.borrarTarea(this.props.tarea.id);
        this.props.agregarEliminados(this.props.tarea);
    }

    render() {
        const {tarea} = this.props.tarea;
        return (
            <div className="row m-2 border p-2">
                <div className="col-md-10">
                    <div className="pr-2">
                        {tarea}
                    </div>
                </div> 
                <div className="col-md-2 mt-2 text-center">
                     <button className="btn btn-danger" onClick={this.eliminarTarea}>Borrar</button>
                 </div> 
            </div>
        );
    }
}

Task.propTypes = {
    borrarTarea:PropTypes.func.isRequired,
    agregarEliminados:PropTypes.func.isRequired,
    tarea: PropTypes.object.isRequired,
}

export default Task;
