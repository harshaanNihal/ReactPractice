import React, { Component } from 'react';

class Product extends Component {
  render(){
    return (
      <div className="product">
        <img src = {require("../products/5619496040738316_1.jpg")} alt = "cloth products"></img>
        <h4>{this.props.data.title}</h4>
        <hr></hr>
        <h4>{this.props.data.currencyFormat} {this.props.data.price}</h4>
        <button className = "add__card" onClick = {() => this.props.handleCart(this.props.id)}>Add to cart</button>
      </div>
    )
  }
}
export default Product;