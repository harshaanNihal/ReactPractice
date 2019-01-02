import React, { Component } from 'react';
import './App.scss';
import AddItems from './components/AddItems';
import Unpacked from './components/Unpacked';
import Packed from './components/Packed';
import { connect } from 'react-redux';
import {undo, redo} from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItems />
        <button className = "undo" onClick = {() => this.props.dispatch(undo())}>Undo</button>
        <button className = "redo" onClick = {() => {this.props.dispatch(redo())}}>Redo</button>
        <Unpacked />
        <Packed />
      </div>
    );
  }
}

export default connect()(App);
