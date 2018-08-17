import React from 'react';
import './App.css';
import InputForm from './Components/InputForm.js';
import TodoList from './Components/TodoList.js';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text:'',
      items: []
    }
  }

  newTodo(event){
    let todo = event.target.value;
    this.setState({
      text:todo
    })
  }

  submitTodo(){
    this.setState({
      items: [...this.state.items,this.state.text],
      text:''
    })
    var input = document.querySelector(".input-todo");
    input.value = "";
  }

  render() {
    return (
      <React.Fragment>
        <h1>My React TODO List</h1>
        <InputForm todo = {this.state.text} onChange = {this.newTodo.bind(this)} addTodo = {this.submitTodo.bind(this)}/>
        <TodoList data = {this.state.items}/>
      </React.Fragment>
    );
  }
}
