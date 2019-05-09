import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todo-list/Todo-list';
import TodoListRouting from './components/todo-list-routing/Todo-list-routing'




function App() {
  const felipeList = ["Go to gym", "Work hard","Work on globant","Spend time with pets",
                      "Keep girlfriend happy","Take a rest"]
  

  return (
    <div className="Todo-list">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className = "content" >
        <TodoList lista = {felipeList}></TodoList> 
        <TodoListRouting lista = {felipeList}></TodoListRouting>
      </div>
    </div>
  );
}


export default App;

