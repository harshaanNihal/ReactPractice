import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Home extends Component {
  render(){
    return (
      <div>
          <h1>hello home</h1>
          <Link to='/check'>check</Link>
          <a href="/check">Anchor Check</a>
      </div>
    )
  }
}
export default Home;