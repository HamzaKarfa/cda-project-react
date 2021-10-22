
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

const ProductList = connect(mapStateToProps, mapDispatchToProps)(ProductListToConnect)
export default ProductList
