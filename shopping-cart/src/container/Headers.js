import React, {Component} from 'react';

class Headers extends Component {
  handleClick(e){
    e.preventDefault();
    let data = this.props.data.slice();
    if(e.target.value === "select") return this.props.handleSort(this.props.productsCopy);
    (e.target.value === "Lowest to heighest") ? data.sort((a,b) => a.price - b.price) : data.sort((a,b) => b.price - a.price);
    return this.props.handleSort(data);
  }

  render(){
   return (
      <div className="header">
        <h4>Sizes</h4>
        <h4>Products Found {this.props.data.length}</h4>
        <h4>Order by</h4>
        <select onClick = {(e) => this.handleClick(e)}>
          <option>select</option>
          <option>Lowest to heighest</option>
          <option>Heighest to Lowest</option>
        </select>
      </div>
    ) 
  }
}
export default Headers;
