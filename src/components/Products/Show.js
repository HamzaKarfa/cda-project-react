
import {connect} from "react-redux"
import { useParams } from "react-router-dom";
import { getProducts } from "../../actions/product";
import { addToCart, removeToCart } from "../../actions/cart";
import { useEffect, useState } from "react";
import CarouselItem from "../carousel/carouselItem";
import { Spinner } from "react-bootstrap";
function mapStateToProps (state, props){
  return {
    products : state.products,
    cart : state.cart,
    categories : state.categories,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
    getProductList: (subCategoryName)=>dispatch(getProducts(subCategoryName)),
    addProductToCart: (payload)=>dispatch(addToCart(payload)),
    removeProductToCart: (payload)=>dispatch(removeToCart(payload)),
  }
}
function ProductShowToConnect({products, categories, getProductList, addProductToCart, cart, removeProductToCart}){
  const { categoryName, subCategoryName, productName } = useParams();
  const category = categories.filter((category)=>category.name === categoryName )[0]
  const subCategory = category.subCategories.filter((subCategory)=>subCategory.name === subCategoryName)[0]
  const product = products.filter((product)=>product.name === productName)[0]
  // console.log(subCategory, category, product);
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState('')
  const colors= {
    'Fruits et légumes':'bg-color-primary',
    'Epicerie d’ici et d’ailleurs':'bg-color-orange',
    'Fromagerie':'bg-color-yellow',
    'Boucherie':'bg-color-red',
    'Poissonnerie':'bg-color-blue',
  }  
  if (!products.length) {
    getProductList(subCategory.name)
  }
  async function handleSubmit(e){
      e.preventDefault()
      if (!cart.length) {
        const newCart = [{product: product, quantity: parseFloat(quantity)}]
        addProductToCart(newCart)
        localStorage.setItem('cart', newCart)

      } else {
        const newCart = cart.filter((cartProduct)=>cartProduct.product.id !== product.id);
        newCart.push({product, quantity: parseFloat(quantity)})
        addProductToCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
      }
  }
  async function handleClick(e){
      e.target.children[0].classList.toggle('d-none')
    setTimeout(() => {
      e.target.children[0].classList.toggle('d-none')
    }, 2000);
  }
  useEffect(()=>{
    setMessage('')
  }, [message])
  function displayProduct(){
    if (products.length>0) {
      return (
        <>
          <div className="image-container" style={{ position: 'relative', width: '100%', height: '500px' }}>
            <img
              className="image-banner w-100"
              alt={product.name}
              src={product.image.imagePath}
            />
          </div>
          <div className="container category-title">
            <h1 className={"text-white p-2 my-3 "+ colors[category.name]}>{product.name}</h1>
            <h2 className="text-white">{product.origin}</h2>
            <h2 className="text-white">{product.price.price} € {product.price.type}</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <label className="text-white mr-3"> Choisissez la quantité </label>
              <input type='number' placeholder='1.5' step='0.05' onChange={(e)=>{setQuantity(e.target.value)}}/>
              <p className="text-white my-2">Prix avec la quantité : <span className="font-weight-bold h4">{product.price.price * quantity } €</span></p>
              <button className="btn bg-color-secondary text-white my-4 d-flex justify-content-start align-items-center" onClick={(e)=>handleClick(e)}>
                Ajouter à mon panier
                <Spinner className="d-none text-transparent" animation="border" variant="success"/>
              </button>
            </form>
          </div>
        </>
      )
    }else{
      return (<h1>loading ...</h1>)
    }
  }
  return (
    <>
      {displayProduct()}
      <CarouselItem product={product} color={colors[category.name]} category={category} subCategory={subCategory}/>
    </>
  )
}

const ProductShow =  connect(mapStateToProps, mapDispatchToProps)(ProductShowToConnect)
export default ProductShow
