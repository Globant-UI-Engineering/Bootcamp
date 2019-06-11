import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import DeletedTask from './DeletedTask';
import { connect } from 'react-redux';
import { getDeletedTasks } from '../actions/taskActions';
import { clearTasks} from '../actions/taskActions';
import store from '../store';
store.subscribe( () => {
    localStorage.setItem('tareas',JSON.stringify(store.getState()));
})

class DeletedTasklist extends Component {

    componentDidMount(){
        this.props.getDeletedTasks();
    }


    showDeletedTaskList = () =>{
        if(Object.keys(this.props.eliminadas).length>0){
            return(
            <div>
                <div className=" text-center">
                    <button className="btn btn-danger" onClick={ () => this.props.clearTasks()} >Borrar Todo</button>
                </div>
                <div className="pt-2">
                    {Object.keys(this.props.eliminadas).map( deletedKey => (
                    <DeletedTask key={deletedKey}  eliminada={this.props.eliminadas[deletedKey]} />
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
    getDeletedTasks: PropTypes.func.isRequired,
    clearTasks: PropTypes.func.isRequired,
}

const mapStateToProps = state =>(
    {
    eliminadas: state.tareas.eliminadas
});

export default connect(mapStateToProps,{getDeletedTasks, clearTasks})(DeletedTasklist);