import React from 'react';
import './Home.css';
import RestaurantList from '../../render_components/Restaurant_List/Restaurant_List';
import Restaurant from '../../render_components/Restaurant/Restaurant';
import ShoppingCart from '../../render_components/ShoppingCart/ShoppingCart'
import {Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from '../../../config/firebase_config'
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import ReduxNavContainer from '../../render_components/NavBar/NavBarComponent'


class Home extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            user: '',
            password: '',
            user_id: ''
        }

        this.showToast = this.showToast.bind(this);
    }

    render(){
        return(
        <header>
            <ReduxNavContainer 
                uid={this.state.user_id} 
                plates_added_number={this.props.plates_added_number} 
                is_shoppping_cart_available={this.props.shoppin_cart_available} 
            />
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT} lightBackground/>
            <main>
                <Route  exact path="/home" component={RestaurantList} />
                <Route  exact path={`/home/:idRestaurant`} component={Restaurant}/>
                <Route  exact path={`/home/user/shoppingCart`} render={() => <ShoppingCart uid={this.state.user_id} />}/>
            </main>
        </header>
        )
    }

    componentWillMount(){
        var user_data = firebase.auth().currentUser;
        if(user_data == null){
            this.returnToLogIn();
        }else{
            this.updateState(user_data);
        }
    }

    componentDidMount(){
        this.showToast()
    }

    returnToLogIn(){
        const { history } = this.props;
        history.push('/');
    }

    updateState(user_data){
        this.setState({
            user: user_data.email,
            user_id: user_data.uid
        })
    }

    showToast(){
        ToastsStore.info(`Hi, you've logged in with ${this.state.user}`)
    }
}

var mapStateToProps = (state) => {
    return {
      plates_added_number : state.shopping_cart.length,
      shoppin_cart_available: state.is_shopping_cart_available
    }
}

const ReduxHomeContainer = connect(mapStateToProps)(Home);
export default withRouter(ReduxHomeContainer);