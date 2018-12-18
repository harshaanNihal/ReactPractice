import React, { Component } from 'react';


export default class ListItem extends Component {  
  render() {
    const {done, value, id} = this.props.item;
    return (
      <li>
        <input type = "checkbox" className = "check__item" checked = {done} onChange = {() => this.props.change(id)}></input>
        <span>{value}</span>
        <button onClick = {()=> this.props.delete(id)}>Kill</button>
      </li>
    );
  }
}
