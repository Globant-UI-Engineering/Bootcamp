import React, {Component} from 'react';
import ShoWeather from './CartComponents/ShoWeather';
import Form from './CartComponents/Form';

class Cart extends Component{

    render(){
        return(
            <div className="containerCar">
                 <Form />
                 <ShoWeather />                
            </div>
        )
    }
}
export default Cart;
