
import {connect} from "react-redux"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function mapStateToProps (state, props){
  return {
    product : props.product,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
  }
}
function ProductShowToConnect({product}){

  return (
    <>
      <div className="image-container" style={{ position: 'relative', width: '100%', height: '500px' }}>
        <img
          alt={product.name}
          src={'/assets/products/abricot.jpg'}
        />
      </div>
      <div className="container category-title">
        <h1 className={"text-black p-2 my-3 "}>{product.name}</h1>
        <h2 className="text-white">{product.name}</h2>
        <h2 className="text-white">{product.Origin}</h2>
      </div>
    </>
  )
}

const ProductShow =  connect(mapStateToProps, mapDispatchToProps)(ProductShowToConnect)
export default ProductShow
