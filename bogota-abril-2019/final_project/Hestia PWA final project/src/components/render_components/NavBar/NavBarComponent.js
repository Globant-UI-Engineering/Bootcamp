import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../assets/hestia_logo.png';
import shopping_cart_logo from '../../../assets/shopping-cart.png';
import logout_logo from '../../../assets/logout.png';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import firebase from '../../../config/firebase_config'
import ReduxActiveOrderContainer from './ActiveOrders/ActiveOrders'

var db = firebase.firestore();

class NavBarComponent extends React.Component{

    constructor(props){
        super(props);
  
        this.state = {
          orders: [],
          isMounted: false,
        }

        this.updateState = this.updateState.bind(this);
        this.logout = this.logout.bind(this);
        this.getOrders_fb = this.getOrders_fb.bind(this);
        this.checkActiveOrders = this.checkActiveOrders.bind(this);
        this.checkOrdersCount = this.checkOrdersCount.bind(this);
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
                {this.checkActiveOrders()}
                <Nav className="ml-auto">
                    <Link to="/home/user/shoppingCart">
                        <Badge className="badge_number" pill variant="warning">{this.props.plates_added_number}</Badge>
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

    logout(){
        firebase.auth().signOut().then(()=> {
        }).catch(function(error) {
          console.log(error)
        });
        this.props.cleanShoopingCart();
        this.props.setShoopingCartAvailable(true);
    }

    checkActiveOrders(){
        if(this.props.is_shoppping_cart_available === false){
            return(
                <ReduxActiveOrderContainer uid={this.props.uid}/>
            )
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
                    this.checkOrdersCount(orders_fb)
                }
            });
        });
    }

    checkOrdersCount(orders){
        if(orders.length>0){
            this.props.setShoopingCartAvailable(false);
        }else{
            this.props.setShoopingCartAvailable(true);
        }
    }

    componentWillUnmount(){
        this.setState({ 
          isMounted: false
        });
    }
}

function cleanShoopingCart(){
    return{
        type: 'RESET_SHOOPING_CART'
    }
}

function setShoopingCartAvailable(available){
    return{
        type: 'SET_SHOOPING_CART_AVAILABLE',
        payload:{
            isAvailable: available
        }
    }
}

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators({cleanShoopingCart,setShoopingCartAvailable}, dispatch)
}

const ReduxNavContainer = connect(null,mapDispatchToProps)(NavBarComponent);
export default ReduxNavContainer;