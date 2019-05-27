import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopularMovies } from '../../actions/moviesActions';
import CarouselSlide from './CarouselSlide/CarouselSlide';
import {MAX_SLIDES} from '../../constants/constants';
import PropTypes from 'prop-types';
import './Carousel.css';

class Carousel extends Component {
    
    componentWillMount(){
        this.props.getPopularMovies();
    }

    render() {
        return (
            <div>
                <div uk-slider="autoplay: true" className="uk-background-default">
                    <div className="uk-visible-toggle uk-light" tabIndex="-1">
                        <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m">
                        {Object.keys(this.props.movies.slice(0,MAX_SLIDES)).filter( key =>{
                            return this.props.movies[key].poster_path
                        }).map( movieKey =>(
                            <CarouselSlide key={movieKey}  slide={this.props.movies[movieKey]} />
                        ))}
                        </ul>
                    <button className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous="true" uk-slider-item="previous"></button>
                    <button className="uk-position-center-right uk-position-small uk-hidden-hover"  uk-slidenav-next="true" uk-slider-item="next"></button>
                    </div>
                </div>
            </div>
        );
    }
}

Carousel.propTypes = {
    movies: PropTypes.array.isRequired,
    getPopularMovies: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    movies : state.movies.popular
})
 
export default connect(mapStateToProps, {getPopularMovies}) (Carousel);
