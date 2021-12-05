import { connect } from 'react-redux'
import SubCategoryCard from '../SubCategory/subCategoryCard'
import Slider from 'react-slick'
import "./carousel.css"
function mapStateToProps (state, props) {
    return {
        products: state.products,
        categories: state.categories,
        props: props
    }
}

function CarouselItemConnect ({ products, props, categories }) {
    const category = categories.filter((category)=>category.name === props.category.name )[0]
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
    <div>

        <h2 className="text-center"> Plus de {category.name}</h2>
        <div className="d-flex justify-content-center">
            <Slider {...settings}>
            {category.subCategories.map((subCategory, key)=>{
                return(
                    <div className='d-flex justify-content-center' key={key}>
                        <SubCategoryCard subCategory={subCategory} category={category}/>
                    </div>
                )
                })}
            </Slider>
        </div>
    </div>
    )
    
}

const CarouselItem = connect(mapStateToProps)(CarouselItemConnect)
export default CarouselItem
