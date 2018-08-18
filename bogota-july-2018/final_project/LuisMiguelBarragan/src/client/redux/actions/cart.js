import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../types.js';

export const addCartItem = item => ({
    type: ADD_CART_ITEM,
    item
});

export const removeCartItem = index => ({
    type: REMOVE_CART_ITEM,
    index
});
