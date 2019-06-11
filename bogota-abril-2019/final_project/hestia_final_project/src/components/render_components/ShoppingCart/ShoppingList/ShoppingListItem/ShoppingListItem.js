import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import { connect } from 'react-redux';

class ShoppingListItem extends React.Component{

    constructor(props){
        super(props)

        this.addPlate = this.addPlate.bind(this);
        this.showToast = this.showToast.bind(this);
    }

    render(){
        var plate_info = this.props.data;
        return(
        
        <li className="food_list_item">
            <Card className = "food_card" >
                <Card.Img alt={plate_info.plate_name} className="food_image" variant="top" src={plate_info.picture} />
                <Card.Body>
                    <Card.Title>{plate_info.plate_name}</Card.Title>
                    <Card.Text>
                            Price: {plate_info.price.toLocaleString()} <br></br>
                            Time: {plate_info.cooking_time} min
                    </Card.Text>
                    <Button title="Delete plate" variant="danger" value={plate_info.id} onClick={this.addPlate}>Delete</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT} lightBackground/>
                </Card.Body>
            </Card>
        </li>
        )
    }

    addPlate(event){
        var newList = this.props.list.filter(plate => plate.id !== event.target.value)
        this.props.dispatch({
            type: 'DELET_PLATE',
            payload:{
                    listUpdated : newList
            }
        })
        this.showToast(event);
    }

    showToast(event){
        var plateData = this.props.list.find(plate => plate.id === event.target.value);
        ToastsStore.error(`Ups, you've deleted ${plateData.plate_name} \n from your shopping cart `)
    }

}
const ReduxListItemContainer = connect()(ShoppingListItem);

export default (ReduxListItemContainer);