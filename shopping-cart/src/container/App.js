import React, { Component } from 'react';
import '../App.css';
import Headers from './Headers'
import Main from './Main'
import Cart from './Cart'

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      cart : [],
      productsCopy: []
    }
  }
  componentWillMount(){
    fetch("https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json").then(d => d.json()).then(data => this.setState({
      products: data.products,
      productsCopy: data.products
    })).then(() => this.checking())
  }

  checking = () => {
    console.log("hello")
  }
  handleCart = (id) => {
    this.setState({
      cart: [...this.state.cart, this.state.products[id]]
    })
  }

  handleSort = (data) => {
    this.setState({
      products: data
    });
  }

  sortAccordingToSize = (sizeArr) => {
    console.log(sizeArr, "check");
    let newDisplay;
    if(sizeArr.length) {
      newDisplay = sizeArr.reduce((acc1,value1) => {
        this.state.productsCopy.reduce((acc, value)=> {
          if(value.availableSizes.includes(value1)){
            if(!acc1.includes(value)){
              acc1.push(value);
            }
          }
          return acc;
        },0)
        return acc1;
      },[])
    }
    this.setState({
      products: (newDisplay.length) ? newDisplay : this.state.productsCopy
    })
  }
  render() {
    return (
      <div className="App">
        <Cart cart = {this.state.cart}  />
        <Headers productsCopy = {this.state.productsCopy} data = {this.state.products} handleSort = {this.handleSort} />
        <Main data = {this.state.products} sortAccordingToSize = {this.sortAccordingToSize} handleCart = {this.handleCart} />
      </div>
    );
  }
}

export default App;
