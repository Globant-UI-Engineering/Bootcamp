import React from 'react';
import './Restaurant_List.css';
import RestaurantListItem from './RestaurantListItem/RestaurantListItem';
import firebase from '../../../config/firebase_config';
import ReactLoading from 'react-loading';

var db = firebase.firestore();

class RestaurantList extends React.Component{

    constructor(props){
      super(props);

      this.state = {
        restaurant_list: [],
        isLoading: true,
        isMounted: false
      }
      
      this.updateState = this.updateState.bind(this);
      this.loading = this.loading.bind(this);

    }

    render(){
      return(
        <section className="restaurant_list">
            <h2 className="tittle">Restaurants available</h2>
            <ul className="restaurant_list">
                {this.state.restaurant_list.map((restaurant) =>
                        <RestaurantListItem key={restaurant.id}  data={restaurant}/> 
                )}
            </ul>
            {this.loading()}
        </section>
        
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
      var restaurants_fb = []
      db.collection("restaurants").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          restaurants_fb.push(doc.data())
          if(this.state.isMounted){
            this.setState({ 
              restaurant_list: restaurants_fb,
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

export default RestaurantList;