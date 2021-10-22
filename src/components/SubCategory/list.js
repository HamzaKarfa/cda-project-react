
import {connect} from "react-redux"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { getProducts } from "../../actions";
import './Card.css'

function mapStateToProps (state, props){
  return {
    state : state,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
    getProductList: (payload)=>dispatch(getProducts(payload)),
  }
}
const myLoader = ( src ) => {
  return"/assets/subCategories/" + src
}
function SubCategoryToConnect({props,getProductList}){
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {props.subCategories.map((subCategory, key)=>{
        return (
          <div className="card m-2 w-25" key={key}>
            <div className="" style={{ position: 'relative', width: '100%', height: '300px' }}>
              <img
              className="image-list"
                alt={subCategory.name}
                src={myLoader(subCategory.image)}
              />
            </div>
            <div className="card-body w-100">
                  <div className="">
                    <h3 className={"text-white text-center p-2 " + props.colors }>{subCategory.name}</h3>
                  </div>
                  <div className="d-flex align-items-end justify-content-center">
                    <Link to={'/'+props.category.name +'/'+ subCategory.name} className="text-decoration-none">
                      <button onClick={()=>{getProductList(subCategory)}} className='btn bg-color-secondary text-white'>Voir plus</button>
                    </Link>
                  </div>
            </div>
          </div>
        )
      })}
    </div>

  )
}



const SubCategoryList =  connect(mapStateToProps, mapDispatchToProps)(SubCategoryToConnect)
export default SubCategoryList
