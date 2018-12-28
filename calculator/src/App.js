import React, { Component } from 'react';
import './app.scss';
import { connect } from 'react-redux';
import * as action from './action/action';

let stateToProps = state => {
  return {value: state}
}
class App extends Component {
  state = {
    value1: "",
    value2: ""
  }
  hanldeChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  // hanldeClick = e => {
  //   console.log('click')
  //   const {value1, value2} = this.state;
  //   this.props.dispatch(add(Number(value1), Number(value2)))
  // }
  clearInput = () => {
    this.setState({
      value1: "", value2: ""
    })
  }

  render() {
    const {value1, value2} = this.state;

    return (
      <div className="App">
        <div className = "inputElement">
          <input className = "input" type = "number" name="value1" placeholder = "Enter First Number" value = {this.state.value1} onChange = {this.hanldeChange}></input>
          <input className = "input" type = "number" name="value2" placeholder = "Enter Second Number" value = {this.state.value2} onChange = {this.hanldeChange}></input>
        </div>
        <div className = "buttonElement">
          <button onClick = {() => {this.props.add(Number(value1), Number(value2)); this.clearInput()}}>Add</button>
          <button onClick = {() => {this.props.sub(Number(value1), Number(value2)); this.clearInput()}}>Substract</button>
          <button onClick = {() => {this.props.mul(Number(value1), Number(value2)); this.clearInput()}}>Multiply</button>
          <button onClick = {() => {this.props.div(Number(value1), Number(value2)); this.clearInput()}}>Divide</button>
        </div>
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default connect(
  stateToProps,
   action
   )(App);
