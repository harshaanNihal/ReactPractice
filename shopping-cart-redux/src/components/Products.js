import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product'

let mapStateToProps = state => {
  return state;
}

class Products extends Component {
  render(){
    return (
      <div className = "products">
        { 
          this.props.productList.map((value, index) => {
            return <Product key = {index} id = {index} data = {value} />
          })
        }
      </div>
    )
  }
}
export default connect(
  mapStateToProps
)(Products);