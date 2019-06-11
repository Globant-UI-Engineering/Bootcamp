import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setNowInTheaters, setPopularMovies } from '../../actions/moviesActions';
import { isLoading } from '../../actions/loadingActions'
import MovieServices from '../../services/MovieServices';
import Carousel from '../Carousel/Carousel';
import InTheatersContainer from '../InTheatersContainer/InTheatersContainer';
import PropTypes from 'prop-types';
import './StartPage.css';


class StartPage extends Component {

    componentWillMount(){
        this.props.isLoading(true);
    }

    componentDidMount(){
        let nowInTheaters = new MovieServices().nowInTheaters();
        nowInTheaters.then( movie =>{
            this.props.isLoading(false);
            this.props.setNowInTheaters(movie.data.results);
        });
        
        let popularMovies = new MovieServices().popularMovies();
        popularMovies.then( movie =>{
            this.props.setPopularMovies(movie.data.results);
        })
    }

    render() {
        return (
            <Fragment>
                <section className="uk-container uk-container-small">
                    <Carousel/>
                </section>
                <div className="uk-text-center separator-1">
                    <h3 className="text-white">Now In Theaters</h3>
                </div>
                <section className="parallax-1">
                    <InTheatersContainer/>
                </section>
            </Fragment>
        );
    }
}

StartPage.propTypes = {
    loading: PropTypes.bool.isRequired,
    setNowInTheaters: PropTypes.func.isRequired,
    setPopularMovies: PropTypes.func.isRequired,
    isLoading:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    loading: state.loading.loading,
});

export default connect(mapStateToProps,{setNowInTheaters, isLoading, setPopularMovies}) (StartPage);