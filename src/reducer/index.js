const initialState = {
    products: [],
    categories: [],
    cart: [],
    login: [],
    totalPrice: 0,
    order: []
}

export default function rootReducer (state = initialState, action){
  let newState
  switch (action.type) {
      case 'GET_PRODUCTS':
        newState = {
          ...state,
          products : action.payload
        }
          console.log(newState, 'newState');
          return newState
      case 'GET_CATEGORIES':
        newState = {
          ...state,
          categories : action.payload
        }
        console.log(newState, 'newState');
        return newState
      case 'ADD_TO_CART':
        newState = {
          ...state,
          cart : action.payload
        }
        console.log(newState, 'newState');
        return newState
      case 'REMOVE_TO_CART':
        newState = {
          ...state,
            cart : state.cart.filter((element)=>(element.product.id !== action.payload.product.id))
        }
        console.log(newState, 'newStateAfterRemove');
        return newState
      case 'CART_TOTAL_PRICE':
        newState = {
          ...state,
            totalPrice : parseFloat(action.payload)
        }
        console.log(newState, 'newStateSetTotalPrice');
        return newState
      case 'SET_ORDER_WITH_CART':
        newState = {
          ...state,
            order : action.payload
        }
        console.log(newState, 'newStateSetOrderWithCart');
        return newState
      default:
        return state
  }
}
