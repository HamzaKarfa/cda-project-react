import SubCategory from "../components/SubCategory"
import { ENTRYPOINT } from "../config/entrypoint"




export function isLoading(bool){
    return {type: 'IS_LOADING', payload: bool}
}

export function getProducts(subCategoryName){
    return function(dispatch) {

        fetch(ENTRYPOINT + "/products?page=1&subCategory.name="+subCategoryName, {
            method: 'get',
            'Accept': 'application/ld+json',
        }).then((response)=>{
            console.log(response);
            return response.json()
        }).then((data)=>{
            console.log(data);
            dispatch({type: 'GET_PRODUCTS', payload: data})
            return

        })
    }
}

export function getCategories(){
  return function(dispatch) {
      fetch(ENTRYPOINT + "/categories", {
          method: 'get',
          'Accept': 'application/ld+json',
      }).then((response)=>{
          console.log(response);
          return response.json()
      }).then((data)=>{
          console.log(data);
          dispatch({type: 'GET_CATEGORIES', payload: data})
          return dispatch(isLoading(false))
      })
  }
}


export function getCartFromLocalStorage(){

}
export function addToCart(data){
    return {type: 'ADD_TO_CART', payload: data}
    
}