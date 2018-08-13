import React, { Component } from 'react';
import {
  Card, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';

class GalleryCard extends Component {

  render() {
    const { userId, title, body } = this.props;

    return (
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{body}</CardText>
        </CardBody>
        <CardFooter>User:{userId}</CardFooter>
      </Card>
    );
  }

};


export default GalleryCard;
