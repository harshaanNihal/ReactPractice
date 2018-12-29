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
            this.props.productListCopy.reduce((acc, value) => {
              value.availableSizes.forEach(value2 => {
                if(!acc.includes(value2)) acc.push(value2);
              })
              return acc;
          }, []).map((value, index) => {
            return (<button key = {index}>{value}</button>)
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