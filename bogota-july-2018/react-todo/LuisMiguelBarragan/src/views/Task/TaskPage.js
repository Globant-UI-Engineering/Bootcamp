import React, { Component } from 'react';
import AddTodoCard from '../../components/Card/AddTodoCard';
import ListTodoCard from '../../components/Card/ListTodoCard';

class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [
            {
                'todo': 'clean the house'
            }
        ],
        todo: ''
    };
  }

  addTodo = e => {
    this.setState( ({ list, todo }) => ({
        list: [...list, { todo }],
        todo: ''
    }));
    e.preventDefault();
  }

  handleChange = todo => {
    this.setState({ todo: todo });
  }

  onDeleteTodo = indexToDelete => {
    this.setState( ({list}) => ({ 
        list: list.filter((todo, index) => index !== indexToDelete) 
    }))
  }

  render() {
      const { list, todo } = this.state;
    return (
        <div className="task-container">
            <AddTodoCard 
                value={todo} 
                onSubmit={this.addTodo} 
                handleTodoChange={this.handleChange}
            />              

            <ListTodoCard list={list} handleIndex={this.onDeleteTodo}/>
        </div>
    );
  }
}

export default TaskPage;
