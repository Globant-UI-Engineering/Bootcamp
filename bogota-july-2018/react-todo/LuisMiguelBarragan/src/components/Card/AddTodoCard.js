import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodoCard extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.props.handleTodoChange(e.target.value);
  }

  render() {
    return (
        <form className="card card--add-todo" onSubmit={this.props.onSubmit}>
            <input 
                className="input" 
                title='Escribir to-do'
                type="text" 
                name="todo" 
                autoComplete="off"
                required
                value={this.props.value} 
                onChange={this.handleChange} />
            <input 
                className="btn btn--dark-gray" 
                type="submit" 
                value="Add Todo"/>
        </form>
    );
  }
}

AddTodoCard.propTypes = {
    handleTodoChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default AddTodoCard;