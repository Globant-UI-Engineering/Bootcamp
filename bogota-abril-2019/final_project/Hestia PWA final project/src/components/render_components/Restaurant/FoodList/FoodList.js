import React from 'react';
import './FoodList.css';
import firebase from '../../../../config/firebase_config';
import ReduxFoodContainer from './FoodListItem/FoodListItem'

var db = firebase.firestore();

class FoodList extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            food_list: [],
            isMounted: false
        }

        this.updateState = this.updateState.bind(this);
    }

    render(){
      return(

        <section className="food_list">
            <h3 className="tittle">Our Plates</h3>
            <ul className="food_list">
                {this.state.food_list.map((plate) =>
                        <ReduxFoodContainer key={plate.id} list={this.state.food_list}  data={plate}/> 
                        )}
            </ul>
        </section>
        
      )
    }

    updateState(){
      this.setState({ 
        isMounted: true
      });
    }

    componentDidMount(){
      this.updateState();
        var plates_fb = []
        db.collection("plates")
        .where("restaurant_id", "==", this.props.idRestaurant)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if(this.state.isMounted){
              plates_fb.push(doc.data())
              this.setState({ 
                  food_list: plates_fb
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

export default (FoodList);