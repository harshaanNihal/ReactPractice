import React, { Component } from 'react';
import './App.scss';
import AddItems from './components/AddItems';
import Unpacked from './components/Unpacked';
import Packed from './components/Packed';
import { connect } from 'react-redux';
import {undo, redo, searchUnpacked,searchPacked} from './actions'

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchValue: ""
    }
  }
  handleSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    }, ()=> this.props.dispatch(searchUnpacked(this.state.searchValue)))
  }
  handleSearchPacked = (e) => {
    this.setState({
      searchValue: e.target.value
    }, ()=> this.props.dispatch(searchPacked(this.state.searchValue)))
  }
  render() {
    return (
      <div className="App">
        <AddItems />
        <button className = "undo" onClick = {() => this.props.dispatch(undo())}>Undo</button>
        <button className = "redo" onClick = {() => {this.props.dispatch(redo())}}>Redo</button>
        <div className = "wrapper">
          <input type = "text" className = "search" placeholder = "Search from Unpacked List" onChange = {(e)=> this.handleSearch(e)}></input>
          <Unpacked />
        </div>
        <div className = "wrapper">
          <input type = "text" className = "search" placeholder = "Search from Packed List" onChange = {(e)=> this.handleSearchPacked(e)}></input> 
          <Packed />
        </div>
      </div>
    );
  }
}

export default connect()(App);
