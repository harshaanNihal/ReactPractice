import React, { Component } from 'react';
import { addCart } from '../action/action';
import { connect } from 'react-redux';

class Product extends Component {
  render() {
    let {title, sku, price} = this.props.data
    return (
          <div className = "product">
            <img className = "product__image" src = {require(`../images/${sku}_1.jpg`)} alt = "product"></img>
            <h4>{title}</h4>
            <h4>${price}</h4>
            <button id = {this.props.id} onClick = {()=> this.props.dispatch(addCart(this.props.id))}>Add to cart</button>
          </div>
      )
  }
}
export default connect()(Product);