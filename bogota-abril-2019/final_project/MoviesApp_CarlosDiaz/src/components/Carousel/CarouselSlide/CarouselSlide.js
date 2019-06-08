import React, { Component } from 'react';
import { IMAGE_URL } from '../../../constants/constants';
import { Link } from 'react-router-dom';
import '../Carousel.css'

class CarouselSlide extends Component {
    render() {
        const {id,poster_path} = this.props.slide;
        return (
            <li className=" uk-transition-toggle uk-width-1-4" tabIndex="0">
                 <Link to={`/movies/${id}`}><img className="uk-width-1-1 carrousel_slide" src={`${IMAGE_URL}/w300${poster_path}`} alt="Movie poster"/></Link>
            </li>
        );
    }
}

export default CarouselSlide;