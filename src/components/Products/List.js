
import {connect} from "react-redux"
import Card from "./Card";
function mapStateToProps (state, props){
  return {
    products : state.products,
    props:props
  }
}

function ProductListToConnect({products, props}){

  return (
    <>
        <div className="d-flex justify-content-center flex-wrap">
          {
            products.map((product,key)=>{
              return (
                <Card product={product} key={key}/>
              )
            })
          }
        </div>
    </>
  )
}

const ProductList = connect(mapStateToProps)(ProductListToConnect)
export default ProductList
