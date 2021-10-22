const initialState = {
    products: [],
    categories: [],
    cart: [],
    isLoading: true
}

export default function rootReducer (state = initialState, action){
  let newState
  switch (action.type) {
      case 'IS_LOADING':
        newState = {
          ...state,
          isLoading : action.payload
        }
        return newState
      case 'GET_PRODUCTS':
        newState = {
          ...state,
          products : action.payload['hydra:member']
        }
          console.log(newState, 'newState');
          return newState
      case 'GET_CATEGORIES':
        newState = {
          ...state,
          categories : action.payload['hydra:member']
        }
        console.log(newState, 'newState');
        return newState
      case 'ADD_TO_CART':
        newState = {
          ...state,
            cart : [...state.cart, action.payload]
        }
        console.log(newState, 'newState');
        return newState
      default:
        return state
  }
}
