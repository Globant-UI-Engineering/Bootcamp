import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import noImage from "../../assets/img/no-image.png";

class Movie extends Component {

    convertDateFormat(string) {
        var info = string.split('-');
        return info[2] + '-' + info[1] + '-' + info[0];
    }

    render() {
        const { image, id, title, release } = this.props;
        const imageURL = image !== null ? `https://image.tmdb.org/t/p/w300${image}` : noImage;
        return (
            <Col sm="4" >
                <article>
                    <Card>
                        <Link to={`/detail/${id}`}><CardImg top width="100%" src={imageURL} alt={title} /></Link>
                        <CardBody>
                            <CardTitle><Link to={`/detail/${id}`}>{title}</Link></CardTitle>
                            <CardText>
                                <small className="text-muted">Released on {this.convertDateFormat(release)}</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </article>
            </Col>
        );
    }
}

export default Movie;