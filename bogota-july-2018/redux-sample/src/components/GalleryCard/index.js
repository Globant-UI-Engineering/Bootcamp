import React, { Component } from 'react';
import {
  Card, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';

class GalleryCard extends Component {

  render() {
    const { name, elixirCost, idName } = this.props;

    return (
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <img src = {`http://www.clashapi.xyz/images/cards/${idName}.png`}/>
        </CardBody>
        <CardFooter>{elixirCost}</CardFooter>
      </Card>
    );
  }

};


export default GalleryCard;
