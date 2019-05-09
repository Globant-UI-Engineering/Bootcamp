import React from 'react';
import './Todo-list.css';

const checkList = (task) => (<li key = {task.toString()}>{task}</li>);

function TodoList(props) {

  return(
    <article >
      <h1> Felipe To-do List:</h1>
      <ol  onClick={itemClickHandler}>
        {props.lista.map(checkList)}
      </ol>
    </article> 
  );
}


function itemClickHandler (event){
  event.target.classList.toggle('checked');
}

export default TodoList;