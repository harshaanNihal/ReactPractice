import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Check from './Check';


class App extends Component {

  render(){
    return (
      <BrowserRouter>
      <div>
          <h1>hello</h1>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/check" component = {Check} />
          </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
export default App;