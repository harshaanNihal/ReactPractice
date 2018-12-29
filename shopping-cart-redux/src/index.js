import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import shopping from './reducer/reducer';
import { createStore, applyMiddleware, compose } from 'redux';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(shopping, composeEnhancers(applyMiddleware()));

ReactDOM.render(
<Provider store = {store}>
  <App />
</Provider>
, document.getElementById('root'));


serviceWorker.unregister();
