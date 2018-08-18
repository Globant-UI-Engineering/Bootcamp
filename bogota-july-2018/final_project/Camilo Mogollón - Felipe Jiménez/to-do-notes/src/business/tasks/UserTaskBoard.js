import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { db } from '../../firebase';
import LogOutButton from '../../auth/LogoutButton';
import withAuthorization from '../../auth/withAuthorization';
import App from '../App.js';
import Loader from '../Loader';
import UncompletedTasks from './UncompletedTasks.js';
import CompletedTasks from './CompletedTasks.js';
import AddUserTaskForm from './AddUserTaskForm';
import Task from '../../entities/Task.js';
import '../../css/UserTaskBoard.css';


class UserTaskBoard extends Component {

  constructor(){
    super();
    this.state = {
      loading: true,
      checkedTasks: [],
      uncheckedTasks: [],
      projectId:'',
      projectName:'',
      projectMembers:[]
    };
  }

  componentDidMount() {

    var fbProjectId=this.context.router.route.location.pathname.substring(9);
    db.getProjectName(fbProjectId).then(value =>{
      this.setState({projectId: fbProjectId,
                     projectName: value.val().name,
                     projectMembers: value.val().memberList
                   })
    }).catch((reason) => {});

    db.tasksReference(fbProjectId).on('value', snapshot => {
          var checkedTasksData = [];
          var uncheckedTasksData = [];
          snapshot.forEach(value => {
            var task=value.val();
            task['key'] = value.key;
            if(task.completed){
              checkedTasksData.push(task);
            }
            else {
              uncheckedTasksData.push(task);
            }
          });
          this.setState({
            checkedTasks: checkedTasksData,
            uncheckedTasks: uncheckedTasksData,
            loading: false,
          });
    });

  }

  componentWillUnmount() {
    var fbProjectId=this.context.router.route.location.pathname.substring(9);
    db.tasksReference(fbProjectId).off();
  }

  handleAddTask = (task) => {
    db.createTask(new Task(task.title, task.responsible, task.description, task.priority),
                  this.state.projectId);
  }

  getTaskNumberClass = () => {
    var taskNumberClass;
    this.state.uncheckedTasks.length===0
      ?taskNumberClass="Task-number-green"
      :taskNumberClass="Task-number-yellow"
    return taskNumberClass;
  }

  render() {
    return (
     this.state.loading ? <Loader/>
     :
     <App>
      <aside className="Project-settings">
        <section className="Project-information">
          <h2 className="App-title">{this.state.projectName}</h2>
          <span className={"Task-number "+this.getTaskNumberClass()}> {this.state.uncheckedTasks.length+' Pending Tasks'} </span>
        </section>
        <section className="New-task-form">
          <AddUserTaskForm onAddTask = {this.handleAddTask} memberList={this.state.projectMembers}> </AddUserTaskForm>
        </section>
      </aside>
      <main className="Task-board" >
       <UncompletedTasks tasks = {this.state.uncheckedTasks} projectId = {this.state.projectId}> </UncompletedTasks>
       <CompletedTasks tasks = {this.state.checkedTasks} projectId = {this.state.projectId}> </CompletedTasks>
      </main>
      <footer>
        <BackButton/>
        <LogOutButton/>
      </footer>
      </App>
    );
  }
}

UserTaskBoard.contextTypes = {
    router: PropTypes.object,
    location: PropTypes.object
}

class BackButton extends Component {
  render(){
    return(
      <React.Fragment>
        <a className="Back-button Button-update" href="/">
          Back
        </a>
      </React.Fragment>
    );
  }
}

const authCondition = (authUser) => authUser;

export default withAuthorization(authCondition)(UserTaskBoard);
