import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import NewItem from './NewItem.js';
import Search from './Search.js';
import UnpackAll from './UnpackAll.js';


var dummyList = [
  {value:"Ruchi", id:Date.now()+1, done:false},
  {value:"Aashish", id:Date.now()+2, done:false},
  {value:"Sachin", id:Date.now()+3, done:false},
  {value:"Nihal", id:Date.now()+4, done:true},
  {value:"Sidhartha", id:Date.now()+5, done:false},
  {value:"Abhishek", id:Date.now()+6, done:false},
  {value:"Rishi", id:Date.now()+7, done:true},
  {value:"Vishwa", id:Date.now()+8, done:false}
]


class App extends Component {
  constructor(){
    super();
    this.state = {
      lists: dummyList,
      number: 4
    }
    this.searchArray = this.state.lists;

  }
  listText = (e) => {
    this.setState({listText: e.target.value})
  }
  addList = (item) => {
    this.setState({lists: [item, ...this.state.lists]
    }) 
  }
  handleChange = (idData) => {
    let value = this.state.lists.map(v => {
      if(v.id === idData){
        v.done = !v.done;
      }
      return v;
    });
    this.setState({lists: value});
  }
  handledelete = (idData) => {
    let value = this.state.lists.reduce((acc,v) => {
      if(!(v.id === idData)){
        acc.push(v)
      }
      return acc;
    }, []);
    this.setState({lists: value});
  }
  UnpackAll = () => {
    let newItems = this.state.lists.map(v=> {
      v.done = false;
      return v;
    })
    this.setState({lists: newItems});
  }
  SearchResult = (value) => {
    var ss = this.state.lists.reduce((acc,v)=> {
      if(v.value.includes(value)) acc.push(v);
      return acc;
    }, [])
    this.searchArray = ss;
    this.setState({number: this.state.number + 1})
  }

  render() {
    let notDone = this.state.lists.filter( v => !v.done);
    let done = this.state.lists.filter(v => v.done);
    return (
      <div className="wrapper">
        <NewItem addList = {this.addList} />
        <h1>Not Done List</h1>
        <Search value = {notDone} searchFn = {this.SearchResult} />
        <List listsData = {notDone} change = {this.handleChange} delete = {this.handledelete} />
        <h1>Done List</h1>
        <List listsData = {done} change = {this.handleChange} delete = {this.handledelete}/>
        <UnpackAll unpackAll = {this.UnpackAll} />
      </div>
    );
  }
}

export default App;
