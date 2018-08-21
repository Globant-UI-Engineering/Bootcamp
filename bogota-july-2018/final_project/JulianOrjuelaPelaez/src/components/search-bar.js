import React, { Component } from 'react';
import AnimeBox from './anime-box';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchAnime } from '../actions/fecth-anime';


class SearchInput extends Component {
    state = {
        animeName: '',
    }
     onSubmit = e => {
        e.preventDefault();
        let aniName = this.state.animeName; 
        aniName = aniName.trim().split(' ').join('%20');
        this.props.fetchAnime(aniName);
        this.setState({animeName: ''});
    }

    onChange = e => {
        this.setState({animeName: e.target.value});
    }

  render() {
    return (
      <React.Fragment>
            <header className = "main-header">
                    <h1 className="main-header__text"> Discover new anime </h1>
            </header>
            <main>
                <form className="anime-search" onSubmit={this.onSubmit}>
                    <input className="anime-search-input" name="AnimeName" type="text" 
                    value={this.state.animeName} 
                    onChange={this.onChange}  
                    placeholder="Search your favorite animes..."
                    aria-labelledby = "Search input"
                    />
                    
                </form>

                {
                    this.props.fetching &&  <span className="anime-search-message"> Write an anime to start </span>
                }
                {
                    !this.props.fetching && this.state.animeName === '' &&  <AnimeBox /> 
                }
            </main>
        </React.Fragment>        
    );
  }
}

SearchInput.propTypes = {
    fetchAnime: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    series: PropTypes.object
}

const mapStateToProps = state => ({
    fetching: state.animeList.isFetchingList,
    series: state.animeList.animeList
})

export default connect(mapStateToProps, { fetchAnime } )(SearchInput)