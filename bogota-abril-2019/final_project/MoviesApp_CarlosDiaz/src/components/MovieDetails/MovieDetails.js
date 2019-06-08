import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IMAGE_URL } from '../../constants/constants';
import {getSingleMovie} from '../../actions/moviesActions'
import { isLoading } from '../../actions/loadingActions'
import { isInFavorites } from '../../actions/favoritesActions';
import { compose } from 'redux';
import { firebaseConnect,firestoreConnect } from 'react-redux-firebase';
import MovieServices from '../../services/MovieServices';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';

class MovieDetails extends Component {

    componentWillMount(){
        this.props.isLoading(true);
    }

    componentDidMount(){
        var selectedMovie = new MovieServices().getMovieById(this.props.movieId);
        const { firestore, auth} = this.props;
        const collection = firestore.collection('appUsers');
        selectedMovie.then( movie =>{
           this.props.isLoading(false);
           this.props.getSingleMovie(movie.data);
           const query = collection.where('id',"==",auth.uid).get();
           query.then( user =>{
           if(!user.empty){
            const userData = user.docs[0].data();
            const favoritesArray = userData.favorites;
            const {id} = this.props.selectedMovie;
            if(favoritesArray.length!==0){
               let movieFound = favoritesArray.find( movie =>{
                 return  movie.movieId === id;
                });
               if(movieFound){
                    this.props.isInFavorites(true);
               } else{
                    this.props.isInFavorites(false);
               }
            }
        }
        })
        });
    }


    manageFavorite = (action) =>{
        const { firestore, auth} = this.props;
        const collection = firestore.collection('appUsers');
        const query = collection.where('id',"==",auth.uid).get();
        query.then( user=>{
            if(user.empty){
                console.log('empty');
            }else{
                const userData = user.docs[0].data();
                const docId = user.docs[0].id;
                const {id, title, release_date, budget} = this.props.selectedMovie;
                if(action ==='add'){
                    const movieObj = {
                        movieId:id,
                        movieTitle:title,
                        releaseDate: release_date,
                        budget
                    }
                    userData.favorites.push(movieObj);
                    firestore.update({
                        collection:'appUsers',
                        doc: docId
                    }, userData).then(()=>{
                        this.props.isInFavorites(true);
                    });
                }
                if(action ==='remove'){
                    const favoritesArray = [...userData.favorites];
                    let filteredArray = favoritesArray.filter(favorite =>{
                        return favorite.movieId !== id;
                    })
                    userData.favorites = filteredArray;
                    firestore.update({
                        collection:'appUsers',
                        doc: docId
                    }, userData).then(()=>{
                       this.props.isInFavorites(false);
                    });
                }
            }
        })
    }

    render() {
        const {homepage, budget, original_title, title, overview, poster_path, release_date} = this.props.selectedMovie;
        const poster_url = poster_path? `${IMAGE_URL}/w500${poster_path}`:'/assets/img/nopicture.gif';
        const release_year = new Date(release_date).getFullYear();
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
          });
        const { alreadyInFavorites } = this.props;
        let favoritesBtn = !alreadyInFavorites
        ?  
            <button className="uk-button uk-button-primary uk-align-center uk-text-capitalize" onClick={()=>this.manageFavorite('add')}>
                <i className="fas fa-plus"></i>
                {'  '}add to favorites
            </button> 
        :
            <button className="uk-button uk-button-danger uk-align-center uk-text-capitalize" onClick={()=>this.manageFavorite('remove')}>
                <i className="fas fa-minus"></i>
                {'  '}remove from favorites
            </button>;
        
        const movieLoaded = (this.props.loading) 
        ?  
            <Spinner/> 
        : 
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
                <div className="uk-card-media-left uk-cover-container">
                    <img src={poster_url} alt="" uk-cover="true"/>
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <section className="uk-card-body">
                        <h1 className="uk-card-title">{title} ({release_year})</h1>
                        <article>
                            <p><strong className="uk-text-capitalize">release date: </strong>{release_date}</p>
                            <p><strong className="uk-text-capitalize">original title: </strong>{original_title}</p>
                            <p><strong className="uk-text-capitalize">overview: </strong>{overview}</p>
                            <p><strong className="uk-text-capitalize">budget: </strong>{formatter.format(budget)}</p>
                            {
                            homepage?<a className="uk-button uk-button-link uk-text-capitalize uk-align-center" target="_blank" href={homepage}>visit homepage</a>:null
                            }
                           {favoritesBtn}
                        </article>
                    </section>
                </div>
            </div>
        
        return(
            <div className="uk-container uk-container-small">
                {movieLoaded}
            </div>   
        );
    }
}

MovieDetails.propTypes = {
    auth:PropTypes.object.isRequired,
    selectedMovie: PropTypes.object.isRequired,
    alreadyInFavorites:PropTypes.bool.isRequired,
    loading:PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    selectedMovie : state.movies.selectedMovie,
    loading: state.loading.loading,
    auth: state.firebase.auth,
    alreadyInFavorites: state.inFavorites.alreadyInFavorites
})

 export default compose(
        firebaseConnect(),
        firestoreConnect(),
        connect(mapStateToProps,{getSingleMovie, isLoading, isInFavorites})
    )(MovieDetails);
