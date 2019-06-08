import React from 'react';
import './Popup.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        </div>
      </div>
    );
  }
}

export default Popup;