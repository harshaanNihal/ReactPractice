import React, { Component } from 'react';
import Products from './Products'

class Main extends Component {
  constructor(){
    super();
    this.state = {
      size : [false, false, false, false, false, false, false],
      sizeArr : ["XS", "S", "M", "ML", "L", "XL", "XXL"]
    }
  }
  changeCheck = (e) => {
    let id = e.target.id;
    let newArr = this.state.size.slice();
    newArr[id] = !newArr[id];
    this.setState({
      size : newArr
    } , () => this.changeCheckState());
  }



  changeCheckState = () => {
    let newArr = this.state.size.reduce((acc, value, index) => {
      if(value) acc.push(this.state.sizeArr[index]);
      return acc; 
    }, []) 
    this.props.sortAccordingToSize(newArr);
  }
  checking(){
    console.log("hello")
  }
  render(){

    this.checking();
    return (
      <div className = "main__wrapper">
        <div className = "input__wrapper"> 
          <div className = "input__item__container">
            <label className = "input__item">
              <input type = "checkbox" id = "0" onChange = {(e)=>this.changeCheck(e)} checked = {this.state.size[0]}></input>
              <div className = "xs">XS</div>
            </label>
          </div>
          <div className = "input__item__container">
            <label className = "input__item">
              <input type = "checkbox" id = "1" onChange = {(e)=>this.changeCheck(e)} checked = {this.state.size[1]}></input>
              <div className = "xs">S</div>
            </label>
          </div>
          <div className = "input__item__container">
            <label className = "input__item">
              <input type = "checkbox" id = "2" onChange = {(e)=>this.changeCheck(e)} checked = {this.state.size[2]}></input>
              <div className = "xs">M</div>
            </label>
          </div>
          <div className = "input__item__container">
            <label className = "input__item">
              <input type = "checkbox" id = "3" onChange = {(e)=>this.changeCheck(e)} checked = {this.state.size[3]}></input>
              <div className = "xs">ML</div>
            </label>
          </div>
          <div className = "input__item__container">
            <label className = "input__item">
              <input type = "checkbox" id = "4" onChange = {(e)=>this.changeCheck(e)} checked = {this.state.size[4]}></input>
              <div className = "xs">L</div>
            </label>
          </div>
          <div className = "input__item__container">
            <label className = "input__item">
              <input type = "checkbox" id = "5" onChange = {(e)=>this.changeCheck(e)} checked = {this.state.size[5]}></input>
              <div className = "xs">XL</div>
            </label>
          </div>
          <div className = "input__item__container">
            <label className = "input__item">
              <input type = "checkbox" id = "6" onChange = {(e)=>this.changeCheck(e)} checked = {this.state.size[6]}></input>
              <div className = "xs">XXL</div>
            </label>
          </div>
        </div>
        <Products data = {this.props.data} handleCart = {this.props.handleCart} />
      </div>
    )
  }
}
export default Main;