
import {connect} from "react-redux"
function mapStateToProps (state, props){
  return {
    cart : state.cart,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {

  }
}
function CartToConnect({cart}){
 
  return (

    <>
        <h1>Cart</h1>
    </>

  )
}



const Cart =  connect(mapStateToProps, mapDispatchToProps)(CartToConnect)
export default Cart
