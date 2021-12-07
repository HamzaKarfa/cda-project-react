import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProducts } from '../../actions/product'
import './Card.css'
function mapStateToProps (state, props) {
    return {
        categories: state.categories,
      props: props
    }
  }
  function mapDispatchToProps (dispatch) {
    return {
      getProductList: payload => dispatch(getProducts(payload))
    }
  }
function SubCategoryCardToConnect ({ props, getProductList, categories }){

    return (
        <div className='card m-4 ' key={props.key}>
            <div
                className="d-flex justify-content-center"
                style={{ height: '300px' }}
            >
                <img
                className='image-list'
                alt={props.subCategory.name}
                src={props.subCategory.image.imagePath}
                />
            </div>
            <div className='card-body w-100'>
                <div className=''>
                <h3 className={'text-white text-center p-2 ' + props.color}>
                    {props.subCategory.name}
                </h3>
                </div>
                <div className='d-flex align-items-end justify-content-center'>
                <Link
                    to={
                    '/' + props.category.name + '/' + props.subCategory.name
                    }
                    className='text-decoration-none'
                >
                    <button
                    onClick={() => {
                        getProductList(props.subCategory)
                    }}
                    className='btn bg-color-secondary text-white'
                    >
                    Voir plus
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}

const SubCategoryCard = connect(mapStateToProps, mapDispatchToProps)(SubCategoryCardToConnect)
export default SubCategoryCard
