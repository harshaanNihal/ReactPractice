import ReactDOM from 'react-dom';
import React from 'react';
import './src/app.css';
import App from './src/components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer,composeEnhancers(applyMiddleware()));

ReactDOM.render(
<Provider store = {store}>
  <App />
</Provider>
, document.getElementById("root"))