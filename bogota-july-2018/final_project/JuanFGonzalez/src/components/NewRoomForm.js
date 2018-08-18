import React from "react";

class NewRoomForm extends React.Component {
  constructor() {
    super();
    this.state = {
      roomName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      roomName: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createRoom(this.state.roomName);
    this.setState({
      roomName: '',
    });
  }
  
  render() {
    return (
      <div className="new-room-form">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.roomName}
            onChange={this.handleChange}
            type="text"
            placeholder="NewRoomForm"
            required
          />
          <button id="create-room-btn" type="submit">
            +
          </button>
        </form>
      </div>
    );
  }
}

export default NewRoomForm;
