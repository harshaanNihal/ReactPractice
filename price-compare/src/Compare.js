import React, { Component } from 'react';
import CompMemb from './CompMemb';

// {
//   this.props.data.map((value, index) => {
//     return <CompMemb data={value} key={index} unique = {index} delete = {this.props.delete} />
//   })
// }

class Compare extends Component {
  render(){
    return (
      <div className="table__container">

      <table className = "compare__list">
        <tr>
          {
            this.props.data.map((value, index) => {
              return <td>{value.name}</td>
            })
          }
        </tr>
        <tr>
          {
            this.props.data.map((value, index) => {
              return <td>{value.followers}</td>
            })
          }
        </tr>
        <tr>
          {
            this.props.data.map((value, index) => {
              return <td>{value.following}</td>
            })
          }
        </tr>
        <tr>
          {
            this.props.data.map((value, index) => {
              return <td>{value.login}</td>
            })
          }
        </tr>
        <tr>
          {
            this.props.data.map((value, index) => {
              return <td>{value.public_repos}</td>
            })
          }
        </tr>
        <tr>
          {
            (this.props.data.length == 1) ? (<td>Button</td>) :
            this.props.data.map((value, unique) => {
              return <td><button className = "user__compare__btn" onClick = {()=> this.props.delete(unique)}>Delete</button></td>
            })
          }
        </tr>
      </table>
      </div>
    )
  }
}
export default Compare;