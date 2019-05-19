import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store/actions/addTodoAction';
import './Item.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: props.complete,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    this.setState({
      complete: !this.state.complete,
    });
    this.props.dispatch({
      type: actions.TOGGLE_TODO,
      payload: {
        id: this.props.id,
      },
    });
  };

  render() {
    const labelStyle = {
      textDecoration: this.state.complete ? 'line-through' : '',
    };
    return (
      <li className="Todo__item" id="todoItem" key={this.props.id}>
        <h3 className="Todo__title" style={labelStyle}>
          {this.props.title}
        </h3>
        <br />
        <label className="Todo__description" style={labelStyle}>
          <input
            className="Todo__check"
            id="todoCheck"
            defaultChecked={this.state.complete}
            type="checkbox"
            onChange={this.handleChange}
          />
          {this.props.description}
        </label>
      </li>
    );
  }
}

export default connect()(Item);
