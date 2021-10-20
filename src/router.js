
import {connect} from "react-redux"
import { Switch, Route, Link } from "react-router-dom";
import ProductShow from "./components/Products/Show";
import Main from './components/Main'
import Category from './components/Category';
import SubCategory from './components/SubCategory';

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
  const routes = [
    {
      path: "/category/:categoryId",
      component: Category,
      routes: [
        {
          path: "/category/:categoryId/subCategory/:subCategoryId",
          component: SubCategory,
          routes: [
            {
              path: "/category/:categoryId/subCategory/:subCategoryId/product/:productId",
              component: ProductShow
            },
          ]
        },
      ]
    },
    {
      path: "/",
      component: Main
    }
  ];
  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }
  return (
      <Switch>
      {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
  )
}
const Router =  connect(mapStateToProps, mapDispatchToProps)(RouterToConnect)
export default Router
