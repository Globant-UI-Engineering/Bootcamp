import React from 'react';

import List from '../../components/list/List';
import Fab from '../../components/fab/Fab';
import './Todo.css';

class Todo extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <List />
        <Fab />
      </div>
    );
  }
}

export default Todo;
