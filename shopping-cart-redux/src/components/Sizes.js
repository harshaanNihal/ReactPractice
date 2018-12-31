import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

let mapStateToProps = state => {
  return state;
}

class Sizes extends Component {
  render(){
    return(
      <Fragment>
      <div className = "sizes">
        {
          this.props.sizeArr.map((value, index) => {
            return <button className = {(this.props.sizeTrac[index]) ? "white" : "black"} key = {index} onClick = {() => this.props.handleClick(index)}>{value}</button>
          })
        }
      </div>
      </Fragment>
    )
  }
}
export default connect(
  mapStateToProps
)(Sizes);