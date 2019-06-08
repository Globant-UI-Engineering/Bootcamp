import React from 'react';
import './todoList.css';

function TodoList() {
  return (
    <div>
      <hr />
      <ul>
        <li>j</li>
        <button type="button" className="item_button">Edit</button>
        <button type="button" className="item_button">Delete</button>
      </ul>      
      <button type="button">Clear list</button>
    </div>
  );
}



export default TodoList;
