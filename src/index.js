import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import thunkMiddleware  from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './overide-bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const store = createStore( rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
