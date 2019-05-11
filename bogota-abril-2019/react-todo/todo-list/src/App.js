import React from 'react';
import './app.css';
import TodoList from './TodoListComponent/todoListComponent.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

function App() {

  function toDoComponent() {
    return (
      <article>
        <h1>To do</h1>
        <TodoList id="1" />
      </article>
    )
  }

  function inProgressComponent() {
    return (
      <article>
        <h1>In Progress</h1>
        <TodoList id="2" />
      </article>
    )
  }

  function doneComponent() {
    return (
      <article>
        <h1>Done</h1>
        <TodoList id="3" />
      </article>
    )
  }
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
