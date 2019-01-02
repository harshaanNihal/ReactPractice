import React, { Component } from 'react';
import { connect } from 'react-redux';
import PackedItem from './PackedItem';



let mapStateToProps = state => {
  return state;
}
class Packed extends Component {
  render(){
    return (
      <div className = "packed__items">
      <h3>Packed Items</h3>
      {
        this.props.totalBags.map((value,index) => {
          if(value.done){
            return <PackedItem data = {value} key = {index} id = {index} />
          }
        })
      }
      </div>
    )
  }
}
export default connect(
  mapStateToProps
)(Packed);