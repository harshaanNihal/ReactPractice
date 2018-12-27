import React, { Component, div } from 'react';

{/* <img className = "user__image" src = {data.avatar_url}></img> */}

class CompMemb extends Component{
  render(){
    let {data, unique, cls} = this.props;
    return (
      <td className = "userCompare">
        <tr className = "comparename">{data.name}</tr>
        <tr>Followers : {data.followers}</tr>
        <tr>Following : {data.following}</tr>
        <tr><button className = "user__compare__btn" onClick = {()=> this.props.delete(unique)}>Delete</button></tr>
      </td>
    )
  }
}
export default CompMemb;