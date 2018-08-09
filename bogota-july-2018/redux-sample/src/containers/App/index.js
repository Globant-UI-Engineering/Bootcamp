import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';
import { getPosts } from 'actions/PostActions';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Button onClick={this.onGetPostClick}>Get Posts</Button>
      </div>
    );
  }

  onGetPostClick = (event) => {
    console.log('onGetPostClick');
  }

}; 

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};
​
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(getPosts())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;