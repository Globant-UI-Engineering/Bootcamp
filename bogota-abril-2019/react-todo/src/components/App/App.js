import React from 'react';
import './App.css';
import Listcomponent from '../List/List';
import TaskForm from '../Form/Form';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

var HeaderComponent = () =>{
  return(
    <header className="App-header">
        <h1>My React To Do List</h1>
    </header>
  )  
}

class CounterTitleComponent extends React.Component {

  constructor(props){
    super(props)
    this.getPendingTasksCount = this.getPendingTasksCount.bind(this);
  }

  render(){
    return(
      <h3>You have {this.getPendingTasksCount()} pending tasks</h3>
    ) 
  }

  getPendingTasksCount = () =>{
    return this.props.list.filter(task => task.done === false).length;
  } 
   
}

class App extends React.Component {

  render(){
    return ( 
      <BrowserRouter>
        <div className="App">
        <HeaderComponent />
        <Link className="listLink" to= {`/taskList`} title="Task list" ></Link>
        <Link className="formLink" to= {`/taskForm`} title="Add task" ></Link>
        <CounterTitleComponent list={this.props.taskList} />
        <main>
          <Route path="/taskList" render={() => <Listcomponent  />} />
          <Route path='/taskForm'  render={() => <TaskForm addTask= {this.addTask.bind(this)} />} />
        </main>
        </div>
      </BrowserRouter>
      
    );
  }

  addTask(data){
    const task = {description: data};
    this.setState({
      tasks: this.state.tasks.concat(task)
    })
  }
  
}

var mapStateToProps = (state) => {
  return {
    taskList: state.list
  }
}

const ReduxAppContainer = connect(mapStateToProps)(App);


export default ReduxAppContainer;
