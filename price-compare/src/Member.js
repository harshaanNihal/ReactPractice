import React, { Component, div } from 'react';

class Member extends Component{
  render(){
    let {data, unique, cls} = this.props;
    return (
      <div className = "user">
        <img className = "user__image" src = {data.avatar_url}></img>
        <h4 className="username">{data.name}</h4>
        <h4>Followers : {data.followers}</h4>
        <h4>Following : {data.following}</h4>
        <button className = "user__compare__btn" onClick = {()=> this.props.compare(unique)}>Compare</button>
      </div>
    )
  }
}
export default Member;