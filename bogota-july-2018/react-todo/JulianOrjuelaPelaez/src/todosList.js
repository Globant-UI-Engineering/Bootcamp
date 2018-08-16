import React, { Component } from 'react'; 
import TodosListHeader from './todosListHeader';
import TodosListItem from './todoListItem';

import _ from 'lodash';

Onrender = () => {

}

class todosList extends Component {

  render() {
    return (
        <table>
            <TodosListHeader />  
            <tbody>
                {this.Onrender}
            </tbody>
        </table>
    );
  }
}

export default todosList;

