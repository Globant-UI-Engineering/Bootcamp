import React from 'react';
import './App.css';

//components
import Header from './components/header/Header';
import CreateTask from './components/createTask/CreateTask';
import TodoList from './components/todoList/TodoList';

function App() {

  state = {
    items: [],
    id: 0,
    item: '',
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateTask item={this.state.item} handleChange={this.handleChange} />
      <TodoList />
    </div>
  );
}
    
    
    
    export default App;
