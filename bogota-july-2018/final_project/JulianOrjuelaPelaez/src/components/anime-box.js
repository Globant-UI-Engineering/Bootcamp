import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class AnimeBox extends Component {

    singleAnimeBox = ({series}) => (
        <li className="anime-box" key = {series.id}> 
            <Link className="anime-box-link" to={`/${series.attributes.slug}/${series.id}`}>
                <div className="anime-box-link__image">
                    <img src={series.attributes.posterImage.small} alt="AnimeBanner" />
                </div>
                <h2 className="anime-box-link__text">
                    <span className="primary">Name:</span> {series.attributes.canonicalTitle} / ({series.attributes.titles.ja_jp})
                </h2>
                <div className="anime-box-link__ratings">
                    <b>Ratings /</b> <span className="blue">
                       average: {series.attributes.averageRating}/100</span> | <span className="green">
                       rating rank: {series.attributes.ratingRank}</span>
                </div>
            </Link>
        </li>
    )

    render() {
      return (
        <ul className="anime">
           {this.props.series.data.map(series => (
               <this.singleAnimeBox series={series} key={series.id} />
           ))}
        </ul>
      );
    }
  }

AnimeBox.propTypes ={
    series: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    series: state.animeList.animeList
})

export default connect(mapStateToProps, null)(AnimeBox)
