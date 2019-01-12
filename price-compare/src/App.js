import React, { Component } from 'react';
import './App.css';
import Members from './Members'
import Compare from './Compare'
import Checking from './Checking'

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      arr : ["ruchikh", "shastri48", "sachin-me","ashish4497","praveen-me"],
      compareList:[{
        name:"Name",
        followers:"Followers",
        following: "Following",
        login:"Login",
        public_repos: "Repositories"
      }]
    }
  }
  componentWillMount = () =>{
    this.state.arr.forEach(v=>{
      fetch(`https://api.github.com/users/${v}`).then(res => res.json()).then(d => this.setState({data: [...this.state.data, d]}))
   })
  }
  compareList = (id) => {
    this.setState({
      compareList: [...this.state.compareList, this.state.data[id]]
    })
  }
  
  deleteCompareList = (id) => {
    if(this.state.compareList.length >= 3){
      this.setState({
        compareList: this.state.compareList.reduce((acc,v,i) => {
          if(i!=id){
            acc.push(v);
          }
          return acc;
        }, [])
      })
    } else this.setState({
      compareList: []
    })
  }
  render() {
    return (
      <div className="App">
      {
        console.dir(Component)
      }
        <Members data = {this.state.data} compare = {this.compareList} />
        <Checking data = {this.state.data} />

        {
        (this.state.compareList.length > 2) ? <Compare data = {this.state.compareList} delete={this.deleteCompareList} /> : null
        }

      </div>
    );
  }
}

export default App;
