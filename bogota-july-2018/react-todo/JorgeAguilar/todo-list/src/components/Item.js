import React, { Component } from 'react';
import '../assets/styles/List.css';

class Item extends Component {
  constructor(){
      super();
  }
  deleteTask = () => {
        this.props.onDelete(this.props.item);
    }
  render() {
    return (
        <li className="list-element">
            <span className="delete-task" onClick={this.deleteTask}></span>
            <div className="details">
                {this.props.item.description}
            </div>
        </li>
    );
  }
}

export default Item;
