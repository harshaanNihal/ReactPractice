import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import * as action from './Action/AllAction';

// const action = {increment, decrement, input}


const stateToProps = state => {
  return {value: state};
}


class App extends Component {
  state = {
    value: ""
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.input(this.state.value)
    this.setState({
      value: ""
    })
  }
  handleDelete = (index) => {
    this.props.deleteItem(index);
  }
  render() {
    return (
      <div className="App">
        <input type = "text" value = {this.state.value} onChange = {this.handleChange}></input>
        <button id = "submit" onClick = {this.handleSubmit}>Submit</button>
        {
          this.props.value.arr.map((value, index) => {
           return (
            <div key = {index} className = "todoList">
              <h1>{value}</h1>
              <button onClick = {() => this.handleDelete(index)}>Remove</button>
            </div>
             )
          })
        }

        <h1>{this.props.value.number}</h1>
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
