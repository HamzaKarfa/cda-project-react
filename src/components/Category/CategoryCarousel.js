import { connect } from 'react-redux'
import CategoryCard from './CategoryCard'
function mapStateToProps (state, props) {
    return {
        products: state.products,
        categories: state.categories,
        props: props
    }
}

function CategoryCarouselConnect ({ products, props, categories }) {
    return (
    <div>

        <div className="d-flex justify-content-center flex-wrap">
            {categories.map((category, key)=>{
                return(
                    <div className='d-flex justify-content-center' key={key}>
                        <CategoryCard category={category}/>
                    </div>
                )
            })}
        </div>
    </div>
    )
    
}

const CategoryCarousel = connect(mapStateToProps)(CategoryCarouselConnect)
export default CategoryCarousel
