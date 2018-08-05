import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
class ControlPanel extends Component {

  constructor(props){
    super(props);
    this.newTodo = this.newTodo.bind(this);
  }

  newTodo(){
    let inputValue=document.getElementsByClassName('todoInput')[0].value;
    this.props.addTodo(inputValue);
    console.log(inputValue);
  }
  
  render (){
  return(
<React.Fragment>
  <div>
    <input type="text" className="todoInput"/>
    <button> Completed </button>
    <button> Pending </button>
    <NavLink to="/newtodo"><button> All </button></NavLink>
    <button onClick={this.newTodo}>New</button>
  </div>
</React.Fragment>
  );
}
}
const Todos = (props) =>{
  return(
  <ul>
    {props.todosList.map((todo,index)=> <li key={index}>{todo}</li>)}
  </ul>
  );
}
class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state ={
      visible:true,
      todosList:["do react app","study redux"],
    };
    this.appendToList = this.appendToList.bind(this);
  }
  appendToList (newTodo){
    this.setState((prevState)=>({
       todosList:[...prevState.todosList, newTodo]
    }));
  }
  render() {
    return (
    <React.Fragment>
      <ControlPanel addTodo={this.appendToList}/>
      <Todos todosList={this.state.todosList}/>
    </React.Fragment>
    );
  }
}

export default TodoApp;
