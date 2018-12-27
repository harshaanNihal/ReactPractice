import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {increment, decrement} from './Action/AllAction'


const stateToProps = state => {
  return {value: state};
}
const action = { increment, decrement }

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.value}</h1>
        <button id = "inc" onClick = {this.props.increment}>inc</button>
        <button id = "dec" onClick = {this.props.decrement}>dec</button>
      </div>
    );
  }
}

export default connect(
  stateToProps, 
  action
)(App);
