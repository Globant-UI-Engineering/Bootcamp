import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import TodoListRouting from '../todo-list-routing/Todo-list-routing'
import {Provider} from 'react-redux'
import store from '../../redux/store'




function App() {
  const felipeList = ["Go to gym", "Work hard","Work on globant","Spend time with pets",
                      "Keep girlfriend happy","Take a rest"]
  

  return (
    <Provider store={store}>
      <div className="Todo-list">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className = "content" >
          <TodoListRouting lista = {felipeList}></TodoListRouting>
        </div>
      </div>
    </Provider>
  );
}


export default App;

