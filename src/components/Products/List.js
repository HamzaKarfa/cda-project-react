
import {connect} from "react-redux"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Card from "./Card";
function mapStateToProps (state, props){
  return {
    products : state.products,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
  }
}
function ProductListToConnect({products, props}){

  const colors= {
    0:'bg-color-primary',
    1:'bg-color-orange',
    2:'bg-color-yellow',
    3:'bg-color-red',
    4:'bg-color-blue',
  }
  return (
<>
    <div className="d-flex justify-content-center flex-wrap">
      {
        products.map((product)=>{
          return (

            <Card product={product}/>
          )
        })
      }
    </div>

</>

  )
}

const ProductList =  connect(mapStateToProps, mapDispatchToProps)(ProductListToConnect)
export default ProductList
