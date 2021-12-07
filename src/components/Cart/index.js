
import { useEffect, useState } from "react"
import {connect} from "react-redux"
import { useHistory } from "react-router-dom"
import authProvider from "../App/authProvider"
import ListItem from "./listItem"
import { cartTotalPrice } from "../../actions/cart"
import { setOrderWithCart } from "../../actions/order"

function mapStateToProps (state, props){
  return {
    cart : state.cart,
    totalPrice : state.totalPrice,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
     setCatTotalPrice: (payload)=>dispatch(cartTotalPrice(payload)),
     setOrder: (payload)=>dispatch(setOrderWithCart(payload))
  }
}
function CartToConnect({cart, removeProductToCart,setCatTotalPrice}){
  const history = useHistory();

  const [totalPrice, setTotalPrice] = useState(0)
   function calculateTotalPrice(){
    let total = 0
    for (let index = 0; index < cart.length; index++) {
      total += cart[index].product.price.price * cart[index].quantity
    }
    return total
  }
  useEffect(()=>{
    setTotalPrice(calculateTotalPrice())
  })

  async function handleClick(){
    setCatTotalPrice(totalPrice)
    history.push("/payment")

  }

  return (
    <>
      <ListItem/>
      <div className="d-flex justify-content-center align-items-center">
        <h4 className="m-4">
          total de votre panier : {totalPrice} €
        </h4>
        {cart.length ?
          <button to='/payment' className="m-4 btn btn-lg bg-color-orange" onClick={()=>{handleClick()}}>Passer au paiement </button>
        : false}
    
      </div>

    </>
  )
}



const Cart =  connect(mapStateToProps, mapDispatchToProps)(CartToConnect)
export default Cart
