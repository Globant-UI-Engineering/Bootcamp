import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../FoodList.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
  
class FoodListItem extends React.Component{

    constructor(props){
        super(props)

        this.checkShoppingCart = this.checkShoppingCart.bind(this);
    }

    render(){
        var plate_info = this.props.data;
        return(
        <li className="food_list_item">
            <Card className = "food_card">
                <Card.Img alt={plate_info.plate_name} className="food_image" variant="top" src={plate_info.picture} />
                <Card.Body>
                    <Card.Title>{plate_info.plate_name}</Card.Title>
                    <Card.Text>
                            Price: {plate_info.price.toLocaleString()}
                    </Card.Text>
                    <Button title="Add plate" variant="warning" value={plate_info.id} onClick={this.checkShoppingCart}>Add</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT} lightBackground/>
                </Card.Body>
            </Card>
        </li>
        )
    }

    checkShoppingCart(event){
        var plateData = this.props.list.find(plate => plate.id === event.target.value)
        if(this.props.shoppin_cart_available){
            this.props.addPlate(plateData);
            this.showToast(true,plateData);
        }else{
            this.showToast(false);
        }
    }

    showToast(available, plateData={}){
        if(available){
            ToastsStore.success(`Hey, you've added ${plateData.plate_name} \n to your shopping cart `)
        }else{
            ToastsStore.error(`It looks like you still have an active order`)
        }
    }

}

function addPlate(plateData){
    return{
        type: 'ADD_PLATE',
        payload:{
                ...plateData
        }
    }
}

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators({addPlate}, dispatch)
}

var mapStateToProps = (state) => {
    return {
      shoppin_cart_available: state.is_shopping_cart_available
    }
}

const ReduxFoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodListItem);

export default (ReduxFoodContainer);