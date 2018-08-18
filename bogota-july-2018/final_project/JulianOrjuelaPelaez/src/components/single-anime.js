import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchingSingleAnime } from '../actions/fecth-anime';

 class SingleAnime extends Component {

  rankList = () => (
    <ul className="list" aria-labelledby="Ranking list">
      <li className="list-element bold-color">Rankings</li>
      <li className="list-element"><span className="blue">Average: </span>{this.props.anime.data.attributes.averageRating}/100</li>
      <li className="list-element"><span className="purple">User: </span>{this.props.anime.data.attributes.userCount}</li>
      <li className="list-element"><span className="red">Popularity: </span>{this.props.anime.data.attributes.popularityRank}</li>
      <li className="list-element"><span className="green">Rating: </span>{this.props.anime.data.attributes.ratingRank}</li>
    </ul>
  )

  capList = () => (
    <ul className="list" aria-labelledby="Properties list">
      <li className ="list-element"><span className="green">Subtype: </span> {this.props.anime.data.attributes.subtype} </li>
      <li className ="list-element"><span className="green">Episodes: </span> {this.props.anime.data.attributes.episodeCount} </li>
      <li className ="list-element"><span className="green">Release date: </span> {this.props.anime.data.attributes.startDate} </li>
      <li className ="list-element"><span className="green">End date: </span> {this.props.anime.data.attributes.endDate} </li>
      <li className ="list-element"><span className="green">Status: </span> {this.props.anime.data.attributes.status} </li>
      <li className ="list-element"><span className="green">Next release: </span> {this.props.anime.data.attributes.nextRelease === null && <span>not confirmed</span>}  </li>
      <li className ="list-element"><span className="green">Rated: </span> {this.props.anime.data.attributes.ageRating} </li>
    </ul>
  )

  pageContentData = () => (
    <div className="anime-page-content-data">
        <p className="anime-page-content-data__paragraph">
            <b>Description:</b> {this.props.anime.data.attributes.synopsis}
        </p>  
        <aside className="anime-page-content-data__aside-cap">
              <this.capList />
        </aside>
        <aside className="anime-page-content-data__aside-rank">
              <this.rankList />
        </aside>
    </div>
  )
  pageContent = () => (
    <div className="anime-page-content-image">
      <img src={this.props.anime.data.attributes.posterImage.small} alt="anime poster" />
    </div>
  )
  
  animePage = () => (
    <section className="anime-page-wrapper">  
      <div className="anime-page-top">
        <h2 className="anime-page-top__title">
            {this.props.anime.data.attributes.canonicalTitle} / 
            ({this.props.anime.data.attributes.titles.ja_jp})
        </h2>
      </div>
      <div className="anime-page-content">
        <this.pageContent />
        <this.pageContentData />
      </div>
    </section>
  )

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchingSingleAnime(id);
    console.log(id);
  }

  render() {
    
    return (
      <div>
        <Link className="btn" to="/" aria-labelledby ="Back button">
            &larr;
        </Link>
        {
          this.props.fetchingSingle && <p> no fuimo a la brga </p>
        }
        {
          !this.props.fetchingSingle && <this.animePage />
        }
      </div>
    )
  }
}

SingleAnime.propTypes = {
    fetchingSingleAnime: PropTypes.func.isRequired,
    anime: PropTypes.object,
    fetchingSingle: PropTypes.bool
}

const mapStateToProps = state => ({
    fetchingSingle: state.animeList.isFetchingSingle,
    anime: state.animeList.animeSingle
})

export default connect(mapStateToProps, {fetchingSingleAnime})(SingleAnime)
