import { ENTRYPOINT } from "../config/entrypoint";

export function getProducts(subCategoryName){
    return function(dispatch) {

        fetch(ENTRYPOINT + "/products?page=1&subCategory.name="+subCategoryName, {
            method: 'get',
            'Accept': 'application/ld+json',
        }).then((response)=>{
            // console.log(response);
            return response.json()
        }).then((data)=>{
            // console.log(data);
            dispatch({type: 'GET_PRODUCTS', payload: data})
            return

        })
    }
}

