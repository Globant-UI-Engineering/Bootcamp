import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL, MAX_OVERVIEW_CARD_LENGTH } from '../../../constants/constants';

const InTheatersCard = (props) => {
    const { id,poster_path, overview, title, release_date } = props.movie;
    const poster_url = poster_path? `${IMAGE_URL}/w300${poster_path}`:'/assets/img/nopicture.gif';
    return (
        <div>
            <div className="uk-card uk-card-default">
                <figure className="uk-card-media-top">
                    <img className="uk-width-1-1"  src={poster_url} alt=""/>
                </figure>
                <section className="uk-card-body">
                    <h3 className="uk-card-title">{title}</h3>
                    <small className="uk-text-capitalize">release date: {release_date}</small>
                    <p>{ overview.length>MAX_OVERVIEW_CARD_LENGTH? `${overview.substr(0,MAX_OVERVIEW_CARD_LENGTH)}...` : overview}</p>
                    <Link to={`/movies/${id}`} role="button" className="uk-button uk-button-secondary uk-align-center uk-text-capitalize">more information</Link>
                </section>
            </div>
        </div>
    );
};

export default InTheatersCard;