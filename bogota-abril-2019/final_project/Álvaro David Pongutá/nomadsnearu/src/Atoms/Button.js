import React from 'react';
import '../App.scss';

class Button extends React.Component {
    render () {
        return (
            <button className={this.props.className} onClick={this.props.onClick}>{this.props.buttonInfo}</button>
        );
    }
}

export default Button;