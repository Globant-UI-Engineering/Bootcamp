import React from 'react';
import {Link} from 'react-router-dom';
 
class RestaurantListItem extends React.Component{

    render(){
        var restaurant_info = this.props.data;
        return(
        
        <li className="restaurant_list_item" >
                <Link to={`/home/${restaurant_info.id}`} id="restaurant_link">
                    <img                
                        src= {restaurant_info.picture} 
                        className="restaurant_image"
                        alt={restaurant_info.name}
                        tittle={restaurant_info.name}
                    />
                </Link>
                <section className="restaurant_info">
                    <h4 className="restaurant_name">{restaurant_info.name}</h4>
                    <span>
                        Location:
                        <p className="restaurant_location">{restaurant_info.location}</p></span>
                </section>
        </li>
        )
    }

}



export default RestaurantListItem;