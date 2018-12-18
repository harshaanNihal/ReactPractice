import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      todosDone: [],
      currentText:""
    }
  }

  setText = (e)=> {
    this.setState({currentText: e.target.value});
  }

  addList = () => {
  this.setState({todos:[...this.state.todos, {data:this.state.currentText, done:false}]}); 
  console.log(this.state.todos); 
  this.displayBag(this.state.todos);
  this.state.currentText = "";
  }

  displayBag(array){
    // document.querySelector(".done__list")
      var done = document.createElement("div");
      done.className = "done__list";
    
    done.textContent = "";
    // if(!document.querySelector(".notDone__list")){
      var notDone = document.createElement("div");
      notDone.className = "notDone__list";
    
    notDone.textContent = "";
    array.forEach(value => {
      var p = document.createElement("p");
      if(value.done){
        p.innerHTML = `<input type = "checkbox" check >${value.data}`;
      } else{
        p.innerHTML = `<input type = "checkbox" check >${value.data}`;
      }

      if(value.done){
        done.appendChild(p);
      }  else {
        notDone.appendChild(p);
      }
    });
  }

  removeBag = (e) => {
    var id = e.target.id;
    this.state.todos.splice(id,1);
    return;
  }
  
  render() {
    return (
      <div>
        <input 
          type = "text" 
          value = {this.state.currentText} 
          onChange = {this.setText}>
          </input>
        <button 
          onClick = {this.addList}>
          Add Lists
        </button> 

        <div id = "notDone">
        {
          this.state.todos.map((value,index) => {
            if(!value.done){
            return (<div>{value.data}<button id = {index} onClick = {this.removeBag}>del</button></div>)
          }})
        }
        </div>
        <div id = "done">
        {
          this.state.todos.map(value => {
            if(value.done){
            return <p>{value.data}</p>
          }})
        }
        </div>
      </div>
    );
  }
}

export default App;
