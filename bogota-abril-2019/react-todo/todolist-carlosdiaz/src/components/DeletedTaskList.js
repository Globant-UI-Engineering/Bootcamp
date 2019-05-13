import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import DeletedTask from './DeletedTask';

class DeletedTasklist extends Component {

    borrarTodo = () =>{
        this.props.borrarTodo();
    }

    showDeletedTaskList = () =>{
        if(Object.keys(this.props.tareasEliminadas).length!==0){
            return(
            <div>
                <div className=" text-center">
                    <button className="btn btn-danger" onClick={this.borrarTodo}>Borrar Todo</button>
                </div>
                <div className="pt-2">
                    {Object.keys(this.props.tareasEliminadas).map( deletedKey => (
                    <DeletedTask key={deletedKey}  eliminada={this.props.tareasEliminadas[deletedKey]} />
                    ))}
                </div>
            </div>
        )
        } else{
            return null;
        }
    }

    render() {
        return (
            <Fragment> 
                {this.showDeletedTaskList()}
            </Fragment>
        );
    }
}

DeletedTasklist.propTypes = {
    tareasEliminadas: PropTypes.array.isRequired,
    borrarTodo: PropTypes.func.isRequired,
}

export default DeletedTasklist;