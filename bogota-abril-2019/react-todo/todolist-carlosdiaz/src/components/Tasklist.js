import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import { connect } from 'react-redux';
import { getTasks } from '../actions/taskActions';
import store from '../store';
store.subscribe( () => {
    localStorage.setItem('tareas',JSON.stringify(store.getState()));
})

class Tasklist extends Component {

    componentDidMount(){
        this.props.getTasks();
    }
    
    showTaskList = () =>{
        if(Object.keys(this.props.tareas).length!==0){
            return(
           <div className="pt-2">
                {Object.keys(this.props.tareas).map( tareaKey =>(
                    <Task key={tareaKey}  tarea={this.props.tareas[tareaKey]} />
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

Tasklist.propTypes = {
    tareas: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    tareas : state.tareas.tareas
})
 
export default connect(mapStateToProps, {getTasks}) (Tasklist);
