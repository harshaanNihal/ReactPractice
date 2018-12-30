import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shortLowToHigh, shortHighToLow, updateProductList } from '../action/action';

let mapStateToProps = state => {
  return state;
}

class Header extends Component {
  handleSelect = (e) => {
    let value = e.target.value;
    if(value === "select"){
      return this.props.dispatch(updateProductList(this.props.productListCopy));
    }
    if(value === "Price Low to High"){
      console.log("called action")
        return this.props.dispatch(shortLowToHigh());
    }
    if(value === "Price High to Low")
      this.props.dispatch(shortHighToLow());
  }
  render(){
    return (
        <div className = "header">
          <h4>Sizes</h4>
          <h4>Products found</h4>
          <h4>Order By</h4>
          <select className = "select__option" onChange = {this.handleSelect}>
            <option>select</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>
      )
  }
}
export default connect(
  mapStateToProps
)(Header);