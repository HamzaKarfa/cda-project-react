import React from "react";
import {connect} from "react-redux"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


function mapStateToProps (state, props){
  return {
    product: props.product
  }
}
 function CardToConnect({product}) {
  console.log(product);
    return (
        <div className="card m-1 w-25">
            <div className="" style={{ position: 'relative', width: '100%', height: '350px' }}>
              <img src={"/assets/subCategories/Fruits.jpg"} alt=''/>
            </div>
            <div className="card-body w-100">
                  <div className=" w-100">
                      <h3 className="text-white">{product.name}</h3>
                      <p className="text-white">Origine {product.origin}</p>
                      <p className="text-white">Prix {product.price}€/kg</p>
                  </div>
                  <div className="d-flex align-items-end justify-content-center">
                          {/* <Button textContent='Voir plus'/> */}
                    <Link to={'/'+product.subCategory.category.name +'/'+ product.subCategory.name + "/" + product.name} className="text-decoration-none">
                      <button className='btn bg-color-secondary text-white'>Voir plus</button>
                    </Link>
                  </div>
            </div>

        </div>
    );
}
const Card =  connect(mapStateToProps)(CardToConnect)

export default Card
