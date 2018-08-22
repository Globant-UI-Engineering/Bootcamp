import React, { Component } from 'react';

class AddItem extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      index: 0,
      description: "",
      dateToAccomplish: ""
    };

    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e.target.name);
    this.setState({
      index: parseInt(e.target.name) + 1
    });
    this.props.onAddItem(this.state);
  }

  handleChangeValue(e){
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <form className="add-new-item" onSubmit={this.handleSubmit} name={this.props.index}>
          <p>Add New Item</p>
          <input name="title" placeholder="Title" type="text" aria-label="Title Item" onChange={this.handleChangeValue}/>
          <input name="dateToAccomplish" placeholder="Date To Accomplish" type="date" aria-label="Date to Accomplish" onChange={this.handleChangeValue}/>
          <textarea name="description" placeholder="Description" aria-label="Description of Item" onChange={this.handleChangeValue}></textarea>

          <input type="submit" value="Submit" />

      </form>
    );
  }
}

export default AddItem;
