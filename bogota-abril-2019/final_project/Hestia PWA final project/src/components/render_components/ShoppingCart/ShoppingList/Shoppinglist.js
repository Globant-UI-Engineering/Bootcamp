import React from 'react';
import './ShoppingList.css';
import ReduxListItemContainer from './ShoppingListItem/ShoppingListItem'

class ShoppingList extends React.Component{

    render(){
      return(
        <section className="food_list">
            <ul className="food_list">
                {this.props.shopping_list.map((plate,index) =>
                        <ReduxListItemContainer key={plate.id+""+index} list={this.props.shopping_list}  data={plate}/> 
                        )}
            </ul>
        </section>
        
      )
    }
}

export default (ShoppingList);