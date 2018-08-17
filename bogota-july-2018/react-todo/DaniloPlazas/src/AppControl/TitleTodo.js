import React, { Component } from 'react';
import './css/TitleTodo.css';

class TitleTodo extends Component {
  render(){
    return(
      <div>
        <header>
          <p className="Title-Todo-List">{this.props.title}</p>
        </header>
      </div>
    );
  }
}

export default TitleTodo;
