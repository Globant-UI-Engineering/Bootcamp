import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeletedTask extends Component {

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

DeletedTask.propTypes = {
    eliminada: PropTypes.object.isRequired,
}

export default DeletedTask;
