import { connect } from 'react-redux'
import SubCatagoryCard from './subCategoryCard'
function mapStateToProps (state, props) {
  return {
    state: state,
    props: props
  }
}


function SubCategoryListToConnect ({ props }) {
  console.log(props, 'props');
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {props.subCategories.map((subCategory, key) => {
        return (
           <SubCatagoryCard key={key} subCategory={subCategory} category={props.category} color={props.color}/>
        )
      })}
    </div>
  )
}

const SubCategoryList = connect(mapStateToProps)(SubCategoryListToConnect)
export default SubCategoryList
