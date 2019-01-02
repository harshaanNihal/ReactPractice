import React, { Component} from 'react';
import Member from './Member'

class Members extends Component{

  render() {
    return (
      <div className = "users">
        {
          this.props.data.map((value, index) => {
            return <Member data={value} key={index} unique = {index} compare = {this.props.compare} />
          })
        }
      </div>
    );
  }
}
export default Members;