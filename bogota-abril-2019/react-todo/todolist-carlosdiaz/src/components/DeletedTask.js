import React, { Component } from 'react';

class DeletedTask extends Component {

    eliminarTarea= () => {
        this.props.borrarTarea(this.props.tarea.id);
    }

    render() {
        
        const {tarea} = this.props.eliminada;
        return (
            <div className="row m-2 border p-2">
                <div className="col-md-12">
                    <div className="pr-2 text-center">
                        {tarea}
                    </div>
                </div> 
            </div>
        );
    }
}

export default DeletedTask;
