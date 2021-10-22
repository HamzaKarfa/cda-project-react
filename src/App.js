import Header from './components/Header'
import {connect} from "react-redux"
import { getCategories, isLoading } from './actions'
import Router from './components/App/router';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
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
    isLoading:(payload)=>dispatch(isLoading(payload))
  }
}

function HomeToConnect({getCategoriesList,state}) {
  const [isLoading,setIsLoading] = useState(true)
  console.log(state)
  useEffect(() => {
    if (isLoading) {
      getCategoriesList()
      setIsLoading(false)
    }
  });
  return (
    <div>
      <Header Links ={state.categories.length > 0 ?state.categories : [] } />
      {state.categories.length > 0 ?<Router/> : <h1>Loading ....</h1> }
      
      <Footer/>
    </div>
  );
}

const Home =  connect(mapStateToProps, mapDispatchToProps)(HomeToConnect)
export default Home
