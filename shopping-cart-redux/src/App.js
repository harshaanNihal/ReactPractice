import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { addData } from './action/action';
import Products from './components/Products';
import Header from './components/Header';
import Cart from './components/Cart'
import Sizes from './components/Sizes'


class App extends Component {
  componentWillMount = () => {
    fetch("https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json").then(d => d.json()).then(data => this.props.dispatch(addData(data.products)) )
  }
  render() {
    return (
      <div className="App">
        <Cart />
        <Header />
        <main className = "main-wrapper">
          <Sizes />
          <Products />
        </main>
      </div>
    );
  }
}

export default connect()(App);
