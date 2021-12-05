import { ENTRYPOINT } from "../config/entrypoint"

export function newOrder(payload){
    console.log(payload, 'NEW ORDER');
    return function(dispatch) {
        fetch(ENTRYPOINT + "/orders", {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then((response)=>{
            // console.log(response);
            return response.json()
        }).then((data)=>{
            console.log(data);
        })
    }
  }
  export function setOrderWithCart(payload){
    return {type: 'SET_ORDER_WITH_CART', payload: payload}
  }
  