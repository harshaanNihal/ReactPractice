import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnpackedItem from './UnpackedItem';



let mapStateToProps = state => {
  return state;
}
class Unpacked extends Component {
  render(){
    return (
      <div className = "unpacked__items">
      <h3>Unpacked Items</h3>
      
      { 
        this.props.searchUP.length ?         this.props.searchUP.map((value,index) => {
          if(!value.done){
             return <UnpackedItem data = {value} key = {index} id = {index} />
          }
        }) :
        this.props.totalBags.map((value,index) => {
          if(!value.done){
             return <UnpackedItem data = {value} key = {index} id = {index} />
          }
        })
      }
      </div>
    )
  }
}
export default connect(
  mapStateToProps
)(Unpacked);