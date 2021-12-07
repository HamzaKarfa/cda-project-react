import React from "react";
import {connect} from "react-redux"
import { Link } from "react-router-dom";


function mapStateToProps (state, props){
  return {
    product: props.product,
    color : props.color
  }
}
 function CardToConnect({product, color}) {
    return (
        <div className="card m-4">
            <div
                className="d-flex justify-content-center"
                style={{ height: '300px' }}
            >
              <img src={product.image.imagePath} alt={product.name} className="image-list"/>
            </div>
            <div className="card-body w-100">
                  <div className=" w-100">
                      <h3 className={"text-white " + color}>{product.name}</h3>
                      <p className="text-white">Origine {product.origin}</p>
                      <p className="text-white">Prix {product.price.price}€ {product.price.type}</p>
                  </div>
                  <div className="d-flex align-items-end justify-content-center">
                    <Link to={'/'+product.sub_categories.category.name +'/'+ product.sub_categories.name + "/" + product.name} className="text-decoration-none">
                      <button className='btn bg-color-secondary text-white'>Voir plus</button>
                    </Link>
                  </div>
            </div>
        </div>
    );
}
const Card =  connect(mapStateToProps)(CardToConnect)

export default Card
