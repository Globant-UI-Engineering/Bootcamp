import React, { Component } from 'react'; 

class todoListItem extends Component {
  render() {
      console.log();
    return (
        <tr>  
            <td>{this.props.task}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
             </td>
        </tr>
    );
  }
}

export default todoListItem;