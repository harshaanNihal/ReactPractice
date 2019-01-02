import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions'

class AddItems extends Component {
  constructor(){
    super();
    this.state = {
      inputText: ""
    }
  }
  handleInput = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
  render(){
    return (
      <div className = "input__field">
        <input type = "text" onChange = {(e) => this.handleInput(e)} value = {this.state.inputText}></input>
        <button onClick = {()=>this.props.dispatch(addItem(this.state.inputText))}>Add Bag</button>
      </div>
    )
  }
}
export default connect()(AddItems);