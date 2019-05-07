import React from 'react';
import './App.css';

let ToDoInput = () =>
{
  return <input type='text' placeholder='Add new to-do'></input>;  
};

let ToDoItem = (props) => {
  return <li><span>X</span> {props.title}</li>;
}

let ToDoList = (props) => {
  return <ul>
    {props.children}
  </ul>;
}

function App() {
  return (
    <article className='container'>
      <header>
        <h1>To-do list <span>+</span></h1>
      </header>
      <section>
        <ToDoInput />
      </section>
      <section>
        <ToDoList>
          <ToDoItem title='Do laundry' />
          <ToDoItem title='Walk the dog' />
          <ToDoItem title='Do the math assignment' />
        </ToDoList>
      </section>
    </article>
  );
}

export default App;
