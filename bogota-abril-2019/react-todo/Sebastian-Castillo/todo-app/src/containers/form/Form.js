import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { actions } from '../../store/actions/addTodoAction';

import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      fireRedirect: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    this.props.dispatch({
      type: actions.ADD_TODO,
      todo: {
        title: title,
        description: description,
      },
    });
    this.setState({
      title: '',
      description: '',
      fireRedirect: true,
    });
  };

  render() {
    const { from } = this.props.location.state || '/form';
    const { title, description, fireRedirect } = this.state;

    return (
      <div className="wrapper">
        <form className="Todo__form" onSubmit={this.onSubmit}>
          <label>Title</label>
          <input
            className="Todo__form_title"
            type="text"
            placeholder="Please add a title"
            id="title"
            value={title}
            onChange={this.handleChange}
            required
          />
          <label>Description</label>
          <textarea
            className="Todo__form_description"
            name="description"
            id="description"
            placeholder="Please add a description"
            cols="30"
            rows="10"
            value={description}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Guardar</button>
        </form>
        {fireRedirect && <Redirect to={from || '/'} />}
      </div>
    );
  }
}

export default connect()(Form);
