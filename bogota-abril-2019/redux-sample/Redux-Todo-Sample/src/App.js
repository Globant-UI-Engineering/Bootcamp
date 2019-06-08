import React, { Component } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'



class App extends Component {
    state = {
      todos: [
        {id: 1,
        content: 'buy some milk'},
        {id: 2,
        content: 'buy some cheese'}
      ]
    }

    deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        todos: todos
      })
    }
    addTodo = (todo) => {
      todo.id = Math.random()
      let todos = [...this.state.todos, todo]
      this.setState({
        todos: todos
      })
    }

    
    render() {
      return (
        <div className="todo-app container">
          <h1 className="center blue-text">Todo´s</h1>
          <h2 className="center blue-text">Click on the task if you want to eliminate it</h2>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo addTodo={this.addTodo} />
        </div>
      );
    }
}


export default App;
