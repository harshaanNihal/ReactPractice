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