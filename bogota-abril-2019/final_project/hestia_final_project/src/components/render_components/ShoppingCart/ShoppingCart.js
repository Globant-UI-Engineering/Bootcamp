import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './ShoppingCart.css';
import Shoppinglist from './ShoppingList/Shoppinglist';
import { Button } from 'react-bootstrap';
import firebase from '../../../config/firebase_config';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

var db = firebase.firestore();

var DetailsComponent = (props) =>{
    return(
        <section>
            <span> Total: {props.price.toLocaleString()} </span>
            <span> Time: {props.time} minutes </span>
        </section>
    )
}

class ShoppingCart extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            time : this.getTotaltoPay(),
            price : this.getTimetoWait(),
        }

        this.getTotaltoPay = this.getTotaltoPay.bind(this);
        this.getTimetoWait = this.getTimetoWait.bind(this);
        this.createNewOrder = this.createNewOrder.bind(this);
        this.getDeliveryTime = this.getDeliveryTime.bind(this);
        this.createNewOrderFireBase = this.createNewOrderFireBase.bind(this);
    }

    render(){
        return(
            <div className="shoppinCartContainer">
                <h2 className="tittle" >Your Shooping Cart</h2>
                <DetailsComponent price={this.getTotaltoPay()} time={this.getTimetoWait()} />
                <Shoppinglist shopping_list={this.props.shoppin_cart} />
                <div className="buttonContainer">
                    <Button onClick={this.createNewOrder} title="Send Order" variant="warning" able={(this.getTotaltoPay())?"able":"disable"} className="buttonSend">Send</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT} lightBackground/>
                </div>
            </div>
        )
    }

    showToast(){
        ToastsStore.success(`Your order's been received correctly `)
    }

    getTotaltoPay(){
        var total_price = this.props.shoppin_cart.reduce((sum,element) => sum + element.price,0)
        return total_price;
    }

    getTimetoWait(){
        var time = this.props.shoppin_cart.reduce((sum,element) => sum + element.cooking_time,0)
        return time;
    }

    createNewOrder(){
        var number_plates = this.props.shoppin_cart.length
        var time = this.state.time;
        var price = this.state.price;
        this.createNewOrderFireBase(number_plates, price, time);
        this.props.resetShoopingCart();
        this.showToast();
    }

    getDeliveryTime(){
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes() + this.state.time;
        var seconds = today.getSeconds();

        if(hours<=9) hours = "0"+hours;
        if(minutes<=9) minutes = "0"+minutes;
        if(seconds<=9) seconds = "0"+seconds;

        return hours + ':' + minutes + ':' + seconds;
    }

    createNewOrderFireBase(number_plates, price, time){
        db.collection("orders").add({
            number_plates: number_plates,
            price: price,
            time: time,
            delivered: false,
            user_id: this.props.uid
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}

function resetShoopingCart(){
    return {
        type: 'RESET_SHOOPING_CART'
    }
}


var mapStateToProps = (state) => {
    return {
      shoppin_cart: state.shopping_cart
    }
}

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators({resetShoopingCart}, dispatch)
}

const ReduxShoppingCartContainer = connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);

export default ReduxShoppingCartContainer