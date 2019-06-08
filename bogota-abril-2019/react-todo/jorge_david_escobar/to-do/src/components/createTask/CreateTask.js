import React from 'react';
import './content.css';

function CreateTask() {
  return (
    <div className="content">
    <form>
      <div>
        <label for="task">Task</label><br/>
        <input type="text" id="task" aria-describedby="task-hint" />
        <p id="task-hint">Enter your task</p>
      </div>
      <button type="button">Create task</button>
      </form>
    </div>
  );
}



export default CreateTask;
