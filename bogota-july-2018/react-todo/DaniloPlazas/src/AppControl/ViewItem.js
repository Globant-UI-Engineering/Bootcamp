import React, { Component } from 'react';

class ViewItem extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div>
        Titulo: {this.props.item.title} <br/>
        Fecha: {this.props.item.dateToAccomplish} <br/>
        Description: {this.props.item.description}
      </div>
    );
  }
}

export default ViewItem;
