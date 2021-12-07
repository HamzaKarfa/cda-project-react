import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../Auth/login";
import ProductShow from "../Products/Show";
import Main from '../Main'
import CategoryShow from '../Category/CategoryShow';
import SubCategory from '../SubCategory';
import Cart from "../Cart";
import Stripe from "../Stripe";
import { useAuth, ProvideAuth } from "./AuthContext";

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function AuthRouter() {
  /** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */


  
    // A wrapper for <Route> that redirects to the login
    // screen if you're not yet authenticated.
    function PrivateRoute({ children, ...rest }) {
      let auth = useAuth();
      return (
        <Route
          {...rest}
          render={({ location }) =>
            auth.checkAuth() ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
    }
  return (
    <ProvideAuth>
        <div>

          <Switch>
            <Route exact path="/" >
              <Main/>
            </Route>
            <Route path="/:categoryName/:subCategoryName/:productName" >
              <ProductShow/>
            </Route>
            <Route path="/:categoryName/:subCategoryName" >
              <SubCategory/>
            </Route>
            <Route path="/cart" >
              <Cart/>
            </Route>
            <PrivateRoute path="/payment" >
              <Stripe/>
            </PrivateRoute>
            <Route path="/login" >
              <Login/>
            </Route>
            <Route path="/:categoryName" >
              <CategoryShow/>
            </Route>
          </Switch>
        </div>
    </ProvideAuth>
  );
}



