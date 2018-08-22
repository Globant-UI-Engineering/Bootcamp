import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import GalleryCard from 'components/GalleryCard';

class PostGallery extends Component {

  render() {
    const { postList } = this.props;

    return (
      <Container>
        <Row>
          {this.renderPosts(postList)}
        </Row>
      </Container>
    );
  }


  renderPosts = postList => {
    return postList.map(postData => {
      return (
        <Col key={postData.userId + postData.title}>
          <GalleryCard  {...postData} />
        </Col>
      )
    })
  }


};

const mapStateToProps = state => {
  return {
    postList: state.PostReducers.postList
  }
};

export default connect(
  mapStateToProps,
  null
)(PostGallery);

