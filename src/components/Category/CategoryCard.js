import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
function mapStateToProps (state, props) {
    return {
        categories: state.categories,
      props: props
    }
  }

function CategoryCardToConnect ({ props, getProductList, categories }){

    return (
        <div className='card m-4 ' key={props.key}>
            <div
            className="d-flex justify-content-center"
                style={{ height: '300px' }}
            >
                <img
                className='image-list'
                alt={props.category.name}
                src={props.category.image.imagePath}
                />
            </div>
            <div className='card-body w-100'>
                <div className=''>
                <h3 className={'text-white text-center p-2 ' + props.color}>
                    {props.category.name}
                </h3>
                </div>
                <div className='d-flex align-items-end justify-content-center'>
                <Link
                    to={
                    '/' + props.category.name 
                    }
                    
                >
                    <button className='btn bg-color-secondary text-white '>
                    Voir plus
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}

const CategoryCard = connect(mapStateToProps)(CategoryCardToConnect)
export default CategoryCard
