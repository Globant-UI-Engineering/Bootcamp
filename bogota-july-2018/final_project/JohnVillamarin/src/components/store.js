import {createStore} from 'redux';

const reducer = (state,action) => {
    switch (action.type) {
        case 'ADD_TO_CART' :
            return {
                ...state,
                cart: state.cart.concat(action.product)
            }
            
        case 'REMOVE_FORM_CART':
            return {
                ...state,
                cart:state.cart.filter(product => product !== action.product)
            }          
        default:
            return state    
    }
   
}

export default createStore (reducer, { cart: []})