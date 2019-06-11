import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../assets/hestia_logo.png';
import shopping_cart_logo from '../../../assets/shopping-cart.png';
import logout_logo from '../../../assets/logout.png';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import firebase from '../../../config/firebase_config'

var db = firebase.firestore();

class NavBarComponent extends React.Component{

    constructor(props){
        super(props);
  
        this.state = {
          orders: [],
          isMounted: false
        }

        this.updateState = this.updateState.bind(this);
        this.cleanShoopingCart = this.cleanShoopingCart.bind(this);
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        firebase.auth().signOut().then(function() {
        }).catch(function(error) {
          console.log(error)
        });

        this.cleanShoopingCart();

    }

    cleanShoopingCart = () =>{
        this.props.dispatch({
            type: 'RESET_SHOOPING_CART'
        })
    }

    checkActiveOrders = (count) => {
        if(count>0){
            return(
                <Navbar.Text className="active_orders_count">
                    {count} active orders
                </Navbar.Text>
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
        var orders_fb = []
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

    render(){
        return(
            <Navbar className="nav-bar" bg="light">
                <Link to="/home">
                    <Navbar.Brand href="">
                        <img
                        src={logo}
                        className="d-inline-block align-top logo"
                        alt="Hestia logo"
                        title="Hestia"
                        />
                    </Navbar.Brand>
                </Link>
                {this.checkActiveOrders(this.state.orders.length)}
                <Nav className="ml-auto">
                    <Badge className="badge_number" pill variant="warning">{this.props.plates_added_number}</Badge>
                    <Link to="/home/user/shoppingCart">
                        <img
                        src={shopping_cart_logo}
                        className="d-inline-block align-top icon"
                        alt="Shopping cart"
                        title="Shopping cart"
                        />
                    </Link>
                    <Link to="/">
                        <img
                        src={logout_logo}
                        className="d-inline-block align-top icon"
                        alt="Log out"
                        title="Log out"
                        onClick = {this.logout}
                        />
                    </Link>
                </Nav>
            </Navbar>
        
        )
    }
}

const ReduxNavContainer = connect()(NavBarComponent);
export default ReduxNavContainer;