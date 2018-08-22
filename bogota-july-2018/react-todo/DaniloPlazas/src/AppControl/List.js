import React, { Component } from 'react';
import { todos } from '../DataTodos/Todos.json'
import './css/List.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import ViewItem from './ViewItem.js';
import AddItem from './AddItem.jsx';

class ListOfItems extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }

    this.addItemToList = this.addItemToList.bind(this);

  }

  handleItemChange(e){
    if (e.target.checked) {
        document.getElementById(e.target.name).style.textDecoration = "line-through";
    }else {
      document.getElementById(e.target.name).style.textDecoration = "none";
    }
  }

  handleDeleteItem(index){
    if (window.confirm('Are you sure?')){
      this.setState({
        todos: this.state.todos.filter((e,i) =>{
          return i !== index;
        })
      })
    }
  }

  addItemToList(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render(){

    const view = ({match}) => {
      return(
      <ViewItem item={this.state.todos[match.params.id]}/>
    );
    }

    const actualTodos = this.state.todos.map((todo, i) => {

      return(
        <div className="todo-item" key={i}>
          <input
            type="checkbox"
            name={todo.index}
            value={todo.title}
            onChange={this.handleItemChange}
            className="checkboxType"/>
          <a id={todo.index}> <Link to={'/View/' + (i)}>{todo.title}</Link></a>
          <div className="delete-todo" onClick={this.handleDeleteItem.bind(this, i)}></div>
        </div>
      );
    });

    const addItem = ({match}) => {
      return(
        <div>{actualTodos}
        <AddItem onAddItem={this.addItemToList} index={this.state.todos.length}/>
        </div>
      );
    }
    return (
      <div>
        <Route exact path="/" component={addItem}/>
        <Route exact path="/View/:id" component={view}/>
      </div>
    );
  }

}

export default ListOfItems;
