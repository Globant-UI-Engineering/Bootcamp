import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
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
            <span> Total: $ {props.price.toLocaleString()} </span>
            <span> Time: {props.time} minutes </span>
        </section>
    )
}

class ShoppingCart extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            time : this.getTimetoWait(),
            price : this.getTotaltoPay(),
        }

        this.getTotaltoPay = this.getTotaltoPay.bind(this);
        this.getTimetoWait = this.getTimetoWait.bind(this);
        this.createNewOrder = this.createNewOrder.bind(this);
        this.createNewOrderFireBase = this.createNewOrderFireBase.bind(this);
    }

    render(){
        return(
            <div className="shoppinCartContainer">
                <h2 className="tittle" >Your Shooping Cart</h2>
                <DetailsComponent price={this.getTotaltoPay()} time={this.getTimetoWait()} />
                <Shoppinglist shopping_list={this.props.shoppin_cart} />
                <div className="buttonContainer">
                    <Link to="/home">
                        <Button onClick={this.createNewOrder} title="Send Order" variant="warning" able={(this.getTotaltoPay())?"able":"disable"} className="buttonSend">Send</Button>
                    </Link>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT} lightBackground/>
                </div>
            </div>
        )
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
    
    createNewOrderFireBase(number_plates, price, time){
        this.props.setShoopingCartAvailable();
        db.collection("orders").add({
            number_plates: number_plates,
            price: price,
            time: time,
            date: this.getDate(time),
            delivered: false,
            user_id: this.props.uid
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    getDate(time){
        let order_date = new Date();
        order_date.setMinutes(order_date.getMinutes() + time);
        return order_date.getTime();
    }

    showToast(){
        ToastsStore.success(`Your order's been received correctly `)
    }
}

function resetShoopingCart(){
    return {
        type: 'RESET_SHOOPING_CART'
    }
}

function setShoopingCartAvailable(){
    return {
        type: 'SET_SHOOPING_CART_AVAILABLE',
        payload:{
            isAvailable: false
        }
    }
}


var mapStateToProps = (state) => {
    return {
      shoppin_cart: state.shopping_cart
    }
}

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators({resetShoopingCart, setShoopingCartAvailable}, dispatch)
}

const ReduxShoppingCartContainer = connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);

export default ReduxShoppingCartContainer