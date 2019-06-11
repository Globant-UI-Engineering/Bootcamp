export var ADD_PLATE = (state, action) => {
    return {
        ...state,
        shopping_cart: state.shopping_cart.concat(action.payload)
    }
}

export var DELET_PLATE = (state, action) => {
    return {
        ...state,
        shopping_cart: action.payload.listUpdated
    }
}

export var RESET_SHOOPING_CART = (state) => {
    return {
        ...state,
        shopping_cart: [],
    }
}

export var SET_SHOOPING_CART_AVAILABLE = (state,action) => {
    return {
        ...state,
        is_shopping_cart_available: action.payload.isAvailable
    }
}
