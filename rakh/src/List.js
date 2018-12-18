import React, { Component } from 'react';
import ListItem from './ListItem.js';


export default class List extends Component {  
  render() {
    return (
      <ul>
      {
        this.props.listsData.map(value => {
          return <ListItem key= {value.id} item = {value} change = {this.props.change} delete = {this.props.delete} />
        })
      }
      </ul>
    );
  }
}

