import React, { Component } from 'react';


export default class UnpackAll extends Component {  
  render() {
    return (
      <button onClick = {this.props.unpackAll}>UnpackAll</button>
    );
  }
}
