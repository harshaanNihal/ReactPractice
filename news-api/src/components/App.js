import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import News from './News';
import {connect} from 'react-redux';
import  {fetchData} from '../action';

let mapStateToProps = state => {
  console.log(state, "mapstatetoprops")
  return {x:state};
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      value: true,
    }
  }
  render(){
    return (
    <BrowserRouter>
      <div>
        <Header />
          <select onChange = {(e)=>this.props.dispatch(fetchData(e))}>

          </select>

        <Switch>
          <Route path="/shastri" component = {Home} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}
export default connect(
  mapStateToProps,null
  )(App);