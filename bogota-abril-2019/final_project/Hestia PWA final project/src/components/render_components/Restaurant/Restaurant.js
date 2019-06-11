import React from 'react';
import './Restaurant.css';
import FoodList from './FoodList/FoodList';
import firebase from '../../../config/firebase_config';
import ReactLoading from 'react-loading';

var db = firebase.firestore();

class Restaurant extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            restaurant: {},
            isLoading: true,
            isMounted: false
        }
        
        this.updateState = this.updateState.bind(this);
        this.idRestaurant = this.props.match.params.idRestaurant
    }

    render(){
        return(
            <article>
                <ImageComponent route = {this.state.restaurant.picture}/>
                <section className="info_container">
                    <h2 className="tittle">{this.state.restaurant.name}</h2>
                    <p>{this.state.restaurant.description}</p>
                    <FoodList idRestaurant = {this.idRestaurant} />
                </section>
                {this.loading()}
            </article>
        )
    }

    loading(){
        if(this.state.isLoading){
          return(
            <ReactLoading className="loading" type="spin" color="#f37a70"  />
          )
        }
    }

    updateState(){
        this.setState({ 
          isMounted: true
        });
    }

    componentDidMount(){
        this.updateState();
        db.collection("restaurants")
        .where("id", "==", this.idRestaurant)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(this.state.isMounted){
                    this.setState({ 
                        restaurant: doc.data(),
                        isLoading: false
                    });
                }
            });
        });
    }
    componentWillUnmount(){
        this.setState({ 
          isMounted: false
        });
    }
    
}

var ImageComponent = (props) => {
    return(
        <img
                src={props.route}
                className="restaurant_info_image"
                alt="Hestia logo"
        />
    )
}
   
export default Restaurant;