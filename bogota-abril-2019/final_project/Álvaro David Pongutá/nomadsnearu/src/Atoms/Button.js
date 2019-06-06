import React from 'react';
import './Atoms.scss';

class Button extends React.Component {
    render () {
        return (
            <button role="button" disabled={this.props.disabled} className={this.props.className} onClick={this.props.onClick}>{this.props.buttonInfo}</button>
        );
    }
}

export default Button;