import React, { Component } from 'react';

export default class NewItem extends Component {  
  constructor(){
    super();
    this.state = {
      value: ""
    }
  }
  changeText = (e) =>{
    this.setState({value: e.target.value})
  }
  submitList = (e) => {
    e.preventDefault();
    if(!this.state.value) return;
    this.props.addList({
      value: this.state.value,
      id: Date.now(), 
      done: false
    });
    this.setState({value: ""});
  }
  render() {
    return (
      <div>
        <form>
          <input type = "text" value = {this.state.value } className="add__input" onChange = {this.changeText}></input>
          <button onClick = {this.submitList}>Add List</button>
        </form>
      </div>
    );
  }
}

