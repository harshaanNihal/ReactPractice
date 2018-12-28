import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Calculation } from './Reducers/Calculation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(Calculation, composeEnhancers(applyMiddleware()));

ReactDOM.render(
<Provider store = {store} >
  <App />
</Provider>
,document.getElementById('root'));


serviceWorker.unregister();
