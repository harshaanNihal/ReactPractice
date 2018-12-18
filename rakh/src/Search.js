import React, { Component } from 'react';



export default class Search extends Component { 
  constructor(){
    super();
    this.state= {
      searchText: ""
    }
  } 
  setSearch = (e) => {
    this.setState({searchText: e.target.value});
    this.props.searchFn(this.state.searchText);    
  }


  render() {
    return (
      <input type="text" onChange = {this.setSearch} />
    );
  }
}
