import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ActiveOrders.css';
import firebase from '../../../../config/firebase_config';
import { connect } from 'react-redux';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

var db = firebase.firestore();

class ActiveOrders extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            isMounted: false,
            orders: [],
            time_remaining: 0
        };
        
        this.getTimeRemaining = this.getTimeRemaining.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);        
        this.updateOrder = this.updateOrder.bind(this);
        this.setShoopingCartAvailable = this.setShoopingCartAvailable.bind(this);
        this.updateState = this.updateState.bind(this);
        this.getOrders_fb = this.getOrders_fb.bind(this);
    }

    render() { 
        var order = this.state.orders[0];
        if(order !== undefined){
            return (
                <section>
                    <Button title="Active orders" ref="active_order_button" className="active_orders_count" onClick={this.handleShow}>
                        {this.state.orders.length} active order
                    </Button>
    
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title className="modal_tittle tittle" >Your order</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <section className="modal_details">
                                <p> <span>Price: </span> $ {order.price.toLocaleString()} </p>
                                <p> <span>Cooking Time: </span> {order.time} minutes </p>
                                <p> <span>Order date: </span> {this.getDate(order.date)} </p>
                                <p> <span>Time remaining: </span> {this.getTimeRemaining(order)} </p>
                            </section>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button title="Close the modal" variant="danger" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button title="Check order as received" variant="warning" onClick={this.updateOrder}>
                            Received
                        </Button>
                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT} lightBackground/>
                        </Modal.Footer>
                    </Modal>
                </section>  
            )  
        }else{
            return(<div>

            </div>)
        }
    
    }

    componentDidMount(){
        this.updateState();
        this.getOrders_fb();
    }

    updateState(){
        this.setState({ 
          isMounted: true
        });
    }

    getOrders_fb(){ 
        var orders_fb = [];
        db.collection("orders")
        .where("delivered", "==", false)
        .where("user_id", "==", this.props.uid)
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(this.state.isMounted){
                    orders_fb.push({
                        ...doc.data(),
                        doc_id: doc.id
                    })           
                    this.setState({ 
                        orders: orders_fb
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

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    getDate(time){
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        return year + "-" + month + "-" + day + " " + hours + ":" + minutes
    }

    getTimeRemaining(order){
        var now = new Date(); 
        var date = new Date(order.date);
        var diff = date.getTime() - now.getTime();
        var days_diff = diff/(1000 * 60 * 60 * 24);
        var minutes_diff = Math.round((days_diff)*1440);
        var time = (minutes_diff > 0)?minutes_diff + " minutes left!":" Order Ready! ";
        return time;
        
    }

    showToast(){
        ToastsStore.info(`Enjoy your food! `)
    }

    setShoopingCartAvailable(){
        this.props.dispatch({
            type: 'SET_SHOOPING_CART_AVAILABLE',
            payload:{
                isAvailable: true
            }
        })
    }

    updateOrder() {
        this.handleClose();
        this.showToast()
        var orderId = this.state.orders[0].doc_id;
        db.collection("orders").doc(orderId)
        .update({
            delivered: true
        })
        .then(()=> {
            this.setShoopingCartAvailable();
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });

    }

    

}

const ReduxActiveOrderContainer = connect()(ActiveOrders);

export default ReduxActiveOrderContainer;