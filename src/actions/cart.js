export function getCartFromLocalStorage(){
    return function(dispatch) {
        const cart = JSON.parse(localStorage.getItem('cart'))
        // console.log(cart,'CART');
        if (cart) {
            dispatch(addToCart(cart))
        }
    }
}
export function addToCart(data){
    return {type: 'ADD_TO_CART', payload: data}
    
}

export function removeToCart(data){
    return {type: 'REMOVE_TO_CART', payload: data}
    
}

export function cartTotalPrice(data){
    return {type: 'CART_TOTAL_PRICE', payload: data}
    
}