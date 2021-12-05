import {connect} from "react-redux"
import {removeToCart} from "../../actions/cart"
function mapStateToProps (state, props){
  return {
    cart : state.cart,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
    removeProductToCart: (payload)=>dispatch(removeToCart(payload))
  }
}

function ListItemToConnect ({cart, removeProductToCart}){
    function deleteCartItem(product){
        removeProductToCart(product)
    }
    return (
        <div className="d-flex flex-column align-items-center">
        {cart.map((element, key)=>{
            return (
            
                <div className="container d-flex justify-content-between align-items-center border p-2 m-2" key={key}>
                    <p>
                        {element.product.name}
                    </p>
                    <p>
                        {element.product.origin}
                    </p>
                    <p>
                        {element.quantity}
                    </p>
                    <p>
                        {element.product.price.price}€{element.product.price.type}
                    </p>
                    <img src={element.product.image.imagePath} className="w-25" alt={element.product.name}/>
                    
                    <button className="btn bg-color-secondary" onClick={()=>deleteCartItem(element)}>Supprimer</button>
                </div>
            )
        })}
    </div>
    
    )
}

const ListItem =  connect(mapStateToProps, mapDispatchToProps)(ListItemToConnect)
export default ListItem