import { useEffect, useState } from 'react';
import {connect} from "react-redux"
import Header from './components/Header/Header'
import AuthRouter from './components/App/authRouter';
import Footer from './components/Footer';
import { getCategories } from './actions/categories'
import { getCartFromLocalStorage } from './actions/cart'
import Spinner from 'react-bootstrap/Spinner'
import "./App.css"
function mapStateToProps (state, props){
  return {
    state : state,
    props:props
  }
}
function mapDispatchToProps(dispatch){
  return {
    getCategoriesList: (data)=>dispatch(getCategories(data)),
    getCart: ()=>dispatch(getCartFromLocalStorage())
  }
}

function HomeToConnect({getCategoriesList, state, getCart}) {
  const [isLoading,setIsLoading] = useState(true)
  // console.log(state)
  useEffect(() => {
    if (isLoading) {
      getCategoriesList()
      getCart()
      setIsLoading(false)
    }
  },[state.categories]);
  return (
    <div>
      
      <Header Links ={state.categories.length > 0 ?state.categories : [] } />
      {state.categories.length > 0 ? <AuthRouter/> 
      : <div className="loading_page" ><Spinner animation="border" role="status" /> </div>}
      <Footer/>
    </div>
  );
}

const Home =  connect(mapStateToProps, mapDispatchToProps)(HomeToConnect)
export default Home
 