import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Form from './Form'
import TodoList from './TodoList'

export default class App extends Component {
  constructor () {
    super()

    this.state = {}
    this.state.todos = []

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleToggleCompletedTodo = this.handleToggleCompletedTodo.bind(this)
  }

  handleOnSubmit (event) {
    event.preventDefault()
    let input = event.currentTarget.querySelector('input')
    
    if (!input.value.trim()) return
    
    let todo = {
      id: Date.now(),
      text: input.value,
      completed: false
    }

    input.value = ''
    this.setState((prevState) => ({ todos: prevState.todos.concat(todo) }) )
  }

  handleToggleCompletedTodo (event) {
    if (event.type === 'keydown' && event.keyCode != 13) return

    let todoItem = event.target
    let todos = this.state.todos.map(todo => {
      if (todo.id == todoItem.id) {
        return Object.assign({}, todo, { 
          completed: !todo.completed
        })
      }
      return todo
    })

    this.setState(prevState => ({ todos: todos }))
  }

  render() {
    return (
    <BrowserRouter>
      <article>
        <h1>React Todo</h1>
        <Form handleOnSubmit={this.handleOnSubmit} />
        {/* <TodoList todos={this.state.todos} toggleCompletedTodo={this.handleToggleCompletedTodo}/> */}
        {
          [ {path: "/:filter", TodoList: TodoList, todos: this.state.todos, toggleCompletedTodo: this.toggleCompletedTodo} ].map(({path, TodoList, todos}, index) => {
          return (
            <Route key={index} path={path} render={(props) => <TodoList {...props} todos={todos} toggleCompletedTodo={this.handleToggleCompletedTodo} />} />
          )
        })}
        {/* <Route path="/:filter" component={TodoList} />
        <Route path="/:filter" component={TodoList} /> */}

        <ul>
          <li>
            <Link to="/all" cors="true">All</Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
          <li>
            <Link to="/active">Active</Link>
          </li>
        </ul>

      </article>
    </BrowserRouter>
    );
  }
}
