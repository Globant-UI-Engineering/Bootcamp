import * as actions from '../actions/actions'

var initialState = {
    shopping_cart:[],
    is_shopping_cart_available: true
}

function appReducer(state=initialState,action){
    switch (action.type) {
        case 'ADD_PLATE':{
            return actions.ADD_PLATE(state,action)
        }
        case 'DELET_PLATE':{
            return actions.DELET_PLATE(state,action)
        }
        case 'RESET_SHOOPING_CART':{
            return actions.RESET_SHOOPING_CART(state)
        }
        case 'SET_SHOOPING_CART_AVAILABLE':{
            return actions.SET_SHOOPING_CART_AVAILABLE(state, action)
        }
        default:
            return state;
    }
}

export default appReducer;