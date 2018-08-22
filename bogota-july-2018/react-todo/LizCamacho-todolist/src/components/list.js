import React, { Component } from 'react';
import ListItem from './listItem'

class List extends Component {
    onDeleteItem = (item) => {
        //console.log('Delete', item);
        this.props.items.splice(item, 1);
        //console.log(this.props.items);
        this.setState({ tasks: this.props.items });
    }
    onMarkSelected = (id) => {
        this.props.items[id].selected = !this.props.items[id].selected;
        //console.log(id, this.props.items[id].selected);
        this.setState({ tasks: this.props.items[id] });
    }
    render() {
        return (
            <ul className="list-group">
                {this.props.items.map((item, index) => (
                    //console.log(item),
                    <ListItem key={index} item={item.value} id={index} onDelete={this.onDeleteItem} selected={item.selected} onMarkCheck={this.onMarkSelected} />

                ))}
            </ul>
        );
    }
}

export default List;