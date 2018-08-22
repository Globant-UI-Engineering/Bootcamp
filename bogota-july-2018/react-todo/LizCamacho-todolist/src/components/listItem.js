import React, { Component } from 'react';
import './listItem.css';
class ListItem extends Component {
    removeRow = () => {
        this.props.onDelete(this.props.id);
        //console.log('remover', this.props.id);
    }
    markCheck = () => {
        var index = this.props.id;
        this.props.onMarkCheck(index);
    }
    addClassIcon() {
        return (this.props.selected) ? 'fas fa-check-circle check selected' : 'far fa-check-circle check unselected';
    }


    render() {

        return (
            <li className="list-group-item list-group-item-action">

                <i className={this.addClassIcon()} onClick={this.markCheck}></i>

                {this.props.item}
                <button type="button" className="close" onClick={this.removeRow}>&times;</button>

            </li>

        );
    }
}

export default ListItem;