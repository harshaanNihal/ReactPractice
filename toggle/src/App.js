import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      check: false, 
      value: 5, 
      arr: []
    }
    this.changeState = this.changeState.bind(this)
    this.cls = "switch-btn ";

  }
  changeState = () => {
    if(!this.cls.includes("clr")) this.cls = this.cls.concat("clr");
    else this.cls = "switch-btn ";

    this.setState({check: !this.state.check})
  }




  componentWillMount(){
    console.log("component will mount App")
  }
  componentDidMount(){
    console.log("component did mount App")
  }
  render() {
    return (
      <div className="wrapper">
        <h1>{this.state.check ? "ON" : "OFF"}</h1>      
        <label className="switch">
          <input type="checkbox" onChange = {this.changeState} checked = {this.state.check} />
          <div className={this.cls}></div>
        </label>
        <button className = "toggle__change" onClick = {this.changeState}>Toggle</button>
      </div>
    );
  }
}

export default App;
