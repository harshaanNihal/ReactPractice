import React, { Component } from 'react';

class News extends Component {
  constructor(){
    super();
    this.state = {
      data : []
    }
  }

  render(){
    console.log(this.props,"hello2");
    return (
    <div className = "country__news">
      {
        this.state.data.map((value,index)=>{
        return <h3 key = {index}>{value.title}</h3>
        })
      }
    </div>
    )
  }
}
export default News;