import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../types.js';

const initialState = {
    cartList: []
};

export default function CartReducers(state = initialState, action) {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cartList: [ ...state.cartList, action.item ]
            };
        case REMOVE_CART_ITEM:
            return {
                cartList: state.cartList.filter( (item, index) => index !== action.index)
            };
        default:
            return state;
    }
}
