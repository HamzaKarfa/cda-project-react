
import {connect} from "react-redux"
import {  Switch, Route} from "react-router-dom";
import ProductShow from "../Products/Show";
import Main from '../Main'
import Category from '../Category';
import SubCategory from '../SubCategory';
import Cart from "../Cart";
import Login from '../Auth/login'
import Stripe from "../Stripe";
function mapStateToProps (state, props){
  return {
    state : state,
    props:props
  }
}

function RouterToConnect({state}){
  return (
    <Switch>
      <Route path="/:categoryName/:subCategoryName/:productName" >
        <ProductShow/>
      </Route>
      <Route path="/:categoryName/:subCategoryName" >
        <SubCategory/>
      </Route>
      <Route path="/cart" >
        <Cart/>
      </Route>
      <Route path="/payment" >
        <Stripe/>
      </Route>
      <Route path="/login" >
        <Login/>
      </Route>
      <Route path="/:categoryName" >
        <Category/>
      </Route>
      <Route path="/" >
        <Main/>
      </Route>
    </Switch>
  )
}
const Router =  connect(mapStateToProps)(RouterToConnect)
export default Router
