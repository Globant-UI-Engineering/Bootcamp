import React from 'react';
import './Atoms.scss';

class ButtonIcon extends React.Component {
    render () {
        return (
            <button role="button" className="App-button App-button-icon" onClick={this.props.onClick}>{this.props.iconHTML}</button>
        );
    }
}

export default ButtonIcon;