import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../FoodList.css';
import { connect } from 'react-redux';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
  
class FoodListItem extends React.Component{

    constructor(props){
        super(props)

        this.addPlate = this.addPlate.bind(this);
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
                    <Button title="Add plate" variant="warning" value={plate_info.id} onClick={this.addPlate}>Add</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT} lightBackground/>
                </Card.Body>
            </Card>
        </li>
        )
    }

    addPlate(event){
        var plateData = this.props.list.find(plate => plate.id === event.target.value)
        this.props.dispatch({
            type: 'ADD_PLATE',
            payload:{
                    ...plateData
            }
        })
        this.showToast(plateData);
    }

    showToast(plateData){
        ToastsStore.success(`Hey, you've added ${plateData.plate_name} \n to your shopping cart `)
    }

}

const ReduxFoodContainer = connect()(FoodListItem);

export default (ReduxFoodContainer);