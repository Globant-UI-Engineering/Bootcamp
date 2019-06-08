import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL, MAX_OVERVIEW_CARD_LENGTH } from '../../../constants/constants';
import PropTypes from 'prop-types';

const MoviesCard = (props) => {
    const { id,poster_path, overview, title, release_date } = props.movie;
    const poster_url = poster_path? `${IMAGE_URL}/w300${poster_path}`:'/assets/img/nopicture.gif';
    return (
             <div>
                <div className="uk-card uk-card-default uk-card-hover">
                    <div className="uk-card-media-top">
                        <img className="uk-align-center" src={poster_url} alt="movie poster"/>
                    </div>
                    <section className="uk-card-body">
                        <article>
                            <h3 className="uk-card-title">{title}</h3>
                            <small className="uk-text-capitalize">release date: {release_date}</small>
                            <p>{ overview.length>MAX_OVERVIEW_CARD_LENGTH? `${overview.substr(0,MAX_OVERVIEW_CARD_LENGTH)}...` : overview}</p>
                        </article>
                        <Link to={`/movies/${id}`} className="uk-button uk-button-secondary uk-align-center uk-text-capitalize">more information</Link>
                    </section>
                </div>
            </div>
    );
};

MoviesCard.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default MoviesCard;