import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';
import { getPostList } from 'actions/PostActions';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    const { postList }  = this.props;
        
    return (
      <div className="App">
        <Button onClick={this.onGetPostClick}>Get Posts</Button>
        { postList.length > 0 ? this.renderMsg(postList): '' }
      </div>
    );
  }

  onGetPostClick = event => {
    this.props.getPostList();
  }

  renderMsg = postList => <p>Successfully got {postList.length} posts</p>;

};

const mapStateToProps = state => {
  return {
    postList: state.PostReducers.postList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPostList: () => {
      dispatch(getPostList())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

