
import {connect} from "react-redux"
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";
import { getProducts, addToCart } from "../../actions";
function mapStateToProps (state, props){
  return {
    products : state.products,
    categories : state.categories,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
    getProductList: (subCategoryName)=>dispatch(getProducts(subCategoryName)),
    addProductToCart: (product)=>dispatch(addToCart(product)),
  }
}
function ProductShowToConnect({products, categories, getProductList, addProductToCart}){
  const { categoryName, subCategoryName, productName } = useParams();
  const category = categories.filter((category)=>category.name == categoryName )[0]
  const subCategory = category.subCategories.filter((subCategory)=>subCategory.name ==subCategoryName)[0]
  const product = products.filter((product)=>product.name ==productName)[0]
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
  function displayProduct(){
    if (products.length>0) {
      return (
        <>
          <div className="image-container" style={{ position: 'relative', width: '100%', height: '500px' }}>
            <img
              className="image-banner"
              alt={product.name}
              src={'/assets/products/abricot.jpg'}
            />
            
          </div>
          <div className="container category-title">
            <h1 className={"text-white p-2 my-3 "+ colors[category.name]}>{product.name}</h1>
            <h2 className="text-white">{product.origin}</h2>
            <h2 className="text-white">{product.price} €/kg</h2>
            <form onSubmit={(e)=>{
              e.preventDefault()
              addProductToCart(product)
            }}>
              <input type='float'/>
              <button className="btn bg-color-secondary text-white">Ajouter à mon panier</button>
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
      
    </>
  )
}

const ProductShow =  connect(mapStateToProps, mapDispatchToProps)(ProductShowToConnect)
export default ProductShow
