
import {connect} from "react-redux"
import { getProducts } from "../../actions/product";
import ProductList from "../Products/List";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function mapStateToProps (state, props){
  return {
    categories : state.categories,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
    getProductList: (subCategoryName)=>dispatch(getProducts(subCategoryName)),
  }
}
function SubCategoryToConnect({categories, props, getProductList}){
  const [isLoading, setIsLoading] = useState(true)
  const { categoryName, subCategoryName } = useParams();
  const category = categories.filter((category)=>category.name == categoryName )[0]
  const subCategory = category.subCategories.filter((subCategory)=>subCategory.name ==subCategoryName)[0]
  useEffect(()=>{
    // console.log(subCategory.name);
    if (isLoading) {
      getProductList(subCategory.name);
      setIsLoading(false)
    }
  })
  const colors= {
    'Fruits et légumes':'bg-color-primary',
    'Epicerie d’ici et d’ailleurs':'bg-color-orange',
    'Fromagerie':'bg-color-yellow',
    'Boucherie':'bg-color-red',
    'Poissonnerie':'bg-color-blue',
  }
  return (
    <>
        <div className="image-container" style={{ position: 'relative', width: '100%', height: '500px' }}>
          <img
            className="image-banner w-100"
            alt={subCategory.name}
            src={subCategory.image.imagePath}
          />
        </div>
        <div className="container category-title">
          <h1 className={"text-black p-2 my-3 " + colors[category.name] }>{subCategory.name}</h1>
          <h2 className="text-white">LE MEILLEUR MARCHÉ, C'EST QUAND</h2>
          <h2 className="text-white">ON DONNE LA PRIMEUR AU GOÛT</h2>
        </div>
        <ProductList/>
    </>

  )
}



const SubCategory =  connect(mapStateToProps, mapDispatchToProps)(SubCategoryToConnect)
export default SubCategory
