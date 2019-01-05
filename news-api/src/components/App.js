import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';

class App extends Component {


//   <BrowserRouter>
//   <div>
//     <h1>Checking App</h1>
//     <Switch>
//       <Route path = "/" component = {App} />
//       <Route path = "/shastri" component = {Home} />
//     </Switch>
//     <Link to = "/shastri">shastri</Link>
//   </div>
// </BrowserRouter>
  render(){
    return (
      <h1>Checking App</h1>
    )
  }
}
export default App;