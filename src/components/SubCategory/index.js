
import {connect} from "react-redux"
import Footer from "../Footer";
import SubCategoryList from "../SubCategory/list";
import { getProducts } from "../../actions";
import ProductList from "../Products/List";
import { BrowserRouter, Switch, Route, Link,useParams } from "react-router-dom";
function mapStateToProps (state, props){
  return {
    categories : state.categories,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
    getProductList: ()=>dispatch(getProducts()),
  }
}
function SubCategoryToConnect({categories, props}){
  const { categoryId, subCategoryId } = useParams();
  const category = categories.filter((category)=>category.id == categoryId )[0]
  const subCategory = category.subCategories.filter((subCategory)=>subCategory.id ==subCategoryId)[0]
  console.log(category);
  console.log(subCategory);

  const colors= {
    0:'bg-color-primary',
    1:'bg-color-orange',
    2:'bg-color-yellow',
    3:'bg-color-red',
    4:'bg-color-blue',
  }
  return (
<>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
<h1>subCategory</h1>
    {/* <div className="image-container" style={{ position: 'relative', width: '100%', height: '500px' }}>
      <Image
        alt={props.subCategory.name}
        src={'/assets/subCategories/'+props.subCategory.image}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div className="container category-title">
      <h1 className={"text-black p-2 my-3 " + colors[props.colorKey] }>{props.subCategory.name}</h1>
      <h2 className="text-white">LE MEILLEUR MARCHÉ, C'EST QUAND</h2>
      <h2 className="text-white">ON DONNE LA PRIMEUR AU GOÛT</h2>
    </div>
    <ProductList/> */}
</>

  )
}



const SubCategory =  connect(mapStateToProps, mapDispatchToProps)(SubCategoryToConnect)
export default SubCategory
