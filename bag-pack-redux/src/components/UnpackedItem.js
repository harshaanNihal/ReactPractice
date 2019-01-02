import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleChange, handleDelete } from '../actions'


class UnpackedItem extends Component {
  render(){
    return (
      <div className = "unpacked__item">
        <input type = "checkbox" onChange = {()=> this.props.dispatch(handleChange(this.props.id))} checked = {this.props.data.done}></input>
        <h4>{this.props.data.value}</h4>
        <button onClick = {()=> this.props.dispatch(handleDelete(this.props.id))}>delete</button>
      </div>
    )
  }
}
export default connect()(UnpackedItem);