import React, { Component } from 'react';
import { connect } from 'react-redux';

let mapStateToProps = state => {
  return state;
}

class Cart extends Component {
  state = {
    isShowing: false
  }
  handleCart = () => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }
  handlePrice = () => {
    alert(this.props.cart.reduce((acc, value) => {
      acc = acc + value.price;
      return acc;
    }, 0))
  }
  render(){
    return(
      <div className = "cart" onClick = {this.handleCart}>
        {
          (this.state.isShowing) ? (
            <div className = "cart__items">
            {
              this.props.cart.map(value => {
                return (
                  <div className = "cart__item">
                    <img alt="cartItem" src = {require(`../images/${value.sku}_1.jpg`)}></img>
                    <span>{value.title}</span>
                    <span>{value.price}</span>
                  </div>
                  )
              })
            }
            <h5>Total Price:  
            {
              this.props.cart.reduce((acc, value) => {
                acc = acc + value.price;
                return acc;
              }, 0)
            }
            </h5>
            <button onClick = {this.handlePrice}>Checkout</button>
            </div>
          ) : `C${this.props.cart.length}`
        }
      </div>
    )
  }
}
export default connect(
  mapStateToProps
)(Cart);