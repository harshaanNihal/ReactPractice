import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
    <header className = "header">
      <h1 className = "header__text">News App</h1>
      <input className = "search" type = "text"></input>
    </header>
    )
  }
}
export default Header;