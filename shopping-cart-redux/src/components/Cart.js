import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../action/action';

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
  updateCartItem = (id) => {
    this.props.dispatch(updateCart(id))
  }


  // this.props.cart.map((value, index) => {
                
    // return (
    //   <div className = "cart__item">
    //     <img alt="cartItem" src = {require(`../images/${value.sku}_1.jpg`)}></img>
    //     <span>{value.title}</span>
    //     <span>{value.price}</span>
    //     <span>Quantity: {}</span>
    //     <button onClick = {()=>this.updateCartItem(index)}>X</button>
    //   </div>
    //   )
  // })

  render(){
    let cartObj = this.props.cart.reduce((acc,val)=>{
      acc[val.title] ? acc[val.title]+=1 : acc[val.title]=1;
      return acc;
    },{});
    return(
      <div className = "cart" onClick = {this.handleCart}>
        {
          (this.state.isShowing) ? (
            <div className = "cart__items">

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