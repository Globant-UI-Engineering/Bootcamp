import React from 'react';
import './Loading.css';
import loading from '../../images/loading.png';

class Loading extends React.Component {
  render() {
    return (
      <div className='loading'>
        <div className='loading_inner'>
        <img src = {loading} alt = "detail" ></img>
        </div>
      </div>
    );
  }
}

export default Loading;