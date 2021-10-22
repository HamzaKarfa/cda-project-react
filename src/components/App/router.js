
import {connect} from "react-redux"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductShow from "../Products/Show";
import Main from '../Main'
import Category from '../Category';
import SubCategory from '../SubCategory';
import Cart from "../Cart";
import Login from '../Auth/login'
function mapStateToProps (state, props){
  return {
    state : state,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
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
const Router =  connect(mapStateToProps, mapDispatchToProps)(RouterToConnect)
export default Router
