import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { addData, updateProductList } from './action/action';
import Products from './components/Products';
import Header from './components/Header';
import Cart from './components/Cart'
import Sizes from './components/Sizes'

let mapStateToProps = state => {
  return state;
}

class App extends Component {
  state = {
    sizeArr: []
  }
  
  componentWillMount = () => {
    fetch("https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json").then(d => d.json()).then(data => this.props.dispatch(addData(data.products))).then(this.uniqueArray)
  }
  uniqueArray = () => {
    let unique = this.props.productListCopy.reduce((acc, value) => {
      value.availableSizes.forEach(value2 => {
        if(!acc.includes(value2)) acc.push(value2);
      })
      return acc;
  }, []);
    this.setState({
      sizeArr: unique,
      sizeTrac: Array(unique.length).fill(false)
    })
  }
  handleClick = (id) => {
    var newArr = [...this.state.sizeTrac];
    newArr.splice(id, 1, !newArr[id]);
    this.setState({
      sizeTrac: newArr
    }, ()=>{
      this.state.sizeTrac.filter(Boolean).length ? 
      this.props.dispatch(updateProductList(
        this.state.sizeTrac.reduce((acc,value, index) => {
          if(value){
              acc.push(...this.props.productListCopy.reduce((acc1,value1,index1)=> {
                if(!acc1.includes(value1)){
                  if(value1.availableSizes.includes(this.state.sizeArr[index])) acc1.push(value1);
                }
              return acc1;
            }, []))
          }
          return acc;
        },[])
      )) 
      : this.props.dispatch(updateProductList(this.props.productListCopy))
    })
  }
  render() {
    return (
      <div className="App">
        <Cart />
        <Header />
        <main className = "main-wrapper">
          <Sizes sizeArr = {this.state.sizeArr} sizeTrac = {this.state.sizeTrac} handleClick = {this.handleClick} />
          <Products sizeArr = {this.state.sizeArr} sizeTrac = {this.state.sizeTrac} />
        </main>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(App);
