const addToCart = product =>{
    return {
        type: "ADD_TO_CART",
        product: product
    }
}
const removeFromCart=product=>{
    return {
        type: "REMOVE_FORM_CART",
        product: product
    }
}

export {addToCart, removeFromCart}