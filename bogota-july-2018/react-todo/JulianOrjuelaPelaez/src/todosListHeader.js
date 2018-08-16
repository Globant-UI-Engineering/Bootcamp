import React, { Component } from 'react'; 

class todosListHeader extends Component {
  render() {
    return (
        <thead>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>
        </thead>
    );
  }
}

export default todosListHeader;