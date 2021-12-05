import { ENTRYPOINT } from "../config/entrypoint"

export function getCategories(){
    return function(dispatch) {
        fetch(ENTRYPOINT + "/categories", {
            method: 'get',
            'Accept': 'application/ld+json',
        }).then((response)=>{
            // console.log(response);
            return response.json()
        }).then((data)=>{
            // console.log(data);
            dispatch({type: 'GET_CATEGORIES', payload: data})
        })
    }
  }
  