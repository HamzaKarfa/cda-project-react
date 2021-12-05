import {connect} from "react-redux"
import SubCategoryList from "../SubCategory/list";
import { useParams } from "react-router-dom";
import "./categories.css"
function mapStateToProps (state, props){
  return {
    categories : state.categories,
    props:props
  }
}

function CategoryToConnect({categories}){
  const { categoryName } = useParams();
  const category = categories.filter((category)=>category.name === categoryName )[0]

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
            className="w-100"
            alt={category.name}
            src={category.image.imagePath}
          />
        </div>
        <div className="container category-title">
          <h1 className={"text-black p-2 my-3 " + colors[category.name] }>{category.name}</h1>
          <h2 className="text-white">LE MEILLEUR MARCHÉ, C'EST QUAND</h2>
          <h2 className="text-white">{category.description}</h2>
        </div>
        <h1 className={"text-black text-center p-2"}>Découvrez l'univers <span className={colors[category.name] }>{category.name}</span></h1>
        <SubCategoryList subCategories={category.subCategories} category={category} color={colors[category.name]}/>
    </>
  )
}



const Category =  connect(mapStateToProps)(CategoryToConnect)
export default Category
