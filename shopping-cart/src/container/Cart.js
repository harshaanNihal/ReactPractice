import React, { Component } from 'react';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      isShowing : false
    }
  }

  // {
    // {/* this.props.cart.reduce((acc, value, index) => {
      // <CartItem data = {value} />
    // }) */}
  // }

  displayCart = () => {
    console.log("hello");

  }
  render(){
    return (
      <div className = "cart" onClick = {this.displayCart}>

      </div>
    )
  }
}
export default Cart;