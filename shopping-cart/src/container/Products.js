import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  render(){
    return (
      <div className = "products">
        {
          this.props.data.map((value, index) => {
            return <Product key = {index} data = {value} id = {index} handleCart = {this.props.handleCart} />
          })
        }
      </div>
    )
  }
}
export default Products;