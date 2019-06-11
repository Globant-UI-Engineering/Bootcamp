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

export var RESET_SHOOPING_CART = (state, action) => {
    return {
        ...state,
        shopping_cart: []
    }
}
