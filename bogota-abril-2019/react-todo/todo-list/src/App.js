import React from 'react';
import './app.css';
import TodoList from './TodoListComponent/todoListComponent.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {

  const toDo = ['hola', 'mundo']
  const inProgress = ['mi', 'nombre']
  const Done = ['es', 'camilo']

  function toDoComponent() {
    return (
      <article>
        <h1>To do</h1>
        <TodoList tasks={toDo} />
      </article>
    )
  }

  function inProgressComponent() {
    return (
      <article>
        <h1>In Progress</h1>
        <TodoList tasks={inProgress} />
      </article>
    )
  }

  function doneComponent() {
    return (
      <article>
        <h1>Done</h1>
        <TodoList tasks={Done} />
      </article>
    )
  }
  return (
    <div>
      <header>
        <ul>
          <li>
            <nav>
              <Link to="/toDo">To Do</Link>
            </nav>
          </li>
          <li>
            <nav>
              <Link to="/inProgress">In Progress</Link>
            </nav>
          </li>
          <li>
            <nav>
              <Link to="/done">Done</Link>
            </nav>
          </li>
        </ul>
      </header>

      <Route path="/toDo" exact component={toDoComponent} />
      <Route path="/inProgress" exact component={inProgressComponent} />
      <Route path="/done" exact component={doneComponent} />

    </div>
  );
}

export default App;
