import React from 'react';
import { connect } from 'react-redux';

import Item from '../item/Item.js';
import './List.css';

class List extends React.Component {
  renderList = (todos) => {
    return todos.map((todo) => {
      return (
        <section>
          <ul className="Todo__list">
            <Item
              key={todo.id.toString()}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              complete={todo.complete}
            />
          </ul>
        </section>
      );
    });
  };

  render() {
    return this.renderList(this.props.todos);
  }
}

function mapStateToProps(state, props) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(List);
