import React, { Component } from 'react';
//import './App.css';

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
    <button> Search </button>
    </div>
    <button onClick={this.newTodo}> Add to TodoList</button>
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
class TodoList extends Component {
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

export default TodoList;
