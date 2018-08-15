import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListTodoCard extends Component {
  constructor(props) {
    super(props);
    this.sendIndex = this.sendIndex.bind(this);
  }

  sendIndex = (index) => {
    this.props.handleIndex(index);
  }

  render() {
    return (
        <section className="card card--todo-list" >
            <h2>List of To-Do</h2>
            <table className="todo-table">
                <tbody>
                    {this.props.list.map( (item, key) => 
                        <tr className="todo-table__row" key={key}>
                            <td className="todo-table__txt">{item.todo}</td>
                            <td>
                                <button 
                                    className="todo-table__btn" 
                                    title="delete to-do" 
                                    onClick={() => { this.sendIndex(key) }}>
                                    x
                                </button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </section> 
    );
  }
}

ListTodoCard.propTypes = {
    list: PropTypes.array.isRequired,
    handleIndex: PropTypes.func.isRequired,
}

export default ListTodoCard;