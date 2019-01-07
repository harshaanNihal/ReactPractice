import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));


ReactDOM.render(
<Provider store = {store}>
<BrowserRouter>
  <Switch>
    <Route path = "/" component = {App}/>
    <Route path = "/country/:code" component = {App}/>
    <Route path = "/country/:code/:category" component = {App}/>
  </Switch>
</BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
